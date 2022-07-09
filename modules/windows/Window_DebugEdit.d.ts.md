---
title: windows/Window_DebugEdit.d.ts
nav_order: 153
parent: Modules
---

## Window_DebugEdit.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_DebugEdit (class)](#window_debugedit-class)
    - [maxItems (method)](#maxitems-method)
    - [drawItem (method)](#drawitem-method)
    - [itemName (method)](#itemname-method)
    - [itemStatus (method)](#itemstatus-method)
    - [setMode (method)](#setmode-method)
    - [setTopId (method)](#settopid-method)
    - [currentId (method)](#currentid-method)
    - [update (method)](#update-method)
    - [updateSwitch (method)](#updateswitch-method)
    - [updateVariable (method)](#updatevariable-method)
    - [deltaForVariable (method)](#deltaforvariable-method)
    - [\_mode (property)](#_mode-property)
    - [\_topId (property)](#_topid-property)

---

# utils

## Window_DebugEdit (class)

Window_DebugEdit

The window for displaying switches and variables on the debug screen.

**Signature**

```ts
export declare class Window_DebugEdit {
  constructor(rect: Rectangle)
}
```

### maxItems (method)

**Signature**

```ts
maxItems(): number
```

### drawItem (method)

**Signature**

```ts
drawItem(index: number): void
```

### itemName (method)

**Signature**

```ts
itemName(dataId: SwitchID | VariableID): string
```

### itemStatus (method)

**Signature**

```ts
itemStatus(dataId: SwitchID | VariableID): string
```

### setMode (method)

**Signature**

```ts
setMode(mode: "switch" | "variable"): void
```

### setTopId (method)

**Signature**

```ts
setTopId(id: SwitchID | VariableID): void
```

### currentId (method)

**Signature**

```ts
currentId(): number
```

### update (method)

**Signature**

```ts
update(): void
```

### updateSwitch (method)

**Signature**

```ts
updateSwitch(): void
```

### updateVariable (method)

**Signature**

```ts
updateVariable(): void
```

### deltaForVariable (method)

**Signature**

```ts
deltaForVariable(): 0 | 1 | 10 | -1 | -10
```

### \_mode (property)

**Signature**

```ts
_mode: 'switch' | 'variable'
```

### \_topId (property)

**Signature**

```ts
_topId: number
```
