---
title: data/plugin.d.ts
nav_order: 35
parent: Modules
---

## plugin.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [RmmzPlugin (interface)](#rmmzplugin-interface)

---

# utils

## RmmzPlugin (interface)

**Signature**

```ts
export interface RmmzPlugin<TParams extends Record<string, unknown> = any> {
  name: string
  status: boolean
  description: string
  parameters: TParams
}
```
