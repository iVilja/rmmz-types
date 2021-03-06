import { Rectangle } from "../core"
import { DataPricedItemBase, ShopGoods } from "../data"
import {
  Window_Gold,
  Window_ShopCommand,
  Window_Base,
  Window_ShopNumber,
  Window_ShopStatus,
  Window_ShopBuy,
  Window_ItemCategory,
  Window_ShopSell,
} from "../windows"
import { Scene_MenuBase } from "./Scene_MenuBase"
export declare class Scene_Shop extends Scene_MenuBase {
  _goldWindow: Window_Gold
  _commandWindow: Window_ShopCommand
  _dummyWindow: Window_Base
  _numberWindow: Window_ShopNumber
  _statusWindow: Window_ShopStatus
  _buyWindow: Window_ShopBuy
  _sellWindow: Window_ShopSell
  _categoryWindow: Window_ItemCategory
  _goods: ShopGoods[]
  _purchaseOnly: boolean
  _item: DataPricedItemBase | null
  prepare(goods: ShopGoods[], purchaseOnly: boolean): void
  create(): void
  createGoldWindow(): void
  goldWindowRect(): Rectangle
  createCommandWindow(): void
  commandWindowRect(): Rectangle
  createDummyWindow(): void
  dummyWindowRect(): Rectangle
  createNumberWindow(): void
  numberWindowRect(): Rectangle
  createStatusWindow(): void
  statusWindowRect(): Rectangle
  createBuyWindow(): void
  buyWindowRect(): Rectangle
  createCategoryWindow(): void
  categoryWindowRect(): Rectangle
  createSellWindow(): void
  sellWindowRect(): Rectangle
  statusWidth(): number
  activateBuyWindow(): void
  activateSellWindow(): void
  commandBuy(): void
  commandSell(): void
  onBuyOk(): void
  onBuyCancel(): void
  onCategoryOk(): void
  onCategoryCancel(): void
  onSellOk(): void
  onSellCancel(): void
  onNumberOk(): void
  onNumberCancel(): void
  doBuy(number: number): void
  doSell(number: number): void
  endNumberInput(): void
  maxBuy(): number
  maxSell(): number
  money(): number
  currencyUnit(): string
  buyingPrice(): number
  sellingPrice(): number
}
