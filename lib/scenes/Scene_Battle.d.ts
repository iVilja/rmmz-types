import { Rectangle } from "../core"
import { Spriteset_Battle, Sprite_Button } from "../sprites"
import {
  Window_BattleStatus,
  Window_BattleLog,
  Window_PartyCommand,
  Window_ActorCommand,
  Window_Help,
  Window_BattleSkill,
  Window_BattleItem,
  Window_BattleActor,
  Window_BattleEnemy,
} from "../windows"
import { Scene_Message } from "./Scene_Message"
export declare class Scene_Battle extends Scene_Message {
  _logWindow: Window_BattleLog
  _statusWindow: Window_BattleStatus
  _spriteset: Spriteset_Battle
  _partyCommandWindow: Window_PartyCommand
  _actorCommandWindow: Window_ActorCommand
  _helpWindow: Window_Help
  _skillWindow: Window_BattleSkill
  _itemWindow: Window_BattleItem
  _actorWindow: Window_BattleActor
  _enemyWindow: Window_BattleEnemy
  _cancelButton: Sprite_Button
  create(): void
  start(): void
  update(): void
  updateVisibility(): void
  updateBattleProcess(): void
  isTimeActive(): boolean
  isAnyInputWindowActive(): boolean
  changeInputWindow(): void
  stop(): void
  terminate(): void
  shouldAutosave(): boolean | null
  needsSlowFadeOut(): boolean | null
  updateLogWindowVisibility(): void
  updateStatusWindowVisibility(): void
  shouldOpenStatusWindow(): boolean
  updateStatusWindowPosition(): void
  statusWindowX(): number
  updateInputWindowVisibility(): void
  needsInputWindowChange(): boolean
  updateCancelButton(): void
  createDisplayObjects(): void
  createSpriteset(): void
  createAllWindows(): void
  createLogWindow(): void
  logWindowRect(): Rectangle
  createStatusWindow(): void
  statusWindowRect(): Rectangle
  createPartyCommandWindow(): void
  partyCommandWindowRect(): Rectangle
  createActorCommandWindow(): void
  actorCommandWindowRect(): Rectangle
  createHelpWindow(): void
  helpWindowRect(): Rectangle
  createSkillWindow(): void
  skillWindowRect(): Rectangle
  createItemWindow(): void
  itemWindowRect(): Rectangle
  createActorWindow(): void
  actorWindowRect(): Rectangle
  createEnemyWindow(): void
  enemyWindowRect(): Rectangle
  helpAreaTop(): number
  helpAreaBottom(): number
  helpAreaHeight(): number
  buttonAreaTop(): number
  windowAreaHeight(): number
  createButtons(): void
  createCancelButton(): void
  closeCommandWindows(): void
  hideSubInputWindows(): void
  startPartyCommandSelection(): void
  commandFight(): void
  commandEscape(): void
  startActorCommandSelection(): void
  commandAttack(): void
  commandSkill(): void
  commandGuard(): void
  commandItem(): void
  commandCancel(): void
  selectNextCommand(): void
  selectPreviousCommand(): void
  startActorSelection(): void
  onActorOk(): void
  onActorCancel(): void
  startEnemySelection(): void
  onEnemyOk(): void
  onEnemyCancel(): void
  onSkillOk(): void
  onSkillCancel(): void
  onItemOk(): void
  onItemCancel(): void
  onSelectAction(): void
  endCommandSelection(): void
}
