---
title: windows/Window_ItemCategory.d.ts
nav_order: 164
parent: Modules
---

## Window_ItemCategory.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_ItemCategory (class)](#window_itemcategory-class)
    - [maxCols (method)](#maxcols-method)
    - [update (method)](#update-method)
    - [makeCommandList (method)](#makecommandlist-method)
    - [needsCommand (method)](#needscommand-method)
    - [setItemWindow (method)](#setitemwindow-method)
    - [needsSelection (method)](#needsselection-method)
    - [\_itemWindow (property)](#_itemwindow-property)

---

# utils

## Window_ItemCategory (class)

Window_ItemCategory

The window for selecting a category of items on the item and shop screens.

**Signature**

```ts
export declare class Window_ItemCategory
```

### maxCols (method)

**Signature**

```ts
maxCols(): number
```

### update (method)

**Signature**

```ts
update(): void
```

### makeCommandList (method)

**Signature**

```ts
makeCommandList(): void
```

### needsCommand (method)

**Signature**

```ts
needsCommand(name: string): boolean
```

### setItemWindow (method)

**Signature**

```ts
setItemWindow(itemWindow: Window_ItemList): void
```

### needsSelection (method)

**Signature**

```ts
needsSelection(): boolean
```

### \_itemWindow (property)

**Signature**

```ts
_itemWindow: Window_ItemList<DataItemBase> | undefined
```
