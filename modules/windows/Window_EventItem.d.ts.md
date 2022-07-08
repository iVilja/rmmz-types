---
title: windows/Window_EventItem.d.ts
nav_order: 158
parent: Modules
---

## Window_EventItem.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_EventItem (class)](#window_eventitem-class)
    - [setMessageWindow (method)](#setmessagewindow-method)
    - [createCancelButton (method)](#createcancelbutton-method)
    - [start (method)](#start-method)
    - [update (method)](#update-method)
    - [updateCancelButton (method)](#updatecancelbutton-method)
    - [updatePlacement (method)](#updateplacement-method)
    - [placeCancelButton (method)](#placecancelbutton-method)
    - [includes (method)](#includes-method)
    - [needsNumber (method)](#needsnumber-method)
    - [isEnabled (method)](#isenabled-method)
    - [onOk (method)](#onok-method)
    - [onCancel (method)](#oncancel-method)
    - [\_messageWindow (property)](#_messagewindow-property)
    - [\_cancelButton (property)](#_cancelbutton-property)

---

# utils

## Window_EventItem (class)

Window_EventItem

The window used for the event command [Select Item].

**Signature**

```ts
export declare class Window_EventItem {
  constructor(rect: Rectangle)
}
```

### setMessageWindow (method)

**Signature**

```ts
setMessageWindow(messageWindow: Window_Message): void;
```

### createCancelButton (method)

**Signature**

```ts
createCancelButton(): void;
```

### start (method)

**Signature**

```ts
start(): void;
```

### update (method)

**Signature**

```ts
update(): void;
```

### updateCancelButton (method)

**Signature**

```ts
updateCancelButton(): void;
```

### updatePlacement (method)

**Signature**

```ts
updatePlacement(): void;
```

### placeCancelButton (method)

**Signature**

```ts
placeCancelButton(): void;
```

### includes (method)

**Signature**

```ts
includes(item: DataItemBase): boolean;
```

### needsNumber (method)

**Signature**

```ts
needsNumber(): boolean;
```

### isEnabled (method)

**Signature**

```ts
isEnabled(): boolean;
```

### onOk (method)

**Signature**

```ts
onOk(): void;
```

### onCancel (method)

**Signature**

```ts
onCancel(): void;
```

### \_messageWindow (property)

**Signature**

```ts
_messageWindow: Window_Message
```

### \_cancelButton (property)

**Signature**

```ts
_cancelButton: Sprite_Button | undefined
```
