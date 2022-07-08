---
title: data/types.d.ts
nav_order: 44
parent: Modules
---

## types.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [ActionDataType (type alias)](#actiondatatype-type-alias)
  - [ActorID (type alias)](#actorid-type-alias)
  - [AnimationID (type alias)](#animationid-type-alias)
  - [ArmorID (type alias)](#armorid-type-alias)
  - [ArmorType (type alias)](#armortype-type-alias)
  - [BalloonIconID (type alias)](#ballooniconid-type-alias)
  - [CharacterID (type alias)](#characterid-type-alias)
  - [ClassID (type alias)](#classid-type-alias)
  - [CommonEventID (type alias)](#commoneventid-type-alias)
  - [DataID (type alias)](#dataid-type-alias)
  - [ElementType (type alias)](#elementtype-type-alias)
  - [EnemyID (type alias)](#enemyid-type-alias)
  - [EquipmentSlotID (type alias)](#equipmentslotid-type-alias)
  - [EquipmentType (type alias)](#equipmenttype-type-alias)
  - [EventID (type alias)](#eventid-type-alias)
  - [ItemID (type alias)](#itemid-type-alias)
  - [MapID (type alias)](#mapid-type-alias)
  - [PictureID (type alias)](#pictureid-type-alias)
  - [SelfSwitchID (type alias)](#selfswitchid-type-alias)
  - [SkillID (type alias)](#skillid-type-alias)
  - [SkillType (type alias)](#skilltype-type-alias)
  - [StateID (type alias)](#stateid-type-alias)
  - [SwitchID (type alias)](#switchid-type-alias)
  - [TileID (type alias)](#tileid-type-alias)
  - [TilesetID (type alias)](#tilesetid-type-alias)
  - [TroopID (type alias)](#troopid-type-alias)
  - [VariableID (type alias)](#variableid-type-alias)
  - [WeaponID (type alias)](#weaponid-type-alias)
  - [WeaponType (type alias)](#weapontype-type-alias)

---

# utils

## ActionDataType (type alias)

**Signature**

```ts
export declare type ActionDataType = 0 | 1 | 2 | 3 | 4 | 5
```

## ActorID (type alias)

**Signature**

```ts
export declare type ActorID = DataID
```

## AnimationID (type alias)

**Signature**

```ts
export declare type AnimationID = DataID
```

## ArmorID (type alias)

**Signature**

```ts
export declare type ArmorID = DataID
```

## ArmorType (type alias)

**Signature**

```ts
export declare type ArmorType = DataID
```

## BalloonIconID (type alias)

**Signature**

```ts
export declare type BalloonIconID = DataID
```

## CharacterID (type alias)

**Signature**

```ts
export declare type CharacterID = -1 | 0 | EventID
```

## ClassID (type alias)

**Signature**

```ts
export declare type ClassID = DataID
```

## CommonEventID (type alias)

**Signature**

```ts
export declare type CommonEventID = DataID
```

## DataID (type alias)

**Signature**

```ts
export declare type DataID = number
```

## ElementType (type alias)

**Signature**

```ts
export declare type ElementType = DataID
```

## EnemyID (type alias)

**Signature**

```ts
export declare type EnemyID = DataID
```

## EquipmentSlotID (type alias)

**Signature**

```ts
export declare type EquipmentSlotID = EquipmentType
```

## EquipmentType (type alias)

**Signature**

```ts
export declare type EquipmentType = DataID
```

## EventID (type alias)

**Signature**

```ts
export declare type EventID = DataID
```

## ItemID (type alias)

**Signature**

```ts
export declare type ItemID = DataID
```

## MapID (type alias)

**Signature**

```ts
export declare type MapID = DataID
```

## PictureID (type alias)

**Signature**

```ts
export declare type PictureID = DataID
```

## SelfSwitchID (type alias)

**Signature**

```ts
export declare type SelfSwitchID = readonly [MapID, EventID, SelfSwitchCharacter]
```

## SkillID (type alias)

**Signature**

```ts
export declare type SkillID = DataID
```

## SkillType (type alias)

**Signature**

```ts
export declare type SkillType = DataID
```

## StateID (type alias)

**Signature**

```ts
export declare type StateID = DataID
```

## SwitchID (type alias)

**Signature**

```ts
export declare type SwitchID = DataID
```

## TileID (type alias)

**Signature**

```ts
export declare type TileID = DataID
```

## TilesetID (type alias)

**Signature**

```ts
export declare type TilesetID = DataID
```

## TroopID (type alias)

**Signature**

```ts
export declare type TroopID = DataID
```

## VariableID (type alias)

**Signature**

```ts
export declare type VariableID = DataID
```

## WeaponID (type alias)

**Signature**

```ts
export declare type WeaponID = DataID
```

## WeaponType (type alias)

**Signature**

```ts
export declare type WeaponType = DataID
```
