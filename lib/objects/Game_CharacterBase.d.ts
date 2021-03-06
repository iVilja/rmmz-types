import { Direction, PriorityType, TileID } from "../data"
import { PIXI } from "../externals"
export declare class Game_CharacterBase {
  get x(): number
  get y(): number
  _x: number
  _y: number
  _realX: number
  _realY: number
  _moveSpeed: number
  _moveFrequency: number
  _opacity: number
  _blendMode: PIXI.BLEND_MODES
  _direction: Direction
  _pattern: number
  _priorityType: PriorityType
  _tileId: number
  _characterName: string
  _characterIndex: number
  _isObjectCharacter: boolean
  _walkAnime: boolean
  _stepAnime: boolean
  _directionFix: boolean
  _through: boolean
  _transparent: boolean
  _bushDepth: number
  _animationId: number
  _balloonId: number
  _animationPlaying: boolean
  _balloonPlaying: boolean
  _animationCount: number
  _stopCount: number
  _jumpCount: number
  _jumpPeak: number
  _movementSuccess: boolean
  constructor()
  initMembers(): void
  pos(x: number, y: number): boolean
  posNt(x: number, y: number): boolean
  moveSpeed(): number
  setMoveSpeed(moveSpeed: number): void
  moveFrequency(): number
  setMoveFrequency(moveFrequency: number): void
  opacity(): number
  setOpacity(opacity: number): void
  blendMode(): PIXI.BLEND_MODES
  setBlendMode(blendMode: PIXI.BLEND_MODES): void
  isNormalPriority(): boolean
  setPriorityType(priorityType: PriorityType): void
  isMoving(): boolean
  isJumping(): boolean
  jumpHeight(): number
  isStopping(): boolean
  checkStop(threshold: number): boolean
  resetStopCount(): void
  realMoveSpeed(): number
  distancePerFrame(): number
  isDashing(): boolean
  isDebugThrough(): boolean
  straighten(): void
  reverseDir(d: Direction): Direction
  canPass(x: number, y: number, d: Direction): boolean
  canPassDiagonally(x: number, y: number, horz: Direction, vert: Direction): boolean
  isMapPassable(x: number, y: number, d: Direction): boolean
  isCollidedWithCharacters(x: number, y: number): boolean
  isCollidedWithEvents(x: number, y: number): boolean
  isCollidedWithVehicles(x: number, y: number): boolean
  setPosition(x: number, y: number): void
  copyPosition(character: Game_CharacterBase): void
  locate(x: number, y: number): void
  direction(): Direction
  setDirection(d?: Direction | 0): void
  isTile(): boolean
  isObjectCharacter(): boolean
  shiftY(): 0 | 6
  scrolledX(): number
  scrolledY(): number
  screenX(): number
  screenY(): number
  screenZ(): number
  isNearTheScreen(): boolean
  update(): void
  updateStop(): void
  updateJump(): void
  updateMove(): void
  updateAnimation(): void
  animationWait(): number
  updateAnimationCount(): void
  updatePattern(): void
  maxPattern(): number
  pattern(): number
  setPattern(pattern: number): void
  isOriginalPattern(): boolean
  resetPattern(): void
  refreshBushDepth(): void
  isOnLadder(): boolean
  isOnBush(): boolean
  terrainTag(): number
  regionId(): number
  increaseSteps(): void
  tileId(): number
  characterName(): string
  characterIndex(): number
  setImage(characterName: string, characterIndex: number): void
  setTileImage(tileId: TileID): void
  checkEventTriggerTouchFront(d: Direction): void
  checkEventTriggerTouch(_x: number, _y: number): void
  isMovementSucceeded(_x?: number, _y?: number): boolean
  setMovementSuccess(success: boolean): void
  moveStraight(d: Direction): void
  moveDiagonally(horz: Direction, vert: Direction): void
  jump(xPlus: number, yPlus: number): void
  hasWalkAnime(): boolean
  setWalkAnime(walkAnime: boolean): void
  hasStepAnime(): boolean
  setStepAnime(stepAnime: boolean): void
  isDirectionFixed(): boolean
  setDirectionFix(directionFix: boolean): void
  isThrough(): boolean
  setThrough(through: boolean): void
  isTransparent(): boolean
  bushDepth(): number
  setTransparent(transparent: boolean): void
  startAnimation(): void
  startBalloon(): void
  isAnimationPlaying(): boolean
  isBalloonPlaying(): boolean
  endAnimation(): void
  endBalloon(): void
}
