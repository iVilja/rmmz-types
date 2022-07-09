---
title: objects/Game_Event.d.ts
nav_order: 74
parent: Modules
---

## Game_Event.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Event (class)](#game_event-class)
    - [initMembers (method)](#initmembers-method)
    - [eventId (method)](#eventid-method)
    - [event (method)](#event-method)
    - [page (method)](#page-method)
    - [list (method)](#list-method)
    - [isCollidedWithCharacters (method)](#iscollidedwithcharacters-method)
    - [isCollidedWithEvents (method)](#iscollidedwithevents-method)
    - [isCollidedWithPlayerCharacters (method)](#iscollidedwithplayercharacters-method)
    - [lock (method)](#lock-method)
    - [unlock (method)](#unlock-method)
    - [updateStop (method)](#updatestop-method)
    - [updateSelfMovement (method)](#updateselfmovement-method)
    - [stopCountThreshold (method)](#stopcountthreshold-method)
    - [moveTypeRandom (method)](#movetyperandom-method)
    - [moveTypeTowardPlayer (method)](#movetypetowardplayer-method)
    - [isNearThePlayer (method)](#isneartheplayer-method)
    - [moveTypeCustom (method)](#movetypecustom-method)
    - [isStarting (method)](#isstarting-method)
    - [clearStartingFlag (method)](#clearstartingflag-method)
    - [isTriggerIn (method)](#istriggerin-method)
    - [start (method)](#start-method)
    - [erase (method)](#erase-method)
    - [refresh (method)](#refresh-method)
    - [findProperPageIndex (method)](#findproperpageindex-method)
    - [meetsConditions (method)](#meetsconditions-method)
    - [setupPage (method)](#setuppage-method)
    - [clearPageSettings (method)](#clearpagesettings-method)
    - [setupPageSettings (method)](#setuppagesettings-method)
    - [isOriginalPattern (method)](#isoriginalpattern-method)
    - [resetPattern (method)](#resetpattern-method)
    - [checkEventTriggerTouch (method)](#checkeventtriggertouch-method)
    - [checkEventTriggerAuto (method)](#checkeventtriggerauto-method)
    - [update (method)](#update-method)
    - [updateParallel (method)](#updateparallel-method)
    - [locate (method)](#locate-method)
    - [forceMoveRoute (method)](#forcemoveroute-method)
    - [\_moveType (property)](#_movetype-property)
    - [\_trigger (property)](#_trigger-property)
    - [\_starting (property)](#_starting-property)
    - [\_erased (property)](#_erased-property)
    - [\_pageIndex (property)](#_pageindex-property)
    - [\_originalPattern (property)](#_originalpattern-property)
    - [\_originalDirection (property)](#_originaldirection-property)
    - [\_prelockDirection (property)](#_prelockdirection-property)
    - [\_locked (property)](#_locked-property)
    - [\_mapId (property)](#_mapid-property)
    - [\_eventId (property)](#_eventid-property)
    - [\_interpreter (property)](#_interpreter-property)

---

# utils

## Game_Event (class)

Game_Event

The game object class for an event. It contains functionality for event page
// switching and running parallel process events.

**Signature**

```ts
export declare class Game_Event {
  constructor(mapId: MapID, eventId: EventID)
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void
```

### eventId (method)

**Signature**

```ts
eventId(): number
```

### event (method)

**Signature**

```ts
event(): import("../data").DataEvent
```

### page (method)

**Signature**

```ts
page(): DataEventPage
```

### list (method)

**Signature**

```ts
list(): import("../data").DataCommand[]
```

### isCollidedWithCharacters (method)

**Signature**

```ts
isCollidedWithCharacters(x: number, y: number): boolean
```

### isCollidedWithEvents (method)

**Signature**

```ts
isCollidedWithEvents(x: number, y: number): boolean
```

### isCollidedWithPlayerCharacters (method)

**Signature**

```ts
isCollidedWithPlayerCharacters(x: number, y: number): boolean
```

### lock (method)

**Signature**

```ts
lock(): void
```

### unlock (method)

**Signature**

```ts
unlock(): void
```

### updateStop (method)

**Signature**

```ts
updateStop(): void
```

### updateSelfMovement (method)

**Signature**

```ts
updateSelfMovement(): void
```

### stopCountThreshold (method)

**Signature**

```ts
stopCountThreshold(): number
```

### moveTypeRandom (method)

**Signature**

```ts
moveTypeRandom(): void
```

### moveTypeTowardPlayer (method)

**Signature**

```ts
moveTypeTowardPlayer(): void
```

### isNearThePlayer (method)

**Signature**

```ts
isNearThePlayer(): boolean
```

### moveTypeCustom (method)

**Signature**

```ts
moveTypeCustom(): void
```

### isStarting (method)

**Signature**

```ts
isStarting(): boolean
```

### clearStartingFlag (method)

**Signature**

```ts
clearStartingFlag(): void
```

### isTriggerIn (method)

**Signature**

```ts
isTriggerIn(triggers: number[]): boolean
```

### start (method)

**Signature**

```ts
start(): void
```

### erase (method)

**Signature**

```ts
erase(): void
```

### refresh (method)

**Signature**

```ts
refresh(): void
```

### findProperPageIndex (method)

**Signature**

```ts
findProperPageIndex(): number
```

### meetsConditions (method)

**Signature**

```ts
meetsConditions(page: DataEventPage): boolean
```

### setupPage (method)

**Signature**

```ts
setupPage(): void
```

### clearPageSettings (method)

**Signature**

```ts
clearPageSettings(): void
```

### setupPageSettings (method)

**Signature**

```ts
setupPageSettings(): void
```

### isOriginalPattern (method)

**Signature**

```ts
isOriginalPattern(): boolean
```

### resetPattern (method)

**Signature**

```ts
resetPattern(): void
```

### checkEventTriggerTouch (method)

**Signature**

```ts
checkEventTriggerTouch(x: number, y: number): void
```

### checkEventTriggerAuto (method)

**Signature**

```ts
checkEventTriggerAuto(): void
```

### update (method)

**Signature**

```ts
update(): void
```

### updateParallel (method)

**Signature**

```ts
updateParallel(): void
```

### locate (method)

**Signature**

```ts
locate(x: number, y: number): void
```

### forceMoveRoute (method)

**Signature**

```ts
forceMoveRoute(moveRoute: MoveRoute): void
```

### \_moveType (property)

**Signature**

```ts
_moveType: number
```

### \_trigger (property)

**Signature**

```ts
_trigger: number | null
```

### \_starting (property)

**Signature**

```ts
_starting: boolean
```

### \_erased (property)

**Signature**

```ts
_erased: boolean
```

### \_pageIndex (property)

**Signature**

```ts
_pageIndex: number
```

### \_originalPattern (property)

**Signature**

```ts
_originalPattern: number
```

### \_originalDirection (property)

**Signature**

```ts
_originalDirection: number
```

### \_prelockDirection (property)

**Signature**

```ts
_prelockDirection: Direction
```

### \_locked (property)

**Signature**

```ts
_locked: boolean
```

### \_mapId (property)

**Signature**

```ts
_mapId: number
```

### \_eventId (property)

**Signature**

```ts
_eventId: number
```

### \_interpreter (property)

**Signature**

```ts
_interpreter: Game_Interpreter | null
```
