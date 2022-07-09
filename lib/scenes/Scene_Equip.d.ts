import { Rectangle } from "../core"
import { Window_EquipCommand, Window_EquipItem, Window_EquipSlot, Window_EquipStatus } from "../windows"
import { Scene_MenuBase } from "./Scene_MenuBase"
export declare class Scene_Equip extends Scene_MenuBase {
  _statusWindow: Window_EquipStatus
  _commandWindow: Window_EquipCommand
  _slotWindow: Window_EquipSlot
  _itemWindow: Window_EquipItem
  create(): void
  createStatusWindow(): void
  statusWindowRect(): Rectangle
  createCommandWindow(): void
  commandWindowRect(): Rectangle
  createSlotWindow(): void
  slotWindowRect(): Rectangle
  createItemWindow(): void
  itemWindowRect(): Rectangle
  statusWidth(): number
  needsPageButtons(): boolean
  arePageButtonsEnabled(): boolean
  refreshActor(): void
  commandEquip(): void
  commandOptimize(): void
  commandClear(): void
  onSlotOk(): void
  onSlotCancel(): void
  onItemOk(): void
  executeEquipChange(): void
  onItemCancel(): void
  onActorChange(): void
  hideItemWindow(): void
}
