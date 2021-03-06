import { ColorFilter, Sprite, Stage, WindowLayer } from "../core"
import { PIXI } from "../externals"
export declare class Scene_Base extends Stage {
  _started: boolean
  _active: boolean
  _fadeSign: number
  _fadeDuration: number
  _fadeWhite: number | boolean
  _fadeOpacity: number
  _colorFilter: ColorFilter
  _windowLayer?: WindowLayer
  constructor()
  create(): void
  isActive(): boolean
  isReady(): boolean
  start(): void
  update(): void
  stop(): void
  isStarted(): boolean
  isBusy(): boolean
  isFading(): boolean
  terminate(): void
  createWindowLayer(): void
  addWindow(window: PIXI.Container): void
  startFadeIn(duration: number, white?: number | boolean): void
  startFadeOut(duration: number, white?: number | boolean): void
  createColorFilter(): void
  updateColorFilter(): void
  updateFade(): void
  updateChildren(): void
  popScene(): void
  checkGameover(): void
  fadeOutAll(): void
  fadeSpeed(): number
  slowFadeSpeed(): number
  scaleSprite(sprite: Sprite): void
  centerSprite(sprite: Sprite): void
  isBottomHelpMode(): boolean
  isBottomButtonMode(): boolean
  isRightInputMode(): boolean
  mainCommandWidth(): number
  buttonAreaTop(): number
  buttonAreaBottom(): number
  buttonAreaHeight(): number
  buttonY(): number
  calcWindowHeight(numLines: number, selectable: boolean): number
  requestAutosave(): void
  isAutosaveEnabled(): boolean
  executeAutosave(): void
  onAutosaveSuccess(): void
  onAutosaveFailure(): void
}
