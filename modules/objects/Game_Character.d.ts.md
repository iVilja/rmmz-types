---
title: objects/Game_Character.d.ts
nav_order: 69
parent: Modules
---

## Game_Character.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Character (class)](#game_character-class)
    - [initMembers (method)](#initmembers-method)
    - [memorizeMoveRoute (method)](#memorizemoveroute-method)
    - [restoreMoveRoute (method)](#restoremoveroute-method)
    - [isMoveRouteForcing (method)](#ismoverouteforcing-method)
    - [setMoveRoute (method)](#setmoveroute-method)
    - [forceMoveRoute (method)](#forcemoveroute-method)
    - [updateStop (method)](#updatestop-method)
    - [updateRoutineMove (method)](#updateroutinemove-method)
    - [processMoveCommand (method)](#processmovecommand-method)
    - [deltaXFrom (method)](#deltaxfrom-method)
    - [deltaYFrom (method)](#deltayfrom-method)
    - [moveRandom (method)](#moverandom-method)
    - [moveTowardCharacter (method)](#movetowardcharacter-method)
    - [moveAwayFromCharacter (method)](#moveawayfromcharacter-method)
    - [turnTowardCharacter (method)](#turntowardcharacter-method)
    - [turnAwayFromCharacter (method)](#turnawayfromcharacter-method)
    - [turnTowardPlayer (method)](#turntowardplayer-method)
    - [turnAwayFromPlayer (method)](#turnawayfromplayer-method)
    - [moveTowardPlayer (method)](#movetowardplayer-method)
    - [moveAwayFromPlayer (method)](#moveawayfromplayer-method)
    - [moveForward (method)](#moveforward-method)
    - [moveBackward (method)](#movebackward-method)
    - [processRouteEnd (method)](#processrouteend-method)
    - [advanceMoveRouteIndex (method)](#advancemoverouteindex-method)
    - [turnRight90 (method)](#turnright90-method)
    - [turnLeft90 (method)](#turnleft90-method)
    - [turn180 (method)](#turn180-method)
    - [turnRightOrLeft90 (method)](#turnrightorleft90-method)
    - [turnRandom (method)](#turnrandom-method)
    - [swap (method)](#swap-method)
    - [findDirectionTo (method)](#finddirectionto-method)
    - [searchLimit (method)](#searchlimit-method)
    - [\_moveRouteForcing (property)](#_moverouteforcing-property)
    - [\_moveRoute (property)](#_moveroute-property)
    - [\_moveRouteIndex (property)](#_moverouteindex-property)
    - [\_originalMoveRoute (property)](#_originalmoveroute-property)
    - [\_originalMoveRouteIndex (property)](#_originalmoverouteindex-property)
    - [\_waitCount (property)](#_waitcount-property)
  - [PathFindingNode (interface)](#pathfindingnode-interface)

---

# utils

## Game_Character (class)

Game_Character

The superclass of Game_Player, Game_Follower, GameVehicle, and Game_Event.

**Signature**

```ts
export declare class Game_Character {
  constructor()
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void;
```

### memorizeMoveRoute (method)

**Signature**

```ts
memorizeMoveRoute(): void;
```

### restoreMoveRoute (method)

**Signature**

```ts
restoreMoveRoute(): void;
```

### isMoveRouteForcing (method)

**Signature**

```ts
isMoveRouteForcing(): boolean;
```

### setMoveRoute (method)

**Signature**

```ts
setMoveRoute(moveRoute: MoveRoute): void;
```

### forceMoveRoute (method)

**Signature**

```ts
forceMoveRoute(moveRoute: MoveRoute): void;
```

### updateStop (method)

**Signature**

```ts
updateStop(): void;
```

### updateRoutineMove (method)

**Signature**

```ts
updateRoutineMove(): void;
```

### processMoveCommand (method)

**Signature**

```ts
processMoveCommand(command: DataCommand): void;
```

### deltaXFrom (method)

**Signature**

```ts
deltaXFrom(x: number): number;
```

### deltaYFrom (method)

**Signature**

```ts
deltaYFrom(y: number): number;
```

### moveRandom (method)

**Signature**

```ts
moveRandom(): void;
```

### moveTowardCharacter (method)

**Signature**

```ts
moveTowardCharacter(character: Game_Character): void;
```

### moveAwayFromCharacter (method)

**Signature**

```ts
moveAwayFromCharacter(character: Game_Character): void;
```

### turnTowardCharacter (method)

**Signature**

```ts
turnTowardCharacter(character: Game_Character): void;
```

### turnAwayFromCharacter (method)

**Signature**

```ts
turnAwayFromCharacter(character: Game_Character): void;
```

### turnTowardPlayer (method)

**Signature**

```ts
turnTowardPlayer(): void;
```

### turnAwayFromPlayer (method)

**Signature**

```ts
turnAwayFromPlayer(): void;
```

### moveTowardPlayer (method)

**Signature**

```ts
moveTowardPlayer(): void;
```

### moveAwayFromPlayer (method)

**Signature**

```ts
moveAwayFromPlayer(): void;
```

### moveForward (method)

**Signature**

```ts
moveForward(): void;
```

### moveBackward (method)

**Signature**

```ts
moveBackward(): void;
```

### processRouteEnd (method)

**Signature**

```ts
processRouteEnd(): void;
```

### advanceMoveRouteIndex (method)

**Signature**

```ts
advanceMoveRouteIndex(): void;
```

### turnRight90 (method)

**Signature**

```ts
turnRight90(): void;
```

### turnLeft90 (method)

**Signature**

```ts
turnLeft90(): void;
```

### turn180 (method)

**Signature**

```ts
turn180(): void;
```

### turnRightOrLeft90 (method)

**Signature**

```ts
turnRightOrLeft90(): void;
```

### turnRandom (method)

**Signature**

```ts
turnRandom(): void;
```

### swap (method)

**Signature**

```ts
swap(character: Game_Character): void;
```

### findDirectionTo (method)

**Signature**

```ts
findDirectionTo(goalX: number, goalY: number): 0 | 2 | 4 | 6 | 8;
```

### searchLimit (method)

**Signature**

```ts
searchLimit(): number;
```

### \_moveRouteForcing (property)

**Signature**

```ts
_moveRouteForcing: boolean
```

### \_moveRoute (property)

**Signature**

```ts
_moveRoute: MoveRoute | null
```

### \_moveRouteIndex (property)

**Signature**

```ts
_moveRouteIndex: number
```

### \_originalMoveRoute (property)

**Signature**

```ts
_originalMoveRoute: MoveRoute | null
```

### \_originalMoveRouteIndex (property)

**Signature**

```ts
_originalMoveRouteIndex: number
```

### \_waitCount (property)

**Signature**

```ts
_waitCount: number
```

## PathFindingNode (interface)

**Signature**

```ts
export interface PathFindingNode {
  parent: PathFindingNode | null
  x: number
  y: number
  g: number
  f: number
}
```
