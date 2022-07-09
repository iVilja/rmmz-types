---
title: managers/EffectManager.d.ts
nav_order: 55
parent: Modules
---

## EffectManager.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [EffectManager (class)](#effectmanager-class)
    - [load (static method)](#load-static-method)
    - [startLoading (static method)](#startloading-static-method)
    - [clear (static method)](#clear-static-method)
    - [onLoad (static method)](#onload-static-method)
    - [onError (static method)](#onerror-static-method)
    - [makeUrl (static method)](#makeurl-static-method)
    - [checkErrors (static method)](#checkerrors-static-method)
    - [throwLoadError (static method)](#throwloaderror-static-method)
    - [isReady (static method)](#isready-static-method)

---

# utils

## EffectManager (class)

EffectManager

The static class that loads Effekseer effects.

**Signature**

```ts
export declare class EffectManager {
  constructor()
}
```

### load (static method)

**Signature**

```ts
static load(filename?: string): effekseer.EffekseerEffect | null
```

### startLoading (static method)

**Signature**

```ts
static startLoading(url: string): effekseer.EffekseerEffect
```

### clear (static method)

**Signature**

```ts
static clear(): void
```

### onLoad (static method)

**Signature**

```ts
static onLoad(_url?: string): void
```

### onError (static method)

**Signature**

```ts
static onError(url: string): void
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

### isReady (static method)

**Signature**

```ts
static isReady(): boolean
```
