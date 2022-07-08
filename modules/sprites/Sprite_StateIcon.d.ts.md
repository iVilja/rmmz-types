---
title: sprites/Sprite_StateIcon.d.ts
nav_order: 133
parent: Modules
---

## Sprite_StateIcon.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Sprite_StateIcon (class)](#sprite_stateicon-class)
    - [initMembers (method)](#initmembers-method)
    - [loadBitmap (method)](#loadbitmap-method)
    - [setup (method)](#setup-method)
    - [update (method)](#update-method)
    - [animationWait (method)](#animationwait-method)
    - [updateIcon (method)](#updateicon-method)
    - [shouldDisplay (method)](#shoulddisplay-method)
    - [updateFrame (method)](#updateframe-method)
    - [\_battler (property)](#_battler-property)
    - [\_iconIndex (property)](#_iconindex-property)
    - [\_animationCount (property)](#_animationcount-property)
    - [\_animationIndex (property)](#_animationindex-property)

---

# utils

## Sprite_StateIcon (class)

// Sprite_StateIcon
//
// The sprite for displaying state icons.

**Signature**

```ts
export declare class Sprite_StateIcon {
  constructor()
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void;
```

### loadBitmap (method)

**Signature**

```ts
loadBitmap(): void;
```

### setup (method)

**Signature**

```ts
setup(battler: ActionTarget): void;
```

### update (method)

**Signature**

```ts
update(): void;
```

### animationWait (method)

**Signature**

```ts
animationWait(): number;
```

### updateIcon (method)

**Signature**

```ts
updateIcon(): void;
```

### shouldDisplay (method)

**Signature**

```ts
shouldDisplay(): this is {
        _battler: ActionTarget;
    };
```

### updateFrame (method)

**Signature**

```ts
updateFrame(): void;
```

### \_battler (property)

**Signature**

```ts
_battler: Game_Actor | Game_Enemy | null
```

### \_iconIndex (property)

**Signature**

```ts
_iconIndex: number
```

### \_animationCount (property)

**Signature**

```ts
_animationCount: number
```

### \_animationIndex (property)

**Signature**

```ts
_animationIndex: number
```
