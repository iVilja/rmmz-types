---
title: scenes/Scene_MenuBase.d.ts
nav_order: 109
parent: Modules
---

## Scene_MenuBase.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Scene_MenuBase (class)](#scene_menubase-class)
    - [create (method)](#create-method)
    - [update (method)](#update-method)
    - [helpAreaTop (method)](#helpareatop-method)
    - [helpAreaBottom (method)](#helpareabottom-method)
    - [helpAreaHeight (method)](#helpareaheight-method)
    - [mainAreaTop (method)](#mainareatop-method)
    - [mainAreaBottom (method)](#mainareabottom-method)
    - [mainAreaHeight (method)](#mainareaheight-method)
    - [actor (method)](#actor-method)
    - [updateActor (method)](#updateactor-method)
    - [createBackground (method)](#createbackground-method)
    - [setBackgroundOpacity (method)](#setbackgroundopacity-method)
    - [createHelpWindow (method)](#createhelpwindow-method)
    - [helpWindowRect (method)](#helpwindowrect-method)
    - [createButtons (method)](#createbuttons-method)
    - [needsCancelButton (method)](#needscancelbutton-method)
    - [createCancelButton (method)](#createcancelbutton-method)
    - [needsPageButtons (method)](#needspagebuttons-method)
    - [createPageButtons (method)](#createpagebuttons-method)
    - [updatePageButtons (method)](#updatepagebuttons-method)
    - [arePageButtonsEnabled (method)](#arepagebuttonsenabled-method)
    - [nextActor (method)](#nextactor-method)
    - [previousActor (method)](#previousactor-method)
    - [onActorChange (method)](#onactorchange-method)
    - [\_backgroundFilter (property)](#_backgroundfilter-property)
    - [\_backgroundSprite (property)](#_backgroundsprite-property)
    - [\_pageupButton (property)](#_pageupbutton-property)
    - [\_pagedownButton (property)](#_pagedownbutton-property)
    - [\_cancelButton (property)](#_cancelbutton-property)
    - [\_helpWindow (property)](#_helpwindow-property)
    - [\_actor (property)](#_actor-property)

---

# utils

## Scene_MenuBase (class)

**Signature**

```ts
export declare class Scene_MenuBase
```

### create (method)

**Signature**

```ts
create(): void
```

### update (method)

**Signature**

```ts
update(): void
```

### helpAreaTop (method)

**Signature**

```ts
helpAreaTop(): number
```

### helpAreaBottom (method)

**Signature**

```ts
helpAreaBottom(): number
```

### helpAreaHeight (method)

**Signature**

```ts
helpAreaHeight(): number
```

### mainAreaTop (method)

**Signature**

```ts
mainAreaTop(): number
```

### mainAreaBottom (method)

**Signature**

```ts
mainAreaBottom(): number
```

### mainAreaHeight (method)

**Signature**

```ts
mainAreaHeight(): number
```

### actor (method)

**Signature**

```ts
actor(): Game_Actor
```

### updateActor (method)

**Signature**

```ts
updateActor(): void
```

### createBackground (method)

**Signature**

```ts
createBackground(): void
```

### setBackgroundOpacity (method)

**Signature**

```ts
setBackgroundOpacity(opacity: number): void
```

### createHelpWindow (method)

**Signature**

```ts
createHelpWindow(): void
```

### helpWindowRect (method)

**Signature**

```ts
helpWindowRect(): Rectangle
```

### createButtons (method)

**Signature**

```ts
createButtons(): void
```

### needsCancelButton (method)

**Signature**

```ts
needsCancelButton(): boolean
```

### createCancelButton (method)

**Signature**

```ts
createCancelButton(): void
```

### needsPageButtons (method)

**Signature**

```ts
needsPageButtons(): boolean
```

### createPageButtons (method)

**Signature**

```ts
createPageButtons(): void
```

### updatePageButtons (method)

**Signature**

```ts
updatePageButtons(): void
```

### arePageButtonsEnabled (method)

**Signature**

```ts
arePageButtonsEnabled(): boolean
```

### nextActor (method)

**Signature**

```ts
nextActor(): void
```

### previousActor (method)

**Signature**

```ts
previousActor(): void
```

### onActorChange (method)

**Signature**

```ts
onActorChange(): void
```

### \_backgroundFilter (property)

**Signature**

```ts
_backgroundFilter: any
```

### \_backgroundSprite (property)

**Signature**

```ts
_backgroundSprite: Sprite<Bitmap | null>
```

### \_pageupButton (property)

**Signature**

```ts
_pageupButton: Sprite_Button
```

### \_pagedownButton (property)

**Signature**

```ts
_pagedownButton: Sprite_Button
```

### \_cancelButton (property)

**Signature**

```ts
_cancelButton: Sprite_Button
```

### \_helpWindow (property)

**Signature**

```ts
_helpWindow: Window_Help
```

### \_actor (property)

**Signature**

```ts
_actor: Game_Actor | null | undefined
```
