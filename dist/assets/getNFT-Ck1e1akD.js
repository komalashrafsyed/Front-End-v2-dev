import{p as e,f as r}from"./parseNft-XB1GIDv2.js";import{ab as c}from"./index-C4wIsjsa.js";const o="0xbd85b039",d=[{type:"uint256",name:"id"}],u=[{type:"uint256"}];async function i(t){return c({contract:t.contract,method:[o,d,u],params:[t.id]})}const k="0x0e89341c",I=[{type:"uint256",name:"tokenId"}],m=[{type:"string"}];async function y(t){return c({contract:t.contract,method:[k,I,m],params:[t.tokenId]})}async function N(t){const[n,a]=await Promise.all([y({contract:t.contract,tokenId:t.tokenId}),i({contract:t.contract,id:t.tokenId}).catch(()=>0n)]);return e(await r({client:t.contract.client,tokenId:t.tokenId,tokenUri:n}).catch(()=>({id:t.tokenId,type:"ERC1155",uri:n})),{tokenId:t.tokenId,tokenUri:n,type:"ERC1155",owner:null,supply:a})}export{N as getNFT};
