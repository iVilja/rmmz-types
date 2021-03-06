import { Sprite } from "../core"
import { PIXIDestroyOptions } from "../external-types"
/**
// Sprite_Timer
//
// The sprite for displaying the timer.
*/
export declare class Sprite_Timer extends Sprite {
  _seconds: number
  constructor()
  destroy(options?: PIXIDestroyOptions): void
  createBitmap(): void
  fontFace(): string
  fontSize(): number
  update(): void
  updateBitmap(): void
  redraw(): void
  timerText(): string
  updatePosition(): void
  updateVisibility(): void
}
