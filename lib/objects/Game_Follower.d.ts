import { Game_Character } from "./Game_Character"
/**
 * Game_Follower
*
* The game object class for a follower. A follower is an allied character,
// other than the front character, displayed in the party.
*/
export declare class Game_Follower extends Game_Character {
  _memberIndex: number
  constructor(memberIndex: number)
  refresh(): void
  actor(): import("./Game_Actor").Game_Actor
  isVisible(): boolean
  isGathered(): boolean
  update(): void
  chaseCharacter(character: Game_Character): void
}
