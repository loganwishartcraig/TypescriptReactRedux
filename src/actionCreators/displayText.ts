import { Action } from 'redux';
import { TypedActionCreator } from './types';

export const enum DisplayTextActionTypes {
    SET_TEXT = 'DISPLAY_TEXT::SET_TEXT',
    CLEAR_TEXT = 'DISPLAY_TEXT::CLEAR_TEXT'
}

export namespace DisplayTextActions {
    export type SetText = Action<DisplayTextActionTypes.SET_TEXT> & { text: string };
    export type ClearText = Action<DisplayTextActionTypes.CLEAR_TEXT>;
    export type _any = SetText | ClearText;
}

export const setText: TypedActionCreator<DisplayTextActions.SetText, [string]> = (text: string) => ({
    type: DisplayTextActionTypes.SET_TEXT,
    text
});

export const clearText: TypedActionCreator<DisplayTextActions.ClearText> = () => ({
    type: DisplayTextActionTypes.CLEAR_TEXT
});
