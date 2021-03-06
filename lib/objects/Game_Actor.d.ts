import {
  ActorID,
  ArmorID,
  ClassID,
  DataArmor,
  DataClass,
  DataEquipment,
  DataItem,
  DataSkill,
  DataState,
  DataWeapon,
  EquipmentSlotID,
  EquipmentType,
  ParamID,
  SkillID,
  StateID,
  WeaponID,
  WeaponType,
} from "../data"
import { Game_Action } from "./Game_Action"
import { Game_Battler } from "./Game_Battler"
import { Game_Item } from "./Game_Item"
/**
 * Game_Actor
 *
 * The game object class for an actor.
 */
export declare class Game_Actor extends Game_Battler {
  get level(): number
  _actorId: number
  _name: string
  _nickname: string
  _classId: number
  _level: number
  _characterName: string
  _characterIndex: number
  _faceName: string
  _faceIndex: number
  _battlerName: string
  _exp: Record<ClassID, number>
  _skills: SkillID[]
  _equips: Game_Item<DataEquipment>[]
  _actionInputIndex: number
  _lastMenuSkill: Game_Item<DataSkill>
  _lastBattleSkill: Game_Item<DataSkill>
  _lastCommandSymbol: string
  _profile: string
  _stateSteps: Record<StateID, number>
  constructor(actorId: ActorID)
  initMembers(): void
  setup(actorId: ActorID): void
  actorId(): number
  actor(): import("../data").DataActor
  name(): string
  setName(name: string): void
  nickname(): string
  setNickname(nickname: string): void
  profile(): string
  setProfile(profile: string): void
  characterName(): string
  characterIndex(): number
  faceName(): string
  faceIndex(): number
  battlerName(): string
  clearStates(): void
  eraseState(stateId: StateID): void
  resetStateCounts(stateId: StateID): void
  initImages(): void
  expForLevel(level: number): number
  initExp(): void
  currentExp(): number
  currentLevelExp(): number
  nextLevelExp(): number
  nextRequiredExp(): number
  maxLevel(): number
  isMaxLevel(): boolean
  initSkills(): void
  initEquips(equips: (WeaponID | ArmorID)[]): void
  equipSlots(): number[]
  equips(): DataEquipment[]
  weapons(): DataWeapon[]
  armors(): DataArmor[]
  hasWeapon(weapon: DataWeapon): boolean
  hasArmor(armor: DataArmor): boolean
  isEquipChangeOk(slotId: EquipmentSlotID): boolean
  changeEquip(slotId: EquipmentSlotID, item: DataEquipment | null): void
  forceChangeEquip(slotId: EquipmentSlotID, item: DataEquipment | null): void
  tradeItemWithParty(newItem: DataEquipment | null, oldItem: DataEquipment | null): boolean
  changeEquipById(etypeId: EquipmentType, itemId: WeaponID | ArmorID): void
  isEquipped(item: DataEquipment): boolean
  discardEquip(item: DataEquipment): void
  releaseUnequippableItems(forcing: boolean): void
  clearEquipments(): void
  optimizeEquipments(): void
  bestEquipItem(slotId: EquipmentSlotID): DataEquipment | null
  calcEquipItemPerformance(item: DataEquipment): number
  isSkillWtypeOk(skill: DataSkill): boolean
  isWtypeEquipped(wtypeId: WeaponType): boolean
  refresh(): void
  hide(): void
  isActor(): boolean
  friendsUnit(): import("./Game_Party").Game_Party
  opponentsUnit(): import("./Game_Troop").Game_Troop
  index(): number
  isBattleMember(): boolean
  isFormationChangeOk(): boolean
  currentClass(): DataClass
  isClass(gameClass: DataClass): boolean
  skillTypes(): number[]
  skills(): DataSkill[]
  usableSkills(): DataSkill[]
  traitObjects(): {
    traits: import("../data").Trait[]
  }[]
  attackElements(): number[]
  hasNoWeapons(): boolean
  bareHandsElementId(): number
  paramBase(paramId: ParamID): number
  paramPlus(paramId: ParamID): number
  attackAnimationId1(): number
  attackAnimationId2(): 0
  bareHandsAnimationId(): number
  changeExp(exp: number, show?: boolean): void
  levelUp(): void
  levelDown(): void
  findNewSkills(lastSkills: DataSkill[]): DataSkill[]
  displayLevelUp(newSkills: DataSkill[]): void
  gainExp(exp: number): void
  finalExpRate(): number
  benchMembersExpRate(): 0 | 1
  shouldDisplayLevelUp(): boolean
  changeLevel(level: number, show?: boolean): void
  learnSkill(skillId: SkillID): void
  forgetSkill(skillId: SkillID): void
  isLearnedSkill(skillId: SkillID): boolean
  hasSkill(skillId: SkillID): boolean
  changeClass(classId: ClassID, keepExp?: boolean): void
  setCharacterImage(characterName: string, characterIndex: number): void
  setFaceImage(faceName: string, faceIndex: number): void
  setBattlerImage(battlerName: string): void
  isSpriteVisible(): boolean
  performActionStart(action: Game_Action): void
  performAction(action: Game_Action): void
  performActionEnd(): void
  performAttack(): void
  performDamage(): void
  performEvasion(): void
  performMagicEvasion(): void
  performCounter(): void
  performCollapse(): void
  performVictory(): void
  performEscape(): void
  makeActionList(): Game_Action[]
  makeAutoBattleActions(): void
  makeConfusionActions(): void
  makeActions(): void
  onPlayerWalk(): void
  updateStateSteps(state: DataState): void
  showAddedStates(): void
  showRemovedStates(): void
  stepsForTurn(): number
  turnEndOnMap(): void
  checkFloorEffect(): void
  executeFloorDamage(): void
  basicFloorDamage(): number
  maxFloorDamage(): number
  performMapDamage(): void
  clearActions(): void
  inputtingAction(): Game_Action
  selectNextCommand(): boolean
  selectPreviousCommand(): boolean
  lastSkill(): DataSkill
  lastMenuSkill(): DataSkill
  setLastMenuSkill(skill: DataSkill | null): void
  lastBattleSkill(): DataSkill
  setLastBattleSkill(skill: DataSkill | null): void
  lastCommandSymbol(): string
  setLastCommandSymbol(symbol: string): void
  testEscape(item: DataItem): boolean
  meetsUsableItemConditions(item: DataItem): boolean
  onEscapeFailure(): void
}
