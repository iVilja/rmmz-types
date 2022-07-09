/**
 * The static class that handles input data from the mouse and touchscreen.
 *
 * @namespace
 */
export declare class TouchInput {
  constructor()
  static _mousePressed: boolean
  static _screenPressed: boolean
  static _pressedTime: number
  static _clicked: boolean
  static _newState: {
    triggered: boolean
    cancelled: boolean
    moved: boolean
    hovered: boolean
    released: boolean
    wheelX: number
    wheelY: number
  }
  static _currentState: {
    triggered: boolean
    cancelled: boolean
    moved: boolean
    hovered: boolean
    released: boolean
    wheelX: number
    wheelY: number
  }
  static _x: number
  static _y: number
  static _triggerX: number
  static _triggerY: number
  static _moved: boolean
  static _date: number
  /**
   * Initializes the touch system.
   */
  static initialize(): void
  /**
   * The wait time of the pseudo key repeat in frames.
   *
   * @type number
   */
  static readonly keyRepeatWait = 24
  /**
   * The interval of the pseudo key repeat in frames.
   *
   * @type number
   */
  static readonly keyRepeatInterval = 6
  /**
   * The threshold number of pixels to treat as moved.
   *
   * @type number
   */
  static readonly moveThreshold = 10
  /**
   * Clears all the touch data.
   */
  static clear(): void
  /**
   * Updates the touch data.
   */
  static update(): void
  /**
   * Checks whether the mouse button or touchscreen has been pressed and
   * released at the same position.
   *
   * @returns {boolean} True if the mouse button or touchscreen is clicked.
   */
  static isClicked(): boolean
  /**
   * Checks whether the mouse button or touchscreen is currently pressed down.
   *
   * @returns {boolean} True if the mouse button or touchscreen is pressed.
   */
  static isPressed(): boolean
  /**
   * Checks whether the left mouse button or touchscreen is just pressed.
   *
   * @returns {boolean} True if the mouse button or touchscreen is triggered.
   */
  static isTriggered(): boolean
  /**
   * Checks whether the left mouse button or touchscreen is just pressed
   * or a pseudo key repeat occurred.
   *
   * @returns {boolean} True if the mouse button or touchscreen is repeated.
   */
  static isRepeated(): boolean
  /**
   * Checks whether the left mouse button or touchscreen is kept depressed.
   *
   * @returns {boolean} True if the left mouse button or touchscreen is long-pressed.
   */
  static isLongPressed(): boolean
  /**
   * Checks whether the right mouse button is just pressed.
   *
   * @returns {boolean} True if the right mouse button is just pressed.
   */
  static isCancelled(): boolean
  /**
   * Checks whether the mouse or a finger on the touchscreen is moved.
   *
   * @returns {boolean} True if the mouse or a finger on the touchscreen is moved.
   */
  static isMoved(): boolean
  /**
   * Checks whether the mouse is moved without pressing a button.
   *
   * @returns {boolean} True if the mouse is hovered.
   */
  static isHovered(): boolean
  /**
   * Checks whether the left mouse button or touchscreen is released.
   *
   * @returns {boolean} True if the mouse button or touchscreen is released.
   */
  static isReleased(): boolean
  /**
   * The horizontal scroll amount.
   *
   * @readonly
   * @type number
   * @name TouchInput.wheelX
   */
  static get wheelX(): number
  /**
   * The vertical scroll amount.
   *
   * @readonly
   * @type number
   * @name TouchInput.wheelY
   */
  static get wheelY(): number
  /**
   * The x coordinate on the canvas area of the latest touch event.
   *
   * @readonly
   * @type number
   * @name TouchInput.x
   */
  static get x(): number
  /**
   * The y coordinate on the canvas area of the latest touch event.
   *
   * @readonly
   * @type number
   * @name TouchInput.y
   */
  static get y(): number
  /**
   * The time of the last input in milliseconds.
   *
   * @readonly
   * @type number
   * @name TouchInput.date
   */
  static get date(): number
  static _createNewState(): {
    triggered: boolean
    cancelled: boolean
    moved: boolean
    hovered: boolean
    released: boolean
    wheelX: number
    wheelY: number
  }
  static _setupEventHandlers(): void
  static _onMouseDown(event: MouseEvent): void
  static _onLeftButtonDown(event: MouseEvent): void
  static _onMiddleButtonDown(_event?: MouseEvent): void
  static _onRightButtonDown(event: MouseEvent): void
  static _onMouseMove(event: MouseEvent): void
  static _onMouseUp(event: MouseEvent): void
  static _onWheel(event: WheelEvent): void
  static _onTouchStart(event: TouchEvent): void
  static _onTouchMove(event: TouchEvent): void
  static _onTouchEnd(event: TouchEvent): void
  static _onTouchCancel(_event?: TouchEvent): void
  static _onLostFocus(): void
  static _onTrigger(x: number, y: number): void
  static _onCancel(x: number, y: number): void
  static _onMove(x: number, y: number): void
  static _onHover(x: number, y: number): void
  static _onRelease(x: number, y: number): void
}
