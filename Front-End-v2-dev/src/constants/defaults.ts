import { SUI_NavigationObject, SUI_TabItem } from "@/types/global.types";

interface IDefaultVariables {
  swapMarket: SUI_NavigationObject;
  mySwaps: SUI_NavigationObject;
  profile: SUI_NavigationObject;
  fallback: {
    nftImageUrl: string;
    profileCover: string;
    route: string;
  };
}

const swapMarketBaseRoute = "/swap-up/swap-market";
const mySwapsBaseRoute = "/swap-up/my-swaps";
const profileBaseRoute = "/swap-up/profile";


export const defaults: IDefaultVariables = {

  swapMarket: {
    title: 'Swap Market',
    baseRoute: swapMarketBaseRoute,
    defaultActiveTab: 'open',
    tabs: [
      {
        key: 'open',
        title: 'Open Market',
        path: `${swapMarketBaseRoute}/open`
      },
      {
        key: 'private',
        title: 'Private Party',
        path: `${swapMarketBaseRoute}/private`
      },
    ]
  },
  mySwaps: {
    title: 'My Swaps',
    baseRoute: mySwapsBaseRoute,
    defaultActiveTab: 'pending',
    tabs: [
      {
        key: 'pending',
        title: 'Pending',
        path: `${mySwapsBaseRoute}/pending`
      },
      {
        key: 'history',
        title: 'History',
        path: `${mySwapsBaseRoute}/history`
      },
    ]
  },
  profile: {
    title: "Profile",
    baseRoute: profileBaseRoute,
    defaultActiveTab: 'wallet-overview',
    tabs: [
      {
        key: 'wallet-overview',
        title: 'Wallet Overview',
        path: `${profileBaseRoute}/wallet-overview`
      },
      {
        key: 'assets',
        title: 'NFTs',
        path: `${profileBaseRoute}/assets`
      },
      {
        key: 'points-swappot',
        title: 'Member Benefits',
        path: `${profileBaseRoute}/points-swappot`
      },
    ]
  },
  fallback: {
    nftImageUrl: '/assets/nfts/default.svg',
    profileCover: '/assets/images/cover-fallback.png',
    route: `${swapMarketBaseRoute}`
  }
};