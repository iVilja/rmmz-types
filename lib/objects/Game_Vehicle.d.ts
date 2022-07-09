import { DataAudio, Direction, MapID, VehicleType } from "../data"
import { Game_Character } from "./Game_Character"
/**
 * Game_Vehicle
 *
 * The game object class for a vehicle.
 */
export declare class Game_Vehicle extends Game_Character {
  _type: VehicleType
  _mapId: number
  _altitude: number
  _driving: boolean
  _bgm: DataAudio | null
  constructor(type: VehicleType)
  initMembers(): void
  isBoat(): boolean
  isShip(): boolean
  isAirship(): boolean
  resetDirection(): void
  initMoveSpeed(): void
  vehicle(): import("../data").DataVehicle | null
  loadSystemSettings(): void
  refresh(): void
  setLocation(mapId: MapID, x: number, y: number): void
  pos(x: number, y: number): boolean
  isMapPassable(x: number, y: number, d: Direction): boolean
  getOn(): void
  getOff(): void
  setBgm(bgm: DataAudio): void
  playBgm(): void
  syncWithPlayer(): void
  screenY(): number
  shadowX(): number
  shadowY(): number
  shadowOpacity(): number
  canMove(): boolean
  update(): void
  updateAirship(): void
  updateAirshipAltitude(): void
  maxAltitude(): number
  isLowest(): boolean
  isHighest(): boolean
  isTakeoffOk(): boolean
  isLandOk(x: number, y: number, d: Direction): boolean
}
