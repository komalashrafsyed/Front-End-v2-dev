import { SUI_CollectionItem, SUI_CurrencyChainItem } from "./global.types";
import { SUI_OpenSwap, SUI_Swap } from "./swap-market.types";

export interface IGlobalStore {
  availableCurrencies: SUI_CurrencyChainItem[];
  filteredAvailableCurrencies: SUI_CurrencyChainItem[];
  availableCollections: SUI_CollectionItem[];
  recentAcceptedSwap?: SUI_OpenSwap | SUI_Swap;
  startRecentSwapSharingProcess: boolean;
  setAvailableCurrencies: (currenciesData: SUI_CurrencyChainItem[]) => void;
  setAvailableCollections: (collectionsData: SUI_CollectionItem[]) => void;
  setRecentAcceptedSwap: (swap: SUI_OpenSwap | SUI_Swap) => void;
  setStartRecentSwapSharingProcess: (isOpen: boolean) => void;
}