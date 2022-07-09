/**
 * Game_Timer
 *
 * The game object class for the timer.
 */
export declare class Game_Timer {
  _frames: number
  _working: boolean
  update(sceneActive: boolean): void
  start(count: number): void
  stop(): void
  isWorking(): boolean
  seconds(): number
  frames(): number
  onExpire(): void
}
