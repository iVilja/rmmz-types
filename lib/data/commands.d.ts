import { WeatherType } from "../core"
import { PIXI } from "../externals"
import { Game_Character, PictureEasingType } from "../objects"
import { Color, DataAudio, Direction } from "./base"
import { ParamID } from "./classes"
import { SelfSwitchCharacter } from "./events"
import { ItemType } from "./items"
import { VehicleType } from "./system"
import {
  ActionDataType,
  ActorID,
  AnimationID,
  ArmorID,
  BalloonIconID,
  CharacterID,
  ClassID,
  CommonEventID,
  EnemyID,
  EquipmentType,
  ItemID,
  MapID,
  PictureID,
  SkillID,
  StateID,
  SwitchID,
  TilesetID,
  TroopID,
  VariableID,
  WeaponID,
} from "./types"
export declare type TextWindowBackgroundType = 0 /* Window */ | 1 /* Dim */ | 2 /* Transparent */
export declare type TextWindowPositionType = 0 /* Top */ | 1 /* Middle */ | 2 /* Bottom */
export declare type VariableComparisonType =
  | 0 /* Equal to */
  | 1 /* Greater than or Equal to */
  | 2 /* Less than or Equal to */
  | 3 /* Greater than */
  | 4 /* Less than */
  | 5 /* Not Equal to */
declare type $<TCode, TParams = []> = {
  code: TCode
  parameters: TParams
}
export declare type RouteMovementCommand =
  | $<typeof Game_Character.ROUTE_END, []>
  | $<typeof Game_Character.ROUTE_MOVE_DOWN, undefined>
  | $<typeof Game_Character.ROUTE_MOVE_LEFT, undefined>
  | $<typeof Game_Character.ROUTE_MOVE_RIGHT, undefined>
  | $<typeof Game_Character.ROUTE_MOVE_UP, undefined>
  | $<typeof Game_Character.ROUTE_MOVE_LOWER_L, undefined>
  | $<typeof Game_Character.ROUTE_MOVE_LOWER_R, undefined>
  | $<typeof Game_Character.ROUTE_MOVE_UPPER_L, undefined>
  | $<typeof Game_Character.ROUTE_MOVE_UPPER_R, undefined>
  | $<typeof Game_Character.ROUTE_MOVE_RANDOM, undefined>
  | $<typeof Game_Character.ROUTE_MOVE_TOWARD, undefined>
  | $<typeof Game_Character.ROUTE_MOVE_AWAY, undefined>
  | $<typeof Game_Character.ROUTE_MOVE_FORWARD, undefined>
  | $<typeof Game_Character.ROUTE_MOVE_BACKWARD, undefined>
  | $<typeof Game_Character.ROUTE_JUMP, [number, number]> /* x, y */
  | $<typeof Game_Character.ROUTE_WAIT, [number]>
  | $<typeof Game_Character.ROUTE_TURN_DOWN, undefined>
  | $<typeof Game_Character.ROUTE_TURN_LEFT, undefined>
  | $<typeof Game_Character.ROUTE_TURN_RIGHT, undefined>
  | $<typeof Game_Character.ROUTE_TURN_UP, undefined>
  | $<typeof Game_Character.ROUTE_TURN_90D_R, undefined>
  | $<typeof Game_Character.ROUTE_TURN_90D_L, undefined>
  | $<typeof Game_Character.ROUTE_TURN_180D, undefined>
  | $<typeof Game_Character.ROUTE_TURN_90D_R_L, undefined>
  | $<typeof Game_Character.ROUTE_TURN_RANDOM, undefined>
  | $<typeof Game_Character.ROUTE_TURN_TOWARD, undefined>
  | $<typeof Game_Character.ROUTE_TURN_AWAY, undefined>
  | $<typeof Game_Character.ROUTE_SWITCH_ON, [SwitchID]>
  | $<typeof Game_Character.ROUTE_SWITCH_OFF, [SwitchID]>
  | $<typeof Game_Character.ROUTE_CHANGE_SPEED, [number]>
  | $<typeof Game_Character.ROUTE_CHANGE_FREQ, [number]>
  | $<typeof Game_Character.ROUTE_WALK_ANIME_ON, undefined>
  | $<typeof Game_Character.ROUTE_WALK_ANIME_OFF, undefined>
  | $<typeof Game_Character.ROUTE_STEP_ANIME_ON, undefined>
  | $<typeof Game_Character.ROUTE_STEP_ANIME_OFF, undefined>
  | $<typeof Game_Character.ROUTE_DIR_FIX_ON, undefined>
  | $<typeof Game_Character.ROUTE_DIR_FIX_OFF, undefined>
  | $<typeof Game_Character.ROUTE_THROUGH_ON, undefined>
  | $<typeof Game_Character.ROUTE_THROUGH_OFF, undefined>
  | $<typeof Game_Character.ROUTE_TRANSPARENT_ON, undefined>
  | $<typeof Game_Character.ROUTE_TRANSPARENT_OFF, undefined>
  | $<typeof Game_Character.ROUTE_CHANGE_IMAGE, [string, number]>
  | $<typeof Game_Character.ROUTE_CHANGE_OPACITY, [number]>
  | $<typeof Game_Character.ROUTE_CHANGE_BLEND_MODE, [PIXI.BLEND_MODES]>
  | $<typeof Game_Character.ROUTE_PLAY_SE, [DataAudio]>
  | $<typeof Game_Character.ROUTE_SCRIPT, [string]>
