import { DataItemBase, DataTroopPage, TroopID } from "../data"
import { Game_Enemy } from "./Game_Enemy"
import { Game_Interpreter } from "./Game_Interpreter"
import { Game_Unit } from "./Game_Unit"
/**
 * Game_Troop
 *
 * The game object class for a troop and the battle-related data.
 */
export declare class Game_Troop extends Game_Unit<Game_Enemy> {
  _interpreter: Game_Interpreter
  _troopId: number
  _eventFlags: Record<number, boolean>
  _enemies: Game_Enemy[]
  _turnCount: number
  _namesCount: Record<string, number>
  constructor()
  isEventRunning(): boolean
  updateInterpreter(): void
  turnCount(): number
  members(): Game_Enemy[]
  clear(): void
  troop(): import("../data").DataTroop
  setup(troopId: TroopID): void
  makeUniqueNames(): void
  updatePluralFlags(): void
  letterTable(): string[]
  enemyNames(): string[]
  meetsConditions(page: DataTroopPage): boolean
  setupBattleEvent(): void
  increaseTurn(): void
  expTotal(): number
  goldTotal(): number
  goldRate(): 1 | 2
  makeDropItems(): DataItemBase[]
  isTpbTurnEnd(): boolean
}
export declare namespace Game_Troop {
  const LETTER_TABLE_HALF: string[]
  const LETTER_TABLE_FULL: string[]
}
