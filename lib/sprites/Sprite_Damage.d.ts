import { Bitmap, Sprite } from "../core"
import { ActionTarget, Color } from "../data"
import { Writable } from "../utils"
import { PIXIDestroyOptions } from "../external-types"
/**
// Sprite_Damage
//
// The sprite for displaying a popup damage.
*/
export declare class Sprite_Damage extends Sprite {
  _duration: number
  _flashColor: Writable<Color>
  _flashDuration: number
  _colorType: number
  destroy(options?: PIXIDestroyOptions): void
  setup(target: ActionTarget): void
  setupCriticalEffect(): void
  fontFace(): string
  fontSize(): number
  damageColor(): "#ffffff" | "#b9ffb5" | "#ffff90" | "#80b0ff" | "#808080"
  outlineColor(): string
  outlineWidth(): number
  createMiss(): void
  createDigits(value: number): void
  createChildSprite(width: number, height: number): Sprite<Bitmap>
  createBitmap(width: number, height: number): Bitmap
  update(): void
  updateChild(sprite: Sprite): void
  updateFlash(): void
  updateOpacity(): void
  isPlaying(): boolean
}
