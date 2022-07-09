import { Sprite, Tilemap, TilingSprite, Weather } from "../core"
import { BalloonRequest, DataTileset } from "../data"
import { Game_Character } from "../objects"
import { PIXIDestroyOptions } from "../external-types"
import { Spriteset_Base } from "./Spriteset_Base"
import { Sprite_Balloon } from "./Sprite_Balloon"
import { Sprite_Character } from "./Sprite_Character"
import { Sprite_Destination } from "./Sprite_Destination"
/**
// Spriteset_Map
//
// The set of sprites on the map screen.
*/
export declare class Spriteset_Map extends Spriteset_Base {
  _balloonSprites: Sprite_Balloon[]
  _characterSprites: Sprite_Character[]
  _parallax: TilingSprite
  _tilemap: Tilemap
  _tileset: DataTileset
  _shadowSprite: Sprite
  _destinationSprite: Sprite_Destination
  _weather: Weather
  _parallaxName: string
  destroy(options?: PIXIDestroyOptions): void
  loadSystemImages(): void
  createLowerLayer(): void
  update(): void
  hideCharacters(): void
  createParallax(): void
  createTilemap(): void
  loadTileset(): void
  createCharacters(): void
  createShadow(): void
  createDestination(): void
  createWeather(): void
  updateTileset(): void
  updateParallax(): void
  updateTilemap(): void
  updateShadow(): void
  updateWeather(): void
  updateBalloons(): void
  processBalloonRequests(): void
  createBalloon(request: BalloonRequest): void
  removeBalloon(sprite: Sprite_Balloon): void
  removeAllBalloons(): void
  findTargetSprite(target: Game_Character): Sprite_Character | undefined
  animationBaseDelay(): number
}
