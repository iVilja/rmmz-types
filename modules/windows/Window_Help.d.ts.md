---
title: windows/Window_Help.d.ts
nav_order: 161
parent: Modules
---

## Window_Help.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_Help (class)](#window_help-class)
    - [setText (method)](#settext-method)
    - [clear (method)](#clear-method)
    - [setItem (method)](#setitem-method)
    - [refresh (method)](#refresh-method)
    - [\_text (property)](#_text-property)

---

# utils

## Window_Help (class)

Window_Help

The window for displaying the description of the selected item.

**Signature**

```ts
export declare class Window_Help {
  constructor(rect: Rectangle)
}
```

### setText (method)

**Signature**

```ts
setText(text: string): void;
```

### clear (method)

**Signature**

```ts
clear(): void;
```

### setItem (method)

**Signature**

```ts
setItem(item: DataItemBase | null): void;
```

### refresh (method)

**Signature**

```ts
refresh(): void;
```

### \_text (property)

**Signature**

```ts
_text: string
```
