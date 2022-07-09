---
title: windows/Window_MenuCommand.d.ts
nav_order: 168
parent: Modules
---

## Window_MenuCommand.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_MenuCommand (class)](#window_menucommand-class)
    - [initCommandPosition (static method)](#initcommandposition-static-method)
    - [makeCommandList (method)](#makecommandlist-method)
    - [addMainCommands (method)](#addmaincommands-method)
    - [addFormationCommand (method)](#addformationcommand-method)
    - [addOriginalCommands (method)](#addoriginalcommands-method)
    - [addOptionsCommand (method)](#addoptionscommand-method)
    - [addSaveCommand (method)](#addsavecommand-method)
    - [addGameEndCommand (method)](#addgameendcommand-method)
    - [needsCommand (method)](#needscommand-method)
    - [areMainCommandsEnabled (method)](#aremaincommandsenabled-method)
    - [isFormationEnabled (method)](#isformationenabled-method)
    - [isOptionsEnabled (method)](#isoptionsenabled-method)
    - [isSaveEnabled (method)](#issaveenabled-method)
    - [isGameEndEnabled (method)](#isgameendenabled-method)
    - [processOk (method)](#processok-method)
    - [selectLast (method)](#selectlast-method)
    - [\_canRepeat (property)](#_canrepeat-property)

---

# utils

## Window_MenuCommand (class)

Window_MenuCommand

The window for selecting a command on the menu screen.

**Signature**

```ts
export declare class Window_MenuCommand {
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

### addMainCommands (method)

**Signature**

```ts
addMainCommands(): void
```

### addFormationCommand (method)

**Signature**

```ts
addFormationCommand(): void
```

### addOriginalCommands (method)

**Signature**

```ts
addOriginalCommands(): void
```

### addOptionsCommand (method)

**Signature**

```ts
addOptionsCommand(): void
```

### addSaveCommand (method)

**Signature**

```ts
addSaveCommand(): void
```

### addGameEndCommand (method)

**Signature**

```ts
addGameEndCommand(): void
```

### needsCommand (method)

**Signature**

```ts
needsCommand(name: string): boolean
```

### areMainCommandsEnabled (method)

**Signature**

```ts
areMainCommandsEnabled(): boolean
```

### isFormationEnabled (method)

**Signature**

```ts
isFormationEnabled(): boolean
```

### isOptionsEnabled (method)

**Signature**

```ts
isOptionsEnabled(): boolean
```

### isSaveEnabled (method)

**Signature**

```ts
isSaveEnabled(): boolean
```

### isGameEndEnabled (method)

**Signature**

```ts
isGameEndEnabled(): boolean
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

### \_canRepeat (property)

**Signature**

```ts
_canRepeat: boolean
```
