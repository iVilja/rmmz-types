/**
 * FontManager
 *
 * The static class that loads font files.
 */
export declare class FontManager {
  constructor()
  static _urls: Record<string, string>
  static _states: Record<string, string>
  static load(family: string, filename: string): void
  static isReady(): boolean
  static startLoading(family: string, url: string): void
  static throwLoadError(family: string): void
  static makeUrl(filename: string): string
}
