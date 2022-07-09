---
title: data/plugin.d.ts
nav_order: 35
parent: Modules
---

## plugin.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [PluginParameters (type alias)](#pluginparameters-type-alias)
  - [RmmzPlugin (interface)](#rmmzplugin-interface)

---

# utils

## PluginParameters (type alias)

**Signature**

```ts
export type PluginParameters = Record<string, unknown>
```

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
