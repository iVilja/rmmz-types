---
title: objects/Game_Message.d.ts
nav_order: 79
parent: Modules
---

## Game_Message.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Message (class)](#game_message-class)
    - [clear (method)](#clear-method)
    - [choices (method)](#choices-method)
    - [speakerName (method)](#speakername-method)
    - [faceName (method)](#facename-method)
    - [faceIndex (method)](#faceindex-method)
    - [background (method)](#background-method)
    - [positionType (method)](#positiontype-method)
    - [choiceDefaultType (method)](#choicedefaulttype-method)
    - [choiceCancelType (method)](#choicecanceltype-method)
    - [choiceBackground (method)](#choicebackground-method)
    - [choicePositionType (method)](#choicepositiontype-method)
    - [numInputVariableId (method)](#numinputvariableid-method)
    - [numInputMaxDigits (method)](#numinputmaxdigits-method)
    - [itemChoiceVariableId (method)](#itemchoicevariableid-method)
    - [itemChoiceItypeId (method)](#itemchoiceitypeid-method)
    - [scrollMode (method)](#scrollmode-method)
    - [scrollSpeed (method)](#scrollspeed-method)
    - [scrollNoFast (method)](#scrollnofast-method)
    - [add (method)](#add-method)
    - [setSpeakerName (method)](#setspeakername-method)
    - [setFaceImage (method)](#setfaceimage-method)
    - [setBackground (method)](#setbackground-method)
    - [setPositionType (method)](#setpositiontype-method)
    - [setChoices (method)](#setchoices-method)
    - [setChoiceBackground (method)](#setchoicebackground-method)
    - [setChoicePositionType (method)](#setchoicepositiontype-method)
    - [setNumberInput (method)](#setnumberinput-method)
    - [setItemChoice (method)](#setitemchoice-method)
    - [setScroll (method)](#setscroll-method)
    - [setChoiceCallback (method)](#setchoicecallback-method)
    - [onChoice (method)](#onchoice-method)
    - [hasText (method)](#hastext-method)
    - [isChoice (method)](#ischoice-method)
    - [isNumberInput (method)](#isnumberinput-method)
    - [isItemChoice (method)](#isitemchoice-method)
    - [isBusy (method)](#isbusy-method)
    - [newPage (method)](#newpage-method)
    - [allText (method)](#alltext-method)
    - [isRTL (method)](#isrtl-method)
    - [\_texts (property)](#_texts-property)
    - [\_choices (property)](#_choices-property)
    - [\_speakerName (property)](#_speakername-property)
    - [\_faceName (property)](#_facename-property)
    - [\_faceIndex (property)](#_faceindex-property)
    - [\_background (property)](#_background-property)
    - [\_positionType (property)](#_positiontype-property)
    - [\_choiceDefaultType (property)](#_choicedefaulttype-property)
    - [\_choiceCancelType (property)](#_choicecanceltype-property)
    - [\_choiceBackground (property)](#_choicebackground-property)
    - [\_choicePositionType (property)](#_choicepositiontype-property)
    - [\_numInputVariableId (property)](#_numinputvariableid-property)
    - [\_numInputMaxDigits (property)](#_numinputmaxdigits-property)
    - [\_itemChoiceVariableId (property)](#_itemchoicevariableid-property)
    - [\_itemChoiceItypeId (property)](#_itemchoiceitypeid-property)
    - [\_scrollMode (property)](#_scrollmode-property)
    - [\_scrollSpeed (property)](#_scrollspeed-property)
    - [\_scrollNoFast (property)](#_scrollnofast-property)
    - [\_choiceCallback (property)](#_choicecallback-property)

---

# utils

## Game_Message (class)

Game_Message

The game object class for the state of the message window that displays text
// or selections, etc.

**Signature**

```ts
export declare class Game_Message
```

### clear (method)

**Signature**

```ts
clear(): void;
```

### choices (method)

**Signature**

```ts
choices(): string[];
```

### speakerName (method)

**Signature**

```ts
speakerName(): string;
```

### faceName (method)

**Signature**

```ts
faceName(): string;
```

### faceIndex (method)

**Signature**

```ts
faceIndex(): number;
```

### background (method)

**Signature**

```ts
background(): TextWindowBackgroundType;
```

### positionType (method)

**Signature**

```ts
positionType(): TextWindowPositionType;
```

### choiceDefaultType (method)

**Signature**

```ts
choiceDefaultType(): number;
```

### choiceCancelType (method)

**Signature**

```ts
choiceCancelType(): number;
```

### choiceBackground (method)

**Signature**

```ts
choiceBackground(): TextWindowBackgroundType;
```

### choicePositionType (method)

**Signature**

```ts
choicePositionType(): TextWindowPositionType;
```

### numInputVariableId (method)

**Signature**

```ts
numInputVariableId(): number;
```

### numInputMaxDigits (method)

**Signature**

```ts
numInputMaxDigits(): number;
```

### itemChoiceVariableId (method)

**Signature**

```ts
itemChoiceVariableId(): number;
```

### itemChoiceItypeId (method)

**Signature**

```ts
itemChoiceItypeId(): number;
```

### scrollMode (method)

**Signature**

```ts
scrollMode(): boolean;
```

### scrollSpeed (method)

**Signature**

```ts
scrollSpeed(): number;
```

### scrollNoFast (method)

**Signature**

```ts
scrollNoFast(): boolean;
```

### add (method)

**Signature**

```ts
add(text: string): void;
```

### setSpeakerName (method)

**Signature**

```ts
setSpeakerName(speakerName: string): void;
```

### setFaceImage (method)

**Signature**

```ts
setFaceImage(faceName: string, faceIndex: number): void;
```

### setBackground (method)

**Signature**

```ts
setBackground(background: TextWindowBackgroundType): void;
```

### setPositionType (method)

**Signature**

```ts
setPositionType(positionType: TextWindowPositionType): void;
```

### setChoices (method)

**Signature**

```ts
setChoices(choices: string[], defaultType: number, cancelType: number): void;
```

### setChoiceBackground (method)

**Signature**

```ts
setChoiceBackground(background: TextWindowBackgroundType): void;
```

### setChoicePositionType (method)

**Signature**

```ts
setChoicePositionType(positionType: TextWindowPositionType): void;
```

### setNumberInput (method)

**Signature**

```ts
setNumberInput(variableId: number, maxDigits: number): void;
```

### setItemChoice (method)

**Signature**

```ts
setItemChoice(variableId: number, itemType: ItemType): void;
```

### setScroll (method)

**Signature**

```ts
setScroll(speed: number, noFast: boolean): void;
```

### setChoiceCallback (method)

**Signature**

```ts
setChoiceCallback(callback: (chosen: number) => void): void;
```

### onChoice (method)

**Signature**

```ts
onChoice(n: number): void;
```

### hasText (method)

**Signature**

```ts
hasText(): boolean;
```

### isChoice (method)

**Signature**

```ts
isChoice(): boolean;
```

### isNumberInput (method)

**Signature**

```ts
isNumberInput(): boolean;
```

### isItemChoice (method)

**Signature**

```ts
isItemChoice(): boolean;
```

### isBusy (method)

**Signature**

```ts
isBusy(): boolean;
```

### newPage (method)

**Signature**

```ts
newPage(): void;
```

### allText (method)

**Signature**

```ts
allText(): string;
```

### isRTL (method)

**Signature**

```ts
isRTL(): boolean;
```

### \_texts (property)

**Signature**

```ts
_texts: string[]
```

### \_choices (property)

**Signature**

```ts
_choices: string[]
```

### \_speakerName (property)

**Signature**

```ts
_speakerName: string
```

### \_faceName (property)

**Signature**

```ts
_faceName: string
```

### \_faceIndex (property)

**Signature**

```ts
_faceIndex: number
```

### \_background (property)

**Signature**

```ts
_background: TextWindowBackgroundType
```

### \_positionType (property)

**Signature**

```ts
_positionType: TextWindowBackgroundType
```

### \_choiceDefaultType (property)

**Signature**

```ts
_choiceDefaultType: number
```

### \_choiceCancelType (property)

**Signature**

```ts
_choiceCancelType: number
```

### \_choiceBackground (property)

**Signature**

```ts
_choiceBackground: TextWindowBackgroundType
```

### \_choicePositionType (property)

**Signature**

```ts
_choicePositionType: TextWindowBackgroundType
```

### \_numInputVariableId (property)

**Signature**

```ts
_numInputVariableId: number
```

### \_numInputMaxDigits (property)

**Signature**

```ts
_numInputMaxDigits: number
```

### \_itemChoiceVariableId (property)

**Signature**

```ts
_itemChoiceVariableId: number
```

### \_itemChoiceItypeId (property)

**Signature**

```ts
_itemChoiceItypeId: number
```

### \_scrollMode (property)

**Signature**

```ts
_scrollMode: boolean
```

### \_scrollSpeed (property)

**Signature**

```ts
_scrollSpeed: number
```

### \_scrollNoFast (property)

**Signature**

```ts
_scrollNoFast: boolean
```

### \_choiceCallback (property)

**Signature**

```ts
_choiceCallback: ((chosen: number) => void) | null
```
