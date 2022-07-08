---
title: data/system.d.ts
nav_order: 40
parent: Modules
---

## system.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Advanced (interface)](#advanced-interface)
  - [AttackMotion (interface)](#attackmotion-interface)
  - [AttackMotionImage (type alias)](#attackmotionimage-type-alias)
  - [AttackMotionType (type alias)](#attackmotiontype-type-alias)
  - [BattleSystem (type alias)](#battlesystem-type-alias)
  - [DataSystem (interface)](#datasystem-interface)
  - [DataVehicle (interface)](#datavehicle-interface)
  - [TitleCommandWindow (interface)](#titlecommandwindow-interface)
  - [VehicleType (type alias)](#vehicletype-type-alias)

---

# utils

## Advanced (interface)

**Signature**

```ts
export interface Advanced {
  gameId: number
  screenWidth: number
  screenHeight: number
  uiAreaWidth: number
  uiAreaHeight: number
  mainFontFilename: string
  numberFontFilename: string
  fallbackFonts: string
  fontSize: number
  windowOpacity?: number
}
```

## AttackMotion (interface)

**Signature**

```ts
export interface AttackMotion {
  type: AttackMotionType
  weaponImageId: AttackMotionImage
}
```

## AttackMotionImage (type alias)

**Signature**

```ts
export declare type AttackMotionImage =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
```

## AttackMotionType (type alias)

**Signature**

```ts
export declare type AttackMotionType = 0 | 1 | 2
```

## BattleSystem (type alias)

**Signature**

```ts
export declare type BattleSystem = 0 | 1 | 2
```

## DataSystem (interface)

**Signature**

```ts
export interface DataSystem {
  gameTitle: string
  partyMembers: number[]
  currencyUnit: string
  windowTone: Color
  boat: DataVehicle
  ship: DataVehicle
  airship: DataVehicle
  startMapId: MapID
  startX: number
  startY: number
  title1Name: string
  title2Name: string
  optDrawTitle: boolean
  titleCommandWindow: TitleCommandWindow
  optSideView: boolean
  battleSystem: BattleSystem
  optTransparent: boolean
  optFollowers: boolean
  optSlipDeath: boolean
  optFloorDeath: boolean
  optDisplayTp: boolean
  optExtraExp: boolean
  optKeyItemsNumber: boolean
  optAutosave: boolean
  titleBgm: DataAudio
  battleBgm: DataAudio
  victoryMe: DataAudio
  defeatMe: DataAudio
  gameoverMe: DataAudio
  sounds: [
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio,
    DataAudio
  ]
  menuCommands: [boolean, boolean, boolean, boolean, boolean, boolean]
  itemCategories: [boolean, boolean, boolean, boolean]
  magicSkills: SkillType[]
  attackMotions: AttackMotion[]
  advanced: Advanced
  battleback1Name: string
  battleback2Name: string
  battlerHue: number
  battlerName: string
  editMapId: MapID
  locale: string
  elements: string[]
  skillTypes: string[]
  weaponTypes: string[]
  armorTypes: string[]
  equipTypes: string[]
  terms: Terms
  switches: string[]
  variables: string[]
  testBattlers: [TestBattler, TestBattler, TestBattler, TestBattler]
  testTroopId: TroopID
  versionId: number
  tileSize?: number
  hasEncryptedImages: boolean
  hasEncryptedAudio: boolean
  encryptionKey: string
}
```

## DataVehicle (interface)

**Signature**

```ts
export interface DataVehicle {
  bgm: DataAudio
  characterIndex: number
  characterName: string
  startMapId: MapID
  startX: number
  startY: number
}
```

## TitleCommandWindow (interface)

**Signature**

```ts
export interface TitleCommandWindow {
  background: TextWindowBackgroundType
  offsetX: number
  offsetY: number
}
```

## VehicleType (type alias)

**Signature**

```ts
export declare type VehicleType = 'airship' | 'boat' | 'ship' | 'walk'
```
