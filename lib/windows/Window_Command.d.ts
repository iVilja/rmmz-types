import { Rectangle } from "../core"
import { Window_Selectable } from "./Window_Selectable"
export declare type WindowCommand = {
  name: string
  symbol: string
  enabled: boolean
  ext: number | null
}
/**
 * Window_Command
 *
 * The superclass of windows for selecting a command.
 */
export declare class Window_Command extends Window_Selectable {
  _list: WindowCommand[]
  constructor(rect: Rectangle)
  maxItems(): number
  clearCommandList(): void
  makeCommandList(): void
  addCommand(name: string, symbol: string, enabled?: boolean, ext?: number | null): void
  commandName(index: number): string
  commandSymbol(index: number): string
  isCommandEnabled(index: number): boolean
  currentData(): WindowCommand | null
  isCurrentItemEnabled(): boolean
  currentSymbol(): string | null
  currentExt(): number | null
  findSymbol(symbol: string | null): number
  selectSymbol(symbol: string | null): void
  findExt(ext: number): number
  selectExt(ext: number): void
  drawItem(index: number): void
  itemTextAlign(): CanvasTextAlign
  isOkEnabled(): boolean
  callOkHandler(): void
  refresh(): void
}