export declare type ConditionalBranchParams =
  | [0, SwitchID, 0 | 1] /* Switch */
  /* Variable */
  | [1, VariableID, 0, number, VariableComparisonType] /* Compare by value */
  | [1, VariableID, 1, VariableID, VariableComparisonType] /* Compare by variable */
  /* Self Switch */
  | [2, SelfSwitchCharacter, 0 | 1]
  /* Timer */
  | [3, number /* Seconds */, 0 | 1 /* ≥ or ≤ */]
  /* Actor */
  | [4, ActorID, 0, undefined] /* In the Party */
  | [4, ActorID, 1, string] /* Name */
  | [4, ActorID, 2, ClassID] /* Class */
  | [4, ActorID, 3, SkillID] /* Skill */
  | [4, ActorID, 4, WeaponID] /* Weapon */
  | [4, ActorID, 5, ArmorID] /* Armor */
  | [4, ActorID, 6, StateID] /* State */
  /* Enemy */
  | [5, EnemyID, 0] /* Appeared */
  | [5, EnemyID, 1, StateID] /* State */
  /* Character */
  | [6, CharacterID, Direction]
  /* Gold */
  | [7, number /* Amount */, 0 | 1 | 2 /* ≥, ≤, < */]
  /* Item */
  | [8, ItemID]
  /* Weapon */
  | [9, WeaponID, boolean]
  /* Armor */
  | [10, WeaponID, boolean]
  /* Button */
  | [11, string /* Key Name */, undefined | 0 | 1 | 2 /* Is Pressed (default), Is Triggered, Is Repeated */]
  /* Script */
  | [12, string]
  /* Vehicle */
  | [13, VehicleType]
