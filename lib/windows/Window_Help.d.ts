import { Rectangle } from "../core"
import { DataItemBase } from "../data"
import { Window_Base } from "./Window_Base"
/**
 * Window_Help
 *
 * The window for displaying the description of the selected item.
 */
export declare class Window_Help extends Window_Base {
  _text: string
  constructor(rect: Rectangle)
  setText(text: string): void
  clear(): void
  setItem(item: DataItemBase | null): void
  refresh(): void
}
