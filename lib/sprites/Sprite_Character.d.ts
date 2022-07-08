import { Sprite } from "../core";
import { TileID, TilesetID } from "../data";
import { Game_Character } from "../objects";
/**
// Sprite_Character
//
// The sprite for displaying a character.
*/
export declare class Sprite_Character extends Sprite {
    _character: Game_Character;
    _balloonDuration: number;
    _tilesetId: TilesetID;
    _upperBody: Sprite;
    _lowerBody: Sprite;
    _tileId: number;
    _characterName: string;
    _characterIndex: number;
    _isBigCharacter: boolean;
    _bushDepth: number;
    constructor(character: Game_Character);
    initMembers(): void;
    setCharacter(character: Game_Character): void;
    checkCharacter(character: Game_Character): boolean;
    update(): void;
    updateVisibility(): void;
    isTile(): boolean;
    isObjectCharacter(): boolean;
    isEmptyCharacter(): boolean;
    tilesetBitmap(tileId: TileID): import("../core").Bitmap;
    updateBitmap(): void;
    isImageChanged(): boolean;
    setTileBitmap(): void;
    setCharacterBitmap(): void;
    updateFrame(): void;
    updateTileFrame(): void;
    updateCharacterFrame(): void;
    characterBlockX(): number;
    characterBlockY(): number;
    characterPatternX(): number;
    characterPatternY(): number;
    patternWidth(): number;
    patternHeight(): number;
    updateHalfBodySprites(): void;
    createHalfBodySprites(): void;
    updatePosition(): void;
    updateOther(): void;
}
