// -- // @ts-nocheck

import { Environment } from "@/config";
import { abi } from "@/constants/abi";
import { SUI_OpenSwap, SUI_Swap, SUI_SwapToken, SUT_SwapTokenContractType } from "@/types/swap-market.types";
import { ethers, JsonRpcProvider } from 'ethers';
import { ethers6Adapter } from "thirdweb/adapters/ethers6";
import { Account } from "thirdweb/wallets";
import { ErrorDecoder } from 'ethers-decode-error';
import type { DecodedError } from "ethers-decode-error";
import { thirdWebClient, currentChain } from "./thirdWebClient.ts";
import { SUT_SC_SwapMethodType } from "@/types/wallet-proxy.types.js";
import { SUE_SWAP_MODE } from "@/constants/enums.ts";

interface IAsset {
  assetAddress: string,
  value: number | bigint;
}

type SUT_CancelSwapType = "SWAP" | "PROPOSAL";
let walletInstance: ReturnType<typeof walletProxy> | null = null;

export const getWalletProxy = (): ReturnType<typeof walletProxy> => {
  if (!walletInstance) {
    walletInstance = walletProxy();
  }
  return walletInstance;
};

export const walletProxy = () => {
  let connectedWalletAccount: Account | null = null;

  const setConnectedWalletAccount = (connectedAccount: Account) => {
    connectedWalletAccount = connectedAccount;
  };

  const getConnectedWalletAccount = () => {
    return connectedWalletAccount;
  };

  const getEthersProviderAndSigner = async () => {
    // convert a thirdweb account to ethers signer
    let provider: JsonRpcProvider = await ethers6Adapter.provider.toEthers({ client: thirdWebClient, chain: currentChain });
    let signer = await ethers6Adapter.signer.toEthers({
      client: thirdWebClient,
      chain: currentChain,
      account: connectedWalletAccount!,
    });
    return { provider, signer };
  };

  const getEnsInformationByWalletAddress = async (walletAddress: string) => {
    let avatar = null;

    const { provider } = await getEthersProviderAndSigner();
    const ensName = await provider.lookupAddress(walletAddress);

    if (ensName) {
      const resolver = await provider.getResolver(ensName);
      if (resolver) {
        avatar = await resolver.getAvatar();
      }
    }

    return { ensName, avatar };
  };

  const getSwapupContractInstance = async () => {
    const { signer } = await getEthersProviderAndSigner();
    const contract = new ethers.Contract(
      Environment.SWAPUP_CONTRACT,
      abi.swapUp,
      signer
    );
    return contract;
  };

  const getNamespaceContractInstance = async () => {
    const { signer } = await getEthersProviderAndSigner();
    const contract = new ethers.Contract(
      "0x2674e4fae872780f01b99e109e67749b765703fb",
      abi.namespace,
      signer
    );
    return contract;
  };

  const getUserSignature = async (
    swap: SUI_Swap,
    swapEncodedMsg: string,
  ) => {
    return { sign: "sign", swapEncodedBytes: "" };
  };

  const getUserApproval = async (swap: SUI_Swap, init = true) => {
    //if there are multiple NFT's in different smart contracts then we will have to call approve for all
    //get unique contracts from swap.metadata.init.tokens
    let tokens =
      (init === true)
        ? swap.metadata.init.tokens
        : swap.metadata.accept.tokens;

    let transactions = [];

    //initiate all the approves at once and then wait
    for (const currentToken of tokens) {
      try {
        let tx = await setApprovalForAll(currentToken);
        if (tx) transactions.push(tx);
      } catch (err) {
        //errors like user rejecting the transaction in metamask
        console.log(err);
        return false;
      }
    }

    for (const tx of transactions) {
      if ((await getTransactionReceipt(tx)).status === 0) return false;
    }

    return true;
  };

  const getAmountInWeiForErc20Token = async (currentToken: SUI_SwapToken) => {
    const { signer } = await getEthersProviderAndSigner();
    const contract = new ethers.Contract(
      currentToken.address,
      abi.erc20,
      signer
    );

    const decimals = await contract.decimals();
    const amountInWei = await ethers.parseUnits(String(currentToken.value?.amount), decimals);
    return amountInWei;
  };

  //This function checks if our swap contract is given approval to move NFT minted from a contract 
  const setApprovalForAll = async (currentToken: SUI_SwapToken) => {
    const { signer } = await getEthersProviderAndSigner();
    const contract = new ethers.Contract(
      currentToken.address,
      (currentToken.type as SUT_SwapTokenContractType) === "ERC20" ? abi.erc20 : abi.nft,
      signer
    );

    const currentSmartContract = Environment.SWAPUP_CONTRACT;

    let approved4all;

    if ((currentToken.type as SUT_SwapTokenContractType) === 'ERC20') {
      const decimals = await contract.decimals();
      const amountInWei = await ethers.parseUnits(String(currentToken.value?.amount), decimals);
      approved4all = await contract.approve(currentSmartContract, amountInWei);
    } else {
      approved4all = await contract.isApprovedForAll(signer, currentSmartContract);
    }


    console.log('ApprovedForAll : ' + approved4all);
    if (approved4all) return null;

    const tx = await contract.setApprovalForAll(currentSmartContract, true);
    console.log(tx.hash);

    return tx;
  };

  const createAndUpdateSwap = async (swap: SUI_Swap | SUI_OpenSwap, swapAction: SUT_SC_SwapMethodType,) => {
    let contract = await getSwapupContractInstance();

    try {
      let initAssets: IAsset[] = [];
      let acceptAssets: IAsset[] = [];

      if (swap.metadata.init.tokens.length > 0) {
        for (const token of swap.metadata.init.tokens) {
          const newInitToken: IAsset = {
            assetAddress: token.address,
            value: (token.type as SUT_SwapTokenContractType) === "ERC20"
              ? await getAmountInWeiForErc20Token(token)
              : Number(token.id)
          };

          initAssets.push(newInitToken);
        }
      }

      if (swap.metadata.accept && swap.metadata.accept.tokens.length > 0) {
        for (const token of swap.metadata.accept.tokens) {
          const newAcceptToken: IAsset = {
            assetAddress: token.address,
            value: (token.type as SUT_SwapTokenContractType) === "ERC20"
              ? await getAmountInWeiForErc20Token(token)
              : Number(token.id)
          };

          acceptAssets.push(newAcceptToken);
        }
      }

      let feeInETH = await contract.getFeeInETH();
      console.log(feeInETH);

      let swapType = swap.swap_mode === 1 ? 'PRIVATE' : 'OPEN';
      // if (swapType === 'OPEN' && swapAction !== 'COUNTER') return null; //prevent open market swaps for now.

      let gasLimit = 900000;
      let tx = null;
      switch (swapAction) {
        case 'CREATE':
          tx = await contract["createSwap(string, address, tuple(address, uint256)[], tuple(address, uint256)[], string)"](
            swap.swap_mode === SUE_SWAP_MODE.OPEN ? (swap as SUI_OpenSwap).open_trade_id : swap.trade_id,
            swap.swap_mode === SUE_SWAP_MODE.OPEN ? "0x0000000000000000000000000000000000000000" : swap.accept_address,
            initAssets,
            acceptAssets,
            swapType,
            {
              gasLimit: gasLimit,
              value: feeInETH, //add a bit more to 
            }
          );
          console.log(tx);
          break;
        case 'PROPOSE':
          tx = await contract["proposeToOpenSwap(string, string, tuple(address, uint256)[])"](
            (swap as SUI_OpenSwap).open_trade_id,
            swap.trade_id,
            initAssets,
            {
              gasLimit: gasLimit,
              value: feeInETH, //add a bit more to 
            }
          );
          console.log(tx);
          break;
        case 'COUNTER':
          tx = await contract["counterSwap(string, string, tuple(address, uint256)[], tuple(address, uint256)[])"](
            swap.trade_id,
            swapType,
            initAssets,
            acceptAssets,
            {
              gasLimit: gasLimit,
              // value: feeInETH, //add a bit more to 
            }
          );
          console.log(tx);
          break;
        case 'ACCEPT':
        case 'REJECT':
          tx = await contract["completeSwap(string, string, string)"](
            swap.trade_id,
            swapAction === 'ACCEPT' ? 'COMPLETED' : 'REJECTED',
            swapType,
            {
              gasLimit: gasLimit,
              // value: feeInETH, //add a bit more to 
            }
          );
          console.log(tx);
          break;
        case 'CANCEL':
          tx = await contract["cancelSwap(string, string)"](
            swap.trade_id,
            (swap.swap_mode === SUE_SWAP_MODE.OPEN ? 'PROPOSAL' : 'SWAP') as SUT_CancelSwapType
          );
          console.log(tx);
          break;
        case 'CANCEL-ORIGINAL-OPEN-SWAP':
          tx = await contract["cancelSwap(string, string)"](
            (swap as SUI_OpenSwap).open_trade_id,
            'SWAP'
          );
          console.log(tx);
          break;
      }

      let res = await getTransactionReceipt(tx);
      console.log("rec", res);
      return res;
    } catch (err) {
      console.log("txErr", err);
      return null; //transaction rejected or other issues
    }

  };

  const getFeeInETH = async () => {
    let contract = await getSwapupContractInstance();

    try {
      const tx = await contract.getFeeInETH();
      console.log(tx);
    } catch (err) {
      const errorDecoder = ErrorDecoder.create();
      const decodedError: DecodedError = await errorDecoder.decode(err);
      console.log(`TX Error: ${decodedError.type}, ${decodedError.reason}`);
      return null; //transaction rejected or other issues
    }
  };

  //get the current state of an existing swap from BC
  const getSwap = async (swapId: string) => {
    let contract = await getSwapupContractInstance();
    try {
      const tx = await contract.swaps(swapId);
      console.log(tx);
    } catch (err) {
      const errorDecoder = ErrorDecoder.create();
      const decodedError: DecodedError = await errorDecoder.decode(err);
      console.log(`TX Error: ${decodedError.type}, ${decodedError.reason}`);
      return null; //transaction rejected or other issues
    }
  };

  const getTransactionReceipt = async (tx: any) => {
    try {
      // Wait for the transaction to be mined
      let rcpt = await tx.wait();
      console.log(rcpt);
      return rcpt;
    } catch (error: any) {
      const errorDecoder = ErrorDecoder.create();
      const decodedError: DecodedError = await errorDecoder.decode(error);

      console.log(`BC Error: ${decodedError.type}, ${decodedError.reason}`);
    }
    return null;
  };

  const getTimestamp = async (tx: any) => {
    const provider = tx.provider;
    const receipt = await provider.getTransactionReceipt(tx.hash);
    const block = await provider.getBlock(receipt.blockNumber);
    return block.timestamp;
  };

  return {
    setConnectedWalletAccount,
    getConnectedWalletAccount,
    getEthersProviderAndSigner,
    getEnsInformationByWalletAddress,
    getNamespaceContractInstance,
    getTransactionReceipt,
    getUserApproval,
    getUserSignature,
    createAndUpdateSwap,
    getFeeInETH,
    getSwap
  };
};