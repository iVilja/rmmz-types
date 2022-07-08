---
title: sprites/Sprite_Animation.d.ts
nav_order: 119
parent: Modules
---

## Sprite_Animation.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Sprite_Animation (class)](#sprite_animation-class)
    - [initMembers (method)](#initmembers-method)
    - [destroy (method)](#destroy-method)
    - [setup (method)](#setup-method)
    - [update (method)](#update-method)
    - [canStart (method)](#canstart-method)
    - [shouldWaitForPrevious (method)](#shouldwaitforprevious-method)
    - [updateEffectGeometry (method)](#updateeffectgeometry-method)
    - [updateMain (method)](#updatemain-method)
    - [processSoundTimings (method)](#processsoundtimings-method)
    - [processFlashTimings (method)](#processflashtimings-method)
    - [checkEnd (method)](#checkend-method)
    - [updateFlash (method)](#updateflash-method)
    - [isPlaying (method)](#isplaying-method)
    - [setRotation (method)](#setrotation-method)
    - [\_render (method)](#_render-method)
    - [setProjectionMatrix (method)](#setprojectionmatrix-method)
    - [setCameraMatrix (method)](#setcameramatrix-method)
    - [setViewport (method)](#setviewport-method)
    - [targetPosition (method)](#targetposition-method)
    - [targetSpritePosition (method)](#targetspriteposition-method)
    - [resetViewport (method)](#resetviewport-method)
    - [onBeforeRender (method)](#onbeforerender-method)
    - [onAfterRender (method)](#onafterrender-method)
    - [\_targets (property)](#_targets-property)
    - [\_animation (property)](#_animation-property)
    - [\_mirror (property)](#_mirror-property)
    - [\_delay (property)](#_delay-property)
    - [\_previous (property)](#_previous-property)
    - [\_effect (property)](#_effect-property)
    - [\_handle (property)](#_handle-property)
    - [\_playing (property)](#_playing-property)
    - [\_started (property)](#_started-property)
    - [\_frameIndex (property)](#_frameindex-property)
    - [\_maxTimingFrames (property)](#_maxtimingframes-property)
    - [\_flashColor (property)](#_flashcolor-property)
    - [\_flashDuration (property)](#_flashduration-property)
    - [\_viewportSize (property)](#_viewportsize-property)
    - [targetObjects (property)](#targetobjects-property)

---

# utils

## Sprite_Animation (class)

// Sprite_Animation
//
// The sprite for displaying an animation.

**Signature**

```ts
export declare class Sprite_Animation {
  constructor()
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void;
```

### destroy (method)

**Signature**

```ts
destroy(options?: PIXI.IDestroyOptions | boolean): void;
```

### setup (method)

**Signature**

```ts
setup(targets: Sprite[], animation: DataAnimation, mirror: boolean, delay: number, previous: Sprite_Animation | null): void;
```

### update (method)

**Signature**

```ts
update(): void;
```

### canStart (method)

**Signature**

```ts
canStart(): boolean;
```

### shouldWaitForPrevious (method)

**Signature**

```ts
shouldWaitForPrevious(): boolean;
```

### updateEffectGeometry (method)

**Signature**

```ts
updateEffectGeometry(): void;
```

### updateMain (method)

**Signature**

```ts
updateMain(): void;
```

### processSoundTimings (method)

**Signature**

```ts
processSoundTimings(): void;
```

### processFlashTimings (method)

**Signature**

```ts
processFlashTimings(): void;
```

### checkEnd (method)

**Signature**

```ts
checkEnd(): void;
```

### updateFlash (method)

**Signature**

```ts
updateFlash(): void;
```

### isPlaying (method)

**Signature**

```ts
isPlaying(): boolean;
```

### setRotation (method)

**Signature**

```ts
setRotation(x: number, y: number, z: number): void;
```

### \_render (method)

**Signature**

```ts
_render(renderer: PIXI.Renderer): void;
```

### setProjectionMatrix (method)

**Signature**

```ts
setProjectionMatrix(renderer: PIXI.Renderer): void;
```

### setCameraMatrix (method)

**Signature**

```ts
setCameraMatrix(_renderer: PIXI.Renderer): void;
```

### setViewport (method)

**Signature**

```ts
setViewport(renderer: PIXI.Renderer): void;
```

### targetPosition (method)

**Signature**

```ts
targetPosition(renderer: PIXI.Renderer): Point;
```

### targetSpritePosition (method)

**Signature**

```ts
targetSpritePosition(sprite: Sprite): PIXI.Point;
```

### resetViewport (method)

**Signature**

```ts
resetViewport(renderer: PIXI.Renderer): void;
```

### onBeforeRender (method)

**Signature**

```ts
onBeforeRender(renderer: PIXI.Renderer): void;
```

### onAfterRender (method)

**Signature**

```ts
onAfterRender(renderer: PIXI.Renderer): void;
```

### \_targets (property)

**Signature**

```ts
_targets: Sprite < Bitmap > []
```

### \_animation (property)

**Signature**

```ts
_animation: DataAnimation
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

### \_previous (property)

**Signature**

```ts
_previous: Sprite_Animation | null
```

### \_effect (property)

**Signature**

```ts
_effect: any
```

### \_handle (property)

**Signature**

```ts
_handle: any
```

### \_playing (property)

**Signature**

```ts
_playing: boolean
```

### \_started (property)

**Signature**

```ts
_started: boolean
```

### \_frameIndex (property)

**Signature**

```ts
_frameIndex: number
```

### \_maxTimingFrames (property)

**Signature**

```ts
_maxTimingFrames: number
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

### \_viewportSize (property)

**Signature**

```ts
_viewportSize: number
```

### targetObjects (property)

**Signature**

```ts
targetObjects: AnimationTarget[] | undefined
```
