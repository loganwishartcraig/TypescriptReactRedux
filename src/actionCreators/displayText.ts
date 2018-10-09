import { Action, ActionCreator } from 'redux';

export const enum DisplayTextActionTypes {
    SET_TEXT = 'DISPLAY_TEXT::SET_TEXT',
    CLEAR_TEXT = 'DISPLAY_TEXT::CLEAR_TEXT'
}

export namespace DisplayTextActions {
    export type SetText = Action<DisplayTextActionTypes.SET_TEXT> & { text: string };
    export type ClearText = Action<DisplayTextActionTypes.CLEAR_TEXT>;
    export type _any = SetText | ClearText;
}

export const setText: ActionCreator<DisplayTextActions.SetText> = (text: string) => ({
    type: DisplayTextActionTypes.SET_TEXT,
    text
});

export const clearText: ActionCreator<DisplayTextActions.ClearText> = () => ({
    type: DisplayTextActionTypes.CLEAR_TEXT
});
