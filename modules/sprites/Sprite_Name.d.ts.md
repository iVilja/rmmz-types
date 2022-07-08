---
title: sprites/Sprite_Name.d.ts
nav_order: 131
parent: Modules
---

## Sprite_Name.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Sprite_Name (class)](#sprite_name-class)
    - [initMembers (method)](#initmembers-method)
    - [destroy (method)](#destroy-method)
    - [createBitmap (method)](#createbitmap-method)
    - [bitmapWidth (method)](#bitmapwidth-method)
    - [bitmapHeight (method)](#bitmapheight-method)
    - [fontFace (method)](#fontface-method)
    - [fontSize (method)](#fontsize-method)
    - [setup (method)](#setup-method)
    - [update (method)](#update-method)
    - [updateBitmap (method)](#updatebitmap-method)
    - [name (method)](#name-method)
    - [textColor (method)](#textcolor-method)
    - [outlineColor (method)](#outlinecolor-method)
    - [outlineWidth (method)](#outlinewidth-method)
    - [redraw (method)](#redraw-method)
    - [setupFont (method)](#setupfont-method)
    - [\_battler (property)](#_battler-property)
    - [\_name (property)](#_name-property)
    - [\_textColor (property)](#_textcolor-property)

---

# utils

## Sprite_Name (class)

// Sprite_Name
//
// The sprite for displaying a status gauge.

**Signature**

```ts
export declare class Sprite_Name {
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

### createBitmap (method)

**Signature**

```ts
createBitmap(): void;
```

### bitmapWidth (method)

**Signature**

```ts
bitmapWidth(): number;
```

### bitmapHeight (method)

**Signature**

```ts
bitmapHeight(): number;
```

### fontFace (method)

**Signature**

```ts
fontFace(): string;
```

### fontSize (method)

**Signature**

```ts
fontSize(): number;
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

### updateBitmap (method)

**Signature**

```ts
updateBitmap(): void;
```

### name (method)

**Signature**

```ts
name(): string;
```

### textColor (method)

**Signature**

```ts
textColor(): string;
```

### outlineColor (method)

**Signature**

```ts
outlineColor(): string;
```

### outlineWidth (method)

**Signature**

```ts
outlineWidth(): number;
```

### redraw (method)

**Signature**

```ts
redraw(): void;
```

### setupFont (method)

**Signature**

```ts
setupFont(): void;
```

### \_battler (property)

**Signature**

```ts
_battler: Game_Actor | Game_Enemy | null
```

### \_name (property)

**Signature**

```ts
_name: string
```

### \_textColor (property)

**Signature**

```ts
_textColor: string
```
