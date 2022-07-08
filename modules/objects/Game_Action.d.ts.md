---
title: objects/Game_Action.d.ts
nav_order: 63
parent: Modules
---

## Game_Action.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Action (class)](#game_action-class)
    - [clear (method)](#clear-method)
    - [setSubject (method)](#setsubject-method)
    - [subject (method)](#subject-method)
    - [friendsUnit (method)](#friendsunit-method)
    - [opponentsUnit (method)](#opponentsunit-method)
    - [setEnemyAction (method)](#setenemyaction-method)
    - [setAttack (method)](#setattack-method)
    - [setGuard (method)](#setguard-method)
    - [setSkill (method)](#setskill-method)
    - [setItem (method)](#setitem-method)
    - [setItemObject (method)](#setitemobject-method)
    - [setTarget (method)](#settarget-method)
    - [item (method)](#item-method)
    - [isSkill (method)](#isskill-method)
    - [isItem (method)](#isitem-method)
    - [numRepeats (method)](#numrepeats-method)
    - [checkItemScope (method)](#checkitemscope-method)
    - [isForOpponent (method)](#isforopponent-method)
    - [isForFriend (method)](#isforfriend-method)
    - [isForEveryone (method)](#isforeveryone-method)
    - [isForAliveFriend (method)](#isforalivefriend-method)
    - [isForDeadFriend (method)](#isfordeadfriend-method)
    - [isForUser (method)](#isforuser-method)
    - [isForOne (method)](#isforone-method)
    - [isForRandom (method)](#isforrandom-method)
    - [isForAll (method)](#isforall-method)
    - [needsSelection (method)](#needsselection-method)
    - [numTargets (method)](#numtargets-method)
    - [checkDamageType (method)](#checkdamagetype-method)
    - [isHpEffect (method)](#ishpeffect-method)
    - [isMpEffect (method)](#ismpeffect-method)
    - [isDamage (method)](#isdamage-method)
    - [isRecover (method)](#isrecover-method)
    - [isDrain (method)](#isdrain-method)
    - [isHpRecover (method)](#ishprecover-method)
    - [isMpRecover (method)](#ismprecover-method)
    - [isCertainHit (method)](#iscertainhit-method)
    - [isPhysical (method)](#isphysical-method)
    - [isMagical (method)](#ismagical-method)
    - [isAttack (method)](#isattack-method)
    - [isGuard (method)](#isguard-method)
    - [isMagicSkill (method)](#ismagicskill-method)
    - [decideRandomTarget (method)](#deciderandomtarget-method)
    - [setConfusion (method)](#setconfusion-method)
    - [prepare (method)](#prepare-method)
    - [isValid (method)](#isvalid-method)
    - [speed (method)](#speed-method)
    - [makeTargets (method)](#maketargets-method)
    - [repeatTargets (method)](#repeattargets-method)
    - [confusionTarget (method)](#confusiontarget-method)
    - [targetsForEveryone (method)](#targetsforeveryone-method)
    - [targetsForOpponents (method)](#targetsforopponents-method)
    - [targetsForFriends (method)](#targetsforfriends-method)
    - [randomTargets (method)](#randomtargets-method)
    - [targetsForDead (method)](#targetsfordead-method)
    - [targetsForAlive (method)](#targetsforalive-method)
    - [targetsForDeadAndAlive (method)](#targetsfordeadandalive-method)
    - [evaluate (method)](#evaluate-method)
    - [itemTargetCandidates (method)](#itemtargetcandidates-method)
    - [evaluateWithTarget (method)](#evaluatewithtarget-method)
    - [testApply (method)](#testapply-method)
    - [testLifeAndDeath (method)](#testlifeanddeath-method)
    - [hasItemAnyValidEffects (method)](#hasitemanyvalideffects-method)
    - [testItemEffect (method)](#testitemeffect-method)
    - [itemCnt (method)](#itemcnt-method)
    - [itemMrf (method)](#itemmrf-method)
    - [itemHit (method)](#itemhit-method)
    - [itemEva (method)](#itemeva-method)
    - [itemCri (method)](#itemcri-method)
    - [apply (method)](#apply-method)
    - [makeDamageValue (method)](#makedamagevalue-method)
    - [evalDamageFormula (method)](#evaldamageformula-method)
    - [calcElementRate (method)](#calcelementrate-method)
    - [elementsMaxRate (method)](#elementsmaxrate-method)
    - [applyCritical (method)](#applycritical-method)
    - [applyVariance (method)](#applyvariance-method)
    - [applyGuard (method)](#applyguard-method)
    - [executeDamage (method)](#executedamage-method)
    - [executeHpDamage (method)](#executehpdamage-method)
    - [executeMpDamage (method)](#executempdamage-method)
    - [gainDrainedHp (method)](#gaindrainedhp-method)
    - [gainDrainedMp (method)](#gaindrainedmp-method)
    - [applyItemEffect (method)](#applyitemeffect-method)
    - [itemEffectRecoverHp (method)](#itemeffectrecoverhp-method)
    - [itemEffectRecoverMp (method)](#itemeffectrecovermp-method)
    - [itemEffectGainTp (method)](#itemeffectgaintp-method)
    - [itemEffectAddState (method)](#itemeffectaddstate-method)
    - [itemEffectAddAttackState (method)](#itemeffectaddattackstate-method)
    - [itemEffectAddNormalState (method)](#itemeffectaddnormalstate-method)
    - [itemEffectRemoveState (method)](#itemeffectremovestate-method)
    - [itemEffectAddBuff (method)](#itemeffectaddbuff-method)
    - [itemEffectAddDebuff (method)](#itemeffectadddebuff-method)
    - [itemEffectRemoveBuff (method)](#itemeffectremovebuff-method)
    - [itemEffectRemoveDebuff (method)](#itemeffectremovedebuff-method)
    - [itemEffectSpecial (method)](#itemeffectspecial-method)
    - [itemEffectGrow (method)](#itemeffectgrow-method)
    - [itemEffectLearnSkill (method)](#itemeffectlearnskill-method)
    - [itemEffectCommonEvent (method)](#itemeffectcommonevent-method)
    - [makeSuccess (method)](#makesuccess-method)
    - [applyItemUserEffect (method)](#applyitemusereffect-method)
    - [lukEffectRate (method)](#lukeffectrate-method)
    - [applyGlobal (method)](#applyglobal-method)
    - [updateLastUsed (method)](#updatelastused-method)
    - [updateLastSubject (method)](#updatelastsubject-method)
    - [updateLastTarget (method)](#updatelasttarget-method)
    - [\_subjectActorId (property)](#_subjectactorid-property)
    - [\_subjectEnemyIndex (property)](#_subjectenemyindex-property)
    - [\_forcing (property)](#_forcing-property)
    - [\_item (property)](#_item-property)
    - [\_targetIndex (property)](#_targetindex-property)
    - [\_reflectionTarget (property)](#_reflectiontarget-property)

---

# utils

## Game_Action (class)

Game_Action

The game object class for a battle action.

**Signature**

```ts
export declare class Game_Action {
  constructor(subject: Game_Battler, forcing?: boolean)
}
```

### clear (method)

**Signature**

```ts
clear(): void;
```

### setSubject (method)

**Signature**

```ts
setSubject(subject: ActionTarget): void;
```

### subject (method)

**Signature**

```ts
subject(): import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy;
```

### friendsUnit (method)

**Signature**

```ts
friendsUnit(): import("./Game_Party").Game_Party | import("./Game_Troop").Game_Troop;
```

### opponentsUnit (method)

**Signature**

```ts
opponentsUnit(): import("./Game_Party").Game_Party | import("./Game_Troop").Game_Troop;
```

### setEnemyAction (method)

**Signature**

```ts
setEnemyAction(action: EnemyAction | null | undefined): void;
```

### setAttack (method)

**Signature**

```ts
setAttack(): void;
```

### setGuard (method)

**Signature**

```ts
setGuard(): void;
```

### setSkill (method)

**Signature**

```ts
setSkill(skillId: SkillID): void;
```

### setItem (method)

**Signature**

```ts
setItem(itemId: ItemID): void;
```

### setItemObject (method)

**Signature**

```ts
setItemObject(object: ActionItem | null): void;
```

### setTarget (method)

**Signature**

```ts
setTarget(targetIndex: number): void;
```

### item (method)

**Signature**

```ts
item(): ActionItem;
```

### isSkill (method)

**Signature**

```ts
isSkill(): boolean;
```

### isItem (method)

**Signature**

```ts
isItem(): boolean;
```

### numRepeats (method)

**Signature**

```ts
numRepeats(): number;
```

### checkItemScope (method)

**Signature**

```ts
checkItemScope(list: Scope[]): boolean;
```

### isForOpponent (method)

**Signature**

```ts
isForOpponent(): boolean;
```

### isForFriend (method)

**Signature**

```ts
isForFriend(): boolean;
```

### isForEveryone (method)

**Signature**

```ts
isForEveryone(): boolean;
```

### isForAliveFriend (method)

**Signature**

```ts
isForAliveFriend(): boolean;
```

### isForDeadFriend (method)

**Signature**

```ts
isForDeadFriend(): boolean;
```

### isForUser (method)

**Signature**

```ts
isForUser(): boolean;
```

### isForOne (method)

**Signature**

```ts
isForOne(): boolean;
```

### isForRandom (method)

**Signature**

```ts
isForRandom(): boolean;
```

### isForAll (method)

**Signature**

```ts
isForAll(): boolean;
```

### needsSelection (method)

**Signature**

```ts
needsSelection(): boolean;
```

### numTargets (method)

**Signature**

```ts
numTargets(): number;
```

### checkDamageType (method)

**Signature**

```ts
checkDamageType(list: DamageType[]): boolean;
```

### isHpEffect (method)

**Signature**

```ts
isHpEffect(): boolean;
```

### isMpEffect (method)

**Signature**

```ts
isMpEffect(): boolean;
```

### isDamage (method)

**Signature**

```ts
isDamage(): boolean;
```

### isRecover (method)

**Signature**

```ts
isRecover(): boolean;
```

### isDrain (method)

**Signature**

```ts
isDrain(): boolean;
```

### isHpRecover (method)

**Signature**

```ts
isHpRecover(): boolean;
```

### isMpRecover (method)

**Signature**

```ts
isMpRecover(): boolean;
```

### isCertainHit (method)

**Signature**

```ts
isCertainHit(): boolean;
```

### isPhysical (method)

**Signature**

```ts
isPhysical(): boolean;
```

### isMagical (method)

**Signature**

```ts
isMagical(): boolean;
```

### isAttack (method)

**Signature**

```ts
isAttack(): boolean;
```

### isGuard (method)

**Signature**

```ts
isGuard(): boolean;
```

### isMagicSkill (method)

**Signature**

```ts
isMagicSkill(): boolean;
```

### decideRandomTarget (method)

**Signature**

```ts
decideRandomTarget(): void;
```

### setConfusion (method)

**Signature**

```ts
setConfusion(): void;
```

### prepare (method)

**Signature**

```ts
prepare(): void;
```

### isValid (method)

**Signature**

```ts
isValid(): boolean | ActionItem;
```

### speed (method)

**Signature**

```ts
speed(): number;
```

### makeTargets (method)

**Signature**

```ts
makeTargets(): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy)[];
```

### repeatTargets (method)

**Signature**

```ts
repeatTargets(targets: (ActionTarget | null)[]): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy)[];
```

### confusionTarget (method)

**Signature**

```ts
confusionTarget(): import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy | null;
```

### targetsForEveryone (method)

**Signature**

```ts
targetsForEveryone(): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy)[];
```

### targetsForOpponents (method)

**Signature**

```ts
targetsForOpponents(): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy | null)[];
```

### targetsForFriends (method)

**Signature**

```ts
targetsForFriends(): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy | null)[];
```

### randomTargets (method)

**Signature**

```ts
randomTargets(unit: ActionUnit): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy | null)[];
```

### targetsForDead (method)

**Signature**

```ts
targetsForDead(unit: ActionUnit): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy)[];
```

### targetsForAlive (method)

**Signature**

```ts
targetsForAlive(unit: ActionUnit): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy | null)[];
```

### targetsForDeadAndAlive (method)

**Signature**

```ts
targetsForDeadAndAlive(unit: ActionUnit): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy)[];
```

### evaluate (method)

**Signature**

```ts
evaluate(): number;
```

### itemTargetCandidates (method)

**Signature**

```ts
itemTargetCandidates(): (import("./Game_Actor").Game_Actor | import("./Game_Enemy").Game_Enemy)[];
```

### evaluateWithTarget (method)

**Signature**

```ts
evaluateWithTarget(target: ActionTarget): number | undefined;
```

### testApply (method)

**Signature**

```ts
testApply(target: ActionTarget): boolean;
```

### testLifeAndDeath (method)

**Signature**

```ts
testLifeAndDeath(target: ActionTarget): boolean;
```

### hasItemAnyValidEffects (method)

**Signature**

```ts
hasItemAnyValidEffects(target: ActionTarget): boolean;
```

### testItemEffect (method)

**Signature**

```ts
testItemEffect(target: ActionTarget, effect: ActionEffectBase): boolean;
```

### itemCnt (method)

**Signature**

```ts
itemCnt(target: ActionTarget): number;
```

### itemMrf (method)

**Signature**

```ts
itemMrf(target: ActionTarget): number;
```

### itemHit (method)

**Signature**

```ts
itemHit(_target: ActionTarget): number;
```

### itemEva (method)

**Signature**

```ts
itemEva(target: ActionTarget): number;
```

### itemCri (method)

**Signature**

```ts
itemCri(target: ActionTarget): number;
```

### apply (method)

**Signature**

```ts
apply(target: ActionTarget): void;
```

### makeDamageValue (method)

**Signature**

```ts
makeDamageValue(target: ActionTarget, critical: boolean): number;
```

### evalDamageFormula (method)

**Signature**

```ts
evalDamageFormula(target: ActionTarget): number;
```

### calcElementRate (method)

**Signature**

```ts
calcElementRate(target: ActionTarget): number;
```

### elementsMaxRate (method)

**Signature**

```ts
elementsMaxRate(target: ActionTarget, elements: DataID[]): number;
```

### applyCritical (method)

**Signature**

```ts
applyCritical(damage: number): number;
```

### applyVariance (method)

**Signature**

```ts
applyVariance(damage: number, variance: number): number;
```

### applyGuard (method)

**Signature**

```ts
applyGuard(damage: number, target: ActionTarget): number;
```

### executeDamage (method)

**Signature**

```ts
executeDamage(target: ActionTarget, value: number): void;
```

### executeHpDamage (method)

**Signature**

```ts
executeHpDamage(target: ActionTarget, value: number): void;
```

### executeMpDamage (method)

**Signature**

```ts
executeMpDamage(target: ActionTarget, value: number): void;
```

### gainDrainedHp (method)

**Signature**

```ts
gainDrainedHp(value: number): void;
```

### gainDrainedMp (method)

**Signature**

```ts
gainDrainedMp(value: number): void;
```

### applyItemEffect (method)

**Signature**

```ts
applyItemEffect(target: ActionTarget, effect: ActionEffectBase): void;
```

### itemEffectRecoverHp (method)

**Signature**

```ts
itemEffectRecoverHp(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_RECOVER_HP>): void;
```

### itemEffectRecoverMp (method)

**Signature**

```ts
itemEffectRecoverMp(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_RECOVER_MP>): void;
```

### itemEffectGainTp (method)

**Signature**

```ts
itemEffectGainTp(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_GAIN_TP>): void;
```

### itemEffectAddState (method)

**Signature**

```ts
itemEffectAddState(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_ADD_STATE>): void;
```

### itemEffectAddAttackState (method)

**Signature**

```ts
itemEffectAddAttackState(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_ADD_STATE>): void;
```

### itemEffectAddNormalState (method)

**Signature**

```ts
itemEffectAddNormalState(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_ADD_STATE>): void;
```

### itemEffectRemoveState (method)

**Signature**

```ts
itemEffectRemoveState(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_REMOVE_STATE>): void;
```

### itemEffectAddBuff (method)

**Signature**

```ts
itemEffectAddBuff(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_ADD_BUFF>): void;
```

### itemEffectAddDebuff (method)

**Signature**

```ts
itemEffectAddDebuff(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_ADD_DEBUFF>): void;
```

### itemEffectRemoveBuff (method)

**Signature**

```ts
itemEffectRemoveBuff(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_REMOVE_BUFF>): void;
```

### itemEffectRemoveDebuff (method)

**Signature**

```ts
itemEffectRemoveDebuff(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_REMOVE_DEBUFF>): void;
```

### itemEffectSpecial (method)

**Signature**

```ts
itemEffectSpecial(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_SPECIAL>): void;
```

### itemEffectGrow (method)

**Signature**

```ts
itemEffectGrow(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_GROW>): void;
```

### itemEffectLearnSkill (method)

**Signature**

```ts
itemEffectLearnSkill(target: ActionTarget, effect: ActionEffect<typeof Game_Action.EFFECT_LEARN_SKILL>): void;
```

### itemEffectCommonEvent (method)

**Signature**

```ts
itemEffectCommonEvent(_target: ActionTarget, // eslint-disable-line @typescript-eslint/no-unused-vars
    _effect: ActionEffect<typeof Game_Action.EFFECT_COMMON_EVENT>): void;
```

### makeSuccess (method)

**Signature**

```ts
makeSuccess(target: ActionTarget): void;
```

### applyItemUserEffect (method)

**Signature**

```ts
applyItemUserEffect(_target: ActionTarget): void;
```

### lukEffectRate (method)

**Signature**

```ts
lukEffectRate(target: ActionTarget): number;
```

### applyGlobal (method)

**Signature**

```ts
applyGlobal(): void;
```

### updateLastUsed (method)

**Signature**

```ts
updateLastUsed(): void;
```

### updateLastSubject (method)

**Signature**

```ts
updateLastSubject(): void;
```

### updateLastTarget (method)

**Signature**

```ts
updateLastTarget(target: ActionTarget): void;
```

### \_subjectActorId (property)

**Signature**

```ts
_subjectActorId: number
```

### \_subjectEnemyIndex (property)

**Signature**

```ts
_subjectEnemyIndex: number
```

### \_forcing (property)

**Signature**

```ts
_forcing: boolean
```

### \_item (property)

**Signature**

```ts
_item: Game_Item<ActionItem>
```

### \_targetIndex (property)

**Signature**

```ts
_targetIndex: number
```

### \_reflectionTarget (property)

**Signature**

```ts
_reflectionTarget: Game_Actor | Game_Enemy | undefined
```
