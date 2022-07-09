/**
 * The static class that handles JSON with object information.
 *
 * @namespace
 */
export declare class JsonEx {
  constructor()
  /**
   * The maximum depth of objects.
   *
   * @type number
   * @default 100
   */
  static maxDepth: number
  /**
   * Converts an object to a JSON string with object information.
   *
   * @param {object} object - The object to be converted.
   * @returns {string} The JSON string.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static stringify(object: any): string
  /**
   * Parses a JSON string and reconstructs the corresponding object.
   *
   * @param {string} json - The JSON string.
   * @returns {object} The reconstructed object.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static parse(json: string): any
  /**
   * Makes a deep copy of the specified object.
   *
   * @param {object} object - The object to be copied.
   * @returns {object} The copied object.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static makeDeepCopy(object: any): any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static _encode(value: any, depth: number): any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static _decode(value: any): any
}
