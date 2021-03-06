import { Rectangle, WindowLayer } from "../core"
import { Spriteset_Map, Sprite_Button } from "../sprites"
import { Window_MapName } from "../windows"
import { Scene_Message } from "./Scene_Message"
export declare class Scene_Map extends Scene_Message {
  _waitCount: number
  _encounterEffectDuration: number
  _mapLoaded: boolean
  _touchCount: number
  _menuEnabled: boolean
  _transfer: boolean
  _lastMapWasNull: boolean
  _mapNameWindow: Window_MapName
  _spriteset: Spriteset_Map
  menuCalling: boolean
  _menuButton?: Sprite_Button
  _windowLayer: WindowLayer
  create(): void
  isReady(): boolean
  onMapLoaded(): void
  onTransfer(): void
  start(): void
  onTransferEnd(): void
  shouldAutosave(): boolean
  update(): void
  updateMainMultiply(): void
  updateMain(): void
  isPlayerActive(): boolean
  isFastForward(): boolean
  stop(): void
  isBusy(): boolean
  terminate(): void
  needsFadeIn(): boolean
  needsSlowFadeOut(): boolean | null
  updateWaitCount(): boolean
  updateDestination(): void
  updateMenuButton(): void
  hideMenuButton(): void
  updateMapNameWindow(): void
  isMenuEnabled(): boolean
  isMapTouchOk(): boolean
  processMapTouch(): void
  isAnyButtonPressed(): boolean
  onMapTouch(): void
  isSceneChangeOk(): boolean
  updateScene(): void
  createDisplayObjects(): void
  createSpriteset(): void
  createAllWindows(): void
  createMapNameWindow(): void
  mapNameWindowRect(): Rectangle
  createButtons(): void
  createMenuButton(): void
  updateTransferPlayer(): void
  updateEncounter(): void
  updateCallMenu(): void
  isMenuCalled(): boolean
  callMenu(): void
  updateCallDebug(): void
  isDebugCalled(): boolean
  fadeInForTransfer(): void
  fadeOutForTransfer(): void
  launchBattle(): void
  stopAudioOnBattleStart(): void
  startEncounterEffect(): void
  updateEncounterEffect(): void
  snapForBattleBackground(): void
  startFlashForEncounter(duration: number): void
  encounterEffectSpeed(): number
  isMessageWindowClosing(): boolean
}