export declare type DataCommand = {
  indent?: number | null
} & (
  | RouteMovementCommand
  /* Show Text */
  | $<
      101,
      [
        string /* Face Name */,
        number /* Face Index */,
        TextWindowBackgroundType,
        TextWindowPositionType,
        string /* Talker Name */
      ]
    >
  | $<401, [string]> /* Text */
  /* Show Choices */
  | $<
      102,
      [
        string[] /* Choices */,
        number /* Cancel Type */,
        number /* Default Type */,
        TextWindowPositionType,
        TextWindowBackgroundType
      ]
    >
  | $<402, [number]> /* When [**] */
  | $<403> /* When Cancel */
  /* Input Number */
  | $<103, [number /* Variable ID */, number /* Max Digits */]>
  /* Select Item */
  | $<104, [number /* Variable ID */, ItemType?]>
  /* Show Scrolling Text */
  | $<105, [number /* Speed */, boolean /* No Fast */]>
  | $<405, [string]> /* Text */
  /* Comment */
  | $<108, [string]>
  | $<408, [string]>
  /* Skip */
  | $<109>
  /* Conditional Branch */
  | $<111, ConditionalBranchParams>
  /* Else */
  | $<411>
  /* Loop */
  | $<112>
  /* Repeat Above */
  | $<413>
  /* Break Loop */
  | $<113>
  /* Exit Event Processing */
  | $<115>
  /* Common Event */
  | $<117, [CommonEventID]>
  /* Label */
  | $<118, [string]>
  /* Jump to Label */
  | $<119, [string]>
  /* Control Switches */
  | $<121, [SwitchID, SwitchID, 0 | 1]>
  /* Control Variables */
  | $<
      122,
      [
        VariableID,
        VariableID,
        VariableOperationType,
        ...(
          | [0, number] /* Constant */
          | [1, VariableID] /* Variable */
          | [2, number, number] /* Random */
          /* Game Data */
          | [
              3,
              ...(
                | [0, ItemID] /* Item */
                | [1, WeaponID] /* Weapon */
                | [2, ArmorID] /* Armor */
                | [
                    3 /* Actor */,
                    ActorID,
                    /* Level, EXP, HP, MP, (param 0~7), TP */
                    0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
                  ]
                | [
                    4 /* Enemy */,
                    EnemyID,
                    /* HP, MP, (param 0~7), TP */
                    0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
                  ]
                | [
                    5 /* Character */,
                    CharacterID,
                    /* Map X, Map Y, Direction, Screen X, Screen Y */
                    0 | 1 | 2 | 3 | 4
                  ]
                | [6, number] /* Party */
                | [8, ActionDataType] /* Last */
                | [
                    7,
                    (
                      | 0 /* Map ID */
                      | 1 /* Party Members */
                      | 2 /* Gold */
                      | 3 /* Steps */
                      | 4 /* Play Time */
                      | 5 /* Timer */
                      | 6 /* Save Count */
                      | 7 /* Battle Count */
                      | 8 /* Win Count */
                      /* Escape Count */
                      | 9
                    )
                  ]
              )
            ]
          /* Script */
          | [4, string]
        )
      ]
    >
  /* Control Self Switch */
  | $<123, [SelfSwitchCharacter, 0 | 1]>
  /* Control Timer */
  | $<124, [0, number] /* Start, Second */ | [1] /* Stop */>
  /* Change Gold */
  | $<125, [ValueOperation, ...ValueOperand]>
  /* Change Items */
  | $<126, [ItemID, ValueOperation, ...ValueOperand]>
  /* Change Weapons */
  | $<127, [WeaponID, ValueOperation, ...ValueOperand, boolean]>
  /* Change Armors */
  | $<128, [ArmorID, ValueOperation, ...ValueOperand, boolean]>
  /* Change Party Member */
  | $<129, [ActorID, 0, boolean] /* Add, initialie */ | [ActorID, 1] /* Remove */>
  /* Change Battle BGM */
  | $<132, [DataAudio]>
  /* Change Victory ME */
  | $<133, [DataAudio]>
  /* Change Save Access */
  | $<134, [0 | 1]>
  /* Change Menu Access */
  | $<135, [0 | 1]>
  /* Change Encounter */
  | $<136, [0 | 1]>
  /* Change Formation Access */
  | $<137, [0 | 1]>
  /* Change Window Color */
  | $<138, [Color]>
  /* Change Default ME */
  | $<139, [DataAudio]>
  /* Change Vehicle BGM */
  | $<140, [VehicleType, DataAudio]>
  /* Transfer Player (Map, X, Y) */
  | $<
      201,
      [
        ...(
          | [0, MapID, number, number] /* Direct designation */
          /* Designation by variables */
          | [1, VariableID, VariableID, VariableID]
        ),
        Direction,
        number /* Fade type */
      ]
    >
  /* Set Vehicle Location */
  | $<
      202,
      [
        VehicleType,
        ...(
          | [0, MapID, number, number] /* Direct designation */
          /* Designation by variables */
          | [1, VariableID, VariableID, VariableID]
        )
      ]
    >
  /* Set Event Location */
  | $<
      203,
      | [CharacterID, 0, number, number, Direction] /* Direct designation */
      | [CharacterID, 1, VariableID, VariableID, Direction] /* Designation by variables */
      | [CharacterID, 2, CharacterID, undefined, Direction] /* Exchange with another event */
    >
  /* Scroll Map */
  | $<204, [Direction, number /* Distance */, number /* Speed */, boolean /* Wait */]>
  /* Set Movement Route */
  | $<205, [number /* Character ID */, MoveRoute]>
  /* Movement Route */
  | $<505, [RouteMovementCommand]>
  /* Get on/off Vehicle */
  | $<206>
  /* Change Transparency */
  | $<211, [0 | 1]>
  /* Show Animation */
  | $<212, [CharacterID, AnimationID, boolean /* Wait */]>
  /* Show Balloon Icon */
  | $<213, [CharacterID, BalloonIconID, boolean /* Wait */]>
  /* Erase Event */
  | $<214>
  /* Change Player Followers */
  | $<216, [0 | 1]>
  /* Gather Followers */
  | $<217>
  /* Fadeout Screen */
  | $<221>
  /* Fadein Screen */
  | $<222>
  /* Tint Screen */
  | $<223, [Color /* Tone */, number /* Duration */, boolean /* Wait */]>
  /* Flash Screen */
  | $<224, [Color /* Tone */, number /* Duration */, boolean /* Wait */]>
  /* Shake Screen */
  | $<225, [number /* Power */, number /* Speed */, number /* Duration */, boolean /* Wait */]>
  /* Wait */
  | $<230, [number]>
  /* Show Picture */
  | $<
      231,
      [
        PictureID,
        string /* Image Name */,
        number /* Origin */,
        0 | 1 /* Direct designation or Designation with variables */,
        number | VariableID /* X */,
        number | VariableID /* Y */,
        number /* Scale X */,
        number /* Scale Y */,
        number /* Opacity */,
        PIXI.BLEND_MODES /* Blend Mode */
      ]
    >
  /* Move Picture */
  | $<
      232,
      [
        PictureID,
        string /* Image Name */,
        number /* Origin */,
        0 | 1 /* Direct designation or Designation with variables */,
        number | VariableID /* X */,
        number | VariableID /* Y */,
        number /* Scale X */,
        number /* Scale Y */,
        number /* Opacity */,
        PIXI.BLEND_MODES /* Blend Mode */,
        number /* Duration */,
        boolean /* Wait */,
        PictureEasingType?
      ]
    >
  /* Rotate Picture */
  | $<233, [PictureID, number]>
  /* Tint Picture */
  | $<234, [PictureID, Color /* Tone */, number /* Duration */, boolean /* Wait */]>
  /* Erase Picture */
  | $<235, [PictureID]>
  /* Set Weather Effect */
  | $<236, [WeatherType, number /* Power */, number /* Duration */, boolean /* Wait */]>
  /* Play BGM */
  | $<241, [DataAudio]>
  /* Fadeout BGM */
  | $<242, [number]> /* Duration */
  /* Save BGM */
  | $<243>
  /* Resume BGM */
  | $<244>
  /* Play BGS */
  | $<245, [DataAudio]>
  /* Fadeout BGS */
  | $<246, [number]> /* Duration */
  /* Play ME */
  | $<249, [DataAudio]>
  /* Play SE */
  | $<250, [DataAudio]>
  /* Stop SE */
  | $<251>
  /* Play Movie */
  | $<261, [string]>
  /* Change Map Name Display */
  | $<281, [0 | 1]>
  /* Change Tileset */
  | $<282, [TilesetID]>
  /* Change Battle Background */
  | $<283, [string, string]>
  /* Change Parallax */
  | $<
      284,
      [
        string /* Name */,
        boolean /* Loop X */,
        boolean /* Loop Y */,
        number /* Scroll X Speed */,
        number /* Scroll Y Speed */
      ]
    >
  /* Get Location Info */
  | $<
      285,
      [
        VariableID,
        (
          | 0 /* Terrain Tag */
          | 1 /* Event ID */
          | (2 | 3 | 4 | 5) /* Tile ID (Layer 1 ~ 4) */
          /* Region ID */
          | -1
        ),
        ...(
          | [0, number, number] /* Direct designation */
          /* Designation by variables */
          | [1, VariableID, VariableID]
        )
      ]
    >
  /* Battle Processing */
  | $<
      301,
      [
        ...(
          | [0, TroopID] /* Direct designation */
          | [1, VariableID] /* Designation by variables */
          | [-1, undefined]
        ) /* Same as Random Encounters */,
        boolean /* Can escape */,
        boolean /* Can lose */
      ]
    >
  /* If Win */
  | $<601>
  /* If Escape */
  | $<602>
  /* If Lose */
  | $<603>
  /* Shop Processing */
  | $<302, [...ShopGoods, boolean /* Purchase only */]>
  | $<605, ShopGoods>
  /* Name Input Processing */
  | $<303, [ActorID, number /* Max length */]>
  /* Change HP */
  | $<311, [...ChangeActorValue, boolean /* Allow Death */]>
  /* Change MP */
  | $<312, ChangeActorValue>
  /* Change TP */
  | $<326, ChangeActorValue>
  /* Change State */
  | $<313, [...IterateActorArguments, 0 | 1 /* Add | Remove */, StateID]>
  /* Recover All */
  | $<314, IterateActorArguments>
  /* Change EXP */
  | $<315, [...ChangeActorValue, boolean /* Show */]>
  /* Change Level */
  | $<316, [...ChangeActorValue, boolean /* Show */]>
  /* Change Parameter */
  | $<317, [...IterateActorArguments, ParamID, ValueOperation, ...ValueOperand]>
  /* Change Skill */
  | $<318, [...IterateActorArguments, 0 | 1 /* Learn | Forget */, SkillID]>
  /* Change Equipment */
  | $<319, [ActorID, EquipmentType, ItemID]>
  /* Change Name */
  | $<320, [ActorID, string]>
  /* Change Class */
  | $<321, [ActorID, ClassID, boolean /* Keep EXP */]>
  /* Change Actor Images */
  | $<
      322,
      [
        ActorID,
        ...[string, number] /* Character Image (Name, Index) */,
        ...[string, number] /* Face Image (Name, Index) */,
        string /* Battler Image */
      ]
    >
  /* Change Vehicle Image */
  | $<323, [VehicleType, string, number]>
  /* Change Nickname */
  | $<324, [ActorID, string]>
  /* Change Profile */
  | $<325, [ActorID, string]>
  /* Change Enemy HP */
  | $<331, [...ChangeEnemyValue, boolean /* Allow Death */]>
  /* Change Enemy MP */
  | $<332, ChangeEnemyValue>
  /* Change Enemy TP */
  | $<342, ChangeEnemyValue>
  /* Change Enemy State */
  | $<333, [EnemyID, 0 | 1 /* Add | Remove */, StateID]>
  /* Enemy Recover All */
  | $<334, [EnemyID]>
  /* Enemy Appear */
  | $<335, [EnemyID]>
  /* Enemy Transform */
  | $<336, [EnemyID, EnemyID]>
  /* Show Battle Animation */
  | $<337, [EnemyID, AnimationID, boolean]>
  /* Force Action */
  | $<339, [...([0, EnemyID] | [1, ActorID]), SkillID, ActorID | EnemyID]>
  /* Abort Battle */
  | $<340>
  /* Open Menu Screen */
  | $<351>
  /* Open Save Screen */
  | $<352>
  /* Game Over */
  | $<353>
  /* Return to Title Screen */
  | $<354>
  /* Script */
  | $<355, [string]>
  | $<655, [string]>
  /* Plugin Command MV (deprecated) */
  | $<356, [string]>
  /* Plugin Command */
  | $<357, [string /* Plugin File name */, string /* Command Name */, undefined, unknown[] /* Arguments */]>
)
export declare type CommandCode = DataCommand["code"]
export declare type RouteCommandCode = RouteMovementCommand["code"]
export declare type ExtractDataCommand<TCode extends CommandCode> = Extract<
  DataCommand,
  {
    code: TCode
  }
