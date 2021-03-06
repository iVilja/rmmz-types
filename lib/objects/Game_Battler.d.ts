import {
  ActionItem,
  ActionState,
  ActorID,
  AutoRemovalTiming,
  BattlerEffectType,
  BattlerMotionType,
  DataID,
  DataItem,
  EnemyID,
  ParamID,
  SkillID,
  StateID,
} from "../data"
import { Game_Action } from "./Game_Action"
import { Game_ActionResult } from "./Game_ActionResult"
import { Game_Actor } from "./Game_Actor"
import { Game_BattlerBase } from "./Game_BattlerBase"
import { Game_Enemy } from "./Game_Enemy"
/**
 * Game_Battler
*
* The superclass of Game_Actor and Game_Enemy. It contains methods for sprites
// and actions.
*/
export declare class Game_Battler extends Game_BattlerBase {
  _actions: Game_Action[]
  _speed: number
  _result: Game_ActionResult
  _actionState: ActionState | ""
  _lastTargetIndex: number
  _damagePopup: boolean
  _effectType: BattlerEffectType | null
  _motionType: BattlerMotionType | null
  _weaponImageId: number
  _motionRefresh: boolean
  _selected: boolean
  _tpbState: string
  _tpbChargeTime: number
  _tpbCastTime: number
  _tpbIdleTime: number
  _tpbTurnCount: number
  _tpbTurnEnd: boolean
  constructor()
  initMembers(): void
  clearDamagePopup(): void
  clearWeaponAnimation(): void
  clearEffect(): void
  clearMotion(): void
  requestEffect(effectType: BattlerEffectType): void
  requestMotion(motionType: BattlerMotionType): void
  requestMotionRefresh(): void
  cancelMotionRefresh(): void
  select(): void
  deselect(): void
  isDamagePopupRequested(): boolean
  isEffectRequested(): boolean
  isMotionRequested(): boolean
  isWeaponAnimationRequested(): boolean
  isMotionRefreshRequested(): boolean
  isSelected(): boolean
  effectType(): BattlerEffectType | null
  motionType(): BattlerMotionType | null
  weaponImageId(): number
  startDamagePopup(): void
  shouldPopupDamage(): boolean
  startWeaponAnimation(weaponImageId: DataID): void
  action(index: number): Game_Action
  setAction(index: number, action: Game_Action): void
  numActions(): number
  clearActions(): void
  result(): Game_ActionResult
  clearResult(): void
  clearTpbChargeTime(): void
  applyTpbPenalty(): void
  initTpbChargeTime(advantageous?: boolean): void
  tpbChargeTime(): number
  startTpbCasting(): void
  startTpbAction(): void
  isTpbCharged(): boolean
  isTpbReady(): boolean
  isTpbTimeout(): boolean
  updateTpb(): void
  updateTpbChargeTime(): void
  updateTpbCastTime(): void
  updateTpbAutoBattle(): void
  updateTpbIdleTime(): void
  tpbAcceleration(): number
  tpbRelativeSpeed(): number
  tpbSpeed(): number
  tpbBaseSpeed(): number
  tpbRequiredCastTime(): number
  onTpbCharged(): void
  shouldDelayTpbCharge(): boolean
  finishTpbCharge(): void
  isTpbTurnEnd(): boolean
  initTpbTurn(): void
  startTpbTurn(): void
  makeTpbActions(): void
  onTpbTimeout(): void
  turnCount(): number
  canInput(): boolean
  refresh(): void
  addState(stateId: StateID): void
  isStateAddable(stateId: StateID): boolean
  isStateRestrict(stateId: StateID): boolean
  onRestrict(): void
  removeState(stateId: StateID): void
  escape(): void
  addBuff(paramId: ParamID, turns: number): void
  addDebuff(paramId: ParamID, turns: number): void
  removeBuff(paramId: ParamID): void
  removeBattleStates(): void
  removeAllBuffs(): void
  removeStatesAuto(timing: AutoRemovalTiming): void
  removeBuffsAuto(): void
  removeStatesByDamage(): void
  makeActionTimes(): number
  makeActions(): void
  speed(): number
  makeSpeed(): void
  currentAction(): Game_Action
  removeCurrentAction(): void
  setLastTarget(target: Game_Actor | Game_Enemy): void
  forceAction(skillId: SkillID, targetIndex: ActorID | EnemyID): void
  useItem(item: ActionItem): void
  consumeItem(item: DataItem): void
  gainHp(value: number): void
  gainMp(value: number): void
  gainTp(value: number): void
  gainSilentTp(value: number): void
  initTp(): void
  clearTp(): void
  chargeTpByDamage(damageRate: number): void
  regenerateHp(): void
  maxSlipDamage(): number
  regenerateMp(): void
  regenerateTp(): void
  regenerateAll(): void
  onBattleStart(advantageous?: boolean): void
  onAllActionsEnd(): void
  onTurnEnd(): void
  onBattleEnd(): void
  onDamage(value: number): void
  setActionState(actionState: ActionState): void
  isUndecided(): boolean
  isInputting(): boolean
  isWaiting(): boolean
  isActing(): boolean
  isChanting(): boolean
  isGuardWaiting(): boolean
  performActionStart(action: Game_Action): void
  performAction(_action: Game_Action): void
  performActionEnd(): void
  performDamage(): void
  performMiss(): void
  performRecovery(): void
  performEvasion(): void
  performMagicEvasion(): void
  performCounter(): void
  performReflection(): void
  performSubstitute(_target: Game_Battler): void
  performCollapse(): void
}
