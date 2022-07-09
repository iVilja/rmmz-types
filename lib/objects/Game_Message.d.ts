import { ItemType, TextWindowBackgroundType, TextWindowPositionType } from "../data"
/**
 * Game_Message
*
* The game object class for the state of the message window that displays text
// or selections, etc.
*/
export declare class Game_Message {
  _texts: string[]
  _choices: string[]
  _speakerName: string
  _faceName: string
  _faceIndex: number
  _background: TextWindowBackgroundType
  _positionType: TextWindowPositionType
  _choiceDefaultType: number
  _choiceCancelType: number
  _choiceBackground: TextWindowBackgroundType
  _choicePositionType: TextWindowPositionType
  _numInputVariableId: number
  _numInputMaxDigits: number
  _itemChoiceVariableId: number
  _itemChoiceItypeId: number
  _scrollMode: boolean
  _scrollSpeed: number
  _scrollNoFast: boolean
  _choiceCallback: ((chosen: number) => void) | null
  clear(): void
  choices(): string[]
  speakerName(): string
  faceName(): string
  faceIndex(): number
  background(): TextWindowBackgroundType
  positionType(): TextWindowPositionType
  choiceDefaultType(): number
  choiceCancelType(): number
  choiceBackground(): TextWindowBackgroundType
  choicePositionType(): TextWindowPositionType
  numInputVariableId(): number
  numInputMaxDigits(): number
  itemChoiceVariableId(): number
  itemChoiceItypeId(): number
  scrollMode(): boolean
  scrollSpeed(): number
  scrollNoFast(): boolean
  add(text: string): void
  setSpeakerName(speakerName: string): void
  setFaceImage(faceName: string, faceIndex: number): void
  setBackground(background: TextWindowBackgroundType): void
  setPositionType(positionType: TextWindowPositionType): void
  setChoices(choices: string[], defaultType: number, cancelType: number): void
  setChoiceBackground(background: TextWindowBackgroundType): void
  setChoicePositionType(positionType: TextWindowPositionType): void
  setNumberInput(variableId: number, maxDigits: number): void
  setItemChoice(variableId: number, itemType: ItemType): void
  setScroll(speed: number, noFast: boolean): void
  setChoiceCallback(callback: (chosen: number) => void): void
  onChoice(n: number): void
  hasText(): boolean
  isChoice(): boolean
  isNumberInput(): boolean
  isItemChoice(): boolean
  isBusy(): boolean
  newPage(): void
  allText(): string
  isRTL(): boolean
}
