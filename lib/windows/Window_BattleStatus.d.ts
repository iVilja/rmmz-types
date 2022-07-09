import { Rectangle } from "../core"
import { Game_Actor } from "../objects"
import { Window_StatusBase } from "./Window_StatusBase"
/**
 * Window_BattleStatus
 *
 * The window for displaying the status of party members on the battle screen.
 */
export declare class Window_BattleStatus extends Window_StatusBase {
  _bitmapsReady: number
  constructor(rect: Rectangle)
  extraHeight(): number
  maxCols(): number
  itemHeight(): number
  maxItems(): number
  rowSpacing(): number
  updatePadding(): void
  actor(index: number): Game_Actor
  selectActor(actor: Game_Actor | null): void
  update(): void
  preparePartyRefresh(): void
  performPartyRefresh(): void
  drawItem(index: number): void
  drawItemImage(index: number): void
  drawItemStatus(index: number): void
  faceRect(index: number): Rectangle
  nameX(rect: Rectangle): number
  nameY(rect: Rectangle): number
  stateIconX(rect: Rectangle): number
  stateIconY(rect: Rectangle): number
  basicGaugesX(rect: Rectangle): number
  basicGaugesY(rect: Rectangle): number
}
