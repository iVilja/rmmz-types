import { Rectangle } from "../core"
import { Sprite_Clickable } from "./Sprite_Clickable"
export declare type SpriteButtonType =
  | "cancel"
  | "pageup"
  | "pagedown"
  | "down"
  | "up"
  | "down2"
  | "up2"
  | "ok"
  | "menu"
/**
// Sprite_Button
//
// The sprite for displaying a button.
*/
export declare class Sprite_Button extends Sprite_Clickable {
  _buttonType: SpriteButtonType
  _clickHandler: (() => void) | null
  _coldFrame: Rectangle | null
  _hotFrame: Rectangle | null
  constructor(buttonType: SpriteButtonType)
  setupFrames(): void
  blockWidth(): number
  blockHeight(): number
  loadButtonImage(): void
  buttonData():
    | {
        x: number
        w: number
      }
    | {
        x: number
        w: number
      }
    | {
        x: number
        w: number
      }
    | {
        x: number
        w: number
      }
    | {
        x: number
        w: number
      }
    | {
        x: number
        w: number
      }
    | {
        x: number
        w: number
      }
    | {
        x: number
        w: number
      }
    | {
        x: number
        w: number
      }
  update(): void
  checkBitmap(): void
  updateFrame(): void
  updateOpacity(): void
  setColdFrame(x: number, y: number, width: number, height: number): void
  setHotFrame(x: number, y: number, width: number, height: number): void
  setClickHandler(method: () => void): void
  onClick(): void
}
