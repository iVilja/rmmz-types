import { Rectangle } from "../core"
import { DataItemBase } from "../data"
import { Window_ItemList } from "./Window_ItemList"
/**
 * Window_BattleItem
 *
 * The window for selecting an item to use on the battle screen.
 */
export declare class Window_BattleItem extends Window_ItemList {
  constructor(rect: Rectangle)
  includes(item: DataItemBase): boolean
  show(): void
  hide(): void
}
