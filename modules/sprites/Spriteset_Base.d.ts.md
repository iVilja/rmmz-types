---
title: sprites/Spriteset_Base.d.ts
nav_order: 138
parent: Modules
---

## Spriteset_Base.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Spriteset_Base (class)](#spriteset_base-class)
    - [destroy (method)](#destroy-method)
    - [loadSystemImages (method)](#loadsystemimages-method)
    - [createLowerLayer (method)](#createlowerlayer-method)
    - [createUpperLayer (method)](#createupperlayer-method)
    - [update (method)](#update-method)
    - [createBaseSprite (method)](#createbasesprite-method)
    - [createBaseFilters (method)](#createbasefilters-method)
    - [createPictures (method)](#createpictures-method)
    - [pictureContainerRect (method)](#picturecontainerrect-method)
    - [createTimer (method)](#createtimer-method)
    - [createOverallFilters (method)](#createoverallfilters-method)
    - [updateBaseFilters (method)](#updatebasefilters-method)
    - [updateOverallFilters (method)](#updateoverallfilters-method)
    - [updatePosition (method)](#updateposition-method)
    - [findTargetSprite (method)](#findtargetsprite-method)
    - [updateAnimations (method)](#updateanimations-method)
    - [processAnimationRequests (method)](#processanimationrequests-method)
    - [createAnimation (method)](#createanimation-method)
    - [createAnimationSprite (method)](#createanimationsprite-method)
    - [isMVAnimation (method)](#ismvanimation-method)
    - [makeTargetSprites (method)](#maketargetsprites-method)
    - [lastAnimationSprite (method)](#lastanimationsprite-method)
    - [isAnimationForEach (method)](#isanimationforeach-method)
    - [animationBaseDelay (method)](#animationbasedelay-method)
    - [animationNextDelay (method)](#animationnextdelay-method)
    - [animationShouldMirror (method)](#animationshouldmirror-method)
    - [removeAnimation (method)](#removeanimation-method)
    - [removeAllAnimations (method)](#removeallanimations-method)
    - [isAnimationPlaying (method)](#isanimationplaying-method)
    - [\_animationSprites (property)](#_animationsprites-property)
    - [\_baseSprite (property)](#_basesprite-property)
    - [\_blackScreen (property)](#_blackscreen-property)
    - [\_baseColorFilter (property)](#_basecolorfilter-property)
    - [\_pictureContainer (property)](#_picturecontainer-property)
    - [\_timerSprite (property)](#_timersprite-property)
    - [\_overallColorFilter (property)](#_overallcolorfilter-property)
    - [\_effectsContainer (property)](#_effectscontainer-property)

---

# utils

## Spriteset_Base (class)

// Spriteset_Base
//
// The superclass of Spriteset_Map and Spriteset_Battle.

**Signature**

```ts
export declare class Spriteset_Base {
  constructor()
}
```

### destroy (method)

**Signature**

```ts
destroy(options?: PIXIDestroyOptions): void
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

### createUpperLayer (method)

**Signature**

```ts
createUpperLayer(): void
```

### update (method)

**Signature**

```ts
update(): void
```

### createBaseSprite (method)

**Signature**

```ts
createBaseSprite(): void
```

### createBaseFilters (method)

**Signature**

```ts
createBaseFilters(): void
```

### createPictures (method)

**Signature**

```ts
createPictures(): void
```

### pictureContainerRect (method)

**Signature**

```ts
pictureContainerRect(): Rectangle
```

### createTimer (method)

**Signature**

```ts
createTimer(): void
```

### createOverallFilters (method)

**Signature**

```ts
createOverallFilters(): void
```

### updateBaseFilters (method)

**Signature**

```ts
updateBaseFilters(): void
```

### updateOverallFilters (method)

**Signature**

```ts
updateOverallFilters(): void
```

### updatePosition (method)

**Signature**

```ts
updatePosition(): void
```

### findTargetSprite (method)

**Signature**

```ts
findTargetSprite(_target: AnimationTarget): Sprite<import("../core").Bitmap> | null | undefined
```

### updateAnimations (method)

**Signature**

```ts
updateAnimations(): void
```

### processAnimationRequests (method)

**Signature**

```ts
processAnimationRequests(): void
```

### createAnimation (method)

**Signature**

```ts
createAnimation(request: AnimationRequest): void
```

### createAnimationSprite (method)

**Signature**

```ts
createAnimationSprite(
    targets: AnimationTarget[],
    animation: DataAnimation | DataAnimationMV,
    mirror: boolean,
    delay: number
  ): void
```

### isMVAnimation (method)

**Signature**

```ts
isMVAnimation(animation: DataAnimation | DataAnimationMV): animation is DataAnimationMV
```

### makeTargetSprites (method)

**Signature**

```ts
makeTargetSprites(targets: AnimationTarget[]): Sprite<import("../core").Bitmap>[]
```

### lastAnimationSprite (method)

**Signature**

```ts
lastAnimationSprite(): Sprite_Animation | Sprite_AnimationMV
```

### isAnimationForEach (method)

**Signature**

```ts
isAnimationForEach(animation: DataAnimation | DataAnimationMV): boolean
```

### animationBaseDelay (method)

**Signature**

```ts
animationBaseDelay(): number
```

### animationNextDelay (method)

**Signature**

```ts
animationNextDelay(): number
```

### animationShouldMirror (method)

**Signature**

```ts
animationShouldMirror(
    target: AnimationTarget & {
      isActor?: () => boolean
    }
  ): boolean
```

### removeAnimation (method)

**Signature**

```ts
removeAnimation(sprite: Sprite_Animation | Sprite_AnimationMV): void
```

### removeAllAnimations (method)

**Signature**

```ts
removeAllAnimations(): void
```

### isAnimationPlaying (method)

**Signature**

```ts
isAnimationPlaying(): boolean
```

### \_animationSprites (property)

**Signature**

```ts
_animationSprites: (Sprite_Animation | Sprite_AnimationMV)[]
```

### \_baseSprite (property)

**Signature**

```ts
_baseSprite: Sprite<Bitmap>
```

### \_blackScreen (property)

**Signature**

```ts
_blackScreen: ScreenSprite
```

### \_baseColorFilter (property)

**Signature**

```ts
_baseColorFilter: ColorFilter
```

### \_pictureContainer (property)

**Signature**

```ts
_pictureContainer: Sprite<null>
```

### \_timerSprite (property)

**Signature**

```ts
_timerSprite: Sprite_Timer
```

### \_overallColorFilter (property)

**Signature**

```ts
_overallColorFilter: ColorFilter
```

### \_effectsContainer (property)

**Signature**

```ts
_effectsContainer: any
```
