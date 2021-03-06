import {
  ArmorType,
  BattlerParams,
  DataArmor,
  DataID,
  DataItem,
  DataItemBase,
  DataSkill,
  DataWeapon,
  ElementType,
  ParamID,
  SkillID,
  SkillType,
  StateID,
  Trait,
  TraitType,
  WeaponType,
} from "../data"
import { Game_Actor } from "./Game_Actor"
import { Game_Enemy } from "./Game_Enemy"
/**
 * Game_BattlerBase
 *
 * The superclass of Game_Battler. It mainly contains parameters calculation.
 */
export declare class Game_BattlerBase {
  get hp(): number
  get mp(): number
  get tp(): number
  get mhp(): number
  get mmp(): number
  get atk(): number
  get def(): number
  get mat(): number
  get mdf(): number
  get agi(): number
  get luk(): number
  get hit(): number
  get eva(): number
  get cri(): number
  get cev(): number
  get mev(): number
  get mrf(): number
  get cnt(): number
  get hrg(): number
  get mrg(): number
  get trg(): number
  get tgr(): number
  get grd(): number
  get rec(): number
  get pha(): number
  get mcr(): number
  get tcr(): number
  get pdr(): number
  get mdr(): number
  get fdr(): number
  get exr(): number
  _hp: number
  _mp: number
  _tp: number
  _hidden: boolean
  _paramPlus: BattlerParams
  _states: StateID[]
  _stateTurns: Record<StateID, number>
  _buffs: BattlerParams
  _buffTurns: BattlerParams
  constructor()
  initMembers(): void
  clearParamPlus(): void
  clearStates(): void
  eraseState(stateId: StateID): void
  isStateAffected(stateId: StateID): boolean
  isDeathStateAffected(): boolean
  deathStateId(): number
  resetStateCounts(stateId: StateID): void
  isStateExpired(stateId: StateID): boolean
  updateStateTurns(): void
  clearBuffs(): void
  eraseBuff(paramId: ParamID): void
  buffLength(): 8
  buff(paramId: ParamID): number
  isBuffAffected(paramId: ParamID): boolean
  isDebuffAffected(paramId: ParamID): boolean
  isBuffOrDebuffAffected(paramId: ParamID): boolean
  isMaxBuffAffected(paramId: ParamID): boolean
  isMaxDebuffAffected(paramId: ParamID): boolean
  increaseBuff(paramId: ParamID): void
  decreaseBuff(paramId: ParamID): void
  overwriteBuffTurns(paramId: ParamID, turns: number): void
  isBuffExpired(paramId: ParamID): boolean
  updateBuffTurns(): void
  die(): void
  revive(): void
  states(): import("../data").DataState[]
  stateIcons(): number[]
  buffIcons(): number[]
  buffIconIndex(buffLevel: number, paramId: ParamID): number
  allIcons(): number[]
  traitObjects(): {
    traits: Trait[]
  }[]
  allTraits(): Trait[]
  traits(code: TraitType): Trait[]
  traitsWithId(code: TraitType, id: DataID): Trait[]
  traitsPi(code: TraitType, id: DataID): number
  traitsSum(code: TraitType, id: DataID): number
  traitsSumAll(code: TraitType): number
  traitsSet(code: TraitType): number[]
  paramBase(_paramId: ParamID): number
  paramPlus(paramId: ParamID): number
  paramBasePlus(paramId: ParamID): number
  paramMin(paramId: ParamID): 0 | 1
  paramMax(_paramId: ParamID): number
  paramRate(paramId: ParamID): number
  paramBuffRate(paramId: ParamID): number
  param(paramId: ParamID): number
  xparam(xparamId: DataID): number
  sparam(sparamId: DataID): number
  elementRate(elementId: DataID): number
  debuffRate(paramId: ParamID): number
  stateRate(stateId: StateID): number
  stateResistSet(): number[]
  isStateResist(stateId: StateID): boolean
  attackElements(): number[]
  attackStates(): number[]
  attackStatesRate(stateId: StateID): number
  attackSpeed(): number
  attackTimesAdd(): number
  attackSkillId(): number
  addedSkillTypes(): number[]
  isSkillTypeSealed(stypeId: SkillType): boolean
  addedSkills(): number[]
  isSkillSealed(skillId: SkillID): boolean
  isEquipWtypeOk(wtypeId: WeaponType): boolean
  isEquipAtypeOk(atypeId: ArmorType): boolean
  isEquipTypeLocked(etypeId: ElementType): boolean
  isEquipTypeSealed(etypeId: ElementType): boolean
  slotType(): number
  isDualWield(): boolean
  actionPlusSet(): number[]
  specialFlag(flagId: DataID): boolean
  collapseType(): number
  partyAbility(abilityId: DataID): boolean
  isAutoBattle(): boolean
  isGuard(): boolean
  isSubstitute(): boolean
  isPreserveTp(): boolean
  addParam(paramId: ParamID, value: number): void
  setHp(hp: number): void
  setMp(mp: number): void
  setTp(tp: number): void
  maxTp(): number
  refresh(): void
  recoverAll(): void
  hpRate(): number
  mpRate(): number
  tpRate(): number
  hide(): void
  appear(): void
  isHidden(): boolean
  isAppeared(): boolean
  isDead(): boolean
  isAlive(): boolean
  isDying(): boolean
  isRestricted(): boolean
  canInput(): boolean
  canMove(): boolean
  isConfused(): boolean
  confusionLevel(): number
  isActor(): this is Game_Actor
  isEnemy(): this is Game_Enemy
  sortStates(): void
  restriction(): number
  addNewState(stateId: StateID): void
  onRestrict(): void
  mostImportantStateText(): string
  stateMotionIndex(): import("../data").Motion
  stateOverlayIndex(): import("../data").Overlay
  isSkillWtypeOk(_skill: DataSkill): boolean
  skillMpCost(skill: DataSkill): number
  skillTpCost(skill: DataSkill): number
  canPaySkillCost(skill: DataSkill): boolean
  paySkillCost(skill: DataSkill): void
  isOccasionOk(item: DataSkill | DataItem): boolean
  meetsUsableItemConditions(item: DataSkill | DataItem): boolean
  meetsSkillConditions(skill: DataSkill): boolean
  meetsItemConditions(item: DataSkill | DataItem): boolean
  canUse(item: DataItemBase | null): boolean
  canEquip(item: DataItemBase): item is DataWeapon | DataArmor
  canEquipWeapon(item: DataWeapon): boolean
  canEquipArmor(item: DataArmor): boolean
  guardSkillId(): number
  canAttack(): boolean
  canGuard(): boolean
}
export declare namespace Game_BattlerBase {
  const TRAIT_ELEMENT_RATE = 11
  const TRAIT_DEBUFF_RATE = 12
  const TRAIT_STATE_RATE = 13
  const TRAIT_STATE_RESIST = 14
  const TRAIT_PARAM = 21
  const TRAIT_XPARAM = 22
  const TRAIT_SPARAM = 23
  const TRAIT_ATTACK_ELEMENT = 31
  const TRAIT_ATTACK_STATE = 32
  const TRAIT_ATTACK_SPEED = 33
  const TRAIT_ATTACK_TIMES = 34
  const TRAIT_ATTACK_SKILL = 35
  const TRAIT_STYPE_ADD = 41
  const TRAIT_STYPE_SEAL = 42
  const TRAIT_SKILL_ADD = 43
  const TRAIT_SKILL_SEAL = 44
  const TRAIT_EQUIP_WTYPE = 51
  const TRAIT_EQUIP_ATYPE = 52
  const TRAIT_EQUIP_LOCK = 53
  const TRAIT_EQUIP_SEAL = 54
  const TRAIT_SLOT_TYPE = 55
  const TRAIT_ACTION_PLUS = 61
  const TRAIT_SPECIAL_FLAG = 62
  const TRAIT_COLLAPSE_TYPE = 63
  const TRAIT_PARTY_ABILITY = 64
  const FLAG_ID_AUTO_BATTLE = 0
  const FLAG_ID_GUARD = 1
  const FLAG_ID_SUBSTITUTE = 2
  const FLAG_ID_PRESERVE_TP = 3
  const ICON_BUFF_START = 32
  const ICON_DEBUFF_START = 48
}
