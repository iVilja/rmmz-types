/**
 * The static class that defines utility methods.
 *
 * @namespace
 */
export declare class Utils {
  constructor()
  /**
   * The name of the RPG Maker. "MZ" in the current version.
   *
   * @type string
   * @constant
   */
  static readonly RPGMAKER_NAME = "MZ"
  /**
   * The version of the RPG Maker.
   *
   * @type string
   * @constant
   */
  static readonly RPGMAKER_VERSION = "1.5.0"
  /**
   * Checks whether the current RPG Maker version is greater than or equal to
   * the given version.
   *
   * @param {string} version - The "x.x.x" format string to compare.
   * @returns {boolean} True if the current version is greater than or equal
   *                    to the given version.
   */
  static checkRMVersion(version: string): boolean
  /**
   * Checks whether the option is in the query string.
   *
   * @param {string} name - The option name.
   * @returns {boolean} True if the option is in the query string.
   */
  static isOptionValid(name: string): boolean
  /**
   * Checks whether the platform is NW.js.
   *
   * @returns {boolean} True if the platform is NW.js.
   */
  static isNwjs(): boolean
  /**
   * Checks whether the platform is a mobile device.
   *
   * @returns {boolean} True if the platform is a mobile device.
   */
  static isMobileDevice(): boolean
  /**
   * Checks whether the browser is Mobile Safari.
   *
   * @returns {boolean} True if the browser is Mobile Safari.
   */
  static isMobileSafari(): boolean
  /**
   * Checks whether the browser is Android Chrome.
   *
   * @returns {boolean} True if the browser is Android Chrome.
   */
  static isAndroidChrome(): boolean
  /**
   * Checks whether the browser is accessing local files.
   *
   * @returns {boolean} True if the browser is accessing local files.
   */
  static isLocal(): boolean
  /**
   * Checks whether the browser supports WebGL.
   *
   * @returns {boolean} True if the browser supports WebGL.
   */
  static canUseWebGL(): boolean
  /**
   * Checks whether the browser supports Web Audio API.
   *
   * @returns {boolean} True if the browser supports Web Audio API.
   */
  static canUseWebAudioAPI(): boolean
  /**
   * Checks whether the browser supports CSS Font Loading.
   *
   * @returns {boolean} True if the browser supports CSS Font Loading.
   */
  static canUseCssFontLoading(): boolean
  /**
   * Checks whether the browser supports IndexedDB.
   *
   * @returns {boolean} True if the browser supports IndexedDB.
   */
  static canUseIndexedDB(): boolean
  static _audioElement?: HTMLAudioElement
  static _videoElement?: HTMLAudioElement
  /**
   * Checks whether the browser can play ogg files.
   *
   * @returns {boolean} True if the browser can play ogg files.
   */
  static canPlayOgg(): boolean
  /**
   * Checks whether the browser can play webm files.
   *
   * @returns {boolean} True if the browser can play webm files.
   */
  static canPlayWebm(): boolean
  /**
   * Encodes a URI component without escaping slash characters.
   *
   * @param {string} str - The input string.
   * @returns {string} Encoded string.
   */
  static encodeURI(str: string): string
  /**
   * Gets the filename that does not include subfolders.
   *
   * @param {string} filename - The filename with subfolders.
   * @returns {string} The filename without subfolders.
   */
  static extractFileName(filename: string): string
  /**
   * Escapes special characters for HTML.
   *
   * @param {string} str - The input string.
   * @returns {string} Escaped string.
   */
  static escapeHtml(str: string): string
  /**
   * Checks whether the string contains any Arabic characters.
   *
   * @returns {boolean} True if the string contains any Arabic characters.
   */
  static containsArabic(str: string): boolean
  static _hasEncryptedImages: boolean
  static _hasEncryptedAudio: boolean
  static _encryptionKey: string
  /**
   * Sets information related to encryption.
   *
   * @param {boolean} hasImages - Whether the image files are encrypted.
   * @param {boolean} hasAudio - Whether the audio files are encrypted.
   * @param {string} key - The encryption key.
   */
  static setEncryptionInfo(hasImages: boolean, hasAudio: boolean, key: string): void
  /**
   * Checks whether the image files in the game are encrypted.
   *
   * @returns {boolean} True if the image files are encrypted.
   */
  static hasEncryptedImages(): boolean
  /**
   * Checks whether the audio files in the game are encrypted.
   *
   * @returns {boolean} True if the audio files are encrypted.
   */
  static hasEncryptedAudio(): boolean
  /**
   * Decrypts encrypted data.
   *
   * @param {ArrayBuffer} source - The data to be decrypted.
   * @returns {ArrayBuffer} The decrypted data.
   */
  static decryptArrayBuffer(source: ArrayBuffer): ArrayBuffer
}
