---
title: data/states.d.ts
nav_order: 39
parent: Modules
---

## states.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [AutoRemovalTiming (type alias)](#autoremovaltiming-type-alias)
  - [DataState (interface)](#datastate-interface)
  - [Motion (type alias)](#motion-type-alias)
  - [Overlay (type alias)](#overlay-type-alias)
  - [Restriction (type alias)](#restriction-type-alias)

---

# utils

## AutoRemovalTiming (type alias)

**Signature**

```ts
export declare type AutoRemovalTiming = 0 | 1 | 2
```

## DataState (interface)

**Signature**

```ts
export interface DataState extends DataBase {
  iconIndex: number
  restriction: Restriction
  priority: number
  motion: Motion
  overlay: Overlay
  removeAtBattleEnd: boolean
  removeByRestriction: boolean
  autoRemovalTiming: AutoRemovalTiming
  minTurns: number
  maxTurns: number
  removeByDamage: boolean
  chanceByDamage: number
  removeByWalking: boolean
  stepsToRemove: number
  message1: string
  message2: string
  message3: string
  message4: string
  traits: Trait[]
  releaseByDamage: boolean
  messageType: number
}
```

## Motion (type alias)

**Signature**

```ts
export declare type Motion = 0 | 1 | 2 | 3
```

## Overlay (type alias)

**Signature**

```ts
export declare type Overlay = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
```

## Restriction (type alias)

**Signature**

```ts
export declare type Restriction = 0 | 1 | 2 | 3 | 4
```
