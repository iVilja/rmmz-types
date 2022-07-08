---
title: data/items.d.ts
nav_order: 33
parent: Modules
---

## items.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [DataItem (interface)](#dataitem-interface)
  - [ItemType (type alias)](#itemtype-type-alias)

---

# utils

## DataItem (interface)

**Signature**

```ts
export interface DataItem extends DataPricedItemBase {
  itypeId: ItemType
  price: number
  consumable: boolean
  scope: Scope
  occasion: Occasion
  speed: number
  successRate: number
  repeats: number
  tpGain: number
  hitType: HitType
  animationId: AnimationID
  damage: Damage
  effects: ActionEffectBase[]
}
```

## ItemType (type alias)

**Signature**

```ts
export declare type ItemType = 0 | 1 | 2 | 3
```
