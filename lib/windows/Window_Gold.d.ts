import { Rectangle } from "../core"
import { Window_Selectable } from "./Window_Selectable"
/**
 * Window_Gold
 *
 * The window for displaying the party's gold.
 */
export declare class Window_Gold extends Window_Selectable {
  constructor(rect: Rectangle)
  colSpacing(): number
  refresh(): void
  value(): number
  currencyUnit(): string
  open(): void
}
