---
title: sprites/Sprite_Balloon.d.ts
nav_order: 122
parent: Modules
---

## Sprite_Balloon.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Sprite_Balloon (class)](#sprite_balloon-class)
    - [initMembers (method)](#initmembers-method)
    - [loadBitmap (method)](#loadbitmap-method)
    - [setup (method)](#setup-method)
    - [update (method)](#update-method)
    - [updatePosition (method)](#updateposition-method)
    - [updateFrame (method)](#updateframe-method)
    - [speed (method)](#speed-method)
    - [waitTime (method)](#waittime-method)
    - [frameIndex (method)](#frameindex-method)
    - [isPlaying (method)](#isplaying-method)
    - [\_target (property)](#_target-property)
    - [\_balloonId (property)](#_balloonid-property)
    - [\_duration (property)](#_duration-property)
    - [targetObject (property)](#targetobject-property)

---

# utils

## Sprite_Balloon (class)

// Sprite_Balloon
//
// The sprite for displaying a balloon icon.

**Signature**

```ts
export declare class Sprite_Balloon {
  constructor()
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void
```

### loadBitmap (method)

**Signature**

```ts
loadBitmap(): void
```

### setup (method)

**Signature**

```ts
setup(targetSprite: Sprite, balloonId: BalloonIconID): void
```

### update (method)

**Signature**

```ts
update(): void
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

### speed (method)

**Signature**

```ts
speed(): number
```

### waitTime (method)

**Signature**

```ts
waitTime(): number
```

### frameIndex (method)

**Signature**

```ts
frameIndex(): number
```

### isPlaying (method)

**Signature**

```ts
isPlaying(): boolean
```

### \_target (property)

**Signature**

```ts
_target: Sprite<Bitmap>
```

### \_balloonId (property)

**Signature**

```ts
_balloonId: number
```

### \_duration (property)

**Signature**

```ts
_duration: number
```

### targetObject (property)

**Signature**

```ts
targetObject: Game_Character | undefined
```
