import { Rectangle, Sprite } from "../core"
import { Game_Actor } from "../objects"
import { GaugeStatusType } from "../sprites"
import { Window_Selectable } from "./Window_Selectable"
/**
 * Window_StatusBase
 *
 * The superclass of windows for displaying actor status.
 */
export declare class Window_StatusBase extends Window_Selectable {
  _additionalSprites: Record<string, Sprite>
  constructor(rect: Rectangle)
  loadFaceImages(): void
  refresh(): void
  hideAdditionalSprites(): void
  placeActorName(actor: Game_Actor, x: number, y: number): void
  placeStateIcon(actor: Game_Actor, x: number, y: number): void
  placeGauge(actor: Game_Actor, type: GaugeStatusType, x: number, y: number): void
  createInnerSprite<T extends Sprite>(key: string, spriteClass: new () => T): T
  placeTimeGauge(actor: Game_Actor, x: number, y: number): void
  placeBasicGauges(actor: Game_Actor, x: number, y: number): void
  gaugeLineHeight(): number
  drawActorCharacter(actor: Game_Actor, x: number, y: number): void
  drawActorFace(actor: Game_Actor, x: number, y: number, width?: number, height?: number): void
  drawActorName(actor: Game_Actor, x: number, y: number, width?: number): void
  drawActorClass(actor: Game_Actor, x: number, y: number, width?: number): void
  drawActorNickname(actor: Game_Actor, x: number, y: number, width?: number): void
  drawActorLevel(actor: Game_Actor, x: number, y: number): void
  drawActorIcons(actor: Game_Actor, x: number, y: number, width?: number): void
  drawActorSimpleStatus(actor: Game_Actor, x: number, y: number): void
  actorSlotName(actor: Game_Actor, index: number): string
}
