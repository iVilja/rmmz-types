import { DataEncounter, Direction, MapID, VehicleType } from "../data"
import { Game_Character } from "./Game_Character"
import { Game_Followers } from "./Game_Followers"
/**
 * Game_Player
*
* The game object class for the player. It contains event starting
// determinants and map scrolling functions.
*/
export declare class Game_Player extends Game_Character {
  constructor()
  _vehicleType: VehicleType
  _vehicleGettingOn: boolean
  _vehicleGettingOff: boolean
  _dashing: boolean
  _needsMapReload: boolean
  _transferring: boolean
  _newMapId: number
  _newX: number
  _newY: number
  _newDirection?: Direction
  _fadeType?: number | undefined
  _followers: Game_Followers
  _encounterCount: number
  initMembers(): void
  clearTransferInfo(): void
  followers(): Game_Followers
  refresh(): void
  isStopping(): boolean
  reserveTransfer(mapId: MapID, x: number, y: number, d?: Direction, fadeType?: number): void
  setupForNewGame(): void
  requestMapReload(): void
  isTransferring(): boolean
  newMapId(): number
  fadeType(): number | undefined
  performTransfer(): void
  isMapPassable(x: number, y: number, d: Direction): boolean
  vehicle(): import("./Game_Vehicle").Game_Vehicle
  isInBoat(): boolean
  isInShip(): boolean
  isInAirship(): boolean
  isInVehicle(): boolean
  isNormal(): boolean
  isDashing(): boolean
  isDebugThrough(): boolean
  isCollided(x: number, y: number): boolean
  centerX(): number
  centerY(): number
  center(x: number, y: number): void
  locate(x: number, y: number): void
  increaseSteps(): void
  makeEncounterCount(): void
  makeEncounterTroopId(): number
  meetsEncounterConditions(encounter: DataEncounter): boolean
  executeEncounter(): boolean
  startMapEvent(x: number, y: number, triggers: number[], normal: boolean): void
  moveByInput(): void
  canMove(): boolean
  getInputDirection(): Direction
  executeMove(direction: Direction): void
  update(sceneActive?: boolean): void
  updateDashing(): void
  isDashButtonPressed(): boolean
  updateScroll(lastScrolledX: number, lastScrolledY: number): void
  updateVehicle(): void
  updateVehicleGetOn(): void
  updateVehicleGetOff(): void
  updateNonmoving(wasMoving: boolean, sceneActive?: boolean): void
  triggerAction(): boolean
  triggerButtonAction(): boolean
  triggerTouchAction(): boolean
  triggerTouchActionD1(x1: number, y1: number): boolean
  triggerTouchActionD2(x2: number, y2: number): boolean
  triggerTouchActionD3(x2: number, y2: number): boolean
  updateEncounterCount(): void
  canEncounter(): boolean
  encounterProgressValue(): number
  checkEventTriggerHere(triggers: number[]): void
  checkEventTriggerThere(triggers: number[]): void
  checkEventTriggerTouch(x: number, y: number): void
  canStartLocalEvents(): boolean
  getOnOffVehicle(): boolean
  getOnVehicle(): boolean
  getOffVehicle(): boolean
  forceMoveForward(): void
  isOnDamageFloor(): boolean
  moveStraight(d: Direction): void
  moveDiagonally(horz: Direction, vert: Direction): void
  jump(xPlus: number, yPlus: number): void
  showFollowers(): void
  hideFollowers(): void
  gatherFollowers(): void
  areFollowersGathering(): boolean
  areFollowersGathered(): boolean
}
