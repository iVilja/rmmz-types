import { Sprite } from "../core"
import { PIXIDestroyOptions } from "../external-types"
/**
// Sprite_Destination
//
// The sprite for displaying the destination place of the touch input.
*/
export declare class Sprite_Destination extends Sprite {
  _frameCount: number
  constructor()
  destroy(options?: PIXIDestroyOptions): void
  update(): void
  createBitmap(): void
  updatePosition(): void
  updateAnimation(): void
}
