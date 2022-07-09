import { DataPricedItemBase } from "../data"
import { Window_ItemList } from "./Window_ItemList"
/**
 * Window_ShopSell
 *
 * The window for selecting an item to sell on the shop screen.
 */
export declare class Window_ShopSell extends Window_ItemList<DataPricedItemBase> {
  isEnabled(item: DataPricedItemBase | null): boolean
}
