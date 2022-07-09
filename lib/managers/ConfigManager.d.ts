import { DataConfig } from "../data"
/**
 * ConfigManager
 *
 * The static class that manages the configuration data.
 */
export declare class ConfigManager {
  constructor()
  static alwaysDash: boolean
  static commandRemember: boolean
  static touchUI: boolean
  static _isLoaded: boolean
  static get bgmVolume(): number
  static set bgmVolume(value: number)
  static get bgsVolume(): number
  static set bgsVolume(value: number)
  static get meVolume(): number
  static set meVolume(value: number)
  static get seVolume(): number
  static set seVolume(value: number)
  static load(): Promise<number>
  static save(): void
  static isLoaded(): boolean
  static makeData(): DataConfig
  static applyData(config: Partial<DataConfig>): void
  static readFlag(config: Partial<DataConfig>, name: keyof DataConfig, defaultValue: boolean): boolean
  static readVolume(config: Partial<DataConfig>, name: keyof DataConfig): number
}
