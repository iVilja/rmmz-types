import { effekseer } from "../externals"
/**
 * EffectManager
 *
 * The static class that loads Effekseer effects.
 */
export declare class EffectManager {
  constructor()
  static _cache: Record<string, effekseer.EffekseerEffect>
  static _errorUrls: string[]
  static load(filename?: string): effekseer.EffekseerEffect | null
  static startLoading(url: string): effekseer.EffekseerEffect
  static clear(): void
  static onLoad(_url?: string): void
  static onError(url: string): void
  static makeUrl(filename: string): string
  static checkErrors(): void
  static throwLoadError(url: string): void
  static isReady(): boolean
}
