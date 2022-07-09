---
title: windows/Window_Command.d.ts
nav_order: 152
parent: Modules
---

## Window_Command.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [WindowCommand (type alias)](#windowcommand-type-alias)
  - [Window_Command (class)](#window_command-class)
    - [maxItems (method)](#maxitems-method)
    - [clearCommandList (method)](#clearcommandlist-method)
    - [makeCommandList (method)](#makecommandlist-method)
    - [addCommand (method)](#addcommand-method)
    - [commandName (method)](#commandname-method)
    - [commandSymbol (method)](#commandsymbol-method)
    - [isCommandEnabled (method)](#iscommandenabled-method)
    - [currentData (method)](#currentdata-method)
    - [isCurrentItemEnabled (method)](#iscurrentitemenabled-method)
    - [currentSymbol (method)](#currentsymbol-method)
    - [currentExt (method)](#currentext-method)
    - [findSymbol (method)](#findsymbol-method)
    - [selectSymbol (method)](#selectsymbol-method)
    - [findExt (method)](#findext-method)
    - [selectExt (method)](#selectext-method)
    - [drawItem (method)](#drawitem-method)
    - [itemTextAlign (method)](#itemtextalign-method)
    - [isOkEnabled (method)](#isokenabled-method)
    - [callOkHandler (method)](#callokhandler-method)
    - [refresh (method)](#refresh-method)
    - [\_list (property)](#_list-property)

---

# utils

## WindowCommand (type alias)

**Signature**

```ts
export declare type WindowCommand = {
  name: string
  symbol: string
  enabled: boolean
  ext: number | null
}
```

## Window_Command (class)

Window_Command

The superclass of windows for selecting a command.

**Signature**

```ts
export declare class Window_Command {
  constructor(rect: Rectangle)
}
```

### maxItems (method)

**Signature**

```ts
maxItems(): number
```

### clearCommandList (method)

**Signature**

```ts
clearCommandList(): void
```

### makeCommandList (method)

**Signature**

```ts
makeCommandList(): void
```

### addCommand (method)

**Signature**

```ts
addCommand(name: string, symbol: string, enabled?: boolean, ext?: number | null): void
```

### commandName (method)

**Signature**

```ts
commandName(index: number): string
```

### commandSymbol (method)

**Signature**

```ts
commandSymbol(index: number): string
```

### isCommandEnabled (method)

**Signature**

```ts
isCommandEnabled(index: number): boolean
```

### currentData (method)

**Signature**

```ts
currentData(): WindowCommand | null
```

### isCurrentItemEnabled (method)

**Signature**

```ts
isCurrentItemEnabled(): boolean
```

### currentSymbol (method)

**Signature**

```ts
currentSymbol(): string | null
```

### currentExt (method)

**Signature**

```ts
currentExt(): number | null
```

### findSymbol (method)

**Signature**

```ts
findSymbol(symbol: string | null): number
```

### selectSymbol (method)

**Signature**

```ts
selectSymbol(symbol: string | null): void
```

### findExt (method)

**Signature**

```ts
findExt(ext: number): number
```

### selectExt (method)

**Signature**

```ts
selectExt(ext: number): void
```

### drawItem (method)

**Signature**

```ts
drawItem(index: number): void
```

### itemTextAlign (method)

**Signature**

```ts
itemTextAlign(): CanvasTextAlign
```

### isOkEnabled (method)

**Signature**

```ts
isOkEnabled(): boolean
```

### callOkHandler (method)

**Signature**

```ts
callOkHandler(): void
```

### refresh (method)

**Signature**

```ts
refresh(): void
```

### \_list (property)

**Signature**

```ts
_list: WindowCommand[]
```
