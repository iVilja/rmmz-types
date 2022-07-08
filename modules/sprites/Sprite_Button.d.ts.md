---
title: sprites/Sprite_Button.d.ts
nav_order: 124
parent: Modules
---

## Sprite_Button.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [SpriteButtonType (type alias)](#spritebuttontype-type-alias)
  - [Sprite_Button (class)](#sprite_button-class)
    - [setupFrames (method)](#setupframes-method)
    - [blockWidth (method)](#blockwidth-method)
    - [blockHeight (method)](#blockheight-method)
    - [loadButtonImage (method)](#loadbuttonimage-method)
    - [buttonData (method)](#buttondata-method)
    - [update (method)](#update-method)
    - [checkBitmap (method)](#checkbitmap-method)
    - [updateFrame (method)](#updateframe-method)
    - [updateOpacity (method)](#updateopacity-method)
    - [setColdFrame (method)](#setcoldframe-method)
    - [setHotFrame (method)](#sethotframe-method)
    - [setClickHandler (method)](#setclickhandler-method)
    - [onClick (method)](#onclick-method)
    - [\_buttonType (property)](#_buttontype-property)
    - [\_clickHandler (property)](#_clickhandler-property)
    - [\_coldFrame (property)](#_coldframe-property)
    - [\_hotFrame (property)](#_hotframe-property)

---

# utils

## SpriteButtonType (type alias)

**Signature**

```ts
export declare type SpriteButtonType =
  | 'cancel'
  | 'pageup'
  | 'pagedown'
  | 'down'
  | 'up'
  | 'down2'
  | 'up2'
  | 'ok'
  | 'menu'
```

## Sprite_Button (class)

// Sprite_Button
//
// The sprite for displaying a button.

**Signature**

```ts
export declare class Sprite_Button {
  constructor(buttonType: SpriteButtonType)
}
```

### setupFrames (method)

**Signature**

```ts
setupFrames(): void;
```

### blockWidth (method)

**Signature**

```ts
blockWidth(): number;
```

### blockHeight (method)

**Signature**

```ts
blockHeight(): number;
```

### loadButtonImage (method)

**Signature**

```ts
loadButtonImage(): void;
```

### buttonData (method)

**Signature**

```ts
buttonData(): {
        x: number;
        w: number;
    } | {
        x: number;
        w: number;
    } | {
        x: number;
        w: number;
    } | {
        x: number;
        w: number;
    } | {
        x: number;
        w: number;
    } | {
        x: number;
        w: number;
    } | {
        x: number;
        w: number;
    } | {
        x: number;
        w: number;
    } | {
        x: number;
        w: number;
    };
```

### update (method)

**Signature**

```ts
update(): void;
```

### checkBitmap (method)

**Signature**

```ts
checkBitmap(): void;
```

### updateFrame (method)

**Signature**

```ts
updateFrame(): void;
```

### updateOpacity (method)

**Signature**

```ts
updateOpacity(): void;
```

### setColdFrame (method)

**Signature**

```ts
setColdFrame(x: number, y: number, width: number, height: number): void;
```

### setHotFrame (method)

**Signature**

```ts
setHotFrame(x: number, y: number, width: number, height: number): void;
```

### setClickHandler (method)

**Signature**

```ts
setClickHandler(method: () => void): void;
```

### onClick (method)

**Signature**

```ts
onClick(): void;
```

### \_buttonType (property)

**Signature**

```ts
_buttonType: SpriteButtonType
```

### \_clickHandler (property)

**Signature**

```ts
_clickHandler: (() => void) | null
```

### \_coldFrame (property)

**Signature**

```ts
_coldFrame: Rectangle | null
```

### \_hotFrame (property)

**Signature**

```ts
_hotFrame: Rectangle | null
```
