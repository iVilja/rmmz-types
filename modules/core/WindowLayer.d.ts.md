---
title: core/WindowLayer.d.ts
nav_order: 21
parent: Modules
---

## WindowLayer.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [WindowLayer (class)](#windowlayer-class)
    - [initialize (method)](#initialize-method)
    - [update (method)](#update-method)
    - [render (method)](#render-method)

---

# utils

## WindowLayer (class)

The layer which contains game windows.

**Signature**

```ts
export declare class WindowLayer {
  constructor()
}
```

### initialize (method)

**Signature**

```ts
initialize(): void
```

### update (method)

Updates the window layer for each frame.

**Signature**

```ts
update(): void
```

### render (method)

Renders the object using the WebGL renderer.

**Signature**

```ts
render(renderer: PIXI.Renderer): void
```
