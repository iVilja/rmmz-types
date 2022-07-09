import { DataPricedItemBase, ShopGoods } from "../data"
import { Window_Selectable } from "./Window_Selectable"
import { Window_ShopStatus } from "./Window_ShopStatus"
/**
 * Window_ShopBuy
 *
 * The window for selecting an item to buy on the shop screen.
 */
export declare class Window_ShopBuy extends Window_Selectable {
  _money: number
  _shopGoods: ShopGoods[]
  _data: DataPricedItemBase[]
  _price: number[]
  _statusWindow?: Window_ShopStatus
  setupGoods(shopGoods: ShopGoods[]): void
  maxItems(): number
  item(): DataPricedItemBase | null
  itemAt(index: number): DataPricedItemBase | null
  setMoney(money: number): void
  isCurrentItemEnabled(): boolean
  price(item: DataPricedItemBase): number
  isEnabled(item: DataPricedItemBase | null): boolean
  refresh(): void
  makeItemList(): void
  goodsToItem(
    goods: ShopGoods
  ): import("../data").DataItem | import("../data").DataWeapon | import("../data").DataArmor | null
  drawItem(index: number): void
  priceWidth(): number
  setStatusWindow(statusWindow: Window_ShopStatus): void
  updateHelp(): void
}
