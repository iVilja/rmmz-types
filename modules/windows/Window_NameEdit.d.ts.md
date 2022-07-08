---
title: windows/Window_NameEdit.d.ts
nav_order: 171
parent: Modules
---

## Window_NameEdit.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_NameEdit (class)](#window_nameedit-class)
    - [setup (method)](#setup-method)
    - [name (method)](#name-method)
    - [restoreDefault (method)](#restoredefault-method)
    - [add (method)](#add-method)
    - [back (method)](#back-method)
    - [faceWidth (method)](#facewidth-method)
    - [charWidth (method)](#charwidth-method)
    - [left (method)](#left-method)
    - [itemRect (method)](#itemrect-method)
    - [underlineRect (method)](#underlinerect-method)
    - [underlineColor (method)](#underlinecolor-method)
    - [drawUnderline (method)](#drawunderline-method)
    - [drawChar (method)](#drawchar-method)
    - [refresh (method)](#refresh-method)
    - [\_actor (property)](#_actor-property)
    - [\_maxLength (property)](#_maxlength-property)
    - [\_name (property)](#_name-property)
    - [\_index (property)](#_index-property)
    - [\_defaultName (property)](#_defaultname-property)

---

# utils

## Window_NameEdit (class)

Window_NameEdit

The window for editing an actor's name on the name input screen.

**Signature**

```ts
export declare class Window_NameEdit {
  constructor(rect: Rectangle)
}
```

### setup (method)

**Signature**

```ts
setup(actor: Game_Actor, maxLength: number): void;
```

### name (method)

**Signature**

```ts
name(): string;
```

### restoreDefault (method)

**Signature**

```ts
restoreDefault(): boolean;
```

### add (method)

**Signature**

```ts
add(ch: string): boolean;
```

### back (method)

**Signature**

```ts
back(): boolean;
```

### faceWidth (method)

**Signature**

```ts
faceWidth(): number;
```

### charWidth (method)

**Signature**

```ts
charWidth(): number;
```

### left (method)

**Signature**

```ts
left(): number;
```

### itemRect (method)

**Signature**

```ts
itemRect(index: number): Rectangle;
```

### underlineRect (method)

**Signature**

```ts
underlineRect(index: number): Rectangle;
```

### underlineColor (method)

**Signature**

```ts
underlineColor(): string;
```

### drawUnderline (method)

**Signature**

```ts
drawUnderline(index: number): void;
```

### drawChar (method)

**Signature**

```ts
drawChar(index: number): void;
```

### refresh (method)

**Signature**

```ts
refresh(): void;
```

### \_actor (property)

**Signature**

```ts
_actor: Game_Actor | null
```

### \_maxLength (property)

**Signature**

```ts
_maxLength: number
```

### \_name (property)

**Signature**

```ts
_name: string
```

### \_index (property)

**Signature**

```ts
_index: number
```

### \_defaultName (property)

**Signature**

```ts
_defaultName: string
```
