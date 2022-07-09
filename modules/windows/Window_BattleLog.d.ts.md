---
title: windows/Window_BattleLog.d.ts
nav_order: 148
parent: Modules
---

## Window_BattleLog.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [BattleLogMethod (type alias)](#battlelogmethod-type-alias)
  - [Window_BattleLog (class)](#window_battlelog-class)
    - [setSpriteset (method)](#setspriteset-method)
    - [maxLines (method)](#maxlines-method)
    - [numLines (method)](#numlines-method)
    - [messageSpeed (method)](#messagespeed-method)
    - [isBusy (method)](#isbusy-method)
    - [update (method)](#update-method)
    - [updateWait (method)](#updatewait-method)
    - [updateWaitCount (method)](#updatewaitcount-method)
    - [updateWaitMode (method)](#updatewaitmode-method)
    - [setWaitMode (method)](#setwaitmode-method)
    - [callNextMethod (method)](#callnextmethod-method)
    - [isFastForward (method)](#isfastforward-method)
    - [push (method)](#push-method)
    - [clear (method)](#clear-method)
    - [wait (method)](#wait-method)
    - [waitForEffect (method)](#waitforeffect-method)
    - [waitForMovement (method)](#waitformovement-method)
    - [addText (method)](#addtext-method)
    - [pushBaseLine (method)](#pushbaseline-method)
    - [popBaseLine (method)](#popbaseline-method)
    - [waitForNewLine (method)](#waitfornewline-method)
    - [popupDamage (method)](#popupdamage-method)
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
    - [showAnimation (method)](#showanimation-method)
    - [showAttackAnimation (method)](#showattackanimation-method)
    - [showActorAttackAnimation (method)](#showactorattackanimation-method)
    - [showEnemyAttackAnimation (method)](#showenemyattackanimation-method)
    - [showNormalAnimation (method)](#shownormalanimation-method)
    - [refresh (method)](#refresh-method)
    - [drawBackground (method)](#drawbackground-method)
    - [backRect (method)](#backrect-method)
    - [lineRect (method)](#linerect-method)
    - [backColor (method)](#backcolor-method)
    - [backPaintOpacity (method)](#backpaintopacity-method)
    - [drawLineText (method)](#drawlinetext-method)
    - [startTurn (method)](#startturn-method)
    - [startAction (method)](#startaction-method)
    - [endAction (method)](#endaction-method)
    - [displayCurrentState (method)](#displaycurrentstate-method)
    - [displayRegeneration (method)](#displayregeneration-method)
    - [displayAction (method)](#displayaction-method)
    - [displayItemMessage (method)](#displayitemmessage-method)
    - [displayCounter (method)](#displaycounter-method)
    - [displayReflection (method)](#displayreflection-method)
    - [displaySubstitute (method)](#displaysubstitute-method)
    - [displayActionResults (method)](#displayactionresults-method)
    - [displayFailure (method)](#displayfailure-method)
    - [displayCritical (method)](#displaycritical-method)
    - [displayDamage (method)](#displaydamage-method)
    - [displayMiss (method)](#displaymiss-method)
    - [displayEvasion (method)](#displayevasion-method)
    - [displayHpDamage (method)](#displayhpdamage-method)
    - [displayMpDamage (method)](#displaympdamage-method)
    - [displayTpDamage (method)](#displaytpdamage-method)
    - [displayAffectedStatus (method)](#displayaffectedstatus-method)
    - [displayAutoAffectedStatus (method)](#displayautoaffectedstatus-method)
    - [displayChangedStates (method)](#displaychangedstates-method)
    - [displayAddedStates (method)](#displayaddedstates-method)
    - [displayRemovedStates (method)](#displayremovedstates-method)
    - [displayChangedBuffs (method)](#displaychangedbuffs-method)
    - [displayBuffs (method)](#displaybuffs-method)
    - [makeHpDamageText (method)](#makehpdamagetext-method)
    - [makeMpDamageText (method)](#makempdamagetext-method)
    - [makeTpDamageText (method)](#maketpdamagetext-method)
    - [\_lines (property)](#_lines-property)
    - [\_methods (property)](#_methods-property)
    - [\_waitCount (property)](#_waitcount-property)
    - [\_waitMode (property)](#_waitmode-property)
    - [\_baseLineStack (property)](#_baselinestack-property)
    - [\_spriteset (property)](#_spriteset-property)

---

# utils

## BattleLogMethod (type alias)

**Signature**

```ts
export declare type BattleLogMethod =
  | $<'performActionStart'>
  | $<'performAction'>
  | $<'performActionEnd'>
  | $<'performCounter'>
  | $<'performReflection'>
  | $<'performSubstitute'>
  | $<'performMiss'>
  | $<'performEvasion'>
  | $<'performMagicEvasion'>
  | $<'performDamage'>
  | $<'performRecovery'>
  | $<'performCollapse'>
  | $<'pushBaseLine'>
  | $<'popBaseLine'>
  | $<'addText'>
  | $<'popupDamage'>
  | $<'wait'>
  | $<'waitForMovement'>
  | $<'waitForNewLine'>
  | $<'waitForEffect'>
  | $<'showAnimation'>
  | $<'clear'>
```

## Window_BattleLog (class)

Window_BattleLog

The window for displaying battle progress. No frame is displayed, but it is
// handled as a window for convenience.

**Signature**

```ts
export declare class Window_BattleLog {
  constructor(rect: Rectangle)
}
```

### setSpriteset (method)

**Signature**

```ts
setSpriteset(spriteset: Spriteset_Battle): void
```

### maxLines (method)

**Signature**

```ts
maxLines(): number
```

### numLines (method)

**Signature**

```ts
numLines(): number
```

### messageSpeed (method)

**Signature**

```ts
messageSpeed(): number
```

### isBusy (method)

**Signature**

```ts
isBusy():
    | boolean
    | "video"
    | "scroll"
    | "image"
    | "message"
    | "transfer"
    | "route"
    | "animation"
    | "balloon"
    | "gather"
    | "action"
    | "effect"
    | "movement"
```

### update (method)

**Signature**

```ts
update(): void
```

### updateWait (method)

**Signature**

```ts
updateWait(): boolean
```

### updateWaitCount (method)

**Signature**

```ts
updateWaitCount(): boolean
```

### updateWaitMode (method)

**Signature**

```ts
updateWaitMode(): boolean
```

### setWaitMode (method)

**Signature**

```ts
setWaitMode(waitMode: WaitMode): void
```

### callNextMethod (method)

**Signature**

```ts
callNextMethod(): void
```

### isFastForward (method)

**Signature**

```ts
isFastForward(): boolean
```

### push (method)

**Signature**

```ts
push<T>(
    methodName: T,
    ...methodArgs: Extract<
      BattleLogMethod,
      {
        name: T
      }
    >["params"]
  ): void
```

### clear (method)

**Signature**

```ts
clear(): void
```

### wait (method)

**Signature**

```ts
wait(): void
```

### waitForEffect (method)

**Signature**

```ts
waitForEffect(): void
```

### waitForMovement (method)

**Signature**

```ts
waitForMovement(): void
```

### addText (method)

**Signature**

```ts
addText(text: string): void
```

### pushBaseLine (method)

**Signature**

```ts
pushBaseLine(): void
```

### popBaseLine (method)

**Signature**

```ts
popBaseLine(): void
```

### waitForNewLine (method)

**Signature**

```ts
waitForNewLine(): void
```

### popupDamage (method)

**Signature**

```ts
popupDamage(target: ActionTarget): void
```

### performActionStart (method)

**Signature**

```ts
performActionStart(subject: ActionTarget, action: Game_Action): void
```

### performAction (method)

**Signature**

```ts
performAction(subject: ActionTarget, action: Game_Action): void
```

### performActionEnd (method)

**Signature**

```ts
performActionEnd(subject: ActionTarget): void
```

### performDamage (method)

**Signature**

```ts
performDamage(target: ActionTarget): void
```

### performMiss (method)

**Signature**

```ts
performMiss(target: ActionTarget): void
```

### performRecovery (method)

**Signature**

```ts
performRecovery(target: ActionTarget): void
```

### performEvasion (method)

**Signature**

```ts
performEvasion(target: ActionTarget): void
```

### performMagicEvasion (method)

**Signature**

```ts
performMagicEvasion(target: ActionTarget): void
```

### performCounter (method)

**Signature**

```ts
performCounter(target: ActionTarget): void
```

### performReflection (method)

**Signature**

```ts
performReflection(target: ActionTarget): void
```

### performSubstitute (method)

**Signature**

```ts
performSubstitute(substitute: ActionTarget, target: ActionTarget): void
```

### performCollapse (method)

**Signature**

```ts
performCollapse(target: ActionTarget): void
```

### showAnimation (method)

**Signature**

```ts
showAnimation(subject: ActionTarget, targets: ActionTarget[], animationId: AnimationID): void
```

### showAttackAnimation (method)

**Signature**

```ts
showAttackAnimation(subject: ActionTarget, targets: ActionTarget[]): void
```

### showActorAttackAnimation (method)

**Signature**

```ts
showActorAttackAnimation(subject: Game_Actor, targets: ActionTarget[]): void
```

### showEnemyAttackAnimation (method)

**Signature**

```ts
showEnemyAttackAnimation(_subject: Game_Enemy, _targets: ActionTarget[]): void
```

### showNormalAnimation (method)

**Signature**

```ts
showNormalAnimation(targets: ActionTarget[], animationId: AnimationID, mirror?: boolean): void
```

### refresh (method)

**Signature**

```ts
refresh(): void
```

### drawBackground (method)

**Signature**

```ts
drawBackground(): void
```

### backRect (method)

**Signature**

```ts
backRect(): Rectangle
```

### lineRect (method)

**Signature**

```ts
lineRect(index: number): Rectangle
```

### backColor (method)

**Signature**

```ts
backColor(): string
```

### backPaintOpacity (method)

**Signature**

```ts
backPaintOpacity(): number
```

### drawLineText (method)

**Signature**

```ts
drawLineText(index: number): void
```

### startTurn (method)

**Signature**

```ts
startTurn(): void
```

### startAction (method)

**Signature**

```ts
startAction(subject: ActionTarget, action: Game_Action, targets: ActionTarget[]): void
```

### endAction (method)

**Signature**

```ts
endAction(subject: ActionTarget): void
```

### displayCurrentState (method)

**Signature**

```ts
displayCurrentState(subject: ActionTarget): void
```

### displayRegeneration (method)

**Signature**

```ts
displayRegeneration(subject: ActionTarget): void
```

### displayAction (method)

**Signature**

```ts
displayAction(subject: ActionTarget, item: DataItemBase): void
```

### displayItemMessage (method)

**Signature**

```ts
displayItemMessage(fmt: string, subject: ActionTarget, item: DataItemBase): void
```

### displayCounter (method)

**Signature**

```ts
displayCounter(target: ActionTarget): void
```

### displayReflection (method)

**Signature**

```ts
displayReflection(target: ActionTarget): void
```

### displaySubstitute (method)

**Signature**

```ts
displaySubstitute(substitute: ActionTarget, target: ActionTarget): void
```

### displayActionResults (method)

**Signature**

```ts
displayActionResults(subject: ActionTarget, target: ActionTarget): void
```

### displayFailure (method)

**Signature**

```ts
displayFailure(target: ActionTarget): void
```

### displayCritical (method)

**Signature**

```ts
displayCritical(target: ActionTarget): void
```

### displayDamage (method)

**Signature**

```ts
displayDamage(target: ActionTarget): void
```

### displayMiss (method)

**Signature**

```ts
displayMiss(target: ActionTarget): void
```

### displayEvasion (method)

**Signature**

```ts
displayEvasion(target: ActionTarget): void
```

### displayHpDamage (method)

**Signature**

```ts
displayHpDamage(target: ActionTarget): void
```

### displayMpDamage (method)

**Signature**

```ts
displayMpDamage(target: ActionTarget): void
```

### displayTpDamage (method)

**Signature**

```ts
displayTpDamage(target: ActionTarget): void
```

### displayAffectedStatus (method)

**Signature**

```ts
displayAffectedStatus(target: ActionTarget, _?: null): void
```

### displayAutoAffectedStatus (method)

**Signature**

```ts
displayAutoAffectedStatus(target: ActionTarget): void
```

### displayChangedStates (method)

**Signature**

```ts
displayChangedStates(target: ActionTarget): void
```

### displayAddedStates (method)

**Signature**

```ts
displayAddedStates(target: ActionTarget): void
```

### displayRemovedStates (method)

**Signature**

```ts
displayRemovedStates(target: ActionTarget): void
```

### displayChangedBuffs (method)

**Signature**

```ts
displayChangedBuffs(target: ActionTarget): void
```

### displayBuffs (method)

**Signature**

```ts
displayBuffs(target: ActionTarget, buffs: ParamID[], fmt: string): void
```

### makeHpDamageText (method)

**Signature**

```ts
makeHpDamageText(target: ActionTarget): string
```

### makeMpDamageText (method)

**Signature**

```ts
makeMpDamageText(target: ActionTarget): string
```

### makeTpDamageText (method)

**Signature**

```ts
makeTpDamageText(target: ActionTarget): string
```

### \_lines (property)

**Signature**

```ts
_lines: string[]
```

### \_methods (property)

**Signature**

```ts
_methods: BattleLogMethod[]
```

### \_waitCount (property)

**Signature**

```ts
_waitCount: number
```

### \_waitMode (property)

**Signature**

```ts
_waitMode: WaitMode
```

### \_baseLineStack (property)

**Signature**

```ts
_baseLineStack: number[]
```

### \_spriteset (property)

**Signature**

```ts
_spriteset: Spriteset_Battle | null
```
