---
title: data/actions.d.ts
nav_order: 22
parent: Modules
---

## actions.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [ActionEffect (type alias)](#actioneffect-type-alias)
  - [ActionEffectBase (type alias)](#actioneffectbase-type-alias)
  - [ActionItem (type alias)](#actionitem-type-alias)
  - [ActionState (type alias)](#actionstate-type-alias)
  - [ActionTarget (type alias)](#actiontarget-type-alias)
  - [ActionUnit (type alias)](#actionunit-type-alias)
  - [BattlerEffectType (type alias)](#battlereffecttype-type-alias)
  - [BattlerMotionType (type alias)](#battlermotiontype-type-alias)
  - [HitType (type alias)](#hittype-type-alias)
  - [SpecialEffectType (type alias)](#specialeffecttype-type-alias)

---

# utils

## ActionEffect (type alias)

**Signature**

```ts
export declare type ActionEffect<TCode> = Extract<
  ActionEffectBase,
  {
    code: TCode
  }
>
```

## ActionEffectBase (type alias)

**Signature**

```ts
export declare type ActionEffectBase =
  | $<typeof Game_Action.EFFECT_RECOVER_HP, undefined, number, number>
  | $<typeof Game_Action.EFFECT_RECOVER_MP, undefined, number, number>
  | $<typeof Game_Action.EFFECT_GAIN_TP, undefined, number>
  | $<typeof Game_Action.EFFECT_ADD_STATE, StateID, number>
  | $<typeof Game_Action.EFFECT_REMOVE_STATE, StateID, number>
  | $<typeof Game_Action.EFFECT_ADD_BUFF, ParamID, number>
  | $<typeof Game_Action.EFFECT_ADD_DEBUFF, ParamID, number>
  | $<typeof Game_Action.EFFECT_REMOVE_BUFF, ParamID>
  | $<typeof Game_Action.EFFECT_REMOVE_DEBUFF, ParamID>
  | $<typeof Game_Action.EFFECT_SPECIAL, SpecialEffectType>
  | $<typeof Game_Action.EFFECT_GROW, ParamID, number>
  | $<typeof Game_Action.EFFECT_LEARN_SKILL, SkillID>
  | $<typeof Game_Action.EFFECT_COMMON_EVENT, CommonEventID>
```

## ActionItem (type alias)

**Signature**

```ts
export declare type ActionItem = DataSkill | DataItem
```

## ActionState (type alias)

**Signature**

```ts
export declare type ActionState = 'undecided' | 'inputting' | 'waiting' | 'acting' | 'done'
```

## ActionTarget (type alias)

**Signature**

```ts
export declare type ActionTarget = Game_Actor | Game_Enemy
```

## ActionUnit (type alias)

**Signature**

```ts
export declare type ActionUnit = Game_Party | Game_Troop
```

## BattlerEffectType (type alias)

**Signature**

```ts
export declare type BattlerEffectType =
  | 'whiten'
  | 'blink'
  | 'collapse'
  | 'bossCollapse'
  | 'instantCollapse'
  | 'appear'
  | 'disappear'
```

## BattlerMotionType (type alias)

**Signature**

```ts
export declare type BattlerMotionType =
  | 'walk'
  | 'wait'
  | 'chant'
  | 'guard'
  | 'damage'
  | 'evade'
  | 'thrust'
  | 'swing'
  | 'missile'
  | 'skill'
  | 'spell'
  | 'item'
  | 'escape'
  | 'victory'
  | 'dying'
  | 'abnormal'
  | 'sleep'
  | 'dead'
```

## HitType (type alias)

**Signature**

```ts
export declare type HitType =
  | typeof Game_Action.HITTYPE_CERTAIN
  | typeof Game_Action.HITTYPE_PHYSICAL
  | typeof Game_Action.HITTYPE_MAGICAL
```

## SpecialEffectType (type alias)

**Signature**

```ts
export declare type SpecialEffectType = typeof Game_Action.SPECIAL_EFFECT_ESCAPE
```
