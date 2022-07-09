---
title: sprites/Sprite_StateOverlay.d.ts
nav_order: 135
parent: Modules
---

## Sprite_StateOverlay.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Sprite_StateOverlay (class)](#sprite_stateoverlay-class)
    - [initMembers (method)](#initmembers-method)
    - [loadBitmap (method)](#loadbitmap-method)
    - [setup (method)](#setup-method)
    - [update (method)](#update-method)
    - [animationWait (method)](#animationwait-method)
    - [updatePattern (method)](#updatepattern-method)
    - [updateFrame (method)](#updateframe-method)
    - [\_battler (property)](#_battler-property)
    - [\_overlayIndex (property)](#_overlayindex-property)
    - [\_animationCount (property)](#_animationcount-property)
    - [\_pattern (property)](#_pattern-property)

---

# utils

## Sprite_StateOverlay (class)

// Sprite_StateOverlay
//
// The sprite for displaying an overlay image for a state.

**Signature**

```ts
export declare class Sprite_StateOverlay {
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
setup(battler: ActionTarget): void
```

### update (method)

**Signature**

```ts
update(): void
```

### animationWait (method)

**Signature**

```ts
animationWait(): number
```

### updatePattern (method)

**Signature**

```ts
updatePattern(): void
```

### updateFrame (method)

**Signature**

```ts
updateFrame(): void
```

### \_battler (property)

**Signature**

```ts
_battler: Game_Actor | Game_Enemy | null
```

### \_overlayIndex (property)

**Signature**

```ts
_overlayIndex: number
```

### \_animationCount (property)

**Signature**

```ts
_animationCount: number
```

### \_pattern (property)

**Signature**

```ts
_pattern: number
```
