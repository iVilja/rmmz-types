import { Rectangle } from "../core"
import { Window_NameEdit } from "./Window_NameEdit"
import { Window_Selectable } from "./Window_Selectable"
/**
 * Window_NameInput
 *
 * The window for selecting text characters on the name input screen.
 */
export declare class Window_NameInput extends Window_Selectable {
  _editWindow: Window_NameEdit | null
  _page: number
  _index: number
  setEditWindow(editWindow: Window_NameEdit): void
  table(): string[][]
  maxCols(): number
  maxItems(): number
  itemWidth(): number
  groupSpacing(): number
  character(): string
  isPageChange(): boolean
  isOk(): boolean
  itemRect(index: number): Rectangle
  drawItem(index: number): void
  updateCursor(): void
  isCursorMovable(): boolean
  cursorDown(wrap: boolean): void
  cursorUp(wrap: boolean): void
  cursorRight(wrap: boolean): void
  cursorLeft(wrap: boolean): void
  cursorPagedown(): void
  cursorPageup(): void
  processCursorMove(): void
  processHandling(): void
  isCancelEnabled(): boolean
  processCancel(): void
  processJump(): void
  processBack(): void
  processOk(): void
  onNameAdd(): void
  onNameOk(): void
}
export declare namespace Window_NameInput {
  const LATIN1: string[]
  const LATIN2: string[]
  const RUSSIA: string[]
  const JAPAN1: string[]
  const JAPAN2: string[]
  const JAPAN3: string[]
}
