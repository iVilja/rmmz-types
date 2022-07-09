import { Rectangle } from "../core"
import { SwitchID, VariableID } from "../data"
import { Window_Selectable } from "./Window_Selectable"
/**
 * Window_DebugEdit
 *
 * The window for displaying switches and variables on the debug screen.
 */
export declare class Window_DebugEdit extends Window_Selectable {
  _mode: "switch" | "variable"
  _topId: number
  constructor(rect: Rectangle)
  maxItems(): number
  drawItem(index: number): void
  itemName(dataId: SwitchID | VariableID): string
  itemStatus(dataId: SwitchID | VariableID): string
  setMode(mode: "switch" | "variable"): void
  setTopId(id: SwitchID | VariableID): void
  currentId(): number
  update(): void
  updateSwitch(): void
  updateVariable(): void
  deltaForVariable(): 0 | 1 | 10 | -1 | -10
}
