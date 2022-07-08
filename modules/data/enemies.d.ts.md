---
title: data/enemies.d.ts
nav_order: 29
parent: Modules
---

## enemies.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [ConditionType (type alias)](#conditiontype-type-alias)
  - [DataEnemy (interface)](#dataenemy-interface)
  - [DropItem (interface)](#dropitem-interface)
  - [DropItemType (type alias)](#dropitemtype-type-alias)
  - [EnemyAction (interface)](#enemyaction-interface)

---

# utils

## ConditionType (type alias)

**Signature**

```ts
export declare type ConditionType = 0 | 1 | 2 | 3 | 4 | 5 | 6
```

## DataEnemy (interface)

**Signature**

```ts
export interface DataEnemy extends DataBase {
  battlerHue: number
  battlerName: string
  params: [number, number, number, number, number, number, number, number]
  exp: number
  gold: number
  dropItems: [DropItem?, DropItem?, DropItem?]
  actions: EnemyAction[]
  traits: Trait[]
}
```

## DropItem (interface)

**Signature**

```ts
export interface DropItem {
  kind: DropItemType
  dataId: DataID
  denominator: number
}
```

## DropItemType (type alias)

**Signature**

```ts
export declare type DropItemType = 0 | 1 | 2 | 3
```

## EnemyAction (interface)

**Signature**

```ts
export interface EnemyAction {
  skillId: SkillID
  rating: number
  conditionType: ConditionType
  conditionParam1: number
  conditionParam2: number
}
```
