import { Rectangle } from "../core";
import { Window_Message, Window_ScrollText, Window_Gold, Window_NameBox, Window_ChoiceList, Window_NumberInput, Window_EventItem } from "../windows";
import { Scene_Base } from "./Scene_Base";
export declare class Scene_Message extends Scene_Base {
    _messageWindow: Window_Message;
    _scrollTextWindow: Window_ScrollText;
    _goldWindow: Window_Gold;
    _nameBoxWindow: Window_NameBox;
    _choiceListWindow: Window_ChoiceList;
    _numberInputWindow: Window_NumberInput;
    _eventItemWindow: Window_EventItem;
    isMessageWindowClosing(): boolean;
    createAllWindows(): void;
    createMessageWindow(): void;
    messageWindowRect(): Rectangle;
    createScrollTextWindow(): void;
    scrollTextWindowRect(): Rectangle;
    createGoldWindow(): void;
    goldWindowRect(): Rectangle;
    createNameBoxWindow(): void;
    createChoiceListWindow(): void;
    createNumberInputWindow(): void;
    createEventItemWindow(): void;
    eventItemWindowRect(): Rectangle;
    associateWindows(): void;
}
