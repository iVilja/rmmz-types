---
title: objects/Game_ActionResult.d.ts
nav_order: 64
parent: Modules
---

## Game_ActionResult.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_ActionResult (class)](#game_actionresult-class)
    - [clear (method)](#clear-method)
    - [addedStateObjects (method)](#addedstateobjects-method)
    - [removedStateObjects (method)](#removedstateobjects-method)
    - [isStatusAffected (method)](#isstatusaffected-method)
    - [isHit (method)](#ishit-method)
    - [isStateAdded (method)](#isstateadded-method)
    - [pushAddedState (method)](#pushaddedstate-method)
    - [isStateRemoved (method)](#isstateremoved-method)
    - [pushRemovedState (method)](#pushremovedstate-method)
    - [isBuffAdded (method)](#isbuffadded-method)
    - [pushAddedBuff (method)](#pushaddedbuff-method)
    - [isDebuffAdded (method)](#isdebuffadded-method)
    - [pushAddedDebuff (method)](#pushaddeddebuff-method)
    - [isBuffRemoved (method)](#isbuffremoved-method)
    - [pushRemovedBuff (method)](#pushremovedbuff-method)
    - [used (property)](#used-property)
    - [missed (property)](#missed-property)
    - [evaded (property)](#evaded-property)
    - [physical (property)](#physical-property)
    - [drain (property)](#drain-property)
    - [critical (property)](#critical-property)
    - [success (property)](#success-property)
    - [hpAffected (property)](#hpaffected-property)
    - [hpDamage (property)](#hpdamage-property)
    - [mpDamage (property)](#mpdamage-property)
    - [tpDamage (property)](#tpdamage-property)
    - [addedStates (property)](#addedstates-property)
    - [removedStates (property)](#removedstates-property)
    - [addedBuffs (property)](#addedbuffs-property)
    - [addedDebuffs (property)](#addeddebuffs-property)
    - [removedBuffs (property)](#removedbuffs-property)

---

# utils

## Game_ActionResult (class)

Game_ActionResult

The game object class for a result of a battle action. For convinience, all
// member variables in this class are public.

**Signature**

```ts
export declare class Game_ActionResult {
  constructor()
}
```

### clear (method)

**Signature**

```ts
clear(): void;
```

### addedStateObjects (method)

**Signature**

```ts
addedStateObjects(): import("../data").DataState[];
```

### removedStateObjects (method)

**Signature**

```ts
removedStateObjects(): import("../data").DataState[];
```

### isStatusAffected (method)

**Signature**

```ts
isStatusAffected(): boolean;
```

### isHit (method)

**Signature**

```ts
isHit(): boolean;
```

### isStateAdded (method)

**Signature**

```ts
isStateAdded(stateId: StateID): boolean;
```

### pushAddedState (method)

**Signature**

```ts
pushAddedState(stateId: StateID): void;
```

### isStateRemoved (method)

**Signature**

```ts
isStateRemoved(stateId: StateID): boolean;
```

### pushRemovedState (method)

**Signature**

```ts
pushRemovedState(stateId: StateID): void;
```

### isBuffAdded (method)

**Signature**

```ts
isBuffAdded(paramId: ParamID): boolean;
```

### pushAddedBuff (method)

**Signature**

```ts
pushAddedBuff(paramId: ParamID): void;
```

### isDebuffAdded (method)

**Signature**

```ts
isDebuffAdded(paramId: ParamID): boolean;
```

### pushAddedDebuff (method)

**Signature**

```ts
pushAddedDebuff(paramId: ParamID): void;
```

### isBuffRemoved (method)

**Signature**

```ts
isBuffRemoved(paramId: ParamID): boolean;
```

### pushRemovedBuff (method)

**Signature**

```ts
pushRemovedBuff(paramId: ParamID): void;
```

### used (property)

**Signature**

```ts
used: boolean
```

### missed (property)

**Signature**

```ts
missed: boolean
```

### evaded (property)

**Signature**

```ts
evaded: boolean
```

### physical (property)

**Signature**

```ts
physical: boolean
```

### drain (property)

**Signature**

```ts
drain: boolean
```

### critical (property)

**Signature**

```ts
critical: boolean
```

### success (property)

**Signature**

```ts
success: boolean
```

### hpAffected (property)

**Signature**

```ts
hpAffected: boolean
```

### hpDamage (property)

**Signature**

```ts
hpDamage: number
```

### mpDamage (property)

**Signature**

```ts
mpDamage: number
```

### tpDamage (property)

**Signature**

```ts
tpDamage: number
```

### addedStates (property)

**Signature**

```ts
addedStates: number[]
```

### removedStates (property)

**Signature**

```ts
removedStates: number[]
```

### addedBuffs (property)

**Signature**

```ts
addedBuffs: ParamID[]
```

### addedDebuffs (property)

**Signature**

```ts
addedDebuffs: ParamID[]
```

### removedBuffs (property)

**Signature**

```ts
removedBuffs: ParamID[]
```
