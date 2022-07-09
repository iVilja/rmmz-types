import { PIXI } from "../externals"
/**
 * The sprite which covers the entire game screen.
 *
 * @class
 * @extends PIXI.Container
 */
export declare class ScreenSprite extends PIXI.Container {
  _graphics: PIXI.Graphics
  _red: number
  _green: number
  _blue: number
  constructor()
  /**
   * The opacity of the sprite (0 to 255).
   *
   * @type number
   * @name ScreenSprite#opacity
   */
  get opacity(): number
  set opacity(value: number)
  /**
   * Destroys the screen sprite.
   */
  destroy(): void
  /**
   * Sets black to the color of the screen sprite.
   */
  setBlack(): void
  /**
   * Sets white to the color of the screen sprite.
   */
  setWhite(): void
  /**
   * Sets the color of the screen sprite by values.
   *
   * @param {number} r - The red value in the range (0, 255).
   * @param {number} g - The green value in the range (0, 255).
   * @param {number} b - The blue value in the range (0, 255).
   */
  setColor(r: number, g: number, b: number): void
}
