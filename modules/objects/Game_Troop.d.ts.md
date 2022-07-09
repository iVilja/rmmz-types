---
title: objects/Game_Troop.d.ts
nav_order: 90
parent: Modules
---

## Game_Troop.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Troop (class)](#game_troop-class)
    - [isEventRunning (method)](#iseventrunning-method)
    - [updateInterpreter (method)](#updateinterpreter-method)
    - [turnCount (method)](#turncount-method)
    - [members (method)](#members-method)
    - [clear (method)](#clear-method)
    - [troop (method)](#troop-method)
    - [setup (method)](#setup-method)
    - [makeUniqueNames (method)](#makeuniquenames-method)
    - [updatePluralFlags (method)](#updatepluralflags-method)
    - [letterTable (method)](#lettertable-method)
    - [enemyNames (method)](#enemynames-method)
    - [meetsConditions (method)](#meetsconditions-method)
    - [setupBattleEvent (method)](#setupbattleevent-method)
    - [increaseTurn (method)](#increaseturn-method)
    - [expTotal (method)](#exptotal-method)
    - [goldTotal (method)](#goldtotal-method)
    - [goldRate (method)](#goldrate-method)
    - [makeDropItems (method)](#makedropitems-method)
    - [isTpbTurnEnd (method)](#istpbturnend-method)
    - [\_interpreter (property)](#_interpreter-property)
    - [\_troopId (property)](#_troopid-property)
    - [\_eventFlags (property)](#_eventflags-property)
    - [\_enemies (property)](#_enemies-property)
    - [\_turnCount (property)](#_turncount-property)
    - [\_namesCount (property)](#_namescount-property)

---

# utils

## Game_Troop (class)

Game_Troop

The game object class for a troop and the battle-related data.

**Signature**

```ts
export declare class Game_Troop {
  constructor()
}
```

### isEventRunning (method)

**Signature**

```ts
isEventRunning(): boolean
```

### updateInterpreter (method)

**Signature**

```ts
updateInterpreter(): void
```

### turnCount (method)

**Signature**

```ts
turnCount(): number
```

### members (method)

**Signature**

```ts
members(): Game_Enemy[]
```

### clear (method)

**Signature**

```ts
clear(): void
```

### troop (method)

**Signature**

```ts
troop(): import("../data").DataTroop
```

### setup (method)

**Signature**

```ts
setup(troopId: TroopID): void
```

### makeUniqueNames (method)

**Signature**

```ts
makeUniqueNames(): void
```

### updatePluralFlags (method)

**Signature**

```ts
updatePluralFlags(): void
```

### letterTable (method)

**Signature**

```ts
letterTable(): string[]
```

### enemyNames (method)

**Signature**

```ts
enemyNames(): string[]
```

### meetsConditions (method)

**Signature**

```ts
meetsConditions(page: DataTroopPage): boolean
```

### setupBattleEvent (method)

**Signature**

```ts
setupBattleEvent(): void
```

### increaseTurn (method)

**Signature**

```ts
increaseTurn(): void
```

### expTotal (method)

**Signature**

```ts
expTotal(): number
```

### goldTotal (method)

**Signature**

```ts
goldTotal(): number
```

### goldRate (method)

**Signature**

```ts
goldRate(): 1 | 2
```

### makeDropItems (method)

**Signature**

```ts
makeDropItems(): DataItemBase[]
```

### isTpbTurnEnd (method)

**Signature**

```ts
isTpbTurnEnd(): boolean
```

### \_interpreter (property)

**Signature**

```ts
_interpreter: Game_Interpreter
```

### \_troopId (property)

**Signature**

```ts
_troopId: number
```

### \_eventFlags (property)

**Signature**

```ts
_eventFlags: Record<number, boolean>
```

### \_enemies (property)

**Signature**

```ts
_enemies: Game_Enemy[]
```

### \_turnCount (property)

**Signature**

```ts
_turnCount: number
```

### \_namesCount (property)

**Signature**

```ts
_namesCount: Record<string, number>
```
