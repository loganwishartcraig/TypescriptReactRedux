import { TypedAction, TypedActionCreator } from './types';

export const enum DisplayTextActionTypes {
    SET_TEXT = 'DISPLAY_TEXT::SET_TEXT',
    CLEAR_TEXT = 'DISPLAY_TEXT::CLEAR_TEXT',
    CONCAT_TEXT = 'DISPLAY_TEXT::CONCAT_TEXT'
}

export namespace DisplayTextActions {
    export type SetText = TypedAction<DisplayTextActionTypes.SET_TEXT, { text: string }>;
    export type ClearText = TypedAction<DisplayTextActionTypes.CLEAR_TEXT>;
    export type ConcatText = TypedAction<DisplayTextActionTypes.CONCAT_TEXT, { text: string }>;
    export type _any = SetText | ClearText | ConcatText;
}

export const setText: TypedActionCreator<DisplayTextActions.SetText, [string]> = text => ({
    type: DisplayTextActionTypes.SET_TEXT,
    payload: { text }
});

export const clearText: TypedActionCreator<DisplayTextActions.ClearText> = () => ({
    type: DisplayTextActionTypes.CLEAR_TEXT
});

export const concatText: TypedActionCreator<DisplayTextActions.ConcatText, [string]> = text => ({
    type: DisplayTextActionTypes.CONCAT_TEXT,
    payload: { text }
});
