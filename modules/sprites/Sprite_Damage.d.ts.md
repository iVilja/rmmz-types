---
title: sprites/Sprite_Damage.d.ts
nav_order: 128
parent: Modules
---

## Sprite_Damage.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Sprite_Damage (class)](#sprite_damage-class)
    - [destroy (method)](#destroy-method)
    - [setup (method)](#setup-method)
    - [setupCriticalEffect (method)](#setupcriticaleffect-method)
    - [fontFace (method)](#fontface-method)
    - [fontSize (method)](#fontsize-method)
    - [damageColor (method)](#damagecolor-method)
    - [outlineColor (method)](#outlinecolor-method)
    - [outlineWidth (method)](#outlinewidth-method)
    - [createMiss (method)](#createmiss-method)
    - [createDigits (method)](#createdigits-method)
    - [createChildSprite (method)](#createchildsprite-method)
    - [createBitmap (method)](#createbitmap-method)
    - [update (method)](#update-method)
    - [updateChild (method)](#updatechild-method)
    - [updateFlash (method)](#updateflash-method)
    - [updateOpacity (method)](#updateopacity-method)
    - [isPlaying (method)](#isplaying-method)
    - [\_duration (property)](#_duration-property)
    - [\_flashColor (property)](#_flashcolor-property)
    - [\_flashDuration (property)](#_flashduration-property)
    - [\_colorType (property)](#_colortype-property)

---

# utils

## Sprite_Damage (class)

// Sprite_Damage
//
// The sprite for displaying a popup damage.

**Signature**

```ts
export declare class Sprite_Damage
```

### destroy (method)

**Signature**

```ts
destroy(options?: PIXIDestroyOptions): void
```

### setup (method)

**Signature**

```ts
setup(target: ActionTarget): void
```

### setupCriticalEffect (method)

**Signature**

```ts
setupCriticalEffect(): void
```

### fontFace (method)

**Signature**

```ts
fontFace(): string
```

### fontSize (method)

**Signature**

```ts
fontSize(): number
```

### damageColor (method)

**Signature**

```ts
damageColor(): "#ffffff" | "#b9ffb5" | "#ffff90" | "#80b0ff" | "#808080"
```

### outlineColor (method)

**Signature**

```ts
outlineColor(): string
```

### outlineWidth (method)

**Signature**

```ts
outlineWidth(): number
```

### createMiss (method)

**Signature**

```ts
createMiss(): void
```

### createDigits (method)

**Signature**

```ts
createDigits(value: number): void
```

### createChildSprite (method)

**Signature**

```ts
createChildSprite(width: number, height: number): Sprite<Bitmap>
```

### createBitmap (method)

**Signature**

```ts
createBitmap(width: number, height: number): Bitmap
```

### update (method)

**Signature**

```ts
update(): void
```

### updateChild (method)

**Signature**

```ts
updateChild(sprite: Sprite): void
```

### updateFlash (method)

**Signature**

```ts
updateFlash(): void
```

### updateOpacity (method)

**Signature**

```ts
updateOpacity(): void
```

### isPlaying (method)

**Signature**

```ts
isPlaying(): boolean
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

### \_colorType (property)

**Signature**

```ts
_colorType: number
```
