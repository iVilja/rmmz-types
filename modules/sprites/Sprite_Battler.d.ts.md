---
title: sprites/Sprite_Battler.d.ts
nav_order: 124
parent: Modules
---

## Sprite_Battler.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Sprite_Battler (class)](#sprite_battler-class)
    - [initMembers (method)](#initmembers-method)
    - [setBattler (method)](#setbattler-method)
    - [checkBattler (method)](#checkbattler-method)
    - [mainSprite (method)](#mainsprite-method)
    - [setHome (method)](#sethome-method)
    - [update (method)](#update-method)
    - [updateVisibility (method)](#updatevisibility-method)
    - [updateMain (method)](#updatemain-method)
    - [updateBitmap (method)](#updatebitmap-method)
    - [updateFrame (method)](#updateframe-method)
    - [updateMove (method)](#updatemove-method)
    - [updatePosition (method)](#updateposition-method)
    - [updateDamagePopup (method)](#updatedamagepopup-method)
    - [updateSelectionEffect (method)](#updateselectioneffect-method)
    - [setupDamagePopup (method)](#setupdamagepopup-method)
    - [createDamageSprite (method)](#createdamagesprite-method)
    - [destroyDamageSprite (method)](#destroydamagesprite-method)
    - [damageOffsetX (method)](#damageoffsetx-method)
    - [damageOffsetY (method)](#damageoffsety-method)
    - [startMove (method)](#startmove-method)
    - [onMoveEnd (method)](#onmoveend-method)
    - [isEffecting (method)](#iseffecting-method)
    - [isMoving (method)](#ismoving-method)
    - [inHomePosition (method)](#inhomeposition-method)
    - [onMouseEnter (method)](#onmouseenter-method)
    - [onPress (method)](#onpress-method)
    - [onClick (method)](#onclick-method)
    - [\_battler (property)](#_battler-property)
    - [\_damages (property)](#_damages-property)
    - [\_homeX (property)](#_homex-property)
    - [\_homeY (property)](#_homey-property)
    - [\_offsetX (property)](#_offsetx-property)
    - [\_offsetY (property)](#_offsety-property)
    - [\_targetOffsetX (property)](#_targetoffsetx-property)
    - [\_targetOffsetY (property)](#_targetoffsety-property)
    - [\_movementDuration (property)](#_movementduration-property)
    - [\_selectionEffectCount (property)](#_selectioneffectcount-property)

---

# utils

## Sprite_Battler (class)

// Sprite_Battler
//
// The superclass of Sprite_Actor and Sprite_Enemy.

**Signature**

```ts
export declare class Sprite_Battler<T, T2> {
  constructor(battler: T)
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void
```

### setBattler (method)

**Signature**

```ts
setBattler(battler: T): void
```

### checkBattler (method)

**Signature**

```ts
checkBattler(battler: ActionTarget): boolean
```

### mainSprite (method)

**Signature**

```ts
mainSprite(): Sprite<Bitmap | null>
```

### setHome (method)

**Signature**

```ts
setHome(x: number, y: number): void
```

### update (method)

**Signature**

```ts
update(): void
```

### updateVisibility (method)

**Signature**

```ts
updateVisibility(): void
```

### updateMain (method)

**Signature**

```ts
updateMain(): void
```

### updateBitmap (method)

**Signature**

```ts
updateBitmap(): void
```

### updateFrame (method)

**Signature**

```ts
updateFrame(): void
```

### updateMove (method)

**Signature**

```ts
updateMove(): void
```

### updatePosition (method)

**Signature**

```ts
updatePosition(): void
```

### updateDamagePopup (method)

**Signature**

```ts
updateDamagePopup(): void
```

### updateSelectionEffect (method)

**Signature**

```ts
updateSelectionEffect(): void
```

### setupDamagePopup (method)

**Signature**

```ts
setupDamagePopup(): void
```

### createDamageSprite (method)

**Signature**

```ts
createDamageSprite(): void
```

### destroyDamageSprite (method)

**Signature**

```ts
destroyDamageSprite(sprite: Sprite_Damage): void
```

### damageOffsetX (method)

**Signature**

```ts
damageOffsetX(): number
```

### damageOffsetY (method)

**Signature**

```ts
damageOffsetY(): number
```

### startMove (method)

**Signature**

```ts
startMove(x: number, y: number, duration: number): void
```

### onMoveEnd (method)

**Signature**

```ts
onMoveEnd(): void
```

### isEffecting (method)

**Signature**

```ts
isEffecting(): boolean
```

### isMoving (method)

**Signature**

```ts
isMoving(): boolean
```

### inHomePosition (method)

**Signature**

```ts
inHomePosition(): boolean
```

### onMouseEnter (method)

**Signature**

```ts
onMouseEnter(): void
```

### onPress (method)

**Signature**

```ts
onPress(): void
```

### onClick (method)

**Signature**

```ts
onClick(): void
```

### \_battler (property)

**Signature**

```ts
_battler: T
```

### \_damages (property)

**Signature**

```ts
_damages: Sprite_Damage[]
```

### \_homeX (property)

**Signature**

```ts
_homeX: number
```

### \_homeY (property)

**Signature**

```ts
_homeY: number
```

### \_offsetX (property)

**Signature**

```ts
_offsetX: number
```

### \_offsetY (property)

**Signature**

```ts
_offsetY: number
```

### \_targetOffsetX (property)

**Signature**

```ts
_targetOffsetX: number
```

### \_targetOffsetY (property)

**Signature**

```ts
_targetOffsetY: number
```

### \_movementDuration (property)

**Signature**

```ts
_movementDuration: number
```

### \_selectionEffectCount (property)

**Signature**

```ts
_selectionEffectCount: number
```
