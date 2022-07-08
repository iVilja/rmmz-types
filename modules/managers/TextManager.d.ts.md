---
title: managers/TextManager.d.ts
nav_order: 62
parent: Modules
---

## TextManager.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [TextManager (class)](#textmanager-class)
    - [basic (static method)](#basic-static-method)
    - [param (static method)](#param-static-method)
    - [command (static method)](#command-static-method)
    - [message (static method)](#message-static-method)

---

# utils

## TextManager (class)

TextManager

The static class that handles terms and messages.

**Signature**

```ts
export declare class TextManager {
  constructor()
}
```

### basic (static method)

**Signature**

```ts
static basic(basicId: number): string;
```

### param (static method)

**Signature**

```ts
static param(paramId: number): string;
```

### command (static method)

**Signature**

```ts
static command(commandId: number): string;
```

### message (static method)

**Signature**

```ts
static message(messageId: keyof Messages): string;
```
