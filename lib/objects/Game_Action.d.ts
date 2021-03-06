import {
  ActionEffectBase,
  ActorID,
  DamageType,
  DataID,
  EnemyAction,
  EnemyID,
  ActionEffect,
  ItemID,
  Scope,
  SkillID,
  ActionTarget,
  ActionUnit,
  ActionItem,
} from "../data"
import { Game_Battler } from "./Game_Battler"
import { Game_Item } from "./Game_Item"
/**
 * Game_Action
 *
 * The game object class for a battle action.
 */
export declare class Game_Action {
  _subjectActorId: ActorID | EnemyID
  _subjectEnemyIndex: number
  _forcing: boolean
  _item: Game_Item<ActionItem>
  _targetIndex: number
  _reflectionTarget?: ActionTarget
  constructor(subject: Game_Battler, forcing?: boolean)
  clear(): void
  setSubject(subject: ActionTarget): void
  subject(): import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy
  friendsUnit(): import("./Game_Party").Game_Party | import("./Game_Troop").Game_Troop
  opponentsUnit(): import("./Game_Party").Game_Party | import("./Game_Troop").Game_Troop
  setEnemyAction(action: EnemyAction | null | undefined): void
  setAttack(): void
  setGuard(): void
  setSkill(skillId: SkillID): void
  setItem(itemId: ItemID): void
  setItemObject(object: ActionItem | null): void
  setTarget(targetIndex: number): void
  item(): ActionItem
  isSkill(): boolean
  isItem(): boolean
  numRepeats(): number
  checkItemScope(list: Scope[]): boolean
  isForOpponent(): boolean
  isForFriend(): boolean
  isForEveryone(): boolean
  isForAliveFriend(): boolean
  isForDeadFriend(): boolean
  isForUser(): boolean
  isForOne(): boolean
  isForRandom(): boolean
  isForAll(): boolean
  needsSelection(): boolean
  numTargets(): number
  checkDamageType(list: DamageType[]): boolean
  isHpEffect(): boolean
  isMpEffect(): boolean
  isDamage(): boolean
  isRecover(): boolean
  isDrain(): boolean
  isHpRecover(): boolean
  isMpRecover(): boolean
  isCertainHit(): boolean
  isPhysical(): boolean
  isMagical(): boolean
  isAttack(): boolean
  isGuard(): boolean
  isMagicSkill(): boolean
  decideRandomTarget(): void
  setConfusion(): void
  prepare(): void
  isValid(): boolean | ActionItem
  speed(): number
  makeTargets(): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy)[]
  repeatTargets(
    targets: (ActionTarget | null)[]
  ): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy)[]
  confusionTarget(): import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy | null
  targetsForEveryone(): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy)[]
  targetsForOpponents(): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy | null)[]
  targetsForFriends(): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy | null)[]
  randomTargets(
    unit: ActionUnit
  ): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy | null)[]
  targetsForDead(unit: ActionUnit): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy)[]
  targetsForAlive(
    unit: ActionUnit
  ): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy | null)[]
  targetsForDeadAndAlive(
    unit: ActionUnit
  ): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy)[]
  evaluate(): number
  itemTargetCandidates(): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy)[]
  evaluateWithTarget(target: ActionTarget): number | undefined
  testApply(target: ActionTarget): boolean
  testLifeAndDeath(target: ActionTarget): boolean
  hasItemAnyValidEffects(target: ActionTarget): boolean
  testItemEffect(target: ActionTarget, effect: ActionEffectBase): boolean
  itemCnt(target: ActionTarget): number
  itemMrf(target: ActionTarget): number
  itemHit(_target: ActionTarget): number
  itemEva(target: ActionTarget): number
  itemCri(target: ActionTarget): number
  apply(target: ActionTarget): void
  makeDamageValue(target: ActionTarget, critical: boolean): number
  evalDamageFormula(target: ActionTarget): number
  calcElementRate(target: ActionTarget): number
  elementsMaxRate(target: ActionTarget, elements: DataID[]): number
  applyCritical(damage: number): number
  applyVariance(damage: number, variance: number): number
  applyGuard(damage: number, target: ActionTarget): number
  executeDamage(target: ActionTarget, value: number): void
  executeHpDamage(target: ActionTarget, value: number): void
  executeMpDamage(target: ActionTarget, value: number): void
  gainDrainedHp(value: number): void
  gainDrainedMp(value: number): void
  applyItemEffect(target: ActionTarget, effect: ActionEffectBase): void
  itemEffectRecoverHp(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_RECOVER_HP>): void
  itemEffectRecoverMp(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_RECOVER_MP>): void
  itemEffectGainTp(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_GAIN_TP>): void
  itemEffectAddState(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_ADD_STATE>): void
  itemEffectAddAttackState(
    target: ActionTarget,
    effect: ActionEffect<typeof Game_Action.EFFECT_ADD_STATE>
  ): void
  itemEffectAddNormalState(
    target: ActionTarget,
    effect: ActionEffect<typeof Game_Action.EFFECT_ADD_STATE>
  ): void
  itemEffectRemoveState(
    target: ActionTarget,
    effect: ActionEffect<typeof Game_Action.EFFECT_REMOVE_STATE>
  ): void
  itemEffectAddBuff(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_ADD_BUFF>): void
  itemEffectAddDebuff(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_ADD_DEBUFF>): void
  itemEffectRemoveBuff(
    target: ActionTarget,
    effect: ActionEffect<typeof Game_Action.EFFECT_REMOVE_BUFF>
  ): void
  itemEffectRemoveDebuff(
    target: ActionTarget,
    effect: ActionEffect<typeof Game_Action.EFFECT_REMOVE_DEBUFF>
  ): void
  itemEffectSpecial(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_SPECIAL>): void
  itemEffectGrow(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_GROW>): void
  itemEffectLearnSkill(
    target: ActionTarget,
    effect: ActionEffect<typeof Game_Action.EFFECT_LEARN_SKILL>
  ): void
  itemEffectCommonEvent(
    _target: ActionTarget, // eslint-disable-line @typescript-eslint/no-unused-vars
    _effect: ActionEffect<typeof Game_Action.EFFECT_COMMON_EVENT>
  ): void
  makeSuccess(target: ActionTarget): void
  applyItemUserEffect(_target: ActionTarget): void
  lukEffectRate(target: ActionTarget): number
  applyGlobal(): void
  updateLastUsed(): void
  updateLastSubject(): void
  updateLastTarget(target: ActionTarget): void
}
export declare namespace Game_Action {
  const EFFECT_RECOVER_HP = 11
  const EFFECT_RECOVER_MP = 12
  const EFFECT_GAIN_TP = 13
  const EFFECT_ADD_STATE = 21
  const EFFECT_REMOVE_STATE = 22
  const EFFECT_ADD_BUFF = 31
  const EFFECT_ADD_DEBUFF = 32
  const EFFECT_REMOVE_BUFF = 33
  const EFFECT_REMOVE_DEBUFF = 34
  const EFFECT_SPECIAL = 41
  const EFFECT_GROW = 42
  const EFFECT_LEARN_SKILL = 43
  const EFFECT_COMMON_EVENT = 44
  const SPECIAL_EFFECT_ESCAPE = 0
  const HITTYPE_CERTAIN = 0
  const HITTYPE_PHYSICAL = 1
  const HITTYPE_MAGICAL = 2
}
