---
title: windows/Window_ActorCommand.d.ts
nav_order: 142
parent: Modules
---

## Window_ActorCommand.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_ActorCommand (class)](#window_actorcommand-class)
    - [makeCommandList (method)](#makecommandlist-method)
    - [addAttackCommand (method)](#addattackcommand-method)
    - [addSkillCommands (method)](#addskillcommands-method)
    - [addGuardCommand (method)](#addguardcommand-method)
    - [addItemCommand (method)](#additemcommand-method)
    - [setup (method)](#setup-method)
    - [actor (method)](#actor-method)
    - [processOk (method)](#processok-method)
    - [selectLast (method)](#selectlast-method)
    - [\_actor (property)](#_actor-property)

---

# utils

## Window_ActorCommand (class)

Window_ActorCommand

The window for selecting an actor's action on the battle screen.

**Signature**

```ts
export declare class Window_ActorCommand {
  constructor(rect: Rectangle)
}
```

### makeCommandList (method)

**Signature**

```ts
makeCommandList(): void;
```

### addAttackCommand (method)

**Signature**

```ts
addAttackCommand(): void;
```

### addSkillCommands (method)

**Signature**

```ts
addSkillCommands(): void;
```

### addGuardCommand (method)

**Signature**

```ts
addGuardCommand(): void;
```

### addItemCommand (method)

**Signature**

```ts
addItemCommand(): void;
```

### setup (method)

**Signature**

```ts
setup(actor: Game_Actor | null): void;
```

### actor (method)

**Signature**

```ts
actor(): Game_Actor | null;
```

### processOk (method)

**Signature**

```ts
processOk(): void;
```

### selectLast (method)

**Signature**

```ts
selectLast(): void;
```

### \_actor (property)

**Signature**

```ts
_actor: Game_Actor | null
```
