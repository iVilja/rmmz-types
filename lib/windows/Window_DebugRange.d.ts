import { Rectangle } from "../core"
import { Window_DebugEdit } from "./Window_DebugEdit"
import { Window_Selectable } from "./Window_Selectable"
/**
 * Window_DebugRange
 *
 * The window for selecting a block of switches/variables on the debug screen.
 */
export declare class Window_DebugRange extends Window_Selectable {
  static lastTopRow: number
  static lastIndex: number
  _maxSwitches: number
  _maxVariables: number
  _editWindow?: Window_DebugEdit
  constructor(rect: Rectangle)
  maxItems(): number
  update(): void
  mode(index?: number): "switch" | "variable"
  topId(index: number): number
  isSwitchMode(index?: number): boolean
  drawItem(index: number): void
  isCancelTriggered(): boolean
  processCancel(): void
  setEditWindow(editWindow: Window_DebugEdit): void
}
