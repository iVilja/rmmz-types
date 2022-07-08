import { Scene_Base } from "./Scene_Base";
export declare class Scene_Boot extends Scene_Base {
    _databaseLoaded: boolean;
    create(): void;
    isReady(): boolean;
    onDatabaseLoaded(): void;
    setEncryptionInfo(): void;
    loadSystemImages(): void;
    loadPlayerData(): void;
    loadGameFonts(): void;
    isPlayerDataLoaded(): boolean;
    start(): void;
    startNormalGame(): void;
    resizeScreen(): void;
    adjustBoxSize(): void;
    adjustWindow(): void;
    updateDocumentTitle(): void;
    checkPlayerLocation(): void;
}
