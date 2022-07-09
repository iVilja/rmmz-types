import { Direction } from "../data"
import { Game_Follower } from "./Game_Follower"
/**
 * Game_Followers
 *
 * The wrapper class for a follower array.
 */
export declare class Game_Followers {
  _visible: boolean
  _gathering: boolean
  _data: Game_Follower[]
  constructor()
  setup(): void
  isVisible(): boolean
  show(): void
  hide(): void
  data(): Game_Follower[]
  reverseData(): Game_Follower[]
  follower(index: number): Game_Follower
  refresh(): void
  update(): void
  updateMove(): void
  jumpAll(): void
  synchronize(x: number, y: number, d: Direction): void
  gather(): void
  areGathering(): boolean
  visibleFollowers(): Game_Follower[]
  areMoving(): boolean
  areGathered(): boolean
  isSomeoneCollided(x: number, y: number): boolean
}
