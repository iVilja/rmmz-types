---
title: core/Sprite.d.ts
nav_order: 11
parent: Modules
---

## Sprite.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Sprite (class)](#sprite-class)
    - [destroy (method)](#destroy-method)
    - [update (method)](#update-method)
    - [hide (method)](#hide-method)
    - [show (method)](#show-method)
    - [updateVisibility (method)](#updatevisibility-method)
    - [move (method)](#move-method)
    - [setFrame (method)](#setframe-method)
    - [setHue (method)](#sethue-method)
    - [getBlendColor (method)](#getblendcolor-method)
    - [setBlendColor (method)](#setblendcolor-method)
    - [getColorTone (method)](#getcolortone-method)
    - [setColorTone (method)](#setcolortone-method)
    - [\_onBitmapChange (method)](#_onbitmapchange-method)
    - [\_onBitmapLoad (method)](#_onbitmapload-method)
    - [\_refresh (method)](#_refresh-method)
    - [\_createColorFilter (method)](#_createcolorfilter-method)
    - [\_updateColorFilter (method)](#_updatecolorfilter-method)
    - [\_refreshFrame (property)](#_refreshframe-property)
    - [spriteId (property)](#spriteid-property)
    - [\_bitmap (property)](#_bitmap-property)
    - [\_frame (property)](#_frame-property)
    - [\_hue (property)](#_hue-property)
    - [\_blendColor (property)](#_blendcolor-property)
    - [\_colorTone (property)](#_colortone-property)
    - [\_colorFilter (property)](#_colorfilter-property)
    - [\_blendMode (property)](#_blendmode-property)
    - [\_hidden (property)](#_hidden-property)

---

# utils

## Sprite (class)

The basic object that is rendered to the game screen.

**Signature**

```ts
export declare class Sprite<T> {
  constructor(bitmap?: Bitmap)
}
```

### destroy (method)

Destroys the sprite.

**Signature**

```ts
destroy(_options?: PIXI.IDestroyOptions | boolean): void;
```

### update (method)

Updates the sprite for each frame.

**Signature**

```ts
update(): void;
```

### hide (method)

Makes the sprite "hidden".

**Signature**

```ts
hide(): void;
```

### show (method)

Releases the "hidden" state of the sprite.

**Signature**

```ts
show(): void;
```

### updateVisibility (method)

Reflects the "hidden" state of the sprite to the visible state.

**Signature**

```ts
updateVisibility(): void;
```

### move (method)

Sets the x and y at once.

**Signature**

```ts
move(x: number, y: number): void;
```

### setFrame (method)

Sets the rectagle of the bitmap that the sprite displays.

**Signature**

```ts
setFrame(x: number, y: number, width: number, height: number): void;
```

### setHue (method)

Sets the hue rotation value.

**Signature**

```ts
setHue(hue: number): void;
```

### getBlendColor (method)

Gets the blend color for the sprite.

**Signature**

```ts
getBlendColor(): [number, number, number, number];
```

### setBlendColor (method)

Sets the blend color for the sprite.

**Signature**

```ts
setBlendColor(color: Color): void;
```

### getColorTone (method)

Gets the color tone for the sprite.

**Signature**

```ts
getColorTone(): [number, number, number, number];
```

### setColorTone (method)

Sets the color tone for the sprite.

**Signature**

```ts
setColorTone(tone: Color): void;
```

### \_onBitmapChange (method)

**Signature**

```ts
_onBitmapChange(): void;
```

### \_onBitmapLoad (method)

**Signature**

```ts
_onBitmapLoad(bitmapLoaded: Bitmap): void;
```

### \_refresh (method)

**Signature**

```ts
_refresh(): void;
```

### \_createColorFilter (method)

**Signature**

```ts
_createColorFilter(): void;
```

### \_updateColorFilter (method)

**Signature**

```ts
_updateColorFilter(): void;
```

### \_refreshFrame (property)

**Signature**

```ts
_refreshFrame: boolean
```

### spriteId (property)

**Signature**

```ts
spriteId: number
```

### \_bitmap (property)

**Signature**

```ts
_bitmap: T
```

### \_frame (property)

**Signature**

```ts
_frame: Rectangle
```

### \_hue (property)

**Signature**

```ts
_hue: number
```

### \_blendColor (property)

**Signature**

```ts
_blendColor: Color
```

### \_colorTone (property)

**Signature**

```ts
_colorTone: Color
```

### \_colorFilter (property)

**Signature**

```ts
_colorFilter: ColorFilter | null
```

### \_blendMode (property)

**Signature**

```ts
_blendMode: any
```

### \_hidden (property)

**Signature**

```ts
_hidden: boolean
```
