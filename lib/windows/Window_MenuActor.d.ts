import { Rectangle } from "../core"
import { ActionItem } from "../data"
import { Window_MenuStatus } from "./Window_MenuStatus"
/**
 * Window_MenuActor
 *
 * The window for selecting a target actor on the item and skill screens.
 */
export declare class Window_MenuActor extends Window_MenuStatus {
  constructor(rect: Rectangle)
  processOk(): void
  selectLast(): void
  selectForItem(item: ActionItem): void
}
