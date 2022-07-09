import { Bitmap, Sprite } from "../core"
/**
// Sprite_Clickable
//
// The sprite class with click handling functions.
*/
export declare class Sprite_Clickable<T extends Bitmap | null = Bitmap> extends Sprite<T> {
  _pressed: boolean
  _hovered: boolean
  update(): void
  processTouch(): void
  isPressed(): boolean
  isClickEnabled(): boolean
  isBeingTouched(): boolean
  hitTest(x: number, y: number): boolean
  onMouseEnter(): void
  onMouseExit(): void
  onPress(): void
  onClick(): void
}
