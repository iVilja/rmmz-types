import { Color } from "../data"
import { PIXI } from "../externals"
import { Writable } from "../utils"
export declare type PictureEasingType = 0 | 1 | 2 | 3
/**
 * Game_Picture
 *
 * The game object class for a picture.
 */
export declare class Game_Picture {
  _name: string
  _origin: number
  _x: number
  _y: number
  _scaleX: number
  _scaleY: number
  _opacity: number
  _blendMode: PIXI.BLEND_MODES
  _targetX: number
  _targetY: number
  _targetScaleX: number
  _targetScaleY: number
  _targetOpacity: number
  _duration: number
  _wholeDuration: number
  _easingType: PictureEasingType
  _easingExponent: number
  _tone: Writable<Color> | null
  _toneTarget: Color | null
  _toneDuration: number
  _angle: number
  _rotationSpeed: number
  name(): string
  origin(): number
  x(): number
  y(): number
  scaleX(): number
  scaleY(): number
  opacity(): number
  blendMode(): PIXI.BLEND_MODES
  tone(): [number, number, number, number] | null
  angle(): number
  initBasic(): void
  initTarget(): void
  initTone(): void
  initRotation(): void
  show(
    name: string,
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: PIXI.BLEND_MODES
  ): void
  move(
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: PIXI.BLEND_MODES,
    duration: number,
    easingType: PictureEasingType
  ): void
  rotate(speed: number): void
  tint(tone: Color, duration: number): void
  update(): void
  updateMove(): void
  updateTone(): void
  updateRotation(): void
  applyEasing(current: number, target: number): number
  calcEasing(t: number): number
  easeIn(t: number, exponent: number): number
  easeOut(t: number, exponent: number): number
  easeInOut(t: number, exponent: number): number
}
