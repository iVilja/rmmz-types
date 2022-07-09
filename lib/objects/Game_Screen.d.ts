import { WeatherType } from "../core"
import { Color, PictureID } from "../data"
import { PIXI } from "../externals"
import { Writable } from "../utils"
import { Game_Picture, PictureEasingType } from "./Game_Picture"
/**
 * Game_Screen
*
* The game object class for screen effect data, such as changes in color tone
// and flashes.
*/
export declare class Game_Screen {
  _brightness: number
  _fadeOutDuration: number
  _fadeInDuration: number
  _tone: Writable<Color>
  _toneTarget: Color
  _toneDuration: number
  _flashColor: Writable<Color>
  _flashDuration: number
  _shakePower: number
  _shakeSpeed: number
  _shakeDuration: number
  _shakeDirection: number
  _shake: number
  _zoomX: number
  _zoomY: number
  _zoomScale: number
  _zoomScaleTarget: number
  _zoomDuration: number
  _weatherType: WeatherType
  _weatherPower: number
  _weatherPowerTarget: number
  _weatherDuration: number
  _pictures: (Game_Picture | null)[]
  clear(): void
  onBattleStart(): void
  brightness(): number
  tone(): [number, number, number, number]
  flashColor(): [number, number, number, number]
  shake(): number
  zoomX(): number
  zoomY(): number
  zoomScale(): number
  weatherType(): WeatherType
  weatherPower(): number
  picture(pictureId: PictureID): Game_Picture | null
  realPictureId(pictureId: PictureID): number
  clearFade(): void
  clearTone(): void
  clearFlash(): void
  clearShake(): void
  clearZoom(): void
  clearWeather(): void
  clearPictures(): void
  eraseBattlePictures(): void
  maxPictures(): number
  startFadeOut(duration: number): void
  startFadeIn(duration: number): void
  startTint(tone: Color, duration: number): void
  startFlash(color: Color, duration: number): void
  startShake(power: number, speed: number, duration: number): void
  startZoom(x: number, y: number, scale: number, duration: number): void
  setZoom(x: number, y: number, scale: number): void
  changeWeather(type: WeatherType, power: number, duration: number): void
  update(): void
  updateFadeOut(): void
  updateFadeIn(): void
  updateTone(): void
  updateFlash(): void
  updateShake(): void
  updateZoom(): void
  updateWeather(): void
  updatePictures(): void
  startFlashForDamage(): void
  showPicture(
    pictureId: PictureID,
    name: string,
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: PIXI.BLEND_MODES
  ): void
  movePicture(
    pictureId: PictureID,
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
  rotatePicture(pictureId: PictureID, speed: number): void
  tintPicture(pictureId: PictureID, tone: Color, duration: number): void
  erasePicture(pictureId: PictureID): void
}
