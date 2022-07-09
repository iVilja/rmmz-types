import { Rectangle } from "../core"
import { Game_Enemy } from "../objects"
import { Window_Selectable } from "./Window_Selectable"
/**
 * Window_BattleEnemy
 *
 * The window for selecting a target enemy on the battle screen.
 */
export declare class Window_BattleEnemy extends Window_Selectable {
  _enemies: Game_Enemy[]
  constructor(rect: Rectangle)
  maxCols(): number
  maxItems(): number
  enemy(): Game_Enemy
  enemyIndex(): number
  drawItem(index: number): void
  show(): void
  hide(): void
  refresh(): void
  select(index: number): void
  processTouch(): void
}
