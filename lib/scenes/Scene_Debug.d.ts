import { Rectangle } from "../core"
import { Window_DebugRange, Window_DebugEdit, Window_Base } from "../windows"
import { Scene_MenuBase } from "./Scene_MenuBase"
export declare class Scene_Debug extends Scene_MenuBase {
  _rangeWindow: Window_DebugRange
  _editWindow: Window_DebugEdit
  _debugHelpWindow: Window_Base
  create(): void
  needsCancelButton(): boolean
  createRangeWindow(): void
  rangeWindowRect(): Rectangle
  createEditWindow(): void
  editWindowRect(): Rectangle
  createDebugHelpWindow(): void
  debugHelpWindowRect(): Rectangle
  onRangeOk(): void
  onEditCancel(): void
  refreshHelpWindow(): void
  helpText(): string
}
