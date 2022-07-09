import { Game_Actor } from "../objects"
import { Window_Command } from "./Window_Command"
import { Window_SkillList } from "./Window_SkillList"
/**
 * Window_SkillType
 *
 * The window for selecting a skill type on the skill screen.
 */
export declare class Window_SkillType extends Window_Command {
  _actor: Game_Actor | null
  _skillWindow?: Window_SkillList
  setActor(actor: Game_Actor): void
  makeCommandList(): void
  update(): void
  setSkillWindow(skillWindow: Window_SkillList): void
  selectLast(): void
}
