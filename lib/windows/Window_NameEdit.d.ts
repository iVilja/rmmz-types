import { Rectangle } from "../core"
import { Game_Actor } from "../objects"
import { Window_StatusBase } from "./Window_StatusBase"
/**
 * Window_NameEdit
 *
 * The window for editing an actor's name on the name input screen.
 */
export declare class Window_NameEdit extends Window_StatusBase {
  _actor: Game_Actor | null
  _maxLength: number
  _name: string
  _index: number
  _defaultName: string
  constructor(rect: Rectangle)
  setup(actor: Game_Actor, maxLength: number): void
  name(): string
  restoreDefault(): boolean
  add(ch: string): boolean
  back(): boolean
  faceWidth(): number
  charWidth(): number
  left(): number
  itemRect(index: number): Rectangle
  underlineRect(index: number): Rectangle
  underlineColor(): string
  drawUnderline(index: number): void
  drawChar(index: number): void
  refresh(): void
}
