---
title: windows/Window_ChoiceList.d.ts
nav_order: 150
parent: Modules
---

## Window_ChoiceList.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_ChoiceList (class)](#window_choicelist-class)
    - [setMessageWindow (method)](#setmessagewindow-method)
    - [createCancelButton (method)](#createcancelbutton-method)
    - [start (method)](#start-method)
    - [update (method)](#update-method)
    - [updateCancelButton (method)](#updatecancelbutton-method)
    - [selectDefault (method)](#selectdefault-method)
    - [updatePlacement (method)](#updateplacement-method)
    - [updateBackground (method)](#updatebackground-method)
    - [placeCancelButton (method)](#placecancelbutton-method)
    - [windowX (method)](#windowx-method)
    - [windowY (method)](#windowy-method)
    - [windowWidth (method)](#windowwidth-method)
    - [windowHeight (method)](#windowheight-method)
    - [numVisibleRows (method)](#numvisiblerows-method)
    - [maxLines (method)](#maxlines-method)
    - [maxChoiceWidth (method)](#maxchoicewidth-method)
    - [makeCommandList (method)](#makecommandlist-method)
    - [drawItem (method)](#drawitem-method)
    - [isCancelEnabled (method)](#iscancelenabled-method)
    - [needsCancelButton (method)](#needscancelbutton-method)
    - [callOkHandler (method)](#callokhandler-method)
    - [callCancelHandler (method)](#callcancelhandler-method)
    - [\_background (property)](#_background-property)
    - [\_canRepeat (property)](#_canrepeat-property)
    - [\_messageWindow (property)](#_messagewindow-property)
    - [\_cancelButton (property)](#_cancelbutton-property)

---

# utils

## Window_ChoiceList (class)

Window_ChoiceList

The window used for the event command [Show Choices].

**Signature**

```ts
export declare class Window_ChoiceList {
  constructor()
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

### selectDefault (method)

**Signature**

```ts
selectDefault(): void;
```

### updatePlacement (method)

**Signature**

```ts
updatePlacement(): void;
```

### updateBackground (method)

**Signature**

```ts
updateBackground(): void;
```

### placeCancelButton (method)

**Signature**

```ts
placeCancelButton(): void;
```

### windowX (method)

**Signature**

```ts
windowX(): number;
```

### windowY (method)

**Signature**

```ts
windowY(): number;
```

### windowWidth (method)

**Signature**

```ts
windowWidth(): number;
```

### windowHeight (method)

**Signature**

```ts
windowHeight(): number;
```

### numVisibleRows (method)

**Signature**

```ts
numVisibleRows(): number;
```

### maxLines (method)

**Signature**

```ts
maxLines(): 4 | 8;
```

### maxChoiceWidth (method)

**Signature**

```ts
maxChoiceWidth(): number;
```

### makeCommandList (method)

**Signature**

```ts
makeCommandList(): void;
```

### drawItem (method)

**Signature**

```ts
drawItem(index: number): void;
```

### isCancelEnabled (method)

**Signature**

```ts
isCancelEnabled(): boolean;
```

### needsCancelButton (method)

**Signature**

```ts
needsCancelButton(): boolean;
```

### callOkHandler (method)

**Signature**

```ts
callOkHandler(): void;
```

### callCancelHandler (method)

**Signature**

```ts
callCancelHandler(): void;
```

### \_background (property)

**Signature**

```ts
_background: TextWindowBackgroundType
```

### \_canRepeat (property)

**Signature**

```ts
_canRepeat: boolean
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
