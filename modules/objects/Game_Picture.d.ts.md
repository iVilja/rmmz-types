---
title: objects/Game_Picture.d.ts
nav_order: 81
parent: Modules
---

## Game_Picture.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Picture (class)](#game_picture-class)
    - [name (method)](#name-method)
    - [origin (method)](#origin-method)
    - [x (method)](#x-method)
    - [y (method)](#y-method)
    - [scaleX (method)](#scalex-method)
    - [scaleY (method)](#scaley-method)
    - [opacity (method)](#opacity-method)
    - [blendMode (method)](#blendmode-method)
    - [tone (method)](#tone-method)
    - [angle (method)](#angle-method)
    - [initBasic (method)](#initbasic-method)
    - [initTarget (method)](#inittarget-method)
    - [initTone (method)](#inittone-method)
    - [initRotation (method)](#initrotation-method)
    - [show (method)](#show-method)
    - [move (method)](#move-method)
    - [rotate (method)](#rotate-method)
    - [tint (method)](#tint-method)
    - [update (method)](#update-method)
    - [updateMove (method)](#updatemove-method)
    - [updateTone (method)](#updatetone-method)
    - [updateRotation (method)](#updaterotation-method)
    - [applyEasing (method)](#applyeasing-method)
    - [calcEasing (method)](#calceasing-method)
    - [easeIn (method)](#easein-method)
    - [easeOut (method)](#easeout-method)
    - [easeInOut (method)](#easeinout-method)
    - [\_name (property)](#_name-property)
    - [\_origin (property)](#_origin-property)
    - [\_x (property)](#_x-property)
    - [\_y (property)](#_y-property)
    - [\_scaleX (property)](#_scalex-property)
    - [\_scaleY (property)](#_scaley-property)
    - [\_opacity (property)](#_opacity-property)
    - [\_blendMode (property)](#_blendmode-property)
    - [\_targetX (property)](#_targetx-property)
    - [\_targetY (property)](#_targety-property)
    - [\_targetScaleX (property)](#_targetscalex-property)
    - [\_targetScaleY (property)](#_targetscaley-property)
    - [\_targetOpacity (property)](#_targetopacity-property)
    - [\_duration (property)](#_duration-property)
    - [\_wholeDuration (property)](#_wholeduration-property)
    - [\_easingType (property)](#_easingtype-property)
    - [\_easingExponent (property)](#_easingexponent-property)
    - [\_tone (property)](#_tone-property)
    - [\_toneTarget (property)](#_tonetarget-property)
    - [\_toneDuration (property)](#_toneduration-property)
    - [\_angle (property)](#_angle-property)
    - [\_rotationSpeed (property)](#_rotationspeed-property)
  - [PictureEasingType (type alias)](#pictureeasingtype-type-alias)

---

# utils

## Game_Picture (class)

Game_Picture

The game object class for a picture.

**Signature**

```ts
export declare class Game_Picture
```

### name (method)

**Signature**

```ts
name(): string;
```

### origin (method)

**Signature**

```ts
origin(): number;
```

### x (method)

**Signature**

```ts
x(): number;
```

### y (method)

**Signature**

```ts
y(): number;
```

### scaleX (method)

**Signature**

```ts
scaleX(): number;
```

### scaleY (method)

**Signature**

```ts
scaleY(): number;
```

### opacity (method)

**Signature**

```ts
opacity(): number;
```

### blendMode (method)

**Signature**

```ts
blendMode(): PIXI.BLEND_MODES;
```

### tone (method)

**Signature**

```ts
tone(): [number, number, number, number] | null;
```

### angle (method)

**Signature**

```ts
angle(): number;
```

### initBasic (method)

**Signature**

```ts
initBasic(): void;
```

### initTarget (method)

**Signature**

```ts
initTarget(): void;
```

### initTone (method)

**Signature**

```ts
initTone(): void;
```

### initRotation (method)

**Signature**

```ts
initRotation(): void;
```

### show (method)

**Signature**

```ts
show(name: string, origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: PIXI.BLEND_MODES): void;
```

### move (method)

**Signature**

```ts
move(origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: PIXI.BLEND_MODES, duration: number, easingType: PictureEasingType): void;
```

### rotate (method)

**Signature**

```ts
rotate(speed: number): void;
```

### tint (method)

**Signature**

```ts
tint(tone: Color, duration: number): void;
```

### update (method)

**Signature**

```ts
update(): void;
```

### updateMove (method)

**Signature**

```ts
updateMove(): void;
```

### updateTone (method)

**Signature**

```ts
updateTone(): void;
```

### updateRotation (method)

**Signature**

```ts
updateRotation(): void;
```

### applyEasing (method)

**Signature**

```ts
applyEasing(current: number, target: number): number;
```

### calcEasing (method)

**Signature**

```ts
calcEasing(t: number): number;
```

### easeIn (method)

**Signature**

```ts
easeIn(t: number, exponent: number): number;
```

### easeOut (method)

**Signature**

```ts
easeOut(t: number, exponent: number): number;
```

### easeInOut (method)

**Signature**

```ts
easeInOut(t: number, exponent: number): number;
```

### \_name (property)

**Signature**

```ts
_name: string
```

### \_origin (property)

**Signature**

```ts
_origin: number
```

### \_x (property)

**Signature**

```ts
_x: number
```

### \_y (property)

**Signature**

```ts
_y: number
```

### \_scaleX (property)

**Signature**

```ts
_scaleX: number
```

### \_scaleY (property)

**Signature**

```ts
_scaleY: number
```

### \_opacity (property)

**Signature**

```ts
_opacity: number
```

### \_blendMode (property)

**Signature**

```ts
_blendMode: any
```

### \_targetX (property)

**Signature**

```ts
_targetX: number
```

### \_targetY (property)

**Signature**

```ts
_targetY: number
```

### \_targetScaleX (property)

**Signature**

```ts
_targetScaleX: number
```

### \_targetScaleY (property)

**Signature**

```ts
_targetScaleY: number
```

### \_targetOpacity (property)

**Signature**

```ts
_targetOpacity: number
```

### \_duration (property)

**Signature**

```ts
_duration: number
```

### \_wholeDuration (property)

**Signature**

```ts
_wholeDuration: number
```

### \_easingType (property)

**Signature**

```ts
_easingType: PictureEasingType
```

### \_easingExponent (property)

**Signature**

```ts
_easingExponent: number
```

### \_tone (property)

**Signature**

```ts
_tone: [number, number, number, number] | null
```

### \_toneTarget (property)

**Signature**

```ts
_toneTarget: Color | null
```

### \_toneDuration (property)

**Signature**

```ts
_toneDuration: number
```

### \_angle (property)

**Signature**

```ts
_angle: number
```

### \_rotationSpeed (property)

**Signature**

```ts
_rotationSpeed: number
```

## PictureEasingType (type alias)

**Signature**

```ts
export declare type PictureEasingType = 0 | 1 | 2 | 3
```
