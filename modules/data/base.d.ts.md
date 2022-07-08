---
title: data/base.d.ts
nav_order: 25
parent: Modules
---

## base.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Color (type alias)](#color-type-alias)
  - [Damage (interface)](#damage-interface)
  - [DamageType (type alias)](#damagetype-type-alias)
  - [DataAudio (interface)](#dataaudio-interface)
  - [DataBase (interface)](#database-interface)
  - [DataBaseBase (interface)](#databasebase-interface)
  - [DataClassID (type alias)](#dataclassid-type-alias)
  - [DataItemBase (interface)](#dataitembase-interface)
  - [DataPricedItemBase (interface)](#datapriceditembase-interface)
  - [Direction (type alias)](#direction-type-alias)
  - [Meta (type alias)](#meta-type-alias)
  - [Occasion (type alias)](#occasion-type-alias)
  - [Scope (type alias)](#scope-type-alias)
  - [Trait (interface)](#trait-interface)
  - [TraitType (type alias)](#traittype-type-alias)

---

# utils

## Color (type alias)

**Signature**

```ts
export declare type Color = readonly [number, number, number, number]
```

## Damage (interface)

**Signature**

```ts
export interface Damage {
  type: DamageType
  elementId: ElementType
  formula: string
  variance: number
  critical: boolean
}
```

## DamageType (type alias)

**Signature**

```ts
export declare type DamageType = 0 | 1 | 2 | 3 | 4 | 5 | 6
```

## DataAudio (interface)

**Signature**

```ts
export interface DataAudio {
  name: string
  pan: number
  pitch: number
  volume: number
  pos?: number
}
```

## DataBase (interface)

**Signature**

```ts
export interface DataBase extends DataBaseBase {
  note: string
  meta: Meta
}
```

## DataBaseBase (interface)

**Signature**

```ts
export interface DataBaseBase {
  id: DataID
  name: string
}
```

## DataClassID (type alias)

**Signature**

```ts
export declare type DataClassID = 'item' | 'skill' | 'weapon' | 'armor'
```

## DataItemBase (interface)

**Signature**

```ts
export interface DataItemBase extends DataBase {
  description: string
  iconIndex: number
}
```

## DataPricedItemBase (interface)

**Signature**

```ts
export interface DataPricedItemBase extends DataItemBase {
  price: number
}
```

## Direction (type alias)

**Signature**

```ts
export declare type Direction = 0 | 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9
```

## Meta (type alias)

**Signature**

```ts
export declare type Meta = Record<string, unknown>
```

## Occasion (type alias)

**Signature**

```ts
export declare type Occasion = 0 | 1 | 2 | 3
```

## Scope (type alias)

**Signature**

```ts
export declare type Scope = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
```

## Trait (interface)

**Signature**

```ts
export interface Trait {
  code: TraitType
  dataId: DataID
  value: number
}
```

## TraitType (type alias)

**Signature**

```ts
export declare type TraitType =
  | typeof Game_BattlerBase.TRAIT_ELEMENT_RATE
  | typeof Game_BattlerBase.TRAIT_DEBUFF_RATE
  | typeof Game_BattlerBase.TRAIT_STATE_RATE
  | typeof Game_BattlerBase.TRAIT_STATE_RESIST
  | typeof Game_BattlerBase.TRAIT_PARAM
  | typeof Game_BattlerBase.TRAIT_XPARAM
  | typeof Game_BattlerBase.TRAIT_SPARAM
  | typeof Game_BattlerBase.TRAIT_ATTACK_ELEMENT
  | typeof Game_BattlerBase.TRAIT_ATTACK_STATE
  | typeof Game_BattlerBase.TRAIT_ATTACK_SPEED
  | typeof Game_BattlerBase.TRAIT_ATTACK_TIMES
  | typeof Game_BattlerBase.TRAIT_ATTACK_SKILL
  | typeof Game_BattlerBase.TRAIT_STYPE_ADD
  | typeof Game_BattlerBase.TRAIT_STYPE_SEAL
  | typeof Game_BattlerBase.TRAIT_SKILL_ADD
  | typeof Game_BattlerBase.TRAIT_SKILL_SEAL
  | typeof Game_BattlerBase.TRAIT_EQUIP_WTYPE
  | typeof Game_BattlerBase.TRAIT_EQUIP_ATYPE
  | typeof Game_BattlerBase.TRAIT_EQUIP_LOCK
  | typeof Game_BattlerBase.TRAIT_EQUIP_SEAL
  | typeof Game_BattlerBase.TRAIT_SLOT_TYPE
  | typeof Game_BattlerBase.TRAIT_ACTION_PLUS
  | typeof Game_BattlerBase.TRAIT_SPECIAL_FLAG
  | typeof Game_BattlerBase.TRAIT_COLLAPSE_TYPE
  | typeof Game_BattlerBase.TRAIT_PARTY_ABILITY
```
