import { ActorID, ArmorID, DataEquipment, DataID, DataItemBase, ItemID, WeaponID } from "../data"
import { Game_Actor } from "./Game_Actor"
import { Game_Item } from "./Game_Item"
import { Game_Unit } from "./Game_Unit"
/**
 * Game_Party
*
* The game object class for the party. Information such as gold and items is
// included.
*/
export declare class Game_Party extends Game_Unit<Game_Actor> {
  _gold: number
  _steps: number
  _lastItem: Game_Item<DataItemBase>
  _menuActorId: number
  _targetActorId: number
  _actors: ActorID[]
  _items: Record<ItemID, number>
  _weapons: Record<WeaponID, number>
  _armors: Record<ArmorID, number>
  constructor()
  initAllItems(): void
  exists(): boolean
  size(): number
  isEmpty(): boolean
  members(): Game_Actor[]
  allMembers(): Game_Actor[]
  battleMembers(): Game_Actor[]
  hiddenBattleMembers(): Game_Actor[]
  allBattleMembers(): Game_Actor[]
  maxBattleMembers(): number
  leader(): Game_Actor
  removeInvalidMembers(): void
  reviveBattleMembers(): void
  items(): import("../data").DataItem[]
  weapons(): import("../data").DataWeapon[]
  armors(): import("../data").DataArmor[]
  equipItems(): DataEquipment[]
  allItems(): DataItemBase[]
  itemContainer(item: DataItemBase | null): Record<number, number> | null
  setupStartingMembers(): void
  name(): string
  setupBattleTest(): void
  setupBattleTestMembers(): void
  setupBattleTestItems(): void
  highestLevel(): number
  addActor(actorId: ActorID): void
  removeActor(actorId: ActorID): void
  gold(): number
  gainGold(amount: number): void
  loseGold(amount: number): void
  maxGold(): number
  steps(): number
  increaseSteps(): void
  numItems(item: DataItemBase | null): number
  maxItems(_item: DataItemBase | null): number
  hasMaxItems(item: DataItemBase): boolean
  hasItem(item: DataItemBase, includeEquip?: boolean): boolean
  isAnyMemberEquipped(item: DataEquipment): boolean
  gainItem(item: DataItemBase | null, amount: number, includeEquip?: boolean): void
  discardMembersEquip(item: DataEquipment, amount: number): void
  loseItem(item: DataItemBase | null, amount: number, includeEquip?: boolean): void
  consumeItem(item: DataItemBase): void
  canUse(item: DataItemBase | null): boolean
  canInput(): boolean
  isAllDead(): boolean
  isEscaped(): boolean
  onPlayerWalk(): void
  menuActor(): Game_Actor
  setMenuActor(actor: Game_Actor): void
  makeMenuActorNext(): void
  makeMenuActorPrevious(): void
  targetActor(): Game_Actor
  setTargetActor(actor: Game_Actor): void
  lastItem(): DataItemBase
  setLastItem(item: DataItemBase | null): void
  swapOrder(index1: ActorID, index2: ActorID): void
  charactersForSavefile(): [string, number][]
  facesForSavefile(): [string, number][]
  partyAbility(abilityId: DataID): boolean
  hasEncounterHalf(): boolean
  hasEncounterNone(): boolean
  hasCancelSurprise(): boolean
  hasRaisePreemptive(): boolean
  hasGoldDouble(): boolean
  hasDropItemDouble(): boolean
  ratePreemptive(troopAgi: number): number
  rateSurprise(troopAgi: number): number
  performVictory(): void
  performEscape(): void
  removeBattleStates(): void
  requestMotionRefresh(): void
  onEscapeFailure(): void
}
export declare namespace Game_Party {
  const ABILITY_ENCOUNTER_HALF = 0
  const ABILITY_ENCOUNTER_NONE = 1
  const ABILITY_CANCEL_SURPRISE = 2
  const ABILITY_RAISE_PREEMPTIVE = 3
  const ABILITY_GOLD_DOUBLE = 4
  const ABILITY_DROP_ITEM_DOUBLE = 5
}
