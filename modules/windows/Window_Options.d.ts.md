---
title: windows/Window_Options.d.ts
nav_order: 174
parent: Modules
---

## Window_Options.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [OptionSymbol (type alias)](#optionsymbol-type-alias)
  - [VolumeOptionSymbol (type alias)](#volumeoptionsymbol-type-alias)
  - [Window_Options (class)](#window_options-class)
    - [makeCommandList (method)](#makecommandlist-method)
    - [addGeneralOptions (method)](#addgeneraloptions-method)
    - [addVolumeOptions (method)](#addvolumeoptions-method)
    - [drawItem (method)](#drawitem-method)
    - [statusWidth (method)](#statuswidth-method)
    - [statusText (method)](#statustext-method)
    - [isVolumeSymbol (method)](#isvolumesymbol-method)
    - [booleanStatusText (method)](#booleanstatustext-method)
    - [volumeStatusText (method)](#volumestatustext-method)
    - [processOk (method)](#processok-method)
    - [cursorRight (method)](#cursorright-method)
    - [cursorLeft (method)](#cursorleft-method)
    - [changeVolume (method)](#changevolume-method)
    - [volumeOffset (method)](#volumeoffset-method)
    - [changeValue (method)](#changevalue-method)
    - [getConfigValue (method)](#getconfigvalue-method)
    - [setConfigValue (method)](#setconfigvalue-method)

---

# utils

## OptionSymbol (type alias)

**Signature**

```ts
export declare type OptionSymbol = 'alwaysDash' | 'commandRemember' | 'touchUI' | VolumeOptionSymbol
```

## VolumeOptionSymbol (type alias)

**Signature**

```ts
export declare type VolumeOptionSymbol = 'bgmVolume' | 'bgsVolume' | 'meVolume' | 'seVolume'
```

## Window_Options (class)

Window_Options

The window for changing various settings on the options screen.

**Signature**

```ts
export declare class Window_Options
```

### makeCommandList (method)

**Signature**

```ts
makeCommandList(): void;
```

### addGeneralOptions (method)

**Signature**

```ts
addGeneralOptions(): void;
```

### addVolumeOptions (method)

**Signature**

```ts
addVolumeOptions(): void;
```

### drawItem (method)

**Signature**

```ts
drawItem(index: number): void;
```

### statusWidth (method)

**Signature**

```ts
statusWidth(): number;
```

### statusText (method)

**Signature**

```ts
statusText(index: number): string;
```

### isVolumeSymbol (method)

**Signature**

```ts
isVolumeSymbol(symbol: OptionSymbol): symbol is VolumeOptionSymbol;
```

### booleanStatusText (method)

**Signature**

```ts
booleanStatusText(value: boolean): "ON" | "OFF";
```

### volumeStatusText (method)

**Signature**

```ts
volumeStatusText(value: number): string;
```

### processOk (method)

**Signature**

```ts
processOk(): void;
```

### cursorRight (method)

**Signature**

```ts
cursorRight(): void;
```

### cursorLeft (method)

**Signature**

```ts
cursorLeft(): void;
```

### changeVolume (method)

**Signature**

```ts
changeVolume<T extends VolumeOptionSymbol>(symbol: T, forward: boolean, wrap: boolean): void;
```

### volumeOffset (method)

**Signature**

```ts
volumeOffset(): number;
```

### changeValue (method)

**Signature**

```ts
changeValue(symbol: OptionSymbol, value: boolean | number): void;
```

### getConfigValue (method)

**Signature**

```ts
getConfigValue<T extends OptionSymbol>(symbol: T): (typeof ConfigManager)[T];
```

### setConfigValue (method)

**Signature**

```ts
setConfigValue<T extends OptionSymbol>(symbol: T, volume: typeof ConfigManager[T]): void;
```
