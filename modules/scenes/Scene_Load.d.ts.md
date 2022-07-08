---
title: scenes/Scene_Load.d.ts
nav_order: 105
parent: Modules
---

## Scene_Load.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Scene_Load (class)](#scene_load-class)
    - [terminate (method)](#terminate-method)
    - [mode (method)](#mode-method)
    - [helpWindowText (method)](#helpwindowtext-method)
    - [firstSavefileId (method)](#firstsavefileid-method)
    - [onSavefileOk (method)](#onsavefileok-method)
    - [executeLoad (method)](#executeload-method)
    - [onLoadSuccess (method)](#onloadsuccess-method)
    - [onLoadFailure (method)](#onloadfailure-method)
    - [reloadMapIfUpdated (method)](#reloadmapifupdated-method)
    - [\_loadSuccess (property)](#_loadsuccess-property)

---

# utils

## Scene_Load (class)

**Signature**

```ts
export declare class Scene_Load
```

### terminate (method)

**Signature**

```ts
terminate(): void;
```

### mode (method)

**Signature**

```ts
mode(): "load";
```

### helpWindowText (method)

**Signature**

```ts
helpWindowText(): string;
```

### firstSavefileId (method)

**Signature**

```ts
firstSavefileId(): number;
```

### onSavefileOk (method)

**Signature**

```ts
onSavefileOk(): void;
```

### executeLoad (method)

**Signature**

```ts
executeLoad(savefileId: number): void;
```

### onLoadSuccess (method)

**Signature**

```ts
onLoadSuccess(): void;
```

### onLoadFailure (method)

**Signature**

```ts
onLoadFailure(): void;
```

### reloadMapIfUpdated (method)

**Signature**

```ts
reloadMapIfUpdated(): void;
```

### \_loadSuccess (property)

**Signature**

```ts
_loadSuccess: boolean
```
