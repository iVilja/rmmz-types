import { Rectangle } from "../core"
import { Window_SkillList } from "./Window_SkillList"
/**
 * Window_BattleSkill
 *
 * The window for selecting a skill to use on the battle screen.
 */
export declare class Window_BattleSkill extends Window_SkillList {
  constructor(rect: Rectangle)
  show(): void
  hide(): void
}
