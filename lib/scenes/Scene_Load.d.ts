import { Scene_File } from "./Scene_File"
export declare class Scene_Load extends Scene_File {
  _loadSuccess: boolean
  terminate(): void
  mode(): "load"
  helpWindowText(): string
  firstSavefileId(): number
  onSavefileOk(): void
  executeLoad(savefileId: number): void
  onLoadSuccess(): void
  onLoadFailure(): void
  reloadMapIfUpdated(): void
}
