---
title: objects/Game_Actor.d.ts
nav_order: 66
parent: Modules
---

## Game_Actor.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Actor (class)](#game_actor-class)
    - [initMembers (method)](#initmembers-method)
    - [setup (method)](#setup-method)
    - [actorId (method)](#actorid-method)
    - [actor (method)](#actor-method)
    - [name (method)](#name-method)
    - [setName (method)](#setname-method)
    - [nickname (method)](#nickname-method)
    - [setNickname (method)](#setnickname-method)
    - [profile (method)](#profile-method)
    - [setProfile (method)](#setprofile-method)
    - [characterName (method)](#charactername-method)
    - [characterIndex (method)](#characterindex-method)
    - [faceName (method)](#facename-method)
    - [faceIndex (method)](#faceindex-method)
    - [battlerName (method)](#battlername-method)
    - [clearStates (method)](#clearstates-method)
    - [eraseState (method)](#erasestate-method)
    - [resetStateCounts (method)](#resetstatecounts-method)
    - [initImages (method)](#initimages-method)
    - [expForLevel (method)](#expforlevel-method)
    - [initExp (method)](#initexp-method)
    - [currentExp (method)](#currentexp-method)
    - [currentLevelExp (method)](#currentlevelexp-method)
    - [nextLevelExp (method)](#nextlevelexp-method)
    - [nextRequiredExp (method)](#nextrequiredexp-method)
    - [maxLevel (method)](#maxlevel-method)
    - [isMaxLevel (method)](#ismaxlevel-method)
    - [initSkills (method)](#initskills-method)
    - [initEquips (method)](#initequips-method)
    - [equipSlots (method)](#equipslots-method)
    - [equips (method)](#equips-method)
    - [weapons (method)](#weapons-method)
    - [armors (method)](#armors-method)
    - [hasWeapon (method)](#hasweapon-method)
    - [hasArmor (method)](#hasarmor-method)
    - [isEquipChangeOk (method)](#isequipchangeok-method)
    - [changeEquip (method)](#changeequip-method)
    - [forceChangeEquip (method)](#forcechangeequip-method)
    - [tradeItemWithParty (method)](#tradeitemwithparty-method)
    - [changeEquipById (method)](#changeequipbyid-method)
    - [isEquipped (method)](#isequipped-method)
    - [discardEquip (method)](#discardequip-method)
    - [releaseUnequippableItems (method)](#releaseunequippableitems-method)
    - [clearEquipments (method)](#clearequipments-method)
    - [optimizeEquipments (method)](#optimizeequipments-method)
    - [bestEquipItem (method)](#bestequipitem-method)
    - [calcEquipItemPerformance (method)](#calcequipitemperformance-method)
    - [isSkillWtypeOk (method)](#isskillwtypeok-method)
    - [isWtypeEquipped (method)](#iswtypeequipped-method)
    - [refresh (method)](#refresh-method)
    - [hide (method)](#hide-method)
    - [isActor (method)](#isactor-method)
    - [friendsUnit (method)](#friendsunit-method)
    - [opponentsUnit (method)](#opponentsunit-method)
    - [index (method)](#index-method)
    - [isBattleMember (method)](#isbattlemember-method)
    - [isFormationChangeOk (method)](#isformationchangeok-method)
    - [currentClass (method)](#currentclass-method)
    - [isClass (method)](#isclass-method)
    - [skillTypes (method)](#skilltypes-method)
    - [skills (method)](#skills-method)
    - [usableSkills (method)](#usableskills-method)
    - [traitObjects (method)](#traitobjects-method)
    - [attackElements (method)](#attackelements-method)
    - [hasNoWeapons (method)](#hasnoweapons-method)
    - [bareHandsElementId (method)](#barehandselementid-method)
    - [paramBase (method)](#parambase-method)
    - [paramPlus (method)](#paramplus-method)
    - [attackAnimationId1 (method)](#attackanimationid1-method)
    - [attackAnimationId2 (method)](#attackanimationid2-method)
    - [bareHandsAnimationId (method)](#barehandsanimationid-method)
    - [changeExp (method)](#changeexp-method)
    - [levelUp (method)](#levelup-method)
    - [levelDown (method)](#leveldown-method)
    - [findNewSkills (method)](#findnewskills-method)
    - [displayLevelUp (method)](#displaylevelup-method)
    - [gainExp (method)](#gainexp-method)
    - [finalExpRate (method)](#finalexprate-method)
    - [benchMembersExpRate (method)](#benchmembersexprate-method)
    - [shouldDisplayLevelUp (method)](#shoulddisplaylevelup-method)
    - [changeLevel (method)](#changelevel-method)
    - [learnSkill (method)](#learnskill-method)
    - [forgetSkill (method)](#forgetskill-method)
    - [isLearnedSkill (method)](#islearnedskill-method)
    - [hasSkill (method)](#hasskill-method)
    - [changeClass (method)](#changeclass-method)
    - [setCharacterImage (method)](#setcharacterimage-method)
    - [setFaceImage (method)](#setfaceimage-method)
    - [setBattlerImage (method)](#setbattlerimage-method)
    - [isSpriteVisible (method)](#isspritevisible-method)
    - [performActionStart (method)](#performactionstart-method)
    - [performAction (method)](#performaction-method)
    - [performActionEnd (method)](#performactionend-method)
    - [performAttack (method)](#performattack-method)
    - [performDamage (method)](#performdamage-method)
    - [performEvasion (method)](#performevasion-method)
    - [performMagicEvasion (method)](#performmagicevasion-method)
    - [performCounter (method)](#performcounter-method)
    - [performCollapse (method)](#performcollapse-method)
    - [performVictory (method)](#performvictory-method)
    - [performEscape (method)](#performescape-method)
    - [makeActionList (method)](#makeactionlist-method)
    - [makeAutoBattleActions (method)](#makeautobattleactions-method)
    - [makeConfusionActions (method)](#makeconfusionactions-method)
    - [makeActions (method)](#makeactions-method)
    - [onPlayerWalk (method)](#onplayerwalk-method)
    - [updateStateSteps (method)](#updatestatesteps-method)
    - [showAddedStates (method)](#showaddedstates-method)
    - [showRemovedStates (method)](#showremovedstates-method)
    - [stepsForTurn (method)](#stepsforturn-method)
    - [turnEndOnMap (method)](#turnendonmap-method)
    - [checkFloorEffect (method)](#checkflooreffect-method)
    - [executeFloorDamage (method)](#executefloordamage-method)
    - [basicFloorDamage (method)](#basicfloordamage-method)
    - [maxFloorDamage (method)](#maxfloordamage-method)
    - [performMapDamage (method)](#performmapdamage-method)
    - [clearActions (method)](#clearactions-method)
    - [inputtingAction (method)](#inputtingaction-method)
    - [selectNextCommand (method)](#selectnextcommand-method)
    - [selectPreviousCommand (method)](#selectpreviouscommand-method)
    - [lastSkill (method)](#lastskill-method)
    - [lastMenuSkill (method)](#lastmenuskill-method)
    - [setLastMenuSkill (method)](#setlastmenuskill-method)
    - [lastBattleSkill (method)](#lastbattleskill-method)
    - [setLastBattleSkill (method)](#setlastbattleskill-method)
    - [lastCommandSymbol (method)](#lastcommandsymbol-method)
    - [setLastCommandSymbol (method)](#setlastcommandsymbol-method)
    - [testEscape (method)](#testescape-method)
    - [meetsUsableItemConditions (method)](#meetsusableitemconditions-method)
    - [onEscapeFailure (method)](#onescapefailure-method)
    - [\_actorId (property)](#_actorid-property)
    - [\_name (property)](#_name-property)
    - [\_nickname (property)](#_nickname-property)
    - [\_classId (property)](#_classid-property)
    - [\_level (property)](#_level-property)
    - [\_characterName (property)](#_charactername-property)
    - [\_characterIndex (property)](#_characterindex-property)
    - [\_faceName (property)](#_facename-property)
    - [\_faceIndex (property)](#_faceindex-property)
    - [\_battlerName (property)](#_battlername-property)
    - [\_exp (property)](#_exp-property)
    - [\_skills (property)](#_skills-property)
    - [\_equips (property)](#_equips-property)
    - [\_actionInputIndex (property)](#_actioninputindex-property)
    - [\_lastMenuSkill (property)](#_lastmenuskill-property)
    - [\_lastBattleSkill (property)](#_lastbattleskill-property)
    - [\_lastCommandSymbol (property)](#_lastcommandsymbol-property)
    - [\_profile (property)](#_profile-property)
    - [\_stateSteps (property)](#_statesteps-property)

---

# utils

## Game_Actor (class)

Game_Actor

The game object class for an actor.

**Signature**

```ts
export declare class Game_Actor {
  constructor(actorId: ActorID)
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void
```

### setup (method)

**Signature**

```ts
setup(actorId: ActorID): void
```

### actorId (method)

**Signature**

```ts
actorId(): number
```

### actor (method)

**Signature**

```ts
actor(): import("../data").DataActor
```

### name (method)

**Signature**

```ts
name(): string
```

### setName (method)

**Signature**

```ts
setName(name: string): void
```

### nickname (method)

**Signature**

```ts
nickname(): string
```

### setNickname (method)

**Signature**

```ts
setNickname(nickname: string): void
```

### profile (method)

**Signature**

```ts
profile(): string
```

### setProfile (method)

**Signature**

```ts
setProfile(profile: string): void
```

### characterName (method)

**Signature**

```ts
characterName(): string
```

### characterIndex (method)

**Signature**

```ts
characterIndex(): number
```

### faceName (method)

**Signature**

```ts
faceName(): string
```

### faceIndex (method)

**Signature**

```ts
faceIndex(): number
```

### battlerName (method)

**Signature**

```ts
battlerName(): string
```

### clearStates (method)

**Signature**

```ts
clearStates(): void
```

### eraseState (method)

**Signature**

```ts
eraseState(stateId: StateID): void
```

### resetStateCounts (method)

**Signature**

```ts
resetStateCounts(stateId: StateID): void
```

### initImages (method)

**Signature**

```ts
initImages(): void
```

### expForLevel (method)

**Signature**

```ts
expForLevel(level: number): number
```

### initExp (method)

**Signature**

```ts
initExp(): void
```

### currentExp (method)

**Signature**

```ts
currentExp(): number
```

### currentLevelExp (method)

**Signature**

```ts
currentLevelExp(): number
```

### nextLevelExp (method)

**Signature**

```ts
nextLevelExp(): number
```

### nextRequiredExp (method)

**Signature**

```ts
nextRequiredExp(): number
```

### maxLevel (method)

**Signature**

```ts
maxLevel(): number
```

### isMaxLevel (method)

**Signature**

```ts
isMaxLevel(): boolean
```

### initSkills (method)

**Signature**

```ts
initSkills(): void
```

### initEquips (method)

**Signature**

```ts
initEquips(equips: (WeaponID | ArmorID)[]): void
```

### equipSlots (method)

**Signature**

```ts
equipSlots(): number[]
```

### equips (method)

**Signature**

```ts
equips(): DataEquipment[]
```

### weapons (method)

**Signature**

```ts
weapons(): DataWeapon[]
```

### armors (method)

**Signature**

```ts
armors(): DataArmor[]
```

### hasWeapon (method)

**Signature**

```ts
hasWeapon(weapon: DataWeapon): boolean
```

### hasArmor (method)

**Signature**

```ts
hasArmor(armor: DataArmor): boolean
```

### isEquipChangeOk (method)

**Signature**

```ts
isEquipChangeOk(slotId: EquipmentSlotID): boolean
```

### changeEquip (method)

**Signature**

```ts
changeEquip(slotId: EquipmentSlotID, item: DataEquipment | null): void
```

### forceChangeEquip (method)

**Signature**

```ts
forceChangeEquip(slotId: EquipmentSlotID, item: DataEquipment | null): void
```

### tradeItemWithParty (method)

**Signature**

```ts
tradeItemWithParty(newItem: DataEquipment | null, oldItem: DataEquipment | null): boolean
```

### changeEquipById (method)

**Signature**

```ts
changeEquipById(etypeId: EquipmentType, itemId: WeaponID | ArmorID): void
```

### isEquipped (method)

**Signature**

```ts
isEquipped(item: DataEquipment): boolean
```

### discardEquip (method)

**Signature**

```ts
discardEquip(item: DataEquipment): void
```

### releaseUnequippableItems (method)

**Signature**

```ts
releaseUnequippableItems(forcing: boolean): void
```

### clearEquipments (method)

**Signature**

```ts
clearEquipments(): void
```

### optimizeEquipments (method)

**Signature**

```ts
optimizeEquipments(): void
```

### bestEquipItem (method)

**Signature**

```ts
bestEquipItem(slotId: EquipmentSlotID): DataEquipment | null
```

### calcEquipItemPerformance (method)

**Signature**

```ts
calcEquipItemPerformance(item: DataEquipment): number
```

### isSkillWtypeOk (method)

**Signature**

```ts
isSkillWtypeOk(skill: DataSkill): boolean
```

### isWtypeEquipped (method)

**Signature**

```ts
isWtypeEquipped(wtypeId: WeaponType): boolean
```

### refresh (method)

**Signature**

```ts
refresh(): void
```

### hide (method)

**Signature**

```ts
hide(): void
```

### isActor (method)

**Signature**

```ts
isActor(): boolean
```

### friendsUnit (method)

**Signature**

```ts
friendsUnit(): import("./Game_Party").Game_Party
```

### opponentsUnit (method)

**Signature**

```ts
opponentsUnit(): import("./Game_Troop").Game_Troop
```

### index (method)

**Signature**

```ts
index(): number
```

### isBattleMember (method)

**Signature**

```ts
isBattleMember(): boolean
```

### isFormationChangeOk (method)

**Signature**

```ts
isFormationChangeOk(): boolean
```

### currentClass (method)

**Signature**

```ts
currentClass(): DataClass
```

### isClass (method)

**Signature**

```ts
isClass(gameClass: DataClass): boolean
```

### skillTypes (method)

**Signature**

```ts
skillTypes(): number[]
```

### skills (method)

**Signature**

```ts
skills(): DataSkill[]
```

### usableSkills (method)

**Signature**

```ts
usableSkills(): DataSkill[]
```

### traitObjects (method)

**Signature**

```ts
traitObjects(): {
    traits: import("../data").Trait[]
  }[]
```

### attackElements (method)

**Signature**

```ts
attackElements(): number[]
```

### hasNoWeapons (method)

**Signature**

```ts
hasNoWeapons(): boolean
```

### bareHandsElementId (method)

**Signature**

```ts
bareHandsElementId(): number
```

### paramBase (method)

**Signature**

```ts
paramBase(paramId: ParamID): number
```

### paramPlus (method)

**Signature**

```ts
paramPlus(paramId: ParamID): number
```

### attackAnimationId1 (method)

**Signature**

```ts
attackAnimationId1(): number
```

### attackAnimationId2 (method)

**Signature**

```ts
attackAnimationId2(): 0
```

### bareHandsAnimationId (method)

**Signature**

```ts
bareHandsAnimationId(): number
```

### changeExp (method)

**Signature**

```ts
changeExp(exp: number, show?: boolean): void
```

### levelUp (method)

**Signature**

```ts
levelUp(): void
```

### levelDown (method)

**Signature**

```ts
levelDown(): void
```

### findNewSkills (method)

**Signature**

```ts
findNewSkills(lastSkills: DataSkill[]): DataSkill[]
```

### displayLevelUp (method)

**Signature**

```ts
displayLevelUp(newSkills: DataSkill[]): void
```

### gainExp (method)

**Signature**

```ts
gainExp(exp: number): void
```

### finalExpRate (method)

**Signature**

```ts
finalExpRate(): number
```

### benchMembersExpRate (method)

**Signature**

```ts
benchMembersExpRate(): 0 | 1
```

### shouldDisplayLevelUp (method)

**Signature**

```ts
shouldDisplayLevelUp(): boolean
```

### changeLevel (method)

**Signature**

```ts
changeLevel(level: number, show?: boolean): void
```

### learnSkill (method)

**Signature**

```ts
learnSkill(skillId: SkillID): void
```

### forgetSkill (method)

**Signature**

```ts
forgetSkill(skillId: SkillID): void
```

### isLearnedSkill (method)

**Signature**

```ts
isLearnedSkill(skillId: SkillID): boolean
```

### hasSkill (method)

**Signature**

```ts
hasSkill(skillId: SkillID): boolean
```

### changeClass (method)

**Signature**

```ts
changeClass(classId: ClassID, keepExp?: boolean): void
```

### setCharacterImage (method)

**Signature**

```ts
setCharacterImage(characterName: string, characterIndex: number): void
```

### setFaceImage (method)

**Signature**

```ts
setFaceImage(faceName: string, faceIndex: number): void
```

### setBattlerImage (method)

**Signature**

```ts
setBattlerImage(battlerName: string): void
```

### isSpriteVisible (method)

**Signature**

```ts
isSpriteVisible(): boolean
```

### performActionStart (method)

**Signature**

```ts
performActionStart(action: Game_Action): void
```

### performAction (method)

**Signature**

```ts
performAction(action: Game_Action): void
```

### performActionEnd (method)

**Signature**

```ts
performActionEnd(): void
```

### performAttack (method)

**Signature**

```ts
performAttack(): void
```

### performDamage (method)

**Signature**

```ts
performDamage(): void
```

### performEvasion (method)

**Signature**

```ts
performEvasion(): void
```

### performMagicEvasion (method)

**Signature**

```ts
performMagicEvasion(): void
```

### performCounter (method)

**Signature**

```ts
performCounter(): void
```

### performCollapse (method)

**Signature**

```ts
performCollapse(): void
```

### performVictory (method)

**Signature**

```ts
performVictory(): void
```

### performEscape (method)

**Signature**

```ts
performEscape(): void
```

### makeActionList (method)

**Signature**

```ts
makeActionList(): Game_Action[]
```

### makeAutoBattleActions (method)

**Signature**

```ts
makeAutoBattleActions(): void
```

### makeConfusionActions (method)

**Signature**

```ts
makeConfusionActions(): void
```

### makeActions (method)

**Signature**

```ts
makeActions(): void
```

### onPlayerWalk (method)

**Signature**

```ts
onPlayerWalk(): void
```

### updateStateSteps (method)

**Signature**

```ts
updateStateSteps(state: DataState): void
```

### showAddedStates (method)

**Signature**

```ts
showAddedStates(): void
```

### showRemovedStates (method)

**Signature**

```ts
showRemovedStates(): void
```

### stepsForTurn (method)

**Signature**

```ts
stepsForTurn(): number
```

### turnEndOnMap (method)

**Signature**

```ts
turnEndOnMap(): void
```

### checkFloorEffect (method)

**Signature**

```ts
checkFloorEffect(): void
```

### executeFloorDamage (method)

**Signature**

```ts
executeFloorDamage(): void
```

### basicFloorDamage (method)

**Signature**

```ts
basicFloorDamage(): number
```

### maxFloorDamage (method)

**Signature**

```ts
maxFloorDamage(): number
```

### performMapDamage (method)

**Signature**

```ts
performMapDamage(): void
```

### clearActions (method)

**Signature**

```ts
clearActions(): void
```

### inputtingAction (method)

**Signature**

```ts
inputtingAction(): Game_Action
```

### selectNextCommand (method)

**Signature**

```ts
selectNextCommand(): boolean
```

### selectPreviousCommand (method)

**Signature**

```ts
selectPreviousCommand(): boolean
```

### lastSkill (method)

**Signature**

```ts
lastSkill(): DataSkill
```

### lastMenuSkill (method)

**Signature**

```ts
lastMenuSkill(): DataSkill
```

### setLastMenuSkill (method)

**Signature**

```ts
setLastMenuSkill(skill: DataSkill | null): void
```

### lastBattleSkill (method)

**Signature**

```ts
lastBattleSkill(): DataSkill
```

### setLastBattleSkill (method)

**Signature**

```ts
setLastBattleSkill(skill: DataSkill | null): void
```

### lastCommandSymbol (method)

**Signature**

```ts
lastCommandSymbol(): string
```

### setLastCommandSymbol (method)

**Signature**

```ts
setLastCommandSymbol(symbol: string): void
```

### testEscape (method)

**Signature**

```ts
testEscape(item: DataItem): boolean
```

### meetsUsableItemConditions (method)

**Signature**

```ts
meetsUsableItemConditions(item: DataItem): boolean
```

### onEscapeFailure (method)

**Signature**

```ts
onEscapeFailure(): void
```

### \_actorId (property)

**Signature**

```ts
_actorId: number
```

### \_name (property)

**Signature**

```ts
_name: string
```

### \_nickname (property)

**Signature**

```ts
_nickname: string
```

### \_classId (property)

**Signature**

```ts
_classId: number
```

### \_level (property)

**Signature**

```ts
_level: number
```

### \_characterName (property)

**Signature**

```ts
_characterName: string
```

### \_characterIndex (property)

**Signature**

```ts
_characterIndex: number
```

### \_faceName (property)

**Signature**

```ts
_faceName: string
```

### \_faceIndex (property)

**Signature**

```ts
_faceIndex: number
```

### \_battlerName (property)

**Signature**

```ts
_battlerName: string
```

### \_exp (property)

**Signature**

```ts
_exp: Record<number, number>
```

### \_skills (property)

**Signature**

```ts
_skills: number[]
```

### \_equips (property)

**Signature**

```ts
_equips: Game_Item < DataEquipment > []
```

### \_actionInputIndex (property)

**Signature**

```ts
_actionInputIndex: number
```

### \_lastMenuSkill (property)

**Signature**

```ts
_lastMenuSkill: Game_Item<DataSkill>
```

### \_lastBattleSkill (property)

**Signature**

```ts
_lastBattleSkill: Game_Item<DataSkill>
```

### \_lastCommandSymbol (property)

**Signature**

```ts
_lastCommandSymbol: string
```

### \_profile (property)

**Signature**

```ts
_profile: string
```

### \_stateSteps (property)

**Signature**

```ts
_stateSteps: Record<number, number>
```
