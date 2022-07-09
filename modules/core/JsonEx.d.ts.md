---
title: core/JsonEx.d.ts
nav_order: 7
parent: Modules
---

## JsonEx.d overview

The static class that handles JSON with object information.

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [JsonEx (class)](#jsonex-class)
    - [stringify (static method)](#stringify-static-method)
    - [parse (static method)](#parse-static-method)
    - [makeDeepCopy (static method)](#makedeepcopy-static-method)
    - [\_encode (static method)](#_encode-static-method)
    - [\_decode (static method)](#_decode-static-method)

---

# utils

## JsonEx (class)

The static class that handles JSON with object information.

**Signature**

```ts
export declare class JsonEx {
  constructor()
}
```

### stringify (static method)

Converts an object to a JSON string with object information.

**Signature**

```ts
static stringify(object: any): string
```

### parse (static method)

Parses a JSON string and reconstructs the corresponding object.

**Signature**

```ts
static parse(json: string): any
```

### makeDeepCopy (static method)

Makes a deep copy of the specified object.

**Signature**

```ts
static makeDeepCopy(object: any): any
```

### \_encode (static method)

**Signature**

```ts
static _encode(value: any, depth: number): any
```

### \_decode (static method)

**Signature**

```ts
static _decode(value: any): any
```
