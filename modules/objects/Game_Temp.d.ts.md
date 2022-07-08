---
title: objects/Game_Temp.d.ts
nav_order: 87
parent: Modules
---

## Game_Temp.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Temp (class)](#game_temp-class)
    - [isPlaytest (method)](#isplaytest-method)
    - [setDestination (method)](#setdestination-method)
    - [clearDestination (method)](#cleardestination-method)
    - [isDestinationValid (method)](#isdestinationvalid-method)
    - [destinationX (method)](#destinationx-method)
    - [destinationY (method)](#destinationy-method)
    - [setTouchState (method)](#settouchstate-method)
    - [clearTouchState (method)](#cleartouchstate-method)
    - [touchTarget (method)](#touchtarget-method)
    - [touchState (method)](#touchstate-method)
    - [requestBattleRefresh (method)](#requestbattlerefresh-method)
    - [clearBattleRefreshRequest (method)](#clearbattlerefreshrequest-method)
    - [isBattleRefreshRequested (method)](#isbattlerefreshrequested-method)
    - [reserveCommonEvent (method)](#reservecommonevent-method)
    - [retrieveCommonEvent (method)](#retrievecommonevent-method)
    - [clearCommonEventReservation (method)](#clearcommoneventreservation-method)
    - [isCommonEventReserved (method)](#iscommoneventreserved-method)
    - [requestAnimation (method)](#requestanimation-method)
    - [retrieveAnimation (method)](#retrieveanimation-method)
    - [requestBalloon (method)](#requestballoon-method)
    - [retrieveBalloon (method)](#retrieveballoon-method)
    - [lastActionData (method)](#lastactiondata-method)
    - [setLastActionData (method)](#setlastactiondata-method)
    - [setLastUsedSkillId (method)](#setlastusedskillid-method)
    - [setLastUsedItemId (method)](#setlastuseditemid-method)
    - [setLastSubjectActorId (method)](#setlastsubjectactorid-method)
    - [setLastSubjectEnemyIndex (method)](#setlastsubjectenemyindex-method)
    - [setLastTargetActorId (method)](#setlasttargetactorid-method)
    - [setLastTargetEnemyIndex (method)](#setlasttargetenemyindex-method)
    - [\_isPlaytest (property)](#_isplaytest-property)
    - [\_destinationX (property)](#_destinationx-property)
    - [\_destinationY (property)](#_destinationy-property)
    - [\_touchTarget (property)](#_touchtarget-property)
    - [\_touchState (property)](#_touchstate-property)
    - [\_needsBattleRefresh (property)](#_needsbattlerefresh-property)
    - [\_commonEventQueue (property)](#_commoneventqueue-property)
    - [\_animationQueue (property)](#_animationqueue-property)
    - [\_balloonQueue (property)](#_balloonqueue-property)
    - [\_lastActionData (property)](#_lastactiondata-property)
  - [TouchState (type alias)](#touchstate-type-alias)

---

# utils

## Game_Temp (class)

Game_Temp

The game object class for temporary data that is not included in save data.

**Signature**

```ts
export declare class Game_Temp
```

### isPlaytest (method)

**Signature**

```ts
isPlaytest(): boolean;
```

### setDestination (method)

**Signature**

```ts
setDestination(x: number, y: number): void;
```

### clearDestination (method)

**Signature**

```ts
clearDestination(): void;
```

### isDestinationValid (method)

**Signature**

```ts
isDestinationValid(): boolean;
```

### destinationX (method)

**Signature**

```ts
destinationX(): number | null;
```

### destinationY (method)

**Signature**

```ts
destinationY(): number | null;
```

### setTouchState (method)

**Signature**

```ts
setTouchState(target: Game_Battler, state: TouchState): void;
```

### clearTouchState (method)

**Signature**

```ts
clearTouchState(): void;
```

### touchTarget (method)

**Signature**

```ts
touchTarget(): Game_Battler | null;
```

### touchState (method)

**Signature**

```ts
touchState(): string;
```

### requestBattleRefresh (method)

**Signature**

```ts
requestBattleRefresh(): void;
```

### clearBattleRefreshRequest (method)

**Signature**

```ts
clearBattleRefreshRequest(): void;
```

### isBattleRefreshRequested (method)

**Signature**

```ts
isBattleRefreshRequested(): boolean;
```

### reserveCommonEvent (method)

**Signature**

```ts
reserveCommonEvent(commonEventId: CommonEventID): void;
```

### retrieveCommonEvent (method)

**Signature**

```ts
retrieveCommonEvent(): import("../data").DataCommonEvent;
```

### clearCommonEventReservation (method)

**Signature**

```ts
clearCommonEventReservation(): void;
```

### isCommonEventReserved (method)

**Signature**

```ts
isCommonEventReserved(): boolean;
```

### requestAnimation (method)

**Signature**

```ts
requestAnimation(targets: (Game_Character | Game_Battler)[], animationId: AnimationID, mirror?: boolean): void;
```

### retrieveAnimation (method)

**Signature**

```ts
retrieveAnimation(): AnimationRequest | undefined;
```

### requestBalloon (method)

**Signature**

```ts
requestBalloon(target: Game_Character, balloonId: BalloonIconID): void;
```

### retrieveBalloon (method)

**Signature**

```ts
retrieveBalloon(): BalloonRequest | undefined;
```

### lastActionData (method)

**Signature**

```ts
lastActionData(type: ActionDataType): number;
```

### setLastActionData (method)

**Signature**

```ts
setLastActionData(type: ActionDataType, value: number): void;
```

### setLastUsedSkillId (method)

**Signature**

```ts
setLastUsedSkillId(skillID: SkillID): void;
```

### setLastUsedItemId (method)

**Signature**

```ts
setLastUsedItemId(itemID: ItemID): void;
```

### setLastSubjectActorId (method)

**Signature**

```ts
setLastSubjectActorId(actorID: ActorID): void;
```

### setLastSubjectEnemyIndex (method)

**Signature**

```ts
setLastSubjectEnemyIndex(enemyIndex: EnemyID): void;
```

### setLastTargetActorId (method)

**Signature**

```ts
setLastTargetActorId(actorID: ActorID): void;
```

### setLastTargetEnemyIndex (method)

**Signature**

```ts
setLastTargetEnemyIndex(enemyIndex: EnemyID): void;
```

### \_isPlaytest (property)

**Signature**

```ts
_isPlaytest: boolean
```

### \_destinationX (property)

**Signature**

```ts
_destinationX: number | null
```

### \_destinationY (property)

**Signature**

```ts
_destinationY: number | null
```

### \_touchTarget (property)

**Signature**

```ts
_touchTarget: Game_Battler | null
```

### \_touchState (property)

**Signature**

```ts
_touchState: string
```

### \_needsBattleRefresh (property)

**Signature**

```ts
_needsBattleRefresh: boolean
```

### \_commonEventQueue (property)

**Signature**

```ts
_commonEventQueue: number[]
```

### \_animationQueue (property)

**Signature**

```ts
_animationQueue: AnimationRequest[]
```

### \_balloonQueue (property)

**Signature**

```ts
_balloonQueue: BalloonRequest[]
```

### \_lastActionData (property)

**Signature**

```ts
_lastActionData: [number, number, number, number, number, number]
```

## TouchState (type alias)

**Signature**

```ts
export declare type TouchState = 'select' | 'click'
```