>
export declare type CommandParams<TCode extends CommandCode> = ExtractDataCommand<TCode>["parameters"]
export interface MoveRoute {
  list: RouteMovementCommand[]
  repeat: boolean
  skippable: boolean
  wait: boolean
}
export declare type VariableOperationType =
  | 0 /* Set */
  | 1 /* Add */
  | 2 /* Sub */
  | 3 /* Mul */
  | 4 /* Div */
  | 5 /* Mod */
export declare type ValueOperation = 0 /* Value */ | 1 /* Negative Value */
export declare type ValueOperand = [0, number] /* Constant */ | [1, VariableID] /* Variable */
export declare type IterateActorArguments = [0, ActorID] | [1, VariableID]
export declare type ChangeActorValue = [...IterateActorArguments, ValueOperation, ...ValueOperand]
export declare type ChangeEnemyValue = [EnemyID, ValueOperation, ...ValueOperand]
export declare type WaitMode =
  | ""
  | "message"
  | "transfer"
  | "scroll"
  | "route"
  | "animation"
  | "balloon"
  | "gather"
  | "video"
  | "action"
  | "image"
  | "effect"
  | "movement"
export declare type ShopGoods = [
  ...([0, ItemID] | [1, WeaponID] | [2, ArmorID]),
  ...([0, undefined] | [1, number])
]
export {}
