---
title: managers/ConfigManager.d.ts
nav_order: 53
parent: Modules
---

## ConfigManager.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [ConfigManager (class)](#configmanager-class)
    - [load (static method)](#load-static-method)
    - [save (static method)](#save-static-method)
    - [isLoaded (static method)](#isloaded-static-method)
    - [makeData (static method)](#makedata-static-method)
    - [applyData (static method)](#applydata-static-method)
    - [readFlag (static method)](#readflag-static-method)
    - [readVolume (static method)](#readvolume-static-method)

---

# utils

## ConfigManager (class)

ConfigManager

The static class that manages the configuration data.

**Signature**

```ts
export declare class ConfigManager {
  constructor()
}
```

### load (static method)

**Signature**

```ts
static load(): Promise<number>
```

### save (static method)

**Signature**

```ts
static save(): void
```

### isLoaded (static method)

**Signature**

```ts
static isLoaded(): boolean
```

### makeData (static method)

**Signature**

```ts
static makeData(): DataConfig
```

### applyData (static method)

**Signature**

```ts
static applyData(config: Partial<DataConfig>): void
```

### readFlag (static method)

**Signature**

```ts
static readFlag(config: Partial<DataConfig>, name: keyof DataConfig, defaultValue: boolean): boolean
```

### readVolume (static method)

**Signature**

```ts
static readVolume(config: Partial<DataConfig>, name: keyof DataConfig): number
```
