---
title: sprites/Spriteset_Battle.d.ts
nav_order: 139
parent: Modules
---

## Spriteset_Battle.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Spriteset_Battle (class)](#spriteset_battle-class)
    - [loadSystemImages (method)](#loadsystemimages-method)
    - [createLowerLayer (method)](#createlowerlayer-method)
    - [createBackground (method)](#createbackground-method)
    - [createBattleback (method)](#createbattleback-method)
    - [createBattleField (method)](#createbattlefield-method)
    - [battleFieldOffsetY (method)](#battlefieldoffsety-method)
    - [update (method)](#update-method)
    - [updateBattleback (method)](#updatebattleback-method)
    - [createEnemies (method)](#createenemies-method)
    - [compareEnemySprite (method)](#compareenemysprite-method)
    - [createActors (method)](#createactors-method)
    - [updateActors (method)](#updateactors-method)
    - [findTargetSprite (method)](#findtargetsprite-method)
    - [battlerSprites (method)](#battlersprites-method)
    - [isEffecting (method)](#iseffecting-method)
    - [isAnyoneMoving (method)](#isanyonemoving-method)
    - [isBusy (method)](#isbusy-method)
    - [\_battlebackLocated (property)](#_battlebacklocated-property)
    - [\_backgroundFilter (property)](#_backgroundfilter-property)
    - [\_backgroundSprite (property)](#_backgroundsprite-property)
    - [\_back1Sprite (property)](#_back1sprite-property)
    - [\_back2Sprite (property)](#_back2sprite-property)
    - [\_battleField (property)](#_battlefield-property)
    - [\_enemySprites (property)](#_enemysprites-property)
    - [\_actorSprites (property)](#_actorsprites-property)

---

# utils

## Spriteset_Battle (class)

// Spriteset_Battle
//
// The set of sprites on the battle screen.

**Signature**

```ts
export declare class Spriteset_Battle
```

### loadSystemImages (method)

**Signature**

```ts
loadSystemImages(): void
```

### createLowerLayer (method)

**Signature**

```ts
createLowerLayer(): void
```

### createBackground (method)

**Signature**

```ts
createBackground(): void
```

### createBattleback (method)

**Signature**

```ts
createBattleback(): void
```

### createBattleField (method)

**Signature**

```ts
createBattleField(): void
```

### battleFieldOffsetY (method)

**Signature**

```ts
battleFieldOffsetY(): number
```

### update (method)

**Signature**

```ts
update(): void
```

### updateBattleback (method)

**Signature**

```ts
updateBattleback(): void
```

### createEnemies (method)

**Signature**

```ts
createEnemies(): void
```

### compareEnemySprite (method)

**Signature**

```ts
compareEnemySprite(a: Sprite_Enemy, b: Sprite_Enemy): number
```

### createActors (method)

**Signature**

```ts
createActors(): void
```

### updateActors (method)

**Signature**

```ts
updateActors(): void
```

### findTargetSprite (method)

**Signature**

```ts
findTargetSprite(target: ActionTarget): Sprite<Bitmap> | undefined
```

### battlerSprites (method)

**Signature**

```ts
battlerSprites(): (Sprite_Actor | Sprite_Enemy)[]
```

### isEffecting (method)

**Signature**

```ts
isEffecting(): boolean
```

### isAnyoneMoving (method)

**Signature**

```ts
isAnyoneMoving(): boolean
```

### isBusy (method)

**Signature**

```ts
isBusy(): boolean
```

### \_battlebackLocated (property)

**Signature**

```ts
_battlebackLocated: boolean
```

### \_backgroundFilter (property)

**Signature**

```ts
_backgroundFilter: any
```

### \_backgroundSprite (property)

**Signature**

```ts
_backgroundSprite: Sprite<Bitmap | null>
```

### \_back1Sprite (property)

**Signature**

```ts
_back1Sprite: Sprite_Battleback
```

### \_back2Sprite (property)

**Signature**

```ts
_back2Sprite: Sprite_Battleback
```

### \_battleField (property)

**Signature**

```ts
_battleField: Sprite<null>
```

### \_enemySprites (property)

**Signature**

```ts
_enemySprites: Sprite_Enemy[]
```

### \_actorSprites (property)

**Signature**

```ts
_actorSprites: Sprite_Actor[]
```
