---
title: objects/Game_Unit.d.ts
nav_order: 90
parent: Modules
---

## Game_Unit.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Unit (class)](#game_unit-class)
    - [inBattle (method)](#inbattle-method)
    - [members (method)](#members-method)
    - [aliveMembers (method)](#alivemembers-method)
    - [deadMembers (method)](#deadmembers-method)
    - [movableMembers (method)](#movablemembers-method)
    - [clearActions (method)](#clearactions-method)
    - [agility (method)](#agility-method)
    - [tgrSum (method)](#tgrsum-method)
    - [randomTarget (method)](#randomtarget-method)
    - [randomDeadTarget (method)](#randomdeadtarget-method)
    - [smoothTarget (method)](#smoothtarget-method)
    - [smoothDeadTarget (method)](#smoothdeadtarget-method)
    - [clearResults (method)](#clearresults-method)
    - [onBattleStart (method)](#onbattlestart-method)
    - [onBattleEnd (method)](#onbattleend-method)
    - [makeActions (method)](#makeactions-method)
    - [select (method)](#select-method)
    - [isAllDead (method)](#isalldead-method)
    - [substituteBattler (method)](#substitutebattler-method)
    - [tpbBaseSpeed (method)](#tpbbasespeed-method)
    - [tpbReferenceTime (method)](#tpbreferencetime-method)
    - [updateTpb (method)](#updatetpb-method)
    - [\_inBattle (property)](#_inbattle-property)

---

# utils

## Game_Unit (class)

Game_Unit

The superclass of Game_Party and Game_Troop.

**Signature**

```ts
export declare class Game_Unit<T>
```

### inBattle (method)

**Signature**

```ts
inBattle(): boolean;
```

### members (method)

**Signature**

```ts
members(): T[];
```

### aliveMembers (method)

**Signature**

```ts
aliveMembers(): T[];
```

### deadMembers (method)

**Signature**

```ts
deadMembers(): T[];
```

### movableMembers (method)

**Signature**

```ts
movableMembers(): T[];
```

### clearActions (method)

**Signature**

```ts
clearActions(): void;
```

### agility (method)

**Signature**

```ts
agility(): number;
```

### tgrSum (method)

**Signature**

```ts
tgrSum(): number;
```

### randomTarget (method)

**Signature**

```ts
randomTarget(): T | null;
```

### randomDeadTarget (method)

**Signature**

```ts
randomDeadTarget(): T | null;
```

### smoothTarget (method)

**Signature**

```ts
smoothTarget(index: number): T;
```

### smoothDeadTarget (method)

**Signature**

```ts
smoothDeadTarget(index: number): T;
```

### clearResults (method)

**Signature**

```ts
clearResults(): void;
```

### onBattleStart (method)

**Signature**

```ts
onBattleStart(advantageous: boolean): void;
```

### onBattleEnd (method)

**Signature**

```ts
onBattleEnd(): void;
```

### makeActions (method)

**Signature**

```ts
makeActions(): void;
```

### select (method)

**Signature**

```ts
select(activeMember: Game_Battler | null): void;
```

### isAllDead (method)

**Signature**

```ts
isAllDead(): boolean;
```

### substituteBattler (method)

**Signature**

```ts
substituteBattler(): T | null;
```

### tpbBaseSpeed (method)

**Signature**

```ts
tpbBaseSpeed(): number;
```

### tpbReferenceTime (method)

**Signature**

```ts
tpbReferenceTime(): 60 | 240;
```

### updateTpb (method)

**Signature**

```ts
updateTpb(): void;
```

### \_inBattle (property)

**Signature**

```ts
_inBattle: boolean
```
