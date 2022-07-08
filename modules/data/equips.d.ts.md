---
title: data/equips.d.ts
nav_order: 30
parent: Modules
---

## equips.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [DataArmor (interface)](#dataarmor-interface)
  - [DataEquipment (interface)](#dataequipment-interface)
  - [DataWeapon (interface)](#dataweapon-interface)

---

# utils

## DataArmor (interface)

**Signature**

```ts
export interface DataArmor extends DataEquipment {
  etypeId: Exclude<EquipmentType, 1>
  atypeId: ArmorType
}
```

## DataEquipment (interface)

**Signature**

```ts
export interface DataEquipment extends DataPricedItemBase {
  etypeId: EquipmentType
  traits: Trait[]
  params: [number, number, number, number, number, number, number, number]
}
```

## DataWeapon (interface)

**Signature**

```ts
export interface DataWeapon extends DataEquipment {
  etypeId: 1
  wtypeId: WeaponType
  animationId: 0
}
```
