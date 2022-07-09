import { Bitmap } from "../core"
import { PictureID } from "../data"
import { Sprite_Clickable } from "./Sprite_Clickable"
/**
// Sprite_Picture
//
// The sprite for displaying a picture.
*/
export declare class Sprite_Picture extends Sprite_Clickable<Bitmap | null> {
  _pictureId: PictureID
  _pictureName: string
  constructor(pictureId: PictureID)
  picture(): import("..").Game_Picture | null
  update(): void
  updateBitmap(): void
  updateOrigin(): void
  updatePosition(): void
  updateScale(): void
  updateTone(): void
  updateOther(): void
  loadBitmap(): void
}
