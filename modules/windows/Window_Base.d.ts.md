---
title: windows/Window_Base.d.ts
nav_order: 143
parent: Modules
---

## Window_Base.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [EscapeCharacter (type alias)](#escapecharacter-type-alias)
  - [TextState (type alias)](#textstate-type-alias)
  - [Window_Base (class)](#window_base-class)
    - [destroy (method)](#destroy-method)
    - [checkRectObject (method)](#checkrectobject-method)
    - [lineHeight (method)](#lineheight-method)
    - [itemWidth (method)](#itemwidth-method)
    - [itemHeight (method)](#itemheight-method)
    - [itemPadding (method)](#itempadding-method)
    - [baseTextRect (method)](#basetextrect-method)
    - [loadWindowskin (method)](#loadwindowskin-method)
    - [updatePadding (method)](#updatepadding-method)
    - [updateBackOpacity (method)](#updatebackopacity-method)
    - [fittingHeight (method)](#fittingheight-method)
    - [updateTone (method)](#updatetone-method)
    - [createContents (method)](#createcontents-method)
    - [destroyContents (method)](#destroycontents-method)
    - [contentsWidth (method)](#contentswidth-method)
    - [contentsHeight (method)](#contentsheight-method)
    - [resetFontSettings (method)](#resetfontsettings-method)
    - [resetTextColor (method)](#resettextcolor-method)
    - [update (method)](#update-method)
    - [updateOpen (method)](#updateopen-method)
    - [updateClose (method)](#updateclose-method)
    - [open (method)](#open-method)
    - [close (method)](#close-method)
    - [isOpening (method)](#isopening-method)
    - [isClosing (method)](#isclosing-method)
    - [show (method)](#show-method)
    - [hide (method)](#hide-method)
    - [activate (method)](#activate-method)
    - [deactivate (method)](#deactivate-method)
    - [systemColor (method)](#systemcolor-method)
    - [translucentOpacity (method)](#translucentopacity-method)
    - [changeTextColor (method)](#changetextcolor-method)
    - [changeOutlineColor (method)](#changeoutlinecolor-method)
    - [changePaintOpacity (method)](#changepaintopacity-method)
    - [drawRect (method)](#drawrect-method)
    - [drawText (method)](#drawtext-method)
    - [textWidth (method)](#textwidth-method)
    - [drawTextEx (method)](#drawtextex-method)
    - [textSizeEx (method)](#textsizeex-method)
    - [createTextState (method)](#createtextstate-method)
    - [processAllText (method)](#processalltext-method)
    - [flushTextState (method)](#flushtextstate-method)
    - [createTextBuffer (method)](#createtextbuffer-method)
    - [convertEscapeCharacters (method)](#convertescapecharacters-method)
    - [actorName (method)](#actorname-method)
    - [partyMemberName (method)](#partymembername-method)
    - [processCharacter (method)](#processcharacter-method)
    - [processControlCharacter (method)](#processcontrolcharacter-method)
    - [processNewLine (method)](#processnewline-method)
    - [obtainEscapeCode (method)](#obtainescapecode-method)
    - [obtainEscapeParam (method)](#obtainescapeparam-method)
    - [processEscapeCharacter (method)](#processescapecharacter-method)
    - [processColorChange (method)](#processcolorchange-method)
    - [processDrawIcon (method)](#processdrawicon-method)
    - [makeFontBigger (method)](#makefontbigger-method)
    - [makeFontSmaller (method)](#makefontsmaller-method)
    - [calcTextHeight (method)](#calctextheight-method)
    - [maxFontSizeInLine (method)](#maxfontsizeinline-method)
    - [drawIcon (method)](#drawicon-method)
    - [drawFace (method)](#drawface-method)
    - [drawCharacter (method)](#drawcharacter-method)
    - [drawItemName (method)](#drawitemname-method)
    - [drawCurrencyValue (method)](#drawcurrencyvalue-method)
    - [setBackgroundType (method)](#setbackgroundtype-method)
    - [showBackgroundDimmer (method)](#showbackgrounddimmer-method)
    - [createDimmerSprite (method)](#createdimmersprite-method)
    - [hideBackgroundDimmer (method)](#hidebackgrounddimmer-method)
    - [updateBackgroundDimmer (method)](#updatebackgrounddimmer-method)
    - [refreshDimmerBitmap (method)](#refreshdimmerbitmap-method)
    - [playCursorSound (method)](#playcursorsound-method)
    - [playOkSound (method)](#playoksound-method)
    - [playBuzzerSound (method)](#playbuzzersound-method)
    - [\_opening (property)](#_opening-property)
    - [\_closing (property)](#_closing-property)
    - [\_dimmerSprite (property)](#_dimmersprite-property)

---

# utils

## EscapeCharacter (type alias)

**Signature**

```ts
export declare type EscapeCharacter = 'C' | 'I' | 'PX' | 'PY' | 'FS' | '{' | '}'
```

## TextState (type alias)

**Signature**

```ts
export declare type TextState = {
  text: string
  index: number
  x: number
  y: number
  width: number
  height: number
  startX: number
  startY: number
  rtl: boolean
  buffer: string
  drawing: boolean
  outputWidth: number
  outputHeight: number
}
```

## Window_Base (class)

Window_Base

The superclass of all windows within the game.

**Signature**

```ts
export declare class Window_Base {
  constructor(rect: Rectangle)
}
```

### destroy (method)

**Signature**

```ts
destroy(options?: PIXI.IDestroyOptions | boolean): void;
```

### checkRectObject (method)

**Signature**

```ts
checkRectObject(rect: Rectangle): void;
```

### lineHeight (method)

**Signature**

```ts
lineHeight(): number;
```

### itemWidth (method)

**Signature**

```ts
itemWidth(): number;
```

### itemHeight (method)

**Signature**

```ts
itemHeight(): number;
```

### itemPadding (method)

**Signature**

```ts
itemPadding(): number;
```

### baseTextRect (method)

**Signature**

```ts
baseTextRect(): Rectangle;
```

### loadWindowskin (method)

**Signature**

```ts
loadWindowskin(): void;
```

### updatePadding (method)

**Signature**

```ts
updatePadding(): void;
```

### updateBackOpacity (method)

**Signature**

```ts
updateBackOpacity(): void;
```

### fittingHeight (method)

**Signature**

```ts
fittingHeight(numLines: number): number;
```

### updateTone (method)

**Signature**

```ts
updateTone(): void;
```

### createContents (method)

**Signature**

```ts
createContents(): void;
```

### destroyContents (method)

**Signature**

```ts
destroyContents(): void;
```

### contentsWidth (method)

**Signature**

```ts
contentsWidth(): number;
```

### contentsHeight (method)

**Signature**

```ts
contentsHeight(): number;
```

### resetFontSettings (method)

**Signature**

```ts
resetFontSettings(): void;
```

### resetTextColor (method)

**Signature**

```ts
resetTextColor(): void;
```

### update (method)

**Signature**

```ts
update(): void;
```

### updateOpen (method)

**Signature**

```ts
updateOpen(): void;
```

### updateClose (method)

**Signature**

```ts
updateClose(): void;
```

### open (method)

**Signature**

```ts
open(): void;
```

### close (method)

**Signature**

```ts
close(): void;
```

### isOpening (method)

**Signature**

```ts
isOpening(): boolean;
```

### isClosing (method)

**Signature**

```ts
isClosing(): boolean;
```

### show (method)

**Signature**

```ts
show(): void;
```

### hide (method)

**Signature**

```ts
hide(): void;
```

### activate (method)

**Signature**

```ts
activate(): void;
```

### deactivate (method)

**Signature**

```ts
deactivate(): void;
```

### systemColor (method)

**Signature**

```ts
systemColor(): string;
```

### translucentOpacity (method)

**Signature**

```ts
translucentOpacity(): number;
```

### changeTextColor (method)

**Signature**

```ts
changeTextColor(color: string): void;
```

### changeOutlineColor (method)

**Signature**

```ts
changeOutlineColor(color: string): void;
```

### changePaintOpacity (method)

**Signature**

```ts
changePaintOpacity(enabled: boolean | number): void;
```

### drawRect (method)

**Signature**

```ts
drawRect(x: number, y: number, width: number, height: number): void;
```

### drawText (method)

**Signature**

```ts
drawText(text: string | number, x: number, y: number, maxWidth?: number, align?: CanvasTextAlign): void;
```

### textWidth (method)

**Signature**

```ts
textWidth(text: string): number;
```

### drawTextEx (method)

**Signature**

```ts
drawTextEx(text: string, x: number, y: number, width: number): number;
```

### textSizeEx (method)

**Signature**

```ts
textSizeEx(text: string): {
        width: number;
        height: number;
    };
```

### createTextState (method)

**Signature**

```ts
createTextState(text: string, x: number, y: number, width: number): TextState;
```

### processAllText (method)

**Signature**

```ts
processAllText(textState: TextState): void;
```

### flushTextState (method)

**Signature**

```ts
flushTextState(textState: TextState): void;
```

### createTextBuffer (method)

**Signature**

```ts
createTextBuffer(rtl: boolean): "" | "‫";
```

### convertEscapeCharacters (method)

**Signature**

```ts
convertEscapeCharacters(text: string): string;
```

### actorName (method)

**Signature**

```ts
actorName(n: ActorID): string;
```

### partyMemberName (method)

**Signature**

```ts
partyMemberName(n: number): string;
```

### processCharacter (method)

**Signature**

```ts
processCharacter(textState: TextState): void;
```

### processControlCharacter (method)

**Signature**

```ts
processControlCharacter(textState: TextState, c: string): void;
```

### processNewLine (method)

**Signature**

```ts
processNewLine(textState: TextState): void;
```

### obtainEscapeCode (method)

**Signature**

```ts
obtainEscapeCode(textState: TextState): string;
```

### obtainEscapeParam (method)

**Signature**

```ts
obtainEscapeParam(textState: TextState): number;
```

### processEscapeCharacter (method)

**Signature**

```ts
processEscapeCharacter(code: EscapeCharacter, textState: TextState): void;
```

### processColorChange (method)

**Signature**

```ts
processColorChange(colorIndex: number): void;
```

### processDrawIcon (method)

**Signature**

```ts
processDrawIcon(iconIndex: number, textState: TextState): void;
```

### makeFontBigger (method)

**Signature**

```ts
makeFontBigger(): void;
```

### makeFontSmaller (method)

**Signature**

```ts
makeFontSmaller(): void;
```

### calcTextHeight (method)

**Signature**

```ts
calcTextHeight(textState: Partial<TextState> & {
        text: string;
    }): number;
```

### maxFontSizeInLine (method)

**Signature**

```ts
maxFontSizeInLine(line: string): number;
```

### drawIcon (method)

**Signature**

```ts
drawIcon(iconIndex: number, x: number, y: number): void;
```

### drawFace (method)

**Signature**

```ts
drawFace(faceName: string, faceIndex: number, x: number, y: number, width?: number, height?: number): void;
```

### drawCharacter (method)

**Signature**

```ts
drawCharacter(characterName: string, characterIndex: number, x: number, y: number): void;
```

### drawItemName (method)

**Signature**

```ts
drawItemName(item: DataItemBase | null, x: number, y: number, width: number): void;
```

### drawCurrencyValue (method)

**Signature**

```ts
drawCurrencyValue(value: number, unit: string, x: number, y: number, width: number): void;
```

### setBackgroundType (method)

**Signature**

```ts
setBackgroundType(type: TextWindowBackgroundType): void;
```

### showBackgroundDimmer (method)

**Signature**

```ts
showBackgroundDimmer(): void;
```

### createDimmerSprite (method)

**Signature**

```ts
createDimmerSprite(): void;
```

### hideBackgroundDimmer (method)

**Signature**

```ts
hideBackgroundDimmer(): void;
```

### updateBackgroundDimmer (method)

**Signature**

```ts
updateBackgroundDimmer(): void;
```

### refreshDimmerBitmap (method)

**Signature**

```ts
refreshDimmerBitmap(): void;
```

### playCursorSound (method)

**Signature**

```ts
playCursorSound(): void;
```

### playOkSound (method)

**Signature**

```ts
playOkSound(): void;
```

### playBuzzerSound (method)

**Signature**

```ts
playBuzzerSound(): void;
```

### \_opening (property)

**Signature**

```ts
_opening: boolean
```

### \_closing (property)

**Signature**

```ts
_closing: boolean
```

### \_dimmerSprite (property)

**Signature**

```ts
_dimmerSprite: Sprite<Bitmap> | null
```
