import { Direction } from "../data"
export declare type KeyboardButtonIndex = keyof typeof Input.keyMapper
export declare type GamepadButtonIndex = keyof typeof Input.gamepadMapper
/**
 * The static class that handles input data from the keyboard and gamepads.
 *
 * @namespace
 */
export declare class Input {
  constructor()
  static _currentState: Record<string, boolean>
  static _previousState: Record<string, boolean>
  static _gamepadStates: Record<number, boolean>[]
  static _latestButton: string | null
  static _pressedTime: number
  static _dir4: number
  static _dir8: number
  static _preferredAxis: string
  static _date: number
  static _virtualButton: string | null
  /**
   * Initializes the input system.
   */
  static initialize(): void
  /**
   * Clears all the input data.
   */
  static clear(): void
  /**
   * Updates the input data.
   */
  static update(): void
  /**
   * Checks whether a key is currently pressed down.
   *
   * @param {string} keyName - The mapped name of the key.
   * @returns {boolean} True if the key is pressed.
   */
  static isPressed(keyName: string): boolean
  /**
   * Checks whether a key is just pressed.
   *
   * @param {string} keyName - The mapped name of the key.
   * @returns {boolean} True if the key is triggered.
   */
  static isTriggered(keyName: string): boolean
  /**
   * Checks whether a key is just pressed or a key repeat occurred.
   *
   * @param {string} keyName - The mapped name of the key.
   * @returns {boolean} True if the key is repeated.
   */
  static isRepeated(keyName: string): boolean
  /**
   * Checks whether a key is kept depressed.
   *
   * @param {string} keyName - The mapped name of the key.
   * @returns {boolean} True if the key is long-pressed.
   */
  static isLongPressed(keyName: string): boolean
  /**
   * The four direction value as a number of the numpad, or 0 for neutral.
   *
   * @readonly
   * @type number
   * @name Input.dir4
   */
  static get dir4(): Direction
  /**
   * The eight direction value as a number of the numpad, or 0 for neutral.
   *
   * @readonly
   * @type number
   * @name Input.dir8
   */
  static get dir8(): Direction
  /**
   * The time of the last input in milliseconds.
   *
   * @readonly
   * @type number
   * @name Input.date
   */
  static date(): number
  static virtualClick(buttonName: string): void
  static _setupEventHandlers(): void
  static _onKeyDown(event: KeyboardEvent): void
  static _shouldPreventDefault(keyCode: number): boolean
  static _onKeyUp(event: KeyboardEvent): void
  static _onLostFocus(): void
  static _pollGamepads(): void
  static _updateGamepadState(gamepad: Gamepad): void
  static _updateDirection(): void
  static _signX(): number
  static _signY(): number
  static _makeNumpadDirection(x: number, y: number): number
  static _isEscapeCompatible(keyName: string): boolean
}
export declare namespace Input {
  /**
   * The wait time of the key repeat in frames.
   *
   * @type number
   */
  const keyRepeatWait = 24
  /**
   * The interval of the key repeat in frames.
   *
   * @type number
   */
  const keyRepeatInterval = 6
  /**
   * A hash table to convert from a virtual key code to a mapped key name.
   *
   * @type Object
   */
  const keyMapper: {
    readonly 9: "tab"
    readonly 13: "ok"
    readonly 16: "shift"
    readonly 17: "control"
    readonly 18: "control"
    readonly 27: "escape"
    readonly 32: "ok"
    readonly 33: "pageup"
    readonly 34: "pagedown"
    readonly 37: "left"
    readonly 38: "up"
    readonly 39: "right"
    readonly 40: "down"
    readonly 45: "escape"
    readonly 81: "pageup"
    readonly 87: "pagedown"
    readonly 88: "escape"
    readonly 90: "ok"
    readonly 96: "escape"
    readonly 98: "down"
    readonly 100: "left"
    readonly 102: "right"
    readonly 104: "up"
    readonly 120: "debug"
  }
  /**
   * A hash table to convert from a gamepad button to a mapped key name.
   *
   * @type Object
   */
  const gamepadMapper: {
    readonly 0: "ok"
    readonly 1: "cancel"
    readonly 2: "shift"
    readonly 3: "menu"
    readonly 4: "pageup"
    readonly 5: "pagedown"
    readonly 12: "up"
    readonly 13: "down"
    readonly 14: "left"
    readonly 15: "right"
  }
}
