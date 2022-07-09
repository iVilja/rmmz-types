import { Rectangle } from "../core"
import { DataItem } from "../data"
import { Window_ItemCategory, Window_ItemList } from "../windows"
import { Scene_ItemBase } from "./Scene_ItemBase"
export declare class Scene_Item extends Scene_ItemBase<DataItem> {
  _categoryWindow: Window_ItemCategory
  _itemWindow: Window_ItemList
  create(): void
  createCategoryWindow(): void
  categoryWindowRect(): Rectangle
  createItemWindow(): void
  itemWindowRect(): Rectangle
  user(): import("..").Game_Actor | undefined
  onCategoryOk(): void
  onItemOk(): void
  onItemCancel(): void
  playSeForItem(): void
  useItem(): void
}
