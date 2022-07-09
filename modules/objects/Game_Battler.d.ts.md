---
title: objects/Game_Battler.d.ts
nav_order: 68
parent: Modules
---

## Game_Battler.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Battler (class)](#game_battler-class)
    - [initMembers (method)](#initmembers-method)
    - [clearDamagePopup (method)](#cleardamagepopup-method)
    - [clearWeaponAnimation (method)](#clearweaponanimation-method)
    - [clearEffect (method)](#cleareffect-method)
    - [clearMotion (method)](#clearmotion-method)
    - [requestEffect (method)](#requesteffect-method)
    - [requestMotion (method)](#requestmotion-method)
    - [requestMotionRefresh (method)](#requestmotionrefresh-method)
    - [cancelMotionRefresh (method)](#cancelmotionrefresh-method)
    - [select (method)](#select-method)
    - [deselect (method)](#deselect-method)
    - [isDamagePopupRequested (method)](#isdamagepopuprequested-method)
    - [isEffectRequested (method)](#iseffectrequested-method)
    - [isMotionRequested (method)](#ismotionrequested-method)
    - [isWeaponAnimationRequested (method)](#isweaponanimationrequested-method)
    - [isMotionRefreshRequested (method)](#ismotionrefreshrequested-method)
    - [isSelected (method)](#isselected-method)
    - [effectType (method)](#effecttype-method)
    - [motionType (method)](#motiontype-method)
    - [weaponImageId (method)](#weaponimageid-method)
    - [startDamagePopup (method)](#startdamagepopup-method)
    - [shouldPopupDamage (method)](#shouldpopupdamage-method)
    - [startWeaponAnimation (method)](#startweaponanimation-method)
    - [action (method)](#action-method)
    - [setAction (method)](#setaction-method)
    - [numActions (method)](#numactions-method)
    - [clearActions (method)](#clearactions-method)
    - [result (method)](#result-method)
    - [clearResult (method)](#clearresult-method)
    - [clearTpbChargeTime (method)](#cleartpbchargetime-method)
    - [applyTpbPenalty (method)](#applytpbpenalty-method)
    - [initTpbChargeTime (method)](#inittpbchargetime-method)
    - [tpbChargeTime (method)](#tpbchargetime-method)
    - [startTpbCasting (method)](#starttpbcasting-method)
    - [startTpbAction (method)](#starttpbaction-method)
    - [isTpbCharged (method)](#istpbcharged-method)
    - [isTpbReady (method)](#istpbready-method)
    - [isTpbTimeout (method)](#istpbtimeout-method)
    - [updateTpb (method)](#updatetpb-method)
    - [updateTpbChargeTime (method)](#updatetpbchargetime-method)
    - [updateTpbCastTime (method)](#updatetpbcasttime-method)
    - [updateTpbAutoBattle (method)](#updatetpbautobattle-method)
    - [updateTpbIdleTime (method)](#updatetpbidletime-method)
    - [tpbAcceleration (method)](#tpbacceleration-method)
    - [tpbRelativeSpeed (method)](#tpbrelativespeed-method)
    - [tpbSpeed (method)](#tpbspeed-method)
    - [tpbBaseSpeed (method)](#tpbbasespeed-method)
    - [tpbRequiredCastTime (method)](#tpbrequiredcasttime-method)
    - [onTpbCharged (method)](#ontpbcharged-method)
    - [shouldDelayTpbCharge (method)](#shoulddelaytpbcharge-method)
    - [finishTpbCharge (method)](#finishtpbcharge-method)
    - [isTpbTurnEnd (method)](#istpbturnend-method)
    - [initTpbTurn (method)](#inittpbturn-method)
    - [startTpbTurn (method)](#starttpbturn-method)
    - [makeTpbActions (method)](#maketpbactions-method)
    - [onTpbTimeout (method)](#ontpbtimeout-method)
    - [turnCount (method)](#turncount-method)
    - [canInput (method)](#caninput-method)
    - [refresh (method)](#refresh-method)
    - [addState (method)](#addstate-method)
    - [isStateAddable (method)](#isstateaddable-method)
    - [isStateRestrict (method)](#isstaterestrict-method)
    - [onRestrict (method)](#onrestrict-method)
    - [removeState (method)](#removestate-method)
    - [escape (method)](#escape-method)
    - [addBuff (method)](#addbuff-method)
    - [addDebuff (method)](#adddebuff-method)
    - [removeBuff (method)](#removebuff-method)
    - [removeBattleStates (method)](#removebattlestates-method)
    - [removeAllBuffs (method)](#removeallbuffs-method)
    - [removeStatesAuto (method)](#removestatesauto-method)
    - [removeBuffsAuto (method)](#removebuffsauto-method)
    - [removeStatesByDamage (method)](#removestatesbydamage-method)
    - [makeActionTimes (method)](#makeactiontimes-method)
    - [makeActions (method)](#makeactions-method)
    - [speed (method)](#speed-method)
    - [makeSpeed (method)](#makespeed-method)
    - [currentAction (method)](#currentaction-method)
    - [removeCurrentAction (method)](#removecurrentaction-method)
    - [setLastTarget (method)](#setlasttarget-method)
    - [forceAction (method)](#forceaction-method)
    - [useItem (method)](#useitem-method)
    - [consumeItem (method)](#consumeitem-method)
    - [gainHp (method)](#gainhp-method)
    - [gainMp (method)](#gainmp-method)
    - [gainTp (method)](#gaintp-method)
    - [gainSilentTp (method)](#gainsilenttp-method)
    - [initTp (method)](#inittp-method)
    - [clearTp (method)](#cleartp-method)
    - [chargeTpByDamage (method)](#chargetpbydamage-method)
    - [regenerateHp (method)](#regeneratehp-method)
    - [maxSlipDamage (method)](#maxslipdamage-method)
    - [regenerateMp (method)](#regeneratemp-method)
    - [regenerateTp (method)](#regeneratetp-method)
    - [regenerateAll (method)](#regenerateall-method)
    - [onBattleStart (method)](#onbattlestart-method)
    - [onAllActionsEnd (method)](#onallactionsend-method)
    - [onTurnEnd (method)](#onturnend-method)
    - [onBattleEnd (method)](#onbattleend-method)
    - [onDamage (method)](#ondamage-method)
    - [setActionState (method)](#setactionstate-method)
    - [isUndecided (method)](#isundecided-method)
    - [isInputting (method)](#isinputting-method)
    - [isWaiting (method)](#iswaiting-method)
    - [isActing (method)](#isacting-method)
    - [isChanting (method)](#ischanting-method)
    - [isGuardWaiting (method)](#isguardwaiting-method)
    - [performActionStart (method)](#performactionstart-method)
    - [performAction (method)](#performaction-method)
    - [performActionEnd (method)](#performactionend-method)
    - [performDamage (method)](#performdamage-method)
    - [performMiss (method)](#performmiss-method)
    - [performRecovery (method)](#performrecovery-method)
    - [performEvasion (method)](#performevasion-method)
    - [performMagicEvasion (method)](#performmagicevasion-method)
    - [performCounter (method)](#performcounter-method)
    - [performReflection (method)](#performreflection-method)
    - [performSubstitute (method)](#performsubstitute-method)
    - [performCollapse (method)](#performcollapse-method)
    - [\_actions (property)](#_actions-property)
    - [\_speed (property)](#_speed-property)
    - [\_result (property)](#_result-property)
    - [\_actionState (property)](#_actionstate-property)
    - [\_lastTargetIndex (property)](#_lasttargetindex-property)
    - [\_damagePopup (property)](#_damagepopup-property)
    - [\_effectType (property)](#_effecttype-property)
    - [\_motionType (property)](#_motiontype-property)
    - [\_weaponImageId (property)](#_weaponimageid-property)
    - [\_motionRefresh (property)](#_motionrefresh-property)
    - [\_selected (property)](#_selected-property)
    - [\_tpbState (property)](#_tpbstate-property)
    - [\_tpbChargeTime (property)](#_tpbchargetime-property)
    - [\_tpbCastTime (property)](#_tpbcasttime-property)
    - [\_tpbIdleTime (property)](#_tpbidletime-property)
    - [\_tpbTurnCount (property)](#_tpbturncount-property)
    - [\_tpbTurnEnd (property)](#_tpbturnend-property)

---

# utils

## Game_Battler (class)

Game_Battler

The superclass of Game_Actor and Game_Enemy. It contains methods for sprites
// and actions.

**Signature**

```ts
export declare class Game_Battler {
  constructor()
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void
```

### clearDamagePopup (method)

**Signature**

```ts
clearDamagePopup(): void
```

### clearWeaponAnimation (method)

**Signature**

```ts
clearWeaponAnimation(): void
```

### clearEffect (method)

**Signature**

```ts
clearEffect(): void
```

### clearMotion (method)

**Signature**

```ts
clearMotion(): void
```

### requestEffect (method)

**Signature**

```ts
requestEffect(effectType: BattlerEffectType): void
```

### requestMotion (method)

**Signature**

```ts
requestMotion(motionType: BattlerMotionType): void
```

### requestMotionRefresh (method)

**Signature**

```ts
requestMotionRefresh(): void
```

### cancelMotionRefresh (method)

**Signature**

```ts
cancelMotionRefresh(): void
```

### select (method)

**Signature**

```ts
select(): void
```

### deselect (method)

**Signature**

```ts
deselect(): void
```

### isDamagePopupRequested (method)

**Signature**

```ts
isDamagePopupRequested(): boolean
```

### isEffectRequested (method)

**Signature**

```ts
isEffectRequested(): boolean
```

### isMotionRequested (method)

**Signature**

```ts
isMotionRequested(): boolean
```

### isWeaponAnimationRequested (method)

**Signature**

```ts
isWeaponAnimationRequested(): boolean
```

### isMotionRefreshRequested (method)

**Signature**

```ts
isMotionRefreshRequested(): boolean
```

### isSelected (method)

**Signature**

```ts
isSelected(): boolean
```

### effectType (method)

**Signature**

```ts
effectType(): BattlerEffectType | null
```

### motionType (method)

**Signature**

```ts
motionType(): BattlerMotionType | null
```

### weaponImageId (method)

**Signature**

```ts
weaponImageId(): number
```

### startDamagePopup (method)

**Signature**

```ts
startDamagePopup(): void
```

### shouldPopupDamage (method)

**Signature**

```ts
shouldPopupDamage(): boolean
```

### startWeaponAnimation (method)

**Signature**

```ts
startWeaponAnimation(weaponImageId: DataID): void
```

### action (method)

**Signature**

```ts
action(index: number): Game_Action
```

### setAction (method)

**Signature**

```ts
setAction(index: number, action: Game_Action): void
```

### numActions (method)

**Signature**

```ts
numActions(): number
```

### clearActions (method)

**Signature**

```ts
clearActions(): void
```

### result (method)

**Signature**

```ts
result(): Game_ActionResult
```

### clearResult (method)

**Signature**

```ts
clearResult(): void
```

### clearTpbChargeTime (method)

**Signature**

```ts
clearTpbChargeTime(): void
```

### applyTpbPenalty (method)

**Signature**

```ts
applyTpbPenalty(): void
```

### initTpbChargeTime (method)

**Signature**

```ts
initTpbChargeTime(advantageous?: boolean): void
```

### tpbChargeTime (method)

**Signature**

```ts
tpbChargeTime(): number
```

### startTpbCasting (method)

**Signature**

```ts
startTpbCasting(): void
```

### startTpbAction (method)

**Signature**

```ts
startTpbAction(): void
```

### isTpbCharged (method)

**Signature**

```ts
isTpbCharged(): boolean
```

### isTpbReady (method)

**Signature**

```ts
isTpbReady(): boolean
```

### isTpbTimeout (method)

**Signature**

```ts
isTpbTimeout(): boolean
```

### updateTpb (method)

**Signature**

```ts
updateTpb(): void
```

### updateTpbChargeTime (method)

**Signature**

```ts
updateTpbChargeTime(): void
```

### updateTpbCastTime (method)

**Signature**

```ts
updateTpbCastTime(): void
```

### updateTpbAutoBattle (method)

**Signature**

```ts
updateTpbAutoBattle(): void
```

### updateTpbIdleTime (method)

**Signature**

```ts
updateTpbIdleTime(): void
```

### tpbAcceleration (method)

**Signature**

```ts
tpbAcceleration(): number
```

### tpbRelativeSpeed (method)

**Signature**

```ts
tpbRelativeSpeed(): number
```

### tpbSpeed (method)

**Signature**

```ts
tpbSpeed(): number
```

### tpbBaseSpeed (method)

**Signature**

```ts
tpbBaseSpeed(): number
```

### tpbRequiredCastTime (method)

**Signature**

```ts
tpbRequiredCastTime(): number
```

### onTpbCharged (method)

**Signature**

```ts
onTpbCharged(): void
```

### shouldDelayTpbCharge (method)

**Signature**

```ts
shouldDelayTpbCharge(): boolean
```

### finishTpbCharge (method)

**Signature**

```ts
finishTpbCharge(): void
```

### isTpbTurnEnd (method)

**Signature**

```ts
isTpbTurnEnd(): boolean
```

### initTpbTurn (method)

**Signature**

```ts
initTpbTurn(): void
```

### startTpbTurn (method)

**Signature**

```ts
startTpbTurn(): void
```

### makeTpbActions (method)

**Signature**

```ts
makeTpbActions(): void
```

### onTpbTimeout (method)

**Signature**

```ts
onTpbTimeout(): void
```

### turnCount (method)

**Signature**

```ts
turnCount(): number
```

### canInput (method)

**Signature**

```ts
canInput(): boolean
```

### refresh (method)

**Signature**

```ts
refresh(): void
```

### addState (method)

**Signature**

```ts
addState(stateId: StateID): void
```

### isStateAddable (method)

**Signature**

```ts
isStateAddable(stateId: StateID): boolean
```

### isStateRestrict (method)

**Signature**

```ts
isStateRestrict(stateId: StateID): boolean
```

### onRestrict (method)

**Signature**

```ts
onRestrict(): void
```

### removeState (method)

**Signature**

```ts
removeState(stateId: StateID): void
```

### escape (method)

**Signature**

```ts
escape(): void
```

### addBuff (method)

**Signature**

```ts
addBuff(paramId: ParamID, turns: number): void
```

### addDebuff (method)

**Signature**

```ts
addDebuff(paramId: ParamID, turns: number): void
```

### removeBuff (method)

**Signature**

```ts
removeBuff(paramId: ParamID): void
```

### removeBattleStates (method)

**Signature**

```ts
removeBattleStates(): void
```

### removeAllBuffs (method)

**Signature**

```ts
removeAllBuffs(): void
```

### removeStatesAuto (method)

**Signature**

```ts
removeStatesAuto(timing: AutoRemovalTiming): void
```

### removeBuffsAuto (method)

**Signature**

```ts
removeBuffsAuto(): void
```

### removeStatesByDamage (method)

**Signature**

```ts
removeStatesByDamage(): void
```

### makeActionTimes (method)

**Signature**

```ts
makeActionTimes(): number
```

### makeActions (method)

**Signature**

```ts
makeActions(): void
```

### speed (method)

**Signature**

```ts
speed(): number
```

### makeSpeed (method)

**Signature**

```ts
makeSpeed(): void
```

### currentAction (method)

**Signature**

```ts
currentAction(): Game_Action
```

### removeCurrentAction (method)

**Signature**

```ts
removeCurrentAction(): void
```

### setLastTarget (method)

**Signature**

```ts
setLastTarget(target: Game_Actor | Game_Enemy): void
```

### forceAction (method)

**Signature**

```ts
forceAction(skillId: SkillID, targetIndex: ActorID | EnemyID): void
```

### useItem (method)

**Signature**

```ts
useItem(item: ActionItem): void
```

### consumeItem (method)

**Signature**

```ts
consumeItem(item: DataItem): void
```

### gainHp (method)

**Signature**

```ts
gainHp(value: number): void
```

### gainMp (method)

**Signature**

```ts
gainMp(value: number): void
```

### gainTp (method)

**Signature**

```ts
gainTp(value: number): void
```

### gainSilentTp (method)

**Signature**

```ts
gainSilentTp(value: number): void
```

### initTp (method)

**Signature**

```ts
initTp(): void
```

### clearTp (method)

**Signature**

```ts
clearTp(): void
```

### chargeTpByDamage (method)

**Signature**

```ts
chargeTpByDamage(damageRate: number): void
```

### regenerateHp (method)

**Signature**

```ts
regenerateHp(): void
```

### maxSlipDamage (method)

**Signature**

```ts
maxSlipDamage(): number
```

### regenerateMp (method)

**Signature**

```ts
regenerateMp(): void
```

### regenerateTp (method)

**Signature**

```ts
regenerateTp(): void
```

### regenerateAll (method)

**Signature**

```ts
regenerateAll(): void
```

### onBattleStart (method)

**Signature**

```ts
onBattleStart(advantageous?: boolean): void
```

### onAllActionsEnd (method)

**Signature**

```ts
onAllActionsEnd(): void
```

### onTurnEnd (method)

**Signature**

```ts
onTurnEnd(): void
```

### onBattleEnd (method)

**Signature**

```ts
onBattleEnd(): void
```

### onDamage (method)

**Signature**

```ts
onDamage(value: number): void
```

### setActionState (method)

**Signature**

```ts
setActionState(actionState: ActionState): void
```

### isUndecided (method)

**Signature**

```ts
isUndecided(): boolean
```

### isInputting (method)

**Signature**

```ts
isInputting(): boolean
```

### isWaiting (method)

**Signature**

```ts
isWaiting(): boolean
```

### isActing (method)

**Signature**

```ts
isActing(): boolean
```

### isChanting (method)

**Signature**

```ts
isChanting(): boolean
```

### isGuardWaiting (method)

**Signature**

```ts
isGuardWaiting(): boolean
```

### performActionStart (method)

**Signature**

```ts
performActionStart(action: Game_Action): void
```

### performAction (method)

**Signature**

```ts
performAction(_action: Game_Action): void
```

### performActionEnd (method)

**Signature**

```ts
performActionEnd(): void
```

### performDamage (method)

**Signature**

```ts
performDamage(): void
```

### performMiss (method)

**Signature**

```ts
performMiss(): void
```

### performRecovery (method)

**Signature**

```ts
performRecovery(): void
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

### performReflection (method)

**Signature**

```ts
performReflection(): void
```

### performSubstitute (method)

**Signature**

```ts
performSubstitute(_target: Game_Battler): void
```

### performCollapse (method)

**Signature**

```ts
performCollapse(): void
```

### \_actions (property)

**Signature**

```ts
_actions: Game_Action[]
```

### \_speed (property)

**Signature**

```ts
_speed: number
```

### \_result (property)

**Signature**

```ts
_result: Game_ActionResult
```

### \_actionState (property)

**Signature**

```ts
_actionState: '' | 'undecided' | 'inputting' | 'waiting' | 'acting' | 'done'
```

### \_lastTargetIndex (property)

**Signature**

```ts
_lastTargetIndex: number
```

### \_damagePopup (property)

**Signature**

```ts
_damagePopup: boolean
```

### \_effectType (property)

**Signature**

```ts
_effectType: 'whiten' | 'blink' | 'collapse' | 'bossCollapse' | 'instantCollapse' | 'appear' | 'disappear' | null
```

### \_motionType (property)

**Signature**

```ts
_motionType: 'wait' |
  'walk' |
  'chant' |
  'guard' |
  'damage' |
  'evade' |
  'thrust' |
  'swing' |
  'missile' |
  'skill' |
  'spell' |
  'item' |
  'escape' |
  'victory' |
  'dying' |
  'abnormal' |
  'sleep' |
  'dead' |
  null
```

### \_weaponImageId (property)

**Signature**

```ts
_weaponImageId: number
```

### \_motionRefresh (property)

**Signature**

```ts
_motionRefresh: boolean
```

### \_selected (property)

**Signature**

```ts
_selected: boolean
```

### \_tpbState (property)

**Signature**

```ts
_tpbState: string
```

### \_tpbChargeTime (property)

**Signature**

```ts
_tpbChargeTime: number
```

### \_tpbCastTime (property)

**Signature**

```ts
_tpbCastTime: number
```

### \_tpbIdleTime (property)

**Signature**

```ts
_tpbIdleTime: number
```

### \_tpbTurnCount (property)

**Signature**

```ts
_tpbTurnCount: number
```

### \_tpbTurnEnd (property)

**Signature**

```ts
_tpbTurnEnd: boolean
```
