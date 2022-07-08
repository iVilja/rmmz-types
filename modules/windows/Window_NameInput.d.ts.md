---
title: windows/Window_NameInput.d.ts
nav_order: 172
parent: Modules
---

## Window_NameInput.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_NameInput (class)](#window_nameinput-class)
    - [setEditWindow (method)](#seteditwindow-method)
    - [table (method)](#table-method)
    - [maxCols (method)](#maxcols-method)
    - [maxItems (method)](#maxitems-method)
    - [itemWidth (method)](#itemwidth-method)
    - [groupSpacing (method)](#groupspacing-method)
    - [character (method)](#character-method)
    - [isPageChange (method)](#ispagechange-method)
    - [isOk (method)](#isok-method)
    - [itemRect (method)](#itemrect-method)
    - [drawItem (method)](#drawitem-method)
    - [updateCursor (method)](#updatecursor-method)
    - [isCursorMovable (method)](#iscursormovable-method)
    - [cursorDown (method)](#cursordown-method)
    - [cursorUp (method)](#cursorup-method)
    - [cursorRight (method)](#cursorright-method)
    - [cursorLeft (method)](#cursorleft-method)
    - [cursorPagedown (method)](#cursorpagedown-method)
    - [cursorPageup (method)](#cursorpageup-method)
    - [processCursorMove (method)](#processcursormove-method)
    - [processHandling (method)](#processhandling-method)
    - [isCancelEnabled (method)](#iscancelenabled-method)
    - [processCancel (method)](#processcancel-method)
    - [processJump (method)](#processjump-method)
    - [processBack (method)](#processback-method)
    - [processOk (method)](#processok-method)
    - [onNameAdd (method)](#onnameadd-method)
    - [onNameOk (method)](#onnameok-method)
    - [\_editWindow (property)](#_editwindow-property)
    - [\_page (property)](#_page-property)
    - [\_index (property)](#_index-property)

---

# utils

## Window_NameInput (class)

Window_NameInput

The window for selecting text characters on the name input screen.

**Signature**

```ts
export declare class Window_NameInput
```

### setEditWindow (method)

**Signature**

```ts
setEditWindow(editWindow: Window_NameEdit): void;
```

### table (method)

**Signature**

```ts
table(): string[][];
```

### maxCols (method)

**Signature**

```ts
maxCols(): number;
```

### maxItems (method)

**Signature**

```ts
maxItems(): number;
```

### itemWidth (method)

**Signature**

```ts
itemWidth(): number;
```

### groupSpacing (method)

**Signature**

```ts
groupSpacing(): number;
```

### character (method)

**Signature**

```ts
character(): string;
```

### isPageChange (method)

**Signature**

```ts
isPageChange(): boolean;
```

### isOk (method)

**Signature**

```ts
isOk(): boolean;
```

### itemRect (method)

**Signature**

```ts
itemRect(index: number): Rectangle;
```

### drawItem (method)

**Signature**

```ts
drawItem(index: number): void;
```

### updateCursor (method)

**Signature**

```ts
updateCursor(): void;
```

### isCursorMovable (method)

**Signature**

```ts
isCursorMovable(): boolean;
```

### cursorDown (method)

**Signature**

```ts
cursorDown(wrap: boolean): void;
```

### cursorUp (method)

**Signature**

```ts
cursorUp(wrap: boolean): void;
```

### cursorRight (method)

**Signature**

```ts
cursorRight(wrap: boolean): void;
```

### cursorLeft (method)

**Signature**

```ts
cursorLeft(wrap: boolean): void;
```

### cursorPagedown (method)

**Signature**

```ts
cursorPagedown(): void;
```

### cursorPageup (method)

**Signature**

```ts
cursorPageup(): void;
```

### processCursorMove (method)

**Signature**

```ts
processCursorMove(): void;
```

### processHandling (method)

**Signature**

```ts
processHandling(): void;
```

### isCancelEnabled (method)

**Signature**

```ts
isCancelEnabled(): boolean;
```

### processCancel (method)

**Signature**

```ts
processCancel(): void;
```

### processJump (method)

**Signature**

```ts
processJump(): void;
```

### processBack (method)

**Signature**

```ts
processBack(): void;
```

### processOk (method)

**Signature**

```ts
processOk(): void;
```

### onNameAdd (method)

**Signature**

```ts
onNameAdd(): void;
```

### onNameOk (method)

**Signature**

```ts
onNameOk(): void;
```

### \_editWindow (property)

**Signature**

```ts
_editWindow: Window_NameEdit | null
```

### \_page (property)

**Signature**

```ts
_page: number
```

### \_index (property)

**Signature**

```ts
_index: number
```
