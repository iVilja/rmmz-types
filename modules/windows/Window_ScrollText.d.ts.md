---
title: windows/Window_ScrollText.d.ts
nav_order: 178
parent: Modules
---

## Window_ScrollText.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_ScrollText (class)](#window_scrolltext-class)
    - [update (method)](#update-method)
    - [startMessage (method)](#startmessage-method)
    - [refresh (method)](#refresh-method)
    - [updatePlacement (method)](#updateplacement-method)
    - [contentsHeight (method)](#contentsheight-method)
    - [updateMessage (method)](#updatemessage-method)
    - [scrollSpeed (method)](#scrollspeed-method)
    - [isFastForward (method)](#isfastforward-method)
    - [fastForwardRate (method)](#fastforwardrate-method)
    - [terminateMessage (method)](#terminatemessage-method)
    - [\_text (property)](#_text-property)
    - [\_allTextHeight (property)](#_alltextheight-property)
    - [\_reservedRect (property)](#_reservedrect-property)

---

# utils

## Window_ScrollText (class)

Window_ScrollText

The window for displaying scrolling text. No frame is displayed, but it
// is handled as a window for convenience.

**Signature**

```ts
export declare class Window_ScrollText {
  constructor(rect: Rectangle)
}
```

### update (method)

**Signature**

```ts
update(): void;
```

### startMessage (method)

**Signature**

```ts
startMessage(): void;
```

### refresh (method)

**Signature**

```ts
refresh(): void;
```

### updatePlacement (method)

**Signature**

```ts
updatePlacement(): void;
```

### contentsHeight (method)

**Signature**

```ts
contentsHeight(): number;
```

### updateMessage (method)

**Signature**

```ts
updateMessage(): void;
```

### scrollSpeed (method)

**Signature**

```ts
scrollSpeed(): number;
```

### isFastForward (method)

**Signature**

```ts
isFastForward(): boolean;
```

### fastForwardRate (method)

**Signature**

```ts
fastForwardRate(): number;
```

### terminateMessage (method)

**Signature**

```ts
terminateMessage(): void;
```

### \_text (property)

**Signature**

```ts
_text: string | null
```

### \_allTextHeight (property)

**Signature**

```ts
_allTextHeight: number
```

### \_reservedRect (property)

**Signature**

```ts
_reservedRect: Rectangle
```
