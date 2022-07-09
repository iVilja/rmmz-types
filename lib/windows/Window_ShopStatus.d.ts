import { Rectangle } from "../core"
import { DataEquipment, DataPricedItemBase, EquipmentType, ParamID } from "../data"
import { Game_Actor } from "../objects"
import { Window_StatusBase } from "./Window_StatusBase"
/**
 * Window_ShopStatus
*
* The window for displaying number of items in possession and the actor's
// equipment on the shop screen.
*/
export declare class Window_ShopStatus extends Window_StatusBase {
  _item: DataPricedItemBase | null
  _pageIndex: number
  constructor(rect: Rectangle)
  refresh(): void
  setItem(item: DataPricedItemBase | null): void
  isEquipItem(): boolean
  drawPossession(x: number, y: number): void
  drawEquipInfo(x: number, y: number): void
  statusMembers(): Game_Actor[]
  pageSize(): number
  maxPages(): number
  drawActorEquipInfo(x: number, y: number, actor: Game_Actor): void
  drawActorParamChange(x: number, y: number, actor: Game_Actor, item1: DataEquipment | null): void
  paramId(): ParamID
  currentEquippedItem(actor: Game_Actor, etypeId: EquipmentType): DataEquipment | null
  update(): void
  updatePage(): void
  isPageChangeEnabled(): boolean
  isPageChangeRequested(): boolean
  changePage(): void
}
