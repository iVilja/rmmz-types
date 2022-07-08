---
title: data/skills.d.ts
nav_order: 37
parent: Modules
---

## skills.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [DataSkill (interface)](#dataskill-interface)

---

# utils

## DataSkill (interface)

**Signature**

```ts
export interface DataSkill extends DataItemBase {
  stypeId: SkillType
  mpCost: number
  tpCost: number
  scope: Scope
  occasion: Occasion
  speed: number
  successRate: number
  repeats: number
  tpGain: number
  hitType: HitType
  animationId: AnimationID
  message1: string
  message2: string
  requiredWtypeId1: WeaponType
  requiredWtypeId2: WeaponType
  damage: Damage
  effects: ActionEffectBase[]
}
```
