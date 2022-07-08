import { Rectangle } from "../core";
import { Game_Actor } from "../objects";
import { Window_Command } from "./Window_Command";
/**
 * Window_ActorCommand
 *
 * The window for selecting an actor's action on the battle screen.
 */
export declare class Window_ActorCommand extends Window_Command {
    _actor: Game_Actor | null;
    constructor(rect: Rectangle);
    makeCommandList(): void;
    addAttackCommand(): void;
    addSkillCommands(): void;
    addGuardCommand(): void;
    addItemCommand(): void;
    setup(actor: Game_Actor | null): void;
    actor(): Game_Actor | null;
    processOk(): void;
    selectLast(): void;
}
