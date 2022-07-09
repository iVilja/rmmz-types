import { Color, DataAudio } from "../data"
/**
 * Game_System
 *
 * The game object class for the system data.
 */
export declare class Game_System {
  _saveEnabled: boolean
  _menuEnabled: boolean
  _encounterEnabled: boolean
  _formationEnabled: boolean
  _battleCount: number
  _winCount: number
  _escapeCount: number
  _saveCount: number
  _versionId: number
  _savefileId: number
  _framesOnSave: number
  _bgmOnSave: DataAudio | null
  _bgsOnSave: DataAudio | null
  _windowTone: Color | null
  _battleBgm: DataAudio | null
  _victoryMe: DataAudio | null
  _defeatMe: DataAudio | null
  _savedBgm: DataAudio | null
  _walkingBgm: DataAudio | null
  isJapanese(): RegExpMatchArray | null
  isChinese(): RegExpMatchArray | null
  isKorean(): RegExpMatchArray | null
  isCJK(): RegExpMatchArray | null
  isRussian(): RegExpMatchArray | null
  isSideView(): boolean
  isAutosaveEnabled(): boolean
  isSaveEnabled(): boolean
  disableSave(): void
  enableSave(): void
  isMenuEnabled(): boolean
  disableMenu(): void
  enableMenu(): void
  isEncounterEnabled(): boolean
  disableEncounter(): void
  enableEncounter(): void
  isFormationEnabled(): boolean
  disableFormation(): void
  enableFormation(): void
  battleCount(): number
  winCount(): number
  escapeCount(): number
  saveCount(): number
  versionId(): number
  savefileId(): number
  setSavefileId(savefileId: number): void
  windowTone(): Color
  setWindowTone(value: Color): void
  battleBgm(): DataAudio
  setBattleBgm(value: DataAudio): void
  victoryMe(): DataAudio
  setVictoryMe(value: DataAudio): void
  defeatMe(): DataAudio
  setDefeatMe(value: DataAudio): void
  onBattleStart(): void
  onBattleWin(): void
  onBattleEscape(): void
  onBeforeSave(): void
  onAfterLoad(): void
  playtime(): number
  playtimeText(): string
  saveBgm(): void
  replayBgm(): void
  saveWalkingBgm(): void
  replayWalkingBgm(): void
  saveWalkingBgm2(): void
  mainFontFace(): string
  numberFontFace(): string
  mainFontSize(): number
  windowPadding(): number
  windowOpacity(): number
}
