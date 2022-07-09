import { TilingSprite } from "../core"
import { TerrainBattlebackType } from "../data"
/**
// Sprite_Battleback
//
// The sprite for displaying a background image in battle.
*/
export declare class Sprite_Battleback extends TilingSprite {
  constructor(type: 0 | 1)
  adjustPosition(): void
  battleback1Bitmap(): import("../core").Bitmap
  battleback2Bitmap(): import("../core").Bitmap
  battleback1Name(): string
  battleback2Name(): string
  overworldBattleback1Name(): string
  overworldBattleback2Name(): string
  normalBattleback1Name(): string
  normalBattleback2Name(): string
  terrainBattleback1Name(
    type: TerrainBattlebackType
  ): "Wasteland" | "DirtField" | "Desert" | "Lava1" | "Lava2" | "Snowfield" | "Clouds" | "PoisonSwamp" | null
  terrainBattleback2Name(
    type: TerrainBattlebackType
  ): "Wasteland" | "Desert" | "Snowfield" | "Clouds" | "PoisonSwamp" | "Forest" | "Cliff" | "Lava" | undefined
  defaultBattleback1Name(): string
  defaultBattleback2Name(): string
  shipBattleback1Name(): string
  shipBattleback2Name(): string
  autotileType(z: number): TerrainBattlebackType
}
