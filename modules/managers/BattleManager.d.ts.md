---
title: managers/BattleManager.d.ts
nav_order: 50
parent: Modules
---

## BattleManager.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [BattleManager (class)](#battlemanager-class)
    - [setup (static method)](#setup-static-method)
    - [initMembers (static method)](#initmembers-static-method)
    - [isTpb (static method)](#istpb-static-method)
    - [isActiveTpb (static method)](#isactivetpb-static-method)
    - [isBattleTest (static method)](#isbattletest-static-method)
    - [setBattleTest (static method)](#setbattletest-static-method)
    - [setEventCallback (static method)](#seteventcallback-static-method)
    - [setLogWindow (static method)](#setlogwindow-static-method)
    - [setSpriteset (static method)](#setspriteset-static-method)
    - [onEncounter (static method)](#onencounter-static-method)
    - [ratePreemptive (static method)](#ratepreemptive-static-method)
    - [rateSurprise (static method)](#ratesurprise-static-method)
    - [saveBgmAndBgs (static method)](#savebgmandbgs-static-method)
    - [playBattleBgm (static method)](#playbattlebgm-static-method)
    - [playVictoryMe (static method)](#playvictoryme-static-method)
    - [playDefeatMe (static method)](#playdefeatme-static-method)
    - [replayBgmAndBgs (static method)](#replaybgmandbgs-static-method)
    - [makeEscapeRatio (static method)](#makeescaperatio-static-method)
    - [update (static method)](#update-static-method)
    - [updatePhase (static method)](#updatephase-static-method)
    - [updateEvent (static method)](#updateevent-static-method)
    - [updateEventMain (static method)](#updateeventmain-static-method)
    - [isBusy (static method)](#isbusy-static-method)
    - [updateTpbInput (static method)](#updatetpbinput-static-method)
    - [checkTpbInputClose (static method)](#checktpbinputclose-static-method)
    - [checkTpbInputOpen (static method)](#checktpbinputopen-static-method)
    - [isPartyTpbInputtable (static method)](#ispartytpbinputtable-static-method)
    - [needsActorInputCancel (static method)](#needsactorinputcancel-static-method)
    - [isTpbMainPhase (static method)](#istpbmainphase-static-method)
    - [isInputting (static method)](#isinputting-static-method)
    - [isInTurn (static method)](#isinturn-static-method)
    - [isTurnEnd (static method)](#isturnend-static-method)
    - [isAborting (static method)](#isaborting-static-method)
    - [isBattleEnd (static method)](#isbattleend-static-method)
    - [canEscape (static method)](#canescape-static-method)
    - [canLose (static method)](#canlose-static-method)
    - [isEscaped (static method)](#isescaped-static-method)
    - [actor (static method)](#actor-static-method)
    - [startBattle (static method)](#startbattle-static-method)
    - [displayStartMessages (static method)](#displaystartmessages-static-method)
    - [startInput (static method)](#startinput-static-method)
    - [inputtingAction (static method)](#inputtingaction-static-method)
    - [selectNextCommand (static method)](#selectnextcommand-static-method)
    - [selectNextActor (static method)](#selectnextactor-static-method)
    - [selectPreviousCommand (static method)](#selectpreviouscommand-static-method)
    - [selectPreviousActor (static method)](#selectpreviousactor-static-method)
    - [changeCurrentActor (static method)](#changecurrentactor-static-method)
    - [startActorInput (static method)](#startactorinput-static-method)
    - [finishActorInput (static method)](#finishactorinput-static-method)
    - [cancelActorInput (static method)](#cancelactorinput-static-method)
    - [updateStart (static method)](#updatestart-static-method)
    - [startTurn (static method)](#startturn-static-method)
    - [updateTurn (static method)](#updateturn-static-method)
    - [updateTpb (static method)](#updatetpb-static-method)
    - [updateAllTpbBattlers (static method)](#updatealltpbbattlers-static-method)
    - [updateTpbBattler (static method)](#updatetpbbattler-static-method)
    - [checkTpbTurnEnd (static method)](#checktpbturnend-static-method)
    - [processTurn (static method)](#processturn-static-method)
    - [endBattlerActions (static method)](#endbattleractions-static-method)
    - [endTurn (static method)](#endturn-static-method)
    - [updateTurnEnd (static method)](#updateturnend-static-method)
    - [endAllBattlersTurn (static method)](#endallbattlersturn-static-method)
    - [displayBattlerStatus (static method)](#displaybattlerstatus-static-method)
    - [getNextSubject (static method)](#getnextsubject-static-method)
    - [allBattleMembers (static method)](#allbattlemembers-static-method)
    - [makeActionOrders (static method)](#makeactionorders-static-method)
    - [startAction (static method)](#startaction-static-method)
    - [updateAction (static method)](#updateaction-static-method)
    - [endAction (static method)](#endaction-static-method)
    - [invokeAction (static method)](#invokeaction-static-method)
    - [invokeNormalAction (static method)](#invokenormalaction-static-method)
    - [invokeCounterAttack (static method)](#invokecounterattack-static-method)
    - [invokeMagicReflection (static method)](#invokemagicreflection-static-method)
    - [applySubstitute (static method)](#applysubstitute-static-method)
    - [checkSubstitute (static method)](#checksubstitute-static-method)
    - [isActionForced (static method)](#isactionforced-static-method)
    - [forceAction (static method)](#forceaction-static-method)
    - [processForcedAction (static method)](#processforcedaction-static-method)
    - [abort (static method)](#abort-static-method)
    - [checkBattleEnd (static method)](#checkbattleend-static-method)
    - [checkAbort (static method)](#checkabort-static-method)
    - [processVictory (static method)](#processvictory-static-method)
    - [processEscape (static method)](#processescape-static-method)
    - [onEscapeSuccess (static method)](#onescapesuccess-static-method)
    - [onEscapeFailure (static method)](#onescapefailure-static-method)
    - [processPartyEscape (static method)](#processpartyescape-static-method)
    - [processAbort (static method)](#processabort-static-method)
    - [processDefeat (static method)](#processdefeat-static-method)
    - [endBattle (static method)](#endbattle-static-method)
    - [updateBattleEnd (static method)](#updatebattleend-static-method)
    - [makeRewards (static method)](#makerewards-static-method)
    - [displayVictoryMessage (static method)](#displayvictorymessage-static-method)
    - [displayDefeatMessage (static method)](#displaydefeatmessage-static-method)
    - [displayEscapeSuccessMessage (static method)](#displayescapesuccessmessage-static-method)
    - [displayEscapeFailureMessage (static method)](#displayescapefailuremessage-static-method)
    - [displayRewards (static method)](#displayrewards-static-method)
    - [displayExp (static method)](#displayexp-static-method)
    - [displayGold (static method)](#displaygold-static-method)
    - [displayDropItems (static method)](#displaydropitems-static-method)
    - [gainRewards (static method)](#gainrewards-static-method)
    - [gainExp (static method)](#gainexp-static-method)
    - [gainGold (static method)](#gaingold-static-method)
    - [gainDropItems (static method)](#gaindropitems-static-method)

---

# utils

## BattleManager (class)

BattleManager

The static class that manages battle progress.

**Signature**

```ts
export declare class BattleManager {
  constructor()
}
```

### setup (static method)

**Signature**

```ts
static setup(troopId: number, canEscape: boolean, canLose: boolean): void;
```

### initMembers (static method)

**Signature**

```ts
static initMembers(): void;
```

### isTpb (static method)

**Signature**

```ts
static isTpb(): boolean;
```

### isActiveTpb (static method)

**Signature**

```ts
static isActiveTpb(): boolean;
```

### isBattleTest (static method)

**Signature**

```ts
static isBattleTest(): boolean;
```

### setBattleTest (static method)

**Signature**

```ts
static setBattleTest(battleTest: boolean): void;
```

### setEventCallback (static method)

**Signature**

```ts
static setEventCallback(callback: (result: number) => void): void;
```

### setLogWindow (static method)

**Signature**

```ts
static setLogWindow(logWindow: Window_BattleLog): void;
```

### setSpriteset (static method)

**Signature**

```ts
static setSpriteset(spriteset: Spriteset_Battle): void;
```

### onEncounter (static method)

**Signature**

```ts
static onEncounter(): void;
```

### ratePreemptive (static method)

**Signature**

```ts
static ratePreemptive(): number;
```

### rateSurprise (static method)

**Signature**

```ts
static rateSurprise(): number;
```

### saveBgmAndBgs (static method)

**Signature**

```ts
static saveBgmAndBgs(): void;
```

### playBattleBgm (static method)

**Signature**

```ts
static playBattleBgm(): void;
```

### playVictoryMe (static method)

**Signature**

```ts
static playVictoryMe(): void;
```

### playDefeatMe (static method)

**Signature**

```ts
static playDefeatMe(): void;
```

### replayBgmAndBgs (static method)

**Signature**

```ts
static replayBgmAndBgs(): void;
```

### makeEscapeRatio (static method)

**Signature**

```ts
static makeEscapeRatio(): void;
```

### update (static method)

**Signature**

```ts
static update(timeActive: boolean): void;
```

### updatePhase (static method)

**Signature**

```ts
static updatePhase(timeActive: boolean): void;
```

### updateEvent (static method)

**Signature**

```ts
static updateEvent(): boolean;
```

### updateEventMain (static method)

**Signature**

```ts
static updateEventMain(): boolean;
```

### isBusy (static method)

**Signature**

```ts
static isBusy(): boolean | "video" | "scroll" | "image" | "message" | "transfer" | "route" | "animation" | "balloon" | "gather" | "action" | "effect" | "movement";
```

### updateTpbInput (static method)

**Signature**

```ts
static updateTpbInput(): void;
```

### checkTpbInputClose (static method)

**Signature**

```ts
static checkTpbInputClose(): void;
```

### checkTpbInputOpen (static method)

**Signature**

```ts
static checkTpbInputOpen(): void;
```

### isPartyTpbInputtable (static method)

**Signature**

```ts
static isPartyTpbInputtable(): boolean;
```

### needsActorInputCancel (static method)

**Signature**

```ts
static needsActorInputCancel(): boolean | null;
```

### isTpbMainPhase (static method)

**Signature**

```ts
static isTpbMainPhase(): boolean;
```

### isInputting (static method)

**Signature**

```ts
static isInputting(): boolean;
```

### isInTurn (static method)

**Signature**

```ts
static isInTurn(): boolean;
```

### isTurnEnd (static method)

**Signature**

```ts
static isTurnEnd(): boolean;
```

### isAborting (static method)

**Signature**

```ts
static isAborting(): boolean;
```

### isBattleEnd (static method)

**Signature**

```ts
static isBattleEnd(): boolean;
```

### canEscape (static method)

**Signature**

```ts
static canEscape(): boolean;
```

### canLose (static method)

**Signature**

```ts
static canLose(): boolean;
```

### isEscaped (static method)

**Signature**

```ts
static isEscaped(): boolean;
```

### actor (static method)

**Signature**

```ts
static actor(): Game_Actor | null;
```

### startBattle (static method)

**Signature**

```ts
static startBattle(): void;
```

### displayStartMessages (static method)

**Signature**

```ts
static displayStartMessages(): void;
```

### startInput (static method)

**Signature**

```ts
static startInput(): void;
```

### inputtingAction (static method)

**Signature**

```ts
static inputtingAction(): Game_Action | null;
```

### selectNextCommand (static method)

**Signature**

```ts
static selectNextCommand(): void;
```

### selectNextActor (static method)

**Signature**

```ts
static selectNextActor(): void;
```

### selectPreviousCommand (static method)

**Signature**

```ts
static selectPreviousCommand(): void;
```

### selectPreviousActor (static method)

**Signature**

```ts
static selectPreviousActor(): void;
```

### changeCurrentActor (static method)

**Signature**

```ts
static changeCurrentActor(forward: boolean): void;
```

### startActorInput (static method)

**Signature**

```ts
static startActorInput(): void;
```

### finishActorInput (static method)

**Signature**

```ts
static finishActorInput(): void;
```

### cancelActorInput (static method)

**Signature**

```ts
static cancelActorInput(): void;
```

### updateStart (static method)

**Signature**

```ts
static updateStart(): void;
```

### startTurn (static method)

**Signature**

```ts
static startTurn(): void;
```

### updateTurn (static method)

**Signature**

```ts
static updateTurn(timeActive: boolean): void;
```

### updateTpb (static method)

**Signature**

```ts
static updateTpb(): void;
```

### updateAllTpbBattlers (static method)

**Signature**

```ts
static updateAllTpbBattlers(): void;
```

### updateTpbBattler (static method)

**Signature**

```ts
static updateTpbBattler(battler: ActionTarget): void;
```

### checkTpbTurnEnd (static method)

**Signature**

```ts
static checkTpbTurnEnd(): void;
```

### processTurn (static method)

**Signature**

```ts
static processTurn(): void;
```

### endBattlerActions (static method)

**Signature**

```ts
static endBattlerActions(battler: ActionTarget): void;
```

### endTurn (static method)

**Signature**

```ts
static endTurn(): void;
```

### updateTurnEnd (static method)

**Signature**

```ts
static updateTurnEnd(): void;
```

### endAllBattlersTurn (static method)

**Signature**

```ts
static endAllBattlersTurn(): void;
```

### displayBattlerStatus (static method)

**Signature**

```ts
static displayBattlerStatus(battler: ActionTarget, current: boolean): void;
```

### getNextSubject (static method)

**Signature**

```ts
static getNextSubject(): ActionTarget | null;
```

### allBattleMembers (static method)

**Signature**

```ts
static allBattleMembers(): (Game_Actor | import("../objects").Game_Enemy)[];
```

### makeActionOrders (static method)

**Signature**

```ts
static makeActionOrders(): void;
```

### startAction (static method)

**Signature**

```ts
static startAction(): void;
```

### updateAction (static method)

**Signature**

```ts
static updateAction(): void;
```

### endAction (static method)

**Signature**

```ts
static endAction(): void;
```

### invokeAction (static method)

**Signature**

```ts
static invokeAction(subject: ActionTarget, target: ActionTarget): void;
```

### invokeNormalAction (static method)

**Signature**

```ts
static invokeNormalAction(subject: ActionTarget, target: ActionTarget): void;
```

### invokeCounterAttack (static method)

**Signature**

```ts
static invokeCounterAttack(subject: ActionTarget, target: ActionTarget): void;
```

### invokeMagicReflection (static method)

**Signature**

```ts
static invokeMagicReflection(subject: ActionTarget, target: ActionTarget): void;
```

### applySubstitute (static method)

**Signature**

```ts
static applySubstitute(target: ActionTarget): ActionTarget;
```

### checkSubstitute (static method)

**Signature**

```ts
static checkSubstitute(target: ActionTarget): boolean;
```

### isActionForced (static method)

**Signature**

```ts
static isActionForced(): boolean;
```

### forceAction (static method)

**Signature**

```ts
static forceAction(battler: ActionTarget): void;
```

### processForcedAction (static method)

**Signature**

```ts
static processForcedAction(): void;
```

### abort (static method)

**Signature**

```ts
static abort(): void;
```

### checkBattleEnd (static method)

**Signature**

```ts
static checkBattleEnd(): boolean;
```

### checkAbort (static method)

**Signature**

```ts
static checkAbort(): boolean;
```

### processVictory (static method)

**Signature**

```ts
static processVictory(): void;
```

### processEscape (static method)

**Signature**

```ts
static processEscape(): boolean;
```

### onEscapeSuccess (static method)

**Signature**

```ts
static onEscapeSuccess(): void;
```

### onEscapeFailure (static method)

**Signature**

```ts
static onEscapeFailure(): void;
```

### processPartyEscape (static method)

**Signature**

```ts
static processPartyEscape(): void;
```

### processAbort (static method)

**Signature**

```ts
static processAbort(): void;
```

### processDefeat (static method)

**Signature**

```ts
static processDefeat(): void;
```

### endBattle (static method)

**Signature**

```ts
static endBattle(result: number): void;
```

### updateBattleEnd (static method)

**Signature**

```ts
static updateBattleEnd(): void;
```

### makeRewards (static method)

**Signature**

```ts
static makeRewards(): void;
```

### displayVictoryMessage (static method)

**Signature**

```ts
static displayVictoryMessage(): void;
```

### displayDefeatMessage (static method)

**Signature**

```ts
static displayDefeatMessage(): void;
```

### displayEscapeSuccessMessage (static method)

**Signature**

```ts
static displayEscapeSuccessMessage(): void;
```

### displayEscapeFailureMessage (static method)

**Signature**

```ts
static displayEscapeFailureMessage(): void;
```

### displayRewards (static method)

**Signature**

```ts
static displayRewards(): void;
```

### displayExp (static method)

**Signature**

```ts
static displayExp(): void;
```

### displayGold (static method)

**Signature**

```ts
static displayGold(): void;
```

### displayDropItems (static method)

**Signature**

```ts
static displayDropItems(): void;
```

### gainRewards (static method)

**Signature**

```ts
static gainRewards(): void;
```

### gainExp (static method)

**Signature**

```ts
static gainExp(): void;
```

### gainGold (static method)

**Signature**

```ts
static gainGold(): void;
```

### gainDropItems (static method)

**Signature**

```ts
static gainDropItems(): void;
```
