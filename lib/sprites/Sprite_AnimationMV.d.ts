import { Bitmap, ScreenSprite, Sprite } from "../core"
import { AnimationTarget, Color, DataAnimationMV, DataFrameCellMV, DataFrameMV, DataTimingMV } from "../data"
import { Writable } from "../utils"
/**
// Sprite_AnimationMV
//
// The sprite for displaying an old format animation.
*/
export declare class Sprite_AnimationMV extends Sprite {
  _targets: Sprite[]
  _animation: DataAnimationMV
  _mirror: boolean
  _delay: number
  _rate: number
  _duration: number
  _flashColor: Writable<Color>
  _flashDuration: number
  _screenFlashDuration: number
  _hidingDuration: number
  _hue1: number
  _hue2: number
  _bitmap1: Bitmap
  _bitmap2: Bitmap
  _cellSprites: Sprite[]
  _screenFlashSprite: ScreenSprite | null
  constructor()
  initMembers(): void
  setup(
    targets: Sprite[],
    animation: DataAnimationMV,
    mirror: boolean,
    delay: number,
    _previous: Sprite_AnimationMV | null
  ): void
  setupRate(): void
  setupDuration(): void
  update(): void
  updateFlash(): void
  updateScreenFlash(): void
  absoluteX(): number
  absoluteY(): number
  updateHiding(): void
  isPlaying(): boolean
  loadBitmaps(): void
  isReady(): boolean
  createCellSprites(): void
  createScreenFlashSprite(): void
  updateMain(): void
  updatePosition(): void
  updateFrame(): void
  currentFrameIndex(): number
  updateAllCellSprites(frame: DataFrameMV): void
  updateCellSprite(sprite: Sprite, cell: DataFrameCellMV): void
  processTimingData(timing: DataTimingMV): void
  startFlash(color: Color, duration: number): void
  startScreenFlash(color: Color, duration: number): void
  startHiding(duration: number): void
  onEnd(): void
  targetObjects?: AnimationTarget[]
}
