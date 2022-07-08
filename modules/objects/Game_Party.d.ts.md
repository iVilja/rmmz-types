---
title: objects/Game_Party.d.ts
nav_order: 80
parent: Modules
---

## Game_Party.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Party (class)](#game_party-class)
    - [initAllItems (method)](#initallitems-method)
    - [exists (method)](#exists-method)
    - [size (method)](#size-method)
    - [isEmpty (method)](#isempty-method)
    - [members (method)](#members-method)
    - [allMembers (method)](#allmembers-method)
    - [battleMembers (method)](#battlemembers-method)
    - [hiddenBattleMembers (method)](#hiddenbattlemembers-method)
    - [allBattleMembers (method)](#allbattlemembers-method)
    - [maxBattleMembers (method)](#maxbattlemembers-method)
    - [leader (method)](#leader-method)
    - [removeInvalidMembers (method)](#removeinvalidmembers-method)
    - [reviveBattleMembers (method)](#revivebattlemembers-method)
    - [items (method)](#items-method)
    - [weapons (method)](#weapons-method)
    - [armors (method)](#armors-method)
    - [equipItems (method)](#equipitems-method)
    - [allItems (method)](#allitems-method)
    - [itemContainer (method)](#itemcontainer-method)
    - [setupStartingMembers (method)](#setupstartingmembers-method)
    - [name (method)](#name-method)
    - [setupBattleTest (method)](#setupbattletest-method)
    - [setupBattleTestMembers (method)](#setupbattletestmembers-method)
    - [setupBattleTestItems (method)](#setupbattletestitems-method)
    - [highestLevel (method)](#highestlevel-method)
    - [addActor (method)](#addactor-method)
    - [removeActor (method)](#removeactor-method)
    - [gold (method)](#gold-method)
    - [gainGold (method)](#gaingold-method)
    - [loseGold (method)](#losegold-method)
    - [maxGold (method)](#maxgold-method)
    - [steps (method)](#steps-method)
    - [increaseSteps (method)](#increasesteps-method)
    - [numItems (method)](#numitems-method)
    - [maxItems (method)](#maxitems-method)
    - [hasMaxItems (method)](#hasmaxitems-method)
    - [hasItem (method)](#hasitem-method)
    - [isAnyMemberEquipped (method)](#isanymemberequipped-method)
    - [gainItem (method)](#gainitem-method)
    - [discardMembersEquip (method)](#discardmembersequip-method)
    - [loseItem (method)](#loseitem-method)
    - [consumeItem (method)](#consumeitem-method)
    - [canUse (method)](#canuse-method)
    - [canInput (method)](#caninput-method)
    - [isAllDead (method)](#isalldead-method)
    - [isEscaped (method)](#isescaped-method)
    - [onPlayerWalk (method)](#onplayerwalk-method)
    - [menuActor (method)](#menuactor-method)
    - [setMenuActor (method)](#setmenuactor-method)
    - [makeMenuActorNext (method)](#makemenuactornext-method)
    - [makeMenuActorPrevious (method)](#makemenuactorprevious-method)
    - [targetActor (method)](#targetactor-method)
    - [setTargetActor (method)](#settargetactor-method)
    - [lastItem (method)](#lastitem-method)
    - [setLastItem (method)](#setlastitem-method)
    - [swapOrder (method)](#swaporder-method)
    - [charactersForSavefile (method)](#charactersforsavefile-method)
    - [facesForSavefile (method)](#facesforsavefile-method)
    - [partyAbility (method)](#partyability-method)
    - [hasEncounterHalf (method)](#hasencounterhalf-method)
    - [hasEncounterNone (method)](#hasencounternone-method)
    - [hasCancelSurprise (method)](#hascancelsurprise-method)
    - [hasRaisePreemptive (method)](#hasraisepreemptive-method)
    - [hasGoldDouble (method)](#hasgolddouble-method)
    - [hasDropItemDouble (method)](#hasdropitemdouble-method)
    - [ratePreemptive (method)](#ratepreemptive-method)
    - [rateSurprise (method)](#ratesurprise-method)
    - [performVictory (method)](#performvictory-method)
    - [performEscape (method)](#performescape-method)
    - [removeBattleStates (method)](#removebattlestates-method)
    - [requestMotionRefresh (method)](#requestmotionrefresh-method)
    - [onEscapeFailure (method)](#onescapefailure-method)
    - [\_gold (property)](#_gold-property)
    - [\_steps (property)](#_steps-property)
    - [\_lastItem (property)](#_lastitem-property)
    - [\_menuActorId (property)](#_menuactorid-property)
    - [\_targetActorId (property)](#_targetactorid-property)
    - [\_actors (property)](#_actors-property)
    - [\_items (property)](#_items-property)
    - [\_weapons (property)](#_weapons-property)
    - [\_armors (property)](#_armors-property)

---

# utils

## Game_Party (class)

Game_Party

The game object class for the party. Information such as gold and items is
// included.

**Signature**

```ts
export declare class Game_Party {
  constructor()
}
```

### initAllItems (method)

**Signature**

```ts
initAllItems(): void;
```

### exists (method)

**Signature**

```ts
exists(): boolean;
```

### size (method)

**Signature**

```ts
size(): number;
```

### isEmpty (method)

**Signature**

```ts
isEmpty(): boolean;
```

### members (method)

**Signature**

```ts
members(): Game_Actor[];
```

### allMembers (method)

**Signature**

```ts
allMembers(): Game_Actor[];
```

### battleMembers (method)

**Signature**

```ts
battleMembers(): Game_Actor[];
```

### hiddenBattleMembers (method)

**Signature**

```ts
hiddenBattleMembers(): Game_Actor[];
```

### allBattleMembers (method)

**Signature**

```ts
allBattleMembers(): Game_Actor[];
```

### maxBattleMembers (method)

**Signature**

```ts
maxBattleMembers(): number;
```

### leader (method)

**Signature**

```ts
leader(): Game_Actor;
```

### removeInvalidMembers (method)

**Signature**

```ts
removeInvalidMembers(): void;
```

### reviveBattleMembers (method)

**Signature**

```ts
reviveBattleMembers(): void;
```

### items (method)

**Signature**

```ts
items(): import("../data").DataItem[];
```

### weapons (method)

**Signature**

```ts
weapons(): import("../data").DataWeapon[];
```

### armors (method)

**Signature**

```ts
armors(): import("../data").DataArmor[];
```

### equipItems (method)

**Signature**

```ts
equipItems(): DataEquipment[];
```

### allItems (method)

**Signature**

```ts
allItems(): DataItemBase[];
```

### itemContainer (method)

**Signature**

```ts
itemContainer(item: DataItemBase | null): Record<number, number> | null;
```

### setupStartingMembers (method)

**Signature**

```ts
setupStartingMembers(): void;
```

### name (method)

**Signature**

```ts
name(): string;
```

### setupBattleTest (method)

**Signature**

```ts
setupBattleTest(): void;
```

### setupBattleTestMembers (method)

**Signature**

```ts
setupBattleTestMembers(): void;
```

### setupBattleTestItems (method)

**Signature**

```ts
setupBattleTestItems(): void;
```

### highestLevel (method)

**Signature**

```ts
highestLevel(): number;
```

### addActor (method)

**Signature**

```ts
addActor(actorId: ActorID): void;
```

### removeActor (method)

**Signature**

```ts
removeActor(actorId: ActorID): void;
```

### gold (method)

**Signature**

```ts
gold(): number;
```

### gainGold (method)

**Signature**

```ts
gainGold(amount: number): void;
```

### loseGold (method)

**Signature**

```ts
loseGold(amount: number): void;
```

### maxGold (method)

**Signature**

```ts
maxGold(): number;
```

### steps (method)

**Signature**

```ts
steps(): number;
```

### increaseSteps (method)

**Signature**

```ts
increaseSteps(): void;
```

### numItems (method)

**Signature**

```ts
numItems(item: DataItemBase | null): number;
```

### maxItems (method)

**Signature**

```ts
maxItems(_item: DataItemBase | null): number;
```

### hasMaxItems (method)

**Signature**

```ts
hasMaxItems(item: DataItemBase): boolean;
```

### hasItem (method)

**Signature**

```ts
hasItem(item: DataItemBase, includeEquip?: boolean): boolean;
```

### isAnyMemberEquipped (method)

**Signature**

```ts
isAnyMemberEquipped(item: DataEquipment): boolean;
```

### gainItem (method)

**Signature**

```ts
gainItem(item: DataItemBase | null, amount: number, includeEquip?: boolean): void;
```

### discardMembersEquip (method)

**Signature**

```ts
discardMembersEquip(item: DataEquipment, amount: number): void;
```

### loseItem (method)

**Signature**

```ts
loseItem(item: DataItemBase | null, amount: number, includeEquip?: boolean): void;
```

### consumeItem (method)

**Signature**

```ts
consumeItem(item: DataItemBase): void;
```

### canUse (method)

**Signature**

```ts
canUse(item: DataItemBase | null): boolean;
```

### canInput (method)

**Signature**

```ts
canInput(): boolean;
```

### isAllDead (method)

**Signature**

```ts
isAllDead(): boolean;
```

### isEscaped (method)

**Signature**

```ts
isEscaped(): boolean;
```

### onPlayerWalk (method)

**Signature**

```ts
onPlayerWalk(): void;
```

### menuActor (method)

**Signature**

```ts
menuActor(): Game_Actor;
```

### setMenuActor (method)

**Signature**

```ts
setMenuActor(actor: Game_Actor): void;
```

### makeMenuActorNext (method)

**Signature**

```ts
makeMenuActorNext(): void;
```

### makeMenuActorPrevious (method)

**Signature**

```ts
makeMenuActorPrevious(): void;
```

### targetActor (method)

**Signature**

```ts
targetActor(): Game_Actor;
```

### setTargetActor (method)

**Signature**

```ts
setTargetActor(actor: Game_Actor): void;
```

### lastItem (method)

**Signature**

```ts
lastItem(): DataItemBase;
```

### setLastItem (method)

**Signature**

```ts
setLastItem(item: DataItemBase | null): void;
```

### swapOrder (method)

**Signature**

```ts
swapOrder(index1: ActorID, index2: ActorID): void;
```

### charactersForSavefile (method)

**Signature**

```ts
charactersForSavefile(): [string, number][];
```

### facesForSavefile (method)

**Signature**

```ts
facesForSavefile(): [string, number][];
```

### partyAbility (method)

**Signature**

```ts
partyAbility(abilityId: DataID): boolean;
```

### hasEncounterHalf (method)

**Signature**

```ts
hasEncounterHalf(): boolean;
```

### hasEncounterNone (method)

**Signature**

```ts
hasEncounterNone(): boolean;
```

### hasCancelSurprise (method)

**Signature**

```ts
hasCancelSurprise(): boolean;
```

### hasRaisePreemptive (method)

**Signature**

```ts
hasRaisePreemptive(): boolean;
```

### hasGoldDouble (method)

**Signature**

```ts
hasGoldDouble(): boolean;
```

### hasDropItemDouble (method)

**Signature**

```ts
hasDropItemDouble(): boolean;
```

### ratePreemptive (method)

**Signature**

```ts
ratePreemptive(troopAgi: number): number;
```

### rateSurprise (method)

**Signature**

```ts
rateSurprise(troopAgi: number): number;
```

### performVictory (method)

**Signature**

```ts
performVictory(): void;
```

### performEscape (method)

**Signature**

```ts
performEscape(): void;
```

### removeBattleStates (method)

**Signature**

```ts
removeBattleStates(): void;
```

### requestMotionRefresh (method)

**Signature**

```ts
requestMotionRefresh(): void;
```

### onEscapeFailure (method)

**Signature**

```ts
onEscapeFailure(): void;
```

### \_gold (property)

**Signature**

```ts
_gold: number
```

### \_steps (property)

**Signature**

```ts
_steps: number
```

### \_lastItem (property)

**Signature**

```ts
_lastItem: Game_Item<DataItemBase>
```

### \_menuActorId (property)

**Signature**

```ts
_menuActorId: number
```

### \_targetActorId (property)

**Signature**

```ts
_targetActorId: number
```

### \_actors (property)

**Signature**

```ts
_actors: number[]
```

### \_items (property)

**Signature**

```ts
_items: Record<number, number>
```

### \_weapons (property)

**Signature**

```ts
_weapons: Record<number, number>
```

### \_armors (property)

**Signature**

```ts
_armors: Record<number, number>
```
