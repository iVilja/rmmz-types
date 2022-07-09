---
title: core/Bitmap.d.ts
nav_order: 1
parent: Modules
---

## Bitmap.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Bitmap (class)](#bitmap-class)
    - [load (static method)](#load-static-method)
    - [snap (static method)](#snap-static-method)
    - [isReady (method)](#isready-method)
    - [isError (method)](#iserror-method)
    - [destroy (method)](#destroy-method)
    - [resize (method)](#resize-method)
    - [blt (method)](#blt-method)
    - [getPixel (method)](#getpixel-method)
    - [getAlphaPixel (method)](#getalphapixel-method)
    - [clearRect (method)](#clearrect-method)
    - [clear (method)](#clear-method)
    - [fillRect (method)](#fillrect-method)
    - [fillAll (method)](#fillall-method)
    - [strokeRect (method)](#strokerect-method)
    - [gradientFillRect (method)](#gradientfillrect-method)
    - [drawCircle (method)](#drawcircle-method)
    - [drawText (method)](#drawtext-method)
    - [measureTextWidth (method)](#measuretextwidth-method)
    - [addLoadListener (method)](#addloadlistener-method)
    - [retry (method)](#retry-method)
    - [\_makeFontNameText (method)](#_makefontnametext-method)
    - [\_drawTextOutline (method)](#_drawtextoutline-method)
    - [\_drawTextBody (method)](#_drawtextbody-method)
    - [\_createCanvas (method)](#_createcanvas-method)
    - [\_ensureCanvas (method)](#_ensurecanvas-method)
    - [\_destroyCanvas (method)](#_destroycanvas-method)
    - [\_createBaseTexture (method)](#_createbasetexture-method)
    - [\_updateScaleMode (method)](#_updatescalemode-method)
    - [\_startLoading (method)](#_startloading-method)
    - [\_startDecrypting (method)](#_startdecrypting-method)
    - [\_onXhrLoad (method)](#_onxhrload-method)
    - [\_onLoad (method)](#_onload-method)
    - [\_callLoadListeners (method)](#_callloadlisteners-method)
    - [\_onError (method)](#_onerror-method)
    - [\_canvas (property)](#_canvas-property)
    - [\_context (property)](#_context-property)
    - [\_baseTexture (property)](#_basetexture-property)
    - [\_image (property)](#_image-property)
    - [\_url (property)](#_url-property)
    - [\_paintOpacity (property)](#_paintopacity-property)
    - [\_smooth (property)](#_smooth-property)
    - [\_loadListeners (property)](#_loadlisteners-property)
    - [\_loadingState (property)](#_loadingstate-property)
    - [fontFace (property)](#fontface-property)
    - [fontSize (property)](#fontsize-property)
    - [fontBold (property)](#fontbold-property)
    - [fontItalic (property)](#fontitalic-property)
    - [textColor (property)](#textcolor-property)
    - [outlineColor (property)](#outlinecolor-property)
    - [outlineWidth (property)](#outlinewidth-property)

---

# utils

## Bitmap (class)

The basic object that represents an image.

**Signature**

```ts
export declare class Bitmap {
  constructor(width?: number, height?: number)
}
```

### load (static method)

Loads a image file.

**Signature**

```ts
static load(url: string): Bitmap
```

### snap (static method)

Takes a snapshot of the game screen.

**Signature**

```ts
static snap(stage: Stage): Bitmap
```

### isReady (method)

Checks whether the bitmap is ready to render.

**Signature**

```ts
isReady(): boolean
```

### isError (method)

Checks whether a loading error has occurred.

**Signature**

```ts
isError(): boolean
```

### destroy (method)

Destroys the bitmap.

**Signature**

```ts
destroy(): void
```

### resize (method)

Resizes the bitmap.

**Signature**

```ts
resize(width: number, height: number): void
```

### blt (method)

Performs a block transfer.

**Signature**

```ts
blt(
    source: Bitmap,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    dx: number,
    dy: number,
    dw?: number,
    dh?: number
  ): void
```

### getPixel (method)

Returns pixel color at the specified point.

**Signature**

```ts
getPixel(x: number, y: number): string
```

### getAlphaPixel (method)

Returns alpha pixel value at the specified point.

**Signature**

```ts
getAlphaPixel(x: number, y: number): number
```

### clearRect (method)

Clears the specified rectangle.

**Signature**

```ts
clearRect(x: number, y: number, width: number, height: number): void
```

### clear (method)

Clears the entire bitmap.

**Signature**

```ts
clear(): void
```

### fillRect (method)

Fills the specified rectangle.

**Signature**

```ts
fillRect(x: number, y: number, width: number, height: number, color: string): void
```

### fillAll (method)

Fills the entire bitmap.

**Signature**

```ts
fillAll(color: string): void
```

### strokeRect (method)

Draws the specified rectangular frame.

**Signature**

```ts
strokeRect(x: number, y: number, width: number, height: number, color: string): void
```

### gradientFillRect (method)

Draws the rectangle with a gradation.

**Signature**

```ts
gradientFillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color1: string,
    color2: string,
    vertical?: boolean
  ): void
```

### drawCircle (method)

Draws a bitmap in the shape of a circle.

**Signature**

```ts
drawCircle(x: number, y: number, radius: number, color: string): void
```

### drawText (method)

Draws the outline text to the bitmap.

**Signature**

```ts
drawText(
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number,
    align?: CanvasTextAlign
  ): void
```

### measureTextWidth (method)

Returns the width of the specified text.

**Signature**

```ts
measureTextWidth(text: string): number
```

### addLoadListener (method)

Adds a callback function that will be called when the bitmap is loaded.

**Signature**

```ts
addLoadListener(listner: (bitmap: Bitmap) => void): void
```

### retry (method)

Tries to load the image again.

**Signature**

```ts
retry(): void
```

### \_makeFontNameText (method)

**Signature**

```ts
_makeFontNameText(): string
```

### \_drawTextOutline (method)

**Signature**

```ts
_drawTextOutline(text: string, tx: number, ty: number, maxWidth: number): void
```

### \_drawTextBody (method)

**Signature**

```ts
_drawTextBody(text: string, tx: number, ty: number, maxWidth: number): void
```

### \_createCanvas (method)

**Signature**

```ts
_createCanvas(width: number, height: number): void
```

### \_ensureCanvas (method)

**Signature**

```ts
_ensureCanvas(): void
```

### \_destroyCanvas (method)

**Signature**

```ts
_destroyCanvas(): void
```

### \_createBaseTexture (method)

**Signature**

```ts
_createBaseTexture(source: HTMLImageElement | HTMLCanvasElement): void
```

### \_updateScaleMode (method)

**Signature**

```ts
_updateScaleMode(): void
```

### \_startLoading (method)

**Signature**

```ts
_startLoading(): void
```

### \_startDecrypting (method)

**Signature**

```ts
_startDecrypting(): void
```

### \_onXhrLoad (method)

**Signature**

```ts
_onXhrLoad(xhr: XMLHttpRequest): void
```

### \_onLoad (method)

**Signature**

```ts
_onLoad(): void
```

### \_callLoadListeners (method)

**Signature**

```ts
_callLoadListeners(): void
```

### \_onError (method)

**Signature**

```ts
_onError(): void
```

### \_canvas (property)

**Signature**

```ts
_canvas: HTMLCanvasElement | null
```

### \_context (property)

**Signature**

```ts
_context: CanvasRenderingContext2D | null
```

### \_baseTexture (property)

**Signature**

```ts
_baseTexture: any
```

### \_image (property)

**Signature**

```ts
_image: HTMLImageElement | null
```

### \_url (property)

**Signature**

```ts
_url: string
```

### \_paintOpacity (property)

**Signature**

```ts
_paintOpacity: number
```

### \_smooth (property)

**Signature**

```ts
_smooth: boolean
```

### \_loadListeners (property)

**Signature**

```ts
_loadListeners: ((bitmap: Bitmap) => void)[]
```

### \_loadingState (property)

**Signature**

```ts
_loadingState: string
```

### fontFace (property)

The face name of the font.

**Signature**

```ts
fontFace: string
```

### fontSize (property)

The size of the font in pixels.

**Signature**

```ts
fontSize: number
```

### fontBold (property)

Whether the font is bold.

**Signature**

```ts
fontBold: boolean
```

### fontItalic (property)

Whether the font is italic.

**Signature**

```ts
fontItalic: boolean
```

### textColor (property)

The color of the text in CSS format.

**Signature**

```ts
textColor: string
```

### outlineColor (property)

The color of the outline of the text in CSS format.

**Signature**

```ts
outlineColor: string
```

### outlineWidth (property)

The width of the outline of the text.

**Signature**

```ts
outlineWidth: number
```
