import { Game_Actor } from "../objects"
import { Window_StatusBase } from "./Window_StatusBase"
/**
 * Window_SkillStatus
 *
 * The window for displaying the skill user's status on the skill screen.
 */
export declare class Window_SkillStatus extends Window_StatusBase {
  _actor: Game_Actor | null
  setActor(actor: Game_Actor): void
  refresh(): void
}
