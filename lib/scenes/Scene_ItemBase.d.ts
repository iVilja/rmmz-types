import { Rectangle } from "../core";
import { ActionItem } from "../data";
import { Game_Actor } from "../objects";
import { Window_ItemList, Window_MenuActor, Window_SkillList } from "../windows";
import { Scene_MenuBase } from "./Scene_MenuBase";
export declare class Scene_ItemBase<T extends ActionItem> extends Scene_MenuBase {
    _actorWindow: Window_MenuActor;
    _itemWindow: Window_ItemList | Window_SkillList;
    create(): void;
    createActorWindow(): void;
    actorWindowRect(): Rectangle;
    item(): T | null;
    user(): Game_Actor | null | undefined;
    isCursorLeft(): boolean;
    showActorWindow(): void;
    hideActorWindow(): void;
    isActorWindowActive(): boolean;
    onActorOk(): void;
    onActorCancel(): void;
    determineItem(): void;
    useItem(): void;
    activateItemWindow(): void;
    itemTargetActors(): Game_Actor[];
    canUse(): boolean | null | undefined;
    isItemEffectsValid(): boolean;
    applyItem(): void;
    checkCommonEvent(): void;
    playSeForItem(): void;
}
