---
title: managers/FontManager.d.ts
nav_order: 55
parent: Modules
---

## FontManager.d overview

FontManager

The static class that loads font files.

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [FontManager (class)](#fontmanager-class)
    - [load (static method)](#load-static-method)
    - [isReady (static method)](#isready-static-method)
    - [startLoading (static method)](#startloading-static-method)
    - [throwLoadError (static method)](#throwloaderror-static-method)
    - [makeUrl (static method)](#makeurl-static-method)

---

# utils

## FontManager (class)

FontManager

The static class that loads font files.

**Signature**

```ts
export declare class FontManager {
  constructor()
}
```

### load (static method)

**Signature**

```ts
static load(family: string, filename: string): void;
```

### isReady (static method)

**Signature**

```ts
static isReady(): boolean;
```

### startLoading (static method)

**Signature**

```ts
static startLoading(family: string, url: string): void;
```

### throwLoadError (static method)

**Signature**

```ts
static throwLoadError(family: string): void;
```

### makeUrl (static method)

**Signature**

```ts
static makeUrl(filename: string): string;
```
