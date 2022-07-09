---
title: core/TilingSprite.d.ts
nav_order: 14
parent: Modules
---

## TilingSprite.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [TilingSprite (class)](#tilingsprite-class)
    - [destroy (method)](#destroy-method)
    - [update (method)](#update-method)
    - [move (method)](#move-method)
    - [setFrame (method)](#setframe-method)
    - [updateTransform (method)](#updatetransform-method)
    - [\_onBitmapChange (method)](#_onbitmapchange-method)
    - [\_onBitmapLoad (method)](#_onbitmapload-method)
    - [\_refresh (method)](#_refresh-method)
    - [\_bitmap (property)](#_bitmap-property)
    - [\_width (property)](#_width-property)
    - [\_height (property)](#_height-property)
    - [\_frame (property)](#_frame-property)
    - [origin (property)](#origin-property)

---

# utils

## TilingSprite (class)

The sprite object for a tiling image.

**Signature**

```ts
export declare class TilingSprite {
  constructor(bitmap?: Bitmap)
}
```

### destroy (method)

Destroys the tiling sprite.

**Signature**

```ts
destroy(): void
```

### update (method)

Updates the tiling sprite for each frame.

**Signature**

```ts
update(): void
```

### move (method)

Sets the x, y, width, and height all at once.

**Signature**

```ts
move(x: number, y: number, width: number, height: number): void
```

### setFrame (method)

Specifies the region of the image that the tiling sprite will use.

**Signature**

```ts
setFrame(x: number, y: number, width: number, height: number): void
```

### updateTransform (method)

Updates the transform on all children of this container for rendering.

**Signature**

```ts
updateTransform(): void
```

### \_onBitmapChange (method)

**Signature**

```ts
_onBitmapChange(): void
```

### \_onBitmapLoad (method)

**Signature**

```ts
_onBitmapLoad(): void
```

### \_refresh (method)

**Signature**

```ts
_refresh(): void
```

### \_bitmap (property)

**Signature**

```ts
_bitmap: Bitmap
```

### \_width (property)

**Signature**

```ts
_width: number
```

### \_height (property)

**Signature**

```ts
_height: number
```

### \_frame (property)

**Signature**

```ts
_frame: Rectangle
```

### origin (property)

The origin point of the tiling sprite for scrolling.

**Signature**

```ts
origin: Point
```
