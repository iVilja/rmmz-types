---
title: sprites/Sprite_Battleback.d.ts
nav_order: 122
parent: Modules
---

## Sprite_Battleback.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Sprite_Battleback (class)](#sprite_battleback-class)
    - [adjustPosition (method)](#adjustposition-method)
    - [battleback1Bitmap (method)](#battleback1bitmap-method)
    - [battleback2Bitmap (method)](#battleback2bitmap-method)
    - [battleback1Name (method)](#battleback1name-method)
    - [battleback2Name (method)](#battleback2name-method)
    - [overworldBattleback1Name (method)](#overworldbattleback1name-method)
    - [overworldBattleback2Name (method)](#overworldbattleback2name-method)
    - [normalBattleback1Name (method)](#normalbattleback1name-method)
    - [normalBattleback2Name (method)](#normalbattleback2name-method)
    - [terrainBattleback1Name (method)](#terrainbattleback1name-method)
    - [terrainBattleback2Name (method)](#terrainbattleback2name-method)
    - [defaultBattleback1Name (method)](#defaultbattleback1name-method)
    - [defaultBattleback2Name (method)](#defaultbattleback2name-method)
    - [shipBattleback1Name (method)](#shipbattleback1name-method)
    - [shipBattleback2Name (method)](#shipbattleback2name-method)
    - [autotileType (method)](#autotiletype-method)

---

# utils

## Sprite_Battleback (class)

// Sprite_Battleback
//
// The sprite for displaying a background image in battle.

**Signature**

```ts
export declare class Sprite_Battleback {
  constructor(type: 0 | 1)
}
```

### adjustPosition (method)

**Signature**

```ts
adjustPosition(): void;
```

### battleback1Bitmap (method)

**Signature**

```ts
battleback1Bitmap(): import("../core").Bitmap;
```

### battleback2Bitmap (method)

**Signature**

```ts
battleback2Bitmap(): import("../core").Bitmap;
```

### battleback1Name (method)

**Signature**

```ts
battleback1Name(): string;
```

### battleback2Name (method)

**Signature**

```ts
battleback2Name(): string;
```

### overworldBattleback1Name (method)

**Signature**

```ts
overworldBattleback1Name(): string;
```

### overworldBattleback2Name (method)

**Signature**

```ts
overworldBattleback2Name(): string;
```

### normalBattleback1Name (method)

**Signature**

```ts
normalBattleback1Name(): string;
```

### normalBattleback2Name (method)

**Signature**

```ts
normalBattleback2Name(): string;
```

### terrainBattleback1Name (method)

**Signature**

```ts
terrainBattleback1Name(type: TerrainBattlebackType): "Wasteland" | "DirtField" | "Desert" | "Lava1" | "Lava2" | "Snowfield" | "Clouds" | "PoisonSwamp" | null;
```

### terrainBattleback2Name (method)

**Signature**

```ts
terrainBattleback2Name(type: TerrainBattlebackType): "Wasteland" | "Desert" | "Snowfield" | "Clouds" | "PoisonSwamp" | "Forest" | "Cliff" | "Lava" | undefined;
```

### defaultBattleback1Name (method)

**Signature**

```ts
defaultBattleback1Name(): string;
```

### defaultBattleback2Name (method)

**Signature**

```ts
defaultBattleback2Name(): string;
```

### shipBattleback1Name (method)

**Signature**

```ts
shipBattleback1Name(): string;
```

### shipBattleback2Name (method)

**Signature**

```ts
shipBattleback2Name(): string;
```

### autotileType (method)

**Signature**

```ts
autotileType(z: number): TerrainBattlebackType;
```
