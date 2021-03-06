import { Bitmap, Rectangle, Sprite } from "../core"
import { PIXI } from "../externals"
import { Game_Actor } from "../objects"
import { Sprite_Button } from "../sprites"
import { Window_Help } from "../windows"
import { Scene_Base } from "./Scene_Base"
export declare class Scene_MenuBase extends Scene_Base {
  _backgroundFilter: PIXI.Filter
  _backgroundSprite: Sprite<Bitmap | null>
  _pageupButton: Sprite_Button
  _pagedownButton: Sprite_Button
  _cancelButton: Sprite_Button
  _helpWindow: Window_Help
  _actor?: Game_Actor | null
  create(): void
  update(): void
  helpAreaTop(): number
  helpAreaBottom(): number
  helpAreaHeight(): number
  mainAreaTop(): number
  mainAreaBottom(): number
  mainAreaHeight(): number
  actor(): Game_Actor
  updateActor(): void
  createBackground(): void
  setBackgroundOpacity(opacity: number): void
  createHelpWindow(): void
  helpWindowRect(): Rectangle
  createButtons(): void
  needsCancelButton(): boolean
  createCancelButton(): void
  needsPageButtons(): boolean
  createPageButtons(): void
  updatePageButtons(): void
  arePageButtonsEnabled(): boolean
  nextActor(): void
  previousActor(): void
  onActorChange(): void
}
