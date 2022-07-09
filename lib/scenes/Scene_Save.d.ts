import { Scene_File } from "./Scene_File"
export declare class Scene_Save extends Scene_File {
  mode(): "save"
  helpWindowText(): string
  firstSavefileId(): number
  onSavefileOk(): void
  executeSave(savefileId: number): void
  onSaveSuccess(): void
  onSaveFailure(): void
}
