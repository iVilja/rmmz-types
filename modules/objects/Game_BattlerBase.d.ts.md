---
title: objects/Game_BattlerBase.d.ts
nav_order: 68
parent: Modules
---

## Game_BattlerBase.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_BattlerBase (class)](#game_battlerbase-class)
    - [initMembers (method)](#initmembers-method)
    - [clearParamPlus (method)](#clearparamplus-method)
    - [clearStates (method)](#clearstates-method)
    - [eraseState (method)](#erasestate-method)
    - [isStateAffected (method)](#isstateaffected-method)
    - [isDeathStateAffected (method)](#isdeathstateaffected-method)
    - [deathStateId (method)](#deathstateid-method)
    - [resetStateCounts (method)](#resetstatecounts-method)
    - [isStateExpired (method)](#isstateexpired-method)
    - [updateStateTurns (method)](#updatestateturns-method)
    - [clearBuffs (method)](#clearbuffs-method)
    - [eraseBuff (method)](#erasebuff-method)
    - [buffLength (method)](#bufflength-method)
    - [buff (method)](#buff-method)
    - [isBuffAffected (method)](#isbuffaffected-method)
    - [isDebuffAffected (method)](#isdebuffaffected-method)
    - [isBuffOrDebuffAffected (method)](#isbuffordebuffaffected-method)
    - [isMaxBuffAffected (method)](#ismaxbuffaffected-method)
    - [isMaxDebuffAffected (method)](#ismaxdebuffaffected-method)
    - [increaseBuff (method)](#increasebuff-method)
    - [decreaseBuff (method)](#decreasebuff-method)
    - [overwriteBuffTurns (method)](#overwritebuffturns-method)
    - [isBuffExpired (method)](#isbuffexpired-method)
    - [updateBuffTurns (method)](#updatebuffturns-method)
    - [die (method)](#die-method)
    - [revive (method)](#revive-method)
    - [states (method)](#states-method)
    - [stateIcons (method)](#stateicons-method)
    - [buffIcons (method)](#bufficons-method)
    - [buffIconIndex (method)](#bufficonindex-method)
    - [allIcons (method)](#allicons-method)
    - [traitObjects (method)](#traitobjects-method)
    - [allTraits (method)](#alltraits-method)
    - [traits (method)](#traits-method)
    - [traitsWithId (method)](#traitswithid-method)
    - [traitsPi (method)](#traitspi-method)
    - [traitsSum (method)](#traitssum-method)
    - [traitsSumAll (method)](#traitssumall-method)
    - [traitsSet (method)](#traitsset-method)
    - [paramBase (method)](#parambase-method)
    - [paramPlus (method)](#paramplus-method)
    - [paramBasePlus (method)](#parambaseplus-method)
    - [paramMin (method)](#parammin-method)
    - [paramMax (method)](#parammax-method)
    - [paramRate (method)](#paramrate-method)
    - [paramBuffRate (method)](#parambuffrate-method)
    - [param (method)](#param-method)
    - [xparam (method)](#xparam-method)
    - [sparam (method)](#sparam-method)
    - [elementRate (method)](#elementrate-method)
    - [debuffRate (method)](#debuffrate-method)
    - [stateRate (method)](#staterate-method)
    - [stateResistSet (method)](#stateresistset-method)
    - [isStateResist (method)](#isstateresist-method)
    - [attackElements (method)](#attackelements-method)
    - [attackStates (method)](#attackstates-method)
    - [attackStatesRate (method)](#attackstatesrate-method)
    - [attackSpeed (method)](#attackspeed-method)
    - [attackTimesAdd (method)](#attacktimesadd-method)
    - [attackSkillId (method)](#attackskillid-method)
    - [addedSkillTypes (method)](#addedskilltypes-method)
    - [isSkillTypeSealed (method)](#isskilltypesealed-method)
    - [addedSkills (method)](#addedskills-method)
    - [isSkillSealed (method)](#isskillsealed-method)
    - [isEquipWtypeOk (method)](#isequipwtypeok-method)
    - [isEquipAtypeOk (method)](#isequipatypeok-method)
    - [isEquipTypeLocked (method)](#isequiptypelocked-method)
    - [isEquipTypeSealed (method)](#isequiptypesealed-method)
    - [slotType (method)](#slottype-method)
    - [isDualWield (method)](#isdualwield-method)
    - [actionPlusSet (method)](#actionplusset-method)
    - [specialFlag (method)](#specialflag-method)
    - [collapseType (method)](#collapsetype-method)
    - [partyAbility (method)](#partyability-method)
    - [isAutoBattle (method)](#isautobattle-method)
    - [isGuard (method)](#isguard-method)
    - [isSubstitute (method)](#issubstitute-method)
    - [isPreserveTp (method)](#ispreservetp-method)
    - [addParam (method)](#addparam-method)
    - [setHp (method)](#sethp-method)
    - [setMp (method)](#setmp-method)
    - [setTp (method)](#settp-method)
    - [maxTp (method)](#maxtp-method)
    - [refresh (method)](#refresh-method)
    - [recoverAll (method)](#recoverall-method)
    - [hpRate (method)](#hprate-method)
    - [mpRate (method)](#mprate-method)
    - [tpRate (method)](#tprate-method)
    - [hide (method)](#hide-method)
    - [appear (method)](#appear-method)
    - [isHidden (method)](#ishidden-method)
    - [isAppeared (method)](#isappeared-method)
    - [isDead (method)](#isdead-method)
    - [isAlive (method)](#isalive-method)
    - [isDying (method)](#isdying-method)
    - [isRestricted (method)](#isrestricted-method)
    - [canInput (method)](#caninput-method)
    - [canMove (method)](#canmove-method)
    - [isConfused (method)](#isconfused-method)
    - [confusionLevel (method)](#confusionlevel-method)
    - [isActor (method)](#isactor-method)
    - [isEnemy (method)](#isenemy-method)
    - [sortStates (method)](#sortstates-method)
    - [restriction (method)](#restriction-method)
    - [addNewState (method)](#addnewstate-method)
    - [onRestrict (method)](#onrestrict-method)
    - [mostImportantStateText (method)](#mostimportantstatetext-method)
    - [stateMotionIndex (method)](#statemotionindex-method)
    - [stateOverlayIndex (method)](#stateoverlayindex-method)
    - [isSkillWtypeOk (method)](#isskillwtypeok-method)
    - [skillMpCost (method)](#skillmpcost-method)
    - [skillTpCost (method)](#skilltpcost-method)
    - [canPaySkillCost (method)](#canpayskillcost-method)
    - [paySkillCost (method)](#payskillcost-method)
    - [isOccasionOk (method)](#isoccasionok-method)
    - [meetsUsableItemConditions (method)](#meetsusableitemconditions-method)
    - [meetsSkillConditions (method)](#meetsskillconditions-method)
    - [meetsItemConditions (method)](#meetsitemconditions-method)
    - [canUse (method)](#canuse-method)
    - [canEquip (method)](#canequip-method)
    - [canEquipWeapon (method)](#canequipweapon-method)
    - [canEquipArmor (method)](#canequiparmor-method)
    - [guardSkillId (method)](#guardskillid-method)
    - [canAttack (method)](#canattack-method)
    - [canGuard (method)](#canguard-method)
    - [\_hp (property)](#_hp-property)
    - [\_mp (property)](#_mp-property)
    - [\_tp (property)](#_tp-property)
    - [\_hidden (property)](#_hidden-property)
    - [\_paramPlus (property)](#_paramplus-property)
    - [\_states (property)](#_states-property)
    - [\_stateTurns (property)](#_stateturns-property)
    - [\_buffs (property)](#_buffs-property)
    - [\_buffTurns (property)](#_buffturns-property)

---

# utils

## Game_BattlerBase (class)

Game_BattlerBase

The superclass of Game_Battler. It mainly contains parameters calculation.

**Signature**

```ts
export declare class Game_BattlerBase {
  constructor()
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void;
```

### clearParamPlus (method)

**Signature**

```ts
clearParamPlus(): void;
```

### clearStates (method)

**Signature**

```ts
clearStates(): void;
```

### eraseState (method)

**Signature**

```ts
eraseState(stateId: StateID): void;
```

### isStateAffected (method)

**Signature**

```ts
isStateAffected(stateId: StateID): boolean;
```

### isDeathStateAffected (method)

**Signature**

```ts
isDeathStateAffected(): boolean;
```

### deathStateId (method)

**Signature**

```ts
deathStateId(): number;
```

### resetStateCounts (method)

**Signature**

```ts
resetStateCounts(stateId: StateID): void;
```

### isStateExpired (method)

**Signature**

```ts
isStateExpired(stateId: StateID): boolean;
```

### updateStateTurns (method)

**Signature**

```ts
updateStateTurns(): void;
```

### clearBuffs (method)

**Signature**

```ts
clearBuffs(): void;
```

### eraseBuff (method)

**Signature**

```ts
eraseBuff(paramId: ParamID): void;
```

### buffLength (method)

**Signature**

```ts
buffLength(): 8;
```

### buff (method)

**Signature**

```ts
buff(paramId: ParamID): number;
```

### isBuffAffected (method)

**Signature**

```ts
isBuffAffected(paramId: ParamID): boolean;
```

### isDebuffAffected (method)

**Signature**

```ts
isDebuffAffected(paramId: ParamID): boolean;
```

### isBuffOrDebuffAffected (method)

**Signature**

```ts
isBuffOrDebuffAffected(paramId: ParamID): boolean;
```

### isMaxBuffAffected (method)

**Signature**

```ts
isMaxBuffAffected(paramId: ParamID): boolean;
```

### isMaxDebuffAffected (method)

**Signature**

```ts
isMaxDebuffAffected(paramId: ParamID): boolean;
```

### increaseBuff (method)

**Signature**

```ts
increaseBuff(paramId: ParamID): void;
```

### decreaseBuff (method)

**Signature**

```ts
decreaseBuff(paramId: ParamID): void;
```

### overwriteBuffTurns (method)

**Signature**

```ts
overwriteBuffTurns(paramId: ParamID, turns: number): void;
```

### isBuffExpired (method)

**Signature**

```ts
isBuffExpired(paramId: ParamID): boolean;
```

### updateBuffTurns (method)

**Signature**

```ts
updateBuffTurns(): void;
```

### die (method)

**Signature**

```ts
die(): void;
```

### revive (method)

**Signature**

```ts
revive(): void;
```

### states (method)

**Signature**

```ts
states(): import("../data").DataState[];
```

### stateIcons (method)

**Signature**

```ts
stateIcons(): number[];
```

### buffIcons (method)

**Signature**

```ts
buffIcons(): number[];
```

### buffIconIndex (method)

**Signature**

```ts
buffIconIndex(buffLevel: number, paramId: ParamID): number;
```

### allIcons (method)

**Signature**

```ts
allIcons(): number[];
```

### traitObjects (method)

**Signature**

```ts
traitObjects(): {
        traits: Trait[];
    }[];
```

### allTraits (method)

**Signature**

```ts
allTraits(): Trait[];
```

### traits (method)

**Signature**

```ts
traits(code: TraitType): Trait[];
```

### traitsWithId (method)

**Signature**

```ts
traitsWithId(code: TraitType, id: DataID): Trait[];
```

### traitsPi (method)

**Signature**

```ts
traitsPi(code: TraitType, id: DataID): number;
```

### traitsSum (method)

**Signature**

```ts
traitsSum(code: TraitType, id: DataID): number;
```

### traitsSumAll (method)

**Signature**

```ts
traitsSumAll(code: TraitType): number;
```

### traitsSet (method)

**Signature**

```ts
traitsSet(code: TraitType): number[];
```

### paramBase (method)

**Signature**

```ts
paramBase(_paramId: ParamID): number;
```

### paramPlus (method)

**Signature**

```ts
paramPlus(paramId: ParamID): number;
```

### paramBasePlus (method)

**Signature**

```ts
paramBasePlus(paramId: ParamID): number;
```

### paramMin (method)

**Signature**

```ts
paramMin(paramId: ParamID): 0 | 1;
```

### paramMax (method)

**Signature**

```ts
paramMax(_paramId: ParamID): number;
```

### paramRate (method)

**Signature**

```ts
paramRate(paramId: ParamID): number;
```

### paramBuffRate (method)

**Signature**

```ts
paramBuffRate(paramId: ParamID): number;
```

### param (method)

**Signature**

```ts
param(paramId: ParamID): number;
```

### xparam (method)

**Signature**

```ts
xparam(xparamId: DataID): number;
```

### sparam (method)

**Signature**

```ts
sparam(sparamId: DataID): number;
```

### elementRate (method)

**Signature**

```ts
elementRate(elementId: DataID): number;
```

### debuffRate (method)

**Signature**

```ts
debuffRate(paramId: ParamID): number;
```

### stateRate (method)

**Signature**

```ts
stateRate(stateId: StateID): number;
```

### stateResistSet (method)

**Signature**

```ts
stateResistSet(): number[];
```

### isStateResist (method)

**Signature**

```ts
isStateResist(stateId: StateID): boolean;
```

### attackElements (method)

**Signature**

```ts
attackElements(): number[];
```

### attackStates (method)

**Signature**

```ts
attackStates(): number[];
```

### attackStatesRate (method)

**Signature**

```ts
attackStatesRate(stateId: StateID): number;
```

### attackSpeed (method)

**Signature**

```ts
attackSpeed(): number;
```

### attackTimesAdd (method)

**Signature**

```ts
attackTimesAdd(): number;
```

### attackSkillId (method)

**Signature**

```ts
attackSkillId(): number;
```

### addedSkillTypes (method)

**Signature**

```ts
addedSkillTypes(): number[];
```

### isSkillTypeSealed (method)

**Signature**

```ts
isSkillTypeSealed(stypeId: SkillType): boolean;
```

### addedSkills (method)

**Signature**

```ts
addedSkills(): number[];
```

### isSkillSealed (method)

**Signature**

```ts
isSkillSealed(skillId: SkillID): boolean;
```

### isEquipWtypeOk (method)

**Signature**

```ts
isEquipWtypeOk(wtypeId: WeaponType): boolean;
```

### isEquipAtypeOk (method)

**Signature**

```ts
isEquipAtypeOk(atypeId: ArmorType): boolean;
```

### isEquipTypeLocked (method)

**Signature**

```ts
isEquipTypeLocked(etypeId: ElementType): boolean;
```

### isEquipTypeSealed (method)

**Signature**

```ts
isEquipTypeSealed(etypeId: ElementType): boolean;
```

### slotType (method)

**Signature**

```ts
slotType(): number;
```

### isDualWield (method)

**Signature**

```ts
isDualWield(): boolean;
```

### actionPlusSet (method)

**Signature**

```ts
actionPlusSet(): number[];
```

### specialFlag (method)

**Signature**

```ts
specialFlag(flagId: DataID): boolean;
```

### collapseType (method)

**Signature**

```ts
collapseType(): number;
```

### partyAbility (method)

**Signature**

```ts
partyAbility(abilityId: DataID): boolean;
```

### isAutoBattle (method)

**Signature**

```ts
isAutoBattle(): boolean;
```

### isGuard (method)

**Signature**

```ts
isGuard(): boolean;
```

### isSubstitute (method)

**Signature**

```ts
isSubstitute(): boolean;
```

### isPreserveTp (method)

**Signature**

```ts
isPreserveTp(): boolean;
```

### addParam (method)

**Signature**

```ts
addParam(paramId: ParamID, value: number): void;
```

### setHp (method)

**Signature**

```ts
setHp(hp: number): void;
```

### setMp (method)

**Signature**

```ts
setMp(mp: number): void;
```

### setTp (method)

**Signature**

```ts
setTp(tp: number): void;
```

### maxTp (method)

**Signature**

```ts
maxTp(): number;
```

### refresh (method)

**Signature**

```ts
refresh(): void;
```

### recoverAll (method)

**Signature**

```ts
recoverAll(): void;
```

### hpRate (method)

**Signature**

```ts
hpRate(): number;
```

### mpRate (method)

**Signature**

```ts
mpRate(): number;
```

### tpRate (method)

**Signature**

```ts
tpRate(): number;
```

### hide (method)

**Signature**

```ts
hide(): void;
```

### appear (method)

**Signature**

```ts
appear(): void;
```

### isHidden (method)

**Signature**

```ts
isHidden(): boolean;
```

### isAppeared (method)

**Signature**

```ts
isAppeared(): boolean;
```

### isDead (method)

**Signature**

```ts
isDead(): boolean;
```

### isAlive (method)

**Signature**

```ts
isAlive(): boolean;
```

### isDying (method)

**Signature**

```ts
isDying(): boolean;
```

### isRestricted (method)

**Signature**

```ts
isRestricted(): boolean;
```

### canInput (method)

**Signature**

```ts
canInput(): boolean;
```

### canMove (method)

**Signature**

```ts
canMove(): boolean;
```

### isConfused (method)

**Signature**

```ts
isConfused(): boolean;
```

### confusionLevel (method)

**Signature**

```ts
confusionLevel(): number;
```

### isActor (method)

**Signature**

```ts
isActor(): this is Game_Actor;
```

### isEnemy (method)

**Signature**

```ts
isEnemy(): this is Game_Enemy;
```

### sortStates (method)

**Signature**

```ts
sortStates(): void;
```

### restriction (method)

**Signature**

```ts
restriction(): number;
```

### addNewState (method)

**Signature**

```ts
addNewState(stateId: StateID): void;
```

### onRestrict (method)

**Signature**

```ts
onRestrict(): void;
```

### mostImportantStateText (method)

**Signature**

```ts
mostImportantStateText(): string;
```

### stateMotionIndex (method)

**Signature**

```ts
stateMotionIndex(): import("../data").Motion;
```

### stateOverlayIndex (method)

**Signature**

```ts
stateOverlayIndex(): import("../data").Overlay;
```

### isSkillWtypeOk (method)

**Signature**

```ts
isSkillWtypeOk(_skill: DataSkill): boolean;
```

### skillMpCost (method)

**Signature**

```ts
skillMpCost(skill: DataSkill): number;
```

### skillTpCost (method)

**Signature**

```ts
skillTpCost(skill: DataSkill): number;
```

### canPaySkillCost (method)

**Signature**

```ts
canPaySkillCost(skill: DataSkill): boolean;
```

### paySkillCost (method)

**Signature**

```ts
paySkillCost(skill: DataSkill): void;
```

### isOccasionOk (method)

**Signature**

```ts
isOccasionOk(item: DataSkill | DataItem): boolean;
```

### meetsUsableItemConditions (method)

**Signature**

```ts
meetsUsableItemConditions(item: DataSkill | DataItem): boolean;
```

### meetsSkillConditions (method)

**Signature**

```ts
meetsSkillConditions(skill: DataSkill): boolean;
```

### meetsItemConditions (method)

**Signature**

```ts
meetsItemConditions(item: DataSkill | DataItem): boolean;
```

### canUse (method)

**Signature**

```ts
canUse(item: DataItemBase | null): boolean;
```

### canEquip (method)

**Signature**

```ts
canEquip(item: DataItemBase): item is DataWeapon | DataArmor;
```

### canEquipWeapon (method)

**Signature**

```ts
canEquipWeapon(item: DataWeapon): boolean;
```

### canEquipArmor (method)

**Signature**

```ts
canEquipArmor(item: DataArmor): boolean;
```

### guardSkillId (method)

**Signature**

```ts
guardSkillId(): number;
```

### canAttack (method)

**Signature**

```ts
canAttack(): boolean;
```

### canGuard (method)

**Signature**

```ts
canGuard(): boolean;
```

### \_hp (property)

**Signature**

```ts
_hp: number
```

### \_mp (property)

**Signature**

```ts
_mp: number
```

### \_tp (property)

**Signature**

```ts
_tp: number
```

### \_hidden (property)

**Signature**

```ts
_hidden: boolean
```

### \_paramPlus (property)

**Signature**

```ts
_paramPlus: BattlerParams
```

### \_states (property)

**Signature**

```ts
_states: number[]
```

### \_stateTurns (property)

**Signature**

```ts
_stateTurns: Record<number, number>
```

### \_buffs (property)

**Signature**

```ts
_buffs: BattlerParams
```

### \_buffTurns (property)

**Signature**

```ts
_buffTurns: BattlerParams
```
