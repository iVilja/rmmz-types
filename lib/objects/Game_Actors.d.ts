import { ActorID } from "../data"
import { Game_Actor } from "./Game_Actor"
/**
 * Game_Actors
 *
 * The wrapper class for an actor array.
 */
export declare class Game_Actors {
  _data: Game_Actor[]
  actor(actorId: ActorID): Game_Actor | null
}
