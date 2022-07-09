---
title: objects/Game_Followers.d.ts
nav_order: 76
parent: Modules
---

## Game_Followers.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Followers (class)](#game_followers-class)
    - [setup (method)](#setup-method)
    - [isVisible (method)](#isvisible-method)
    - [show (method)](#show-method)
    - [hide (method)](#hide-method)
    - [data (method)](#data-method)
    - [reverseData (method)](#reversedata-method)
    - [follower (method)](#follower-method)
    - [refresh (method)](#refresh-method)
    - [update (method)](#update-method)
    - [updateMove (method)](#updatemove-method)
    - [jumpAll (method)](#jumpall-method)
    - [synchronize (method)](#synchronize-method)
    - [gather (method)](#gather-method)
    - [areGathering (method)](#aregathering-method)
    - [visibleFollowers (method)](#visiblefollowers-method)
    - [areMoving (method)](#aremoving-method)
    - [areGathered (method)](#aregathered-method)
    - [isSomeoneCollided (method)](#issomeonecollided-method)
    - [\_visible (property)](#_visible-property)
    - [\_gathering (property)](#_gathering-property)
    - [\_data (property)](#_data-property)

---

# utils

## Game_Followers (class)

Game_Followers

The wrapper class for a follower array.

**Signature**

```ts
export declare class Game_Followers {
  constructor()
}
```

### setup (method)

**Signature**

```ts
setup(): void
```

### isVisible (method)

**Signature**

```ts
isVisible(): boolean
```

### show (method)

**Signature**

```ts
show(): void
```

### hide (method)

**Signature**

```ts
hide(): void
```

### data (method)

**Signature**

```ts
data(): Game_Follower[]
```

### reverseData (method)

**Signature**

```ts
reverseData(): Game_Follower[]
```

### follower (method)

**Signature**

```ts
follower(index: number): Game_Follower
```

### refresh (method)

**Signature**

```ts
refresh(): void
```

### update (method)

**Signature**

```ts
update(): void
```

### updateMove (method)

**Signature**

```ts
updateMove(): void
```

### jumpAll (method)

**Signature**

```ts
jumpAll(): void
```

### synchronize (method)

**Signature**

```ts
synchronize(x: number, y: number, d: Direction): void
```

### gather (method)

**Signature**

```ts
gather(): void
```

### areGathering (method)

**Signature**

```ts
areGathering(): boolean
```

### visibleFollowers (method)

**Signature**

```ts
visibleFollowers(): Game_Follower[]
```

### areMoving (method)

**Signature**

```ts
areMoving(): boolean
```

### areGathered (method)

**Signature**

```ts
areGathered(): boolean
```

### isSomeoneCollided (method)

**Signature**

```ts
isSomeoneCollided(x: number, y: number): boolean
```

### \_visible (property)

**Signature**

```ts
_visible: boolean
```

### \_gathering (property)

**Signature**

```ts
_gathering: boolean
```

### \_data (property)

**Signature**

```ts
_data: Game_Follower[]
```
