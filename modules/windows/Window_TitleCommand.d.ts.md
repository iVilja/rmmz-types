---
title: windows/Window_TitleCommand.d.ts
nav_order: 193
parent: Modules
---

## Window_TitleCommand.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_TitleCommand (class)](#window_titlecommand-class)
    - [initCommandPosition (static method)](#initcommandposition-static-method)
    - [makeCommandList (method)](#makecommandlist-method)
    - [isContinueEnabled (method)](#iscontinueenabled-method)
    - [processOk (method)](#processok-method)
    - [selectLast (method)](#selectlast-method)

---

# utils

## Window_TitleCommand (class)

Window_TitleCommand

The window for selecting New Game/Continue on the title screen.

**Signature**

```ts
export declare class Window_TitleCommand {
  constructor(rect: Rectangle)
}
```

### initCommandPosition (static method)

**Signature**

```ts
static initCommandPosition(): void
```

### makeCommandList (method)

**Signature**

```ts
makeCommandList(): void
```

### isContinueEnabled (method)

**Signature**

```ts
isContinueEnabled(): boolean
```

### processOk (method)

**Signature**

```ts
processOk(): void
```

### selectLast (method)

**Signature**

```ts
selectLast(): void
```
