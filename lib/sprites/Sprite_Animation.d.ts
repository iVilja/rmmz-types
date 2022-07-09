import { Point, Sprite } from "../core"
import { AnimationTarget, Color, DataAnimation } from "../data"
import { effekseer, PIXI } from "../externals"
import { Writable } from "../utils"
import { PIXIDestroyOptions } from "../external-types"
/**
// Sprite_Animation
//
// The sprite for displaying an animation.
*/
export declare class Sprite_Animation extends Sprite {
  _targets: Sprite[]
  _animation: DataAnimation
  _mirror: boolean
  _delay: number
  _previous: Sprite_Animation | null
  _effect: effekseer.EffekseerEffect | null
  _handle: effekseer.EffekseerHandle | null
  _playing: boolean
  _started: boolean
  _frameIndex: number
  _maxTimingFrames: number
  _flashColor: Writable<Color>
  _flashDuration: number
  _viewportSize: number
  constructor()
  initMembers(): void
  destroy(options?: PIXIDestroyOptions): void
  setup(
    targets: Sprite[],
    animation: DataAnimation,
    mirror: boolean,
    delay: number,
    previous: Sprite_Animation | null
  ): void
  update(): void
  canStart(): boolean
  shouldWaitForPrevious(): boolean
  updateEffectGeometry(): void
  updateMain(): void
  processSoundTimings(): void
  processFlashTimings(): void
  checkEnd(): void
  updateFlash(): void
  isPlaying(): boolean
  setRotation(x: number, y: number, z: number): void
  _render(renderer: PIXI.Renderer): void
  setProjectionMatrix(renderer: PIXI.Renderer): void
  setCameraMatrix(_renderer: PIXI.Renderer): void
  setViewport(renderer: PIXI.Renderer): void
  targetPosition(renderer: PIXI.Renderer): Point
  targetSpritePosition(sprite: Sprite): PIXI.Point
  resetViewport(renderer: PIXI.Renderer): void
  onBeforeRender(renderer: PIXI.Renderer): void
  onAfterRender(renderer: PIXI.Renderer): void
  targetObjects?: AnimationTarget[]
}
