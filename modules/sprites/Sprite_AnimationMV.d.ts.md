---
title: sprites/Sprite_AnimationMV.d.ts
nav_order: 121
parent: Modules
---

## Sprite_AnimationMV.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Sprite_AnimationMV (class)](#sprite_animationmv-class)
    - [initMembers (method)](#initmembers-method)
    - [setup (method)](#setup-method)
    - [setupRate (method)](#setuprate-method)
    - [setupDuration (method)](#setupduration-method)
    - [update (method)](#update-method)
    - [updateFlash (method)](#updateflash-method)
    - [updateScreenFlash (method)](#updatescreenflash-method)
    - [absoluteX (method)](#absolutex-method)
    - [absoluteY (method)](#absolutey-method)
    - [updateHiding (method)](#updatehiding-method)
    - [isPlaying (method)](#isplaying-method)
    - [loadBitmaps (method)](#loadbitmaps-method)
    - [isReady (method)](#isready-method)
    - [createCellSprites (method)](#createcellsprites-method)
    - [createScreenFlashSprite (method)](#createscreenflashsprite-method)
    - [updateMain (method)](#updatemain-method)
    - [updatePosition (method)](#updateposition-method)
    - [updateFrame (method)](#updateframe-method)
    - [currentFrameIndex (method)](#currentframeindex-method)
    - [updateAllCellSprites (method)](#updateallcellsprites-method)
    - [updateCellSprite (method)](#updatecellsprite-method)
    - [processTimingData (method)](#processtimingdata-method)
    - [startFlash (method)](#startflash-method)
    - [startScreenFlash (method)](#startscreenflash-method)
    - [startHiding (method)](#starthiding-method)
    - [onEnd (method)](#onend-method)
    - [\_targets (property)](#_targets-property)
    - [\_animation (property)](#_animation-property)
    - [\_mirror (property)](#_mirror-property)
    - [\_delay (property)](#_delay-property)
    - [\_rate (property)](#_rate-property)
    - [\_duration (property)](#_duration-property)
    - [\_flashColor (property)](#_flashcolor-property)
    - [\_flashDuration (property)](#_flashduration-property)
    - [\_screenFlashDuration (property)](#_screenflashduration-property)
    - [\_hidingDuration (property)](#_hidingduration-property)
    - [\_hue1 (property)](#_hue1-property)
    - [\_hue2 (property)](#_hue2-property)
    - [\_bitmap1 (property)](#_bitmap1-property)
    - [\_bitmap2 (property)](#_bitmap2-property)
    - [\_cellSprites (property)](#_cellsprites-property)
    - [\_screenFlashSprite (property)](#_screenflashsprite-property)
    - [targetObjects (property)](#targetobjects-property)

---

# utils

## Sprite_AnimationMV (class)

// Sprite_AnimationMV
//
// The sprite for displaying an old format animation.

**Signature**

```ts
export declare class Sprite_AnimationMV {
  constructor()
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void
```

### setup (method)

**Signature**

```ts
setup(
    targets: Sprite[],
    animation: DataAnimationMV,
    mirror: boolean,
    delay: number,
    _previous: Sprite_AnimationMV | null
  ): void
```

### setupRate (method)

**Signature**

```ts
setupRate(): void
```

### setupDuration (method)

**Signature**

```ts
setupDuration(): void
```

### update (method)

**Signature**

```ts
update(): void
```

### updateFlash (method)

**Signature**

```ts
updateFlash(): void
```

### updateScreenFlash (method)

**Signature**

```ts
updateScreenFlash(): void
```

### absoluteX (method)

**Signature**

```ts
absoluteX(): number
```

### absoluteY (method)

**Signature**

```ts
absoluteY(): number
```

### updateHiding (method)

**Signature**

```ts
updateHiding(): void
```

### isPlaying (method)

**Signature**

```ts
isPlaying(): boolean
```

### loadBitmaps (method)

**Signature**

```ts
loadBitmaps(): void
```

### isReady (method)

**Signature**

```ts
isReady(): boolean
```

### createCellSprites (method)

**Signature**

```ts
createCellSprites(): void
```

### createScreenFlashSprite (method)

**Signature**

```ts
createScreenFlashSprite(): void
```

### updateMain (method)

**Signature**

```ts
updateMain(): void
```

### updatePosition (method)

**Signature**

```ts
updatePosition(): void
```

### updateFrame (method)

**Signature**

```ts
updateFrame(): void
```

### currentFrameIndex (method)

**Signature**

```ts
currentFrameIndex(): number
```

### updateAllCellSprites (method)

**Signature**

```ts
updateAllCellSprites(frame: DataFrameMV): void
```

### updateCellSprite (method)

**Signature**

```ts
updateCellSprite(sprite: Sprite, cell: DataFrameCellMV): void
```

### processTimingData (method)

**Signature**

```ts
processTimingData(timing: DataTimingMV): void
```

### startFlash (method)

**Signature**

```ts
startFlash(color: Color, duration: number): void
```

### startScreenFlash (method)

**Signature**

```ts
startScreenFlash(color: Color, duration: number): void
```

### startHiding (method)

**Signature**

```ts
startHiding(duration: number): void
```

### onEnd (method)

**Signature**

```ts
onEnd(): void
```

### \_targets (property)

**Signature**

```ts
_targets: Sprite < Bitmap > []
```

### \_animation (property)

**Signature**

```ts
_animation: DataAnimationMV
```

### \_mirror (property)

**Signature**

```ts
_mirror: boolean
```

### \_delay (property)

**Signature**

```ts
_delay: number
```

### \_rate (property)

**Signature**

```ts
_rate: number
```

### \_duration (property)

**Signature**

```ts
_duration: number
```

### \_flashColor (property)

**Signature**

```ts
_flashColor: [number, number, number, number]
```

### \_flashDuration (property)

**Signature**

```ts
_flashDuration: number
```

### \_screenFlashDuration (property)

**Signature**

```ts
_screenFlashDuration: number
```

### \_hidingDuration (property)

**Signature**

```ts
_hidingDuration: number
```

### \_hue1 (property)

**Signature**

```ts
_hue1: number
```

### \_hue2 (property)

**Signature**

```ts
_hue2: number
```

### \_bitmap1 (property)

**Signature**

```ts
_bitmap1: Bitmap
```

### \_bitmap2 (property)

**Signature**

```ts
_bitmap2: Bitmap
```

### \_cellSprites (property)

**Signature**

```ts
_cellSprites: Sprite < Bitmap > []
```

### \_screenFlashSprite (property)

**Signature**

```ts
_screenFlashSprite: ScreenSprite | null
```

### targetObjects (property)

**Signature**

```ts
targetObjects: AnimationTarget[] | undefined
```
