import { DataEventPage, Direction, EventID, MapID, MoveRoute } from "../data";
import { Game_Character } from "./Game_Character";
import { Game_Interpreter } from "./Game_Interpreter";
/**
 * Game_Event
*
* The game object class for an event. It contains functionality for event page
// switching and running parallel process events.
*/
export declare class Game_Event extends Game_Character {
    _moveType: number;
    _trigger: number | null;
    _starting: boolean;
    _erased: boolean;
    _pageIndex: number;
    _originalPattern: number;
    _originalDirection: number;
    _prelockDirection: Direction;
    _locked: boolean;
    _mapId: MapID;
    _eventId: EventID;
    _interpreter: Game_Interpreter | null;
    constructor(mapId: MapID, eventId: EventID);
    initMembers(): void;
    eventId(): number;
    event(): import("../data").DataEvent;
    page(): DataEventPage;
    list(): import("../data").DataCommand[];
    isCollidedWithCharacters(x: number, y: number): boolean;
    isCollidedWithEvents(x: number, y: number): boolean;
    isCollidedWithPlayerCharacters(x: number, y: number): boolean;
    lock(): void;
    unlock(): void;
    updateStop(): void;
    updateSelfMovement(): void;
    stopCountThreshold(): number;
    moveTypeRandom(): void;
    moveTypeTowardPlayer(): void;
    isNearThePlayer(): boolean;
    moveTypeCustom(): void;
    isStarting(): boolean;
    clearStartingFlag(): void;
    isTriggerIn(triggers: number[]): boolean;
    start(): void;
    erase(): void;
    refresh(): void;
    findProperPageIndex(): number;
    meetsConditions(page: DataEventPage): boolean;
    setupPage(): void;
    clearPageSettings(): void;
    setupPageSettings(): void;
    isOriginalPattern(): boolean;
    resetPattern(): void;
    checkEventTriggerTouch(x: number, y: number): void;
    checkEventTriggerAuto(): void;
    update(): void;
    updateParallel(): void;
    locate(x: number, y: number): void;
    forceMoveRoute(moveRoute: MoveRoute): void;
}
