import { Rectangle } from "../core"
import { Game_Actor } from "../objects"
import { Window_EquipItem } from "./Window_EquipItem"
import { Window_EquipStatus } from "./Window_EquipStatus"
import { Window_StatusBase } from "./Window_StatusBase"
/**
 * Window_EquipSlot
 *
 * The window for selecting an equipment slot on the equipment screen.
 */
export declare class Window_EquipSlot extends Window_StatusBase {
  _actor: Game_Actor | null
  _itemWindow?: Window_EquipItem
  _statusWindow?: Window_EquipStatus
  constructor(rect: Rectangle)
  setActor(actor: Game_Actor): void
  update(): void
  maxItems(): number
  item(): import("..").DataEquipment | null
  itemAt(index: number): import("..").DataEquipment | null
  drawItem(index: number): void
  slotNameWidth(): number
  isEnabled(index: number): boolean
  isCurrentItemEnabled(): boolean
  setStatusWindow(statusWindow: Window_EquipStatus): void
  setItemWindow(itemWindow: Window_EquipItem): void
  updateHelp(): void
}
