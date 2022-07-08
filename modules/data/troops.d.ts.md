---
title: data/troops.d.ts
nav_order: 43
parent: Modules
---

## troops.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [DataTroop (interface)](#datatroop-interface)
  - [DataTroopPage (interface)](#datatrooppage-interface)
  - [TroopMember (interface)](#troopmember-interface)
  - [TroopPageCondition (interface)](#trooppagecondition-interface)

---

# utils

## DataTroop (interface)

**Signature**

```ts
export interface DataTroop extends DataBaseBase {
  members: TroopMember[]
  pages: DataTroopPage[]
}
```

## DataTroopPage (interface)

**Signature**

```ts
export interface DataTroopPage {
  conditions: TroopPageCondition
  list: DataCommand[]
  span: number
}
```

## TroopMember (interface)

**Signature**

```ts
export interface TroopMember {
  enemyId: EnemyID
  x: number
  y: number
  hidden: boolean
}
```

## TroopPageCondition (interface)

**Signature**

```ts
export interface TroopPageCondition {
  turnEnding: boolean
  turnValid: boolean
  turnA: number
  turnB: number
  enemyValid: boolean
  enemyHp: number
  enemyIndex: number
  actorValid: boolean
  actorHp: number
  actorId: ActorID
  switchValid: boolean
  switchId: SwitchID
}
```
