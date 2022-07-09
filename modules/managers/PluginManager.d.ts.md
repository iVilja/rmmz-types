---
title: managers/PluginManager.d.ts
nav_order: 59
parent: Modules
---

## PluginManager.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [PluginManager (class)](#pluginmanager-class)
    - [setup (static method)](#setup-static-method)
    - [parameters (static method)](#parameters-static-method)
    - [setParameters (static method)](#setparameters-static-method)
    - [loadScript (static method)](#loadscript-static-method)
    - [onError (static method)](#onerror-static-method)
    - [makeUrl (static method)](#makeurl-static-method)
    - [checkErrors (static method)](#checkerrors-static-method)
    - [throwLoadError (static method)](#throwloaderror-static-method)
    - [registerCommand (static method)](#registercommand-static-method)
    - [callCommand (static method)](#callcommand-static-method)

---

# utils

## PluginManager (class)

PluginManager

The static class that manages the plugins.

**Signature**

```ts
export declare class PluginManager {
  constructor()
}
```

### setup (static method)

**Signature**

```ts
static setup(plugins: RmmzPlugin[]): void
```

### parameters (static method)

**Signature**

```ts
static parameters(name: string): Record<string, unknown>
```

### setParameters (static method)

**Signature**

```ts
static setParameters(name: string, parameters: Record<string, unknown>): void
```

### loadScript (static method)

**Signature**

```ts
static loadScript(filename: string): void
```

### onError (static method)

**Signature**

```ts
static onError(e: Event | string): void
```

### makeUrl (static method)

**Signature**

```ts
static makeUrl(filename: string): string
```

### checkErrors (static method)

**Signature**

```ts
static checkErrors(): void
```

### throwLoadError (static method)

**Signature**

```ts
static throwLoadError(url: string): void
```

### registerCommand (static method)

**Signature**

```ts
static registerCommand(pluginName: string, commandName: string, func: () => void): void
```

### callCommand (static method)

**Signature**

```ts
static callCommand(self: unknown, pluginName: string, commandName: string, args: unknown[]): void
```
