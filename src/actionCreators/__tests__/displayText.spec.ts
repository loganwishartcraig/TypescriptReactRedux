import { DisplayTextActionTypes, DisplayTextActions, setText, clearText } from '../displayText';

// import * as DisplayText from '../displayText';

describe('ActionCreator - displayText', () => {

    it('should produce the right constants', () => {
        expect(DisplayTextActionTypes.SET_TEXT).toBe('DISPLAY_TEXT::SET_TEXT');
        expect(DisplayTextActionTypes.CLEAR_TEXT).toBe('DISPLAY_TEXT::CLEAR_TEXT');
    });

    it('should produce the right SET_TEXT action', () => {

        const result: DisplayTextActions.SetText = {
            type: DisplayTextActionTypes.SET_TEXT,
            payload: { text: 'test' }
        };

        expect(setText('test')).toEqual(result);
    });

    it('should produce the right CLEAR_TEXT action', () => {

        const result: DisplayTextActions.ClearText = {
            type: DisplayTextActionTypes.CLEAR_TEXT
        };

        expect(clearText()).toEqual(result);

    });

});
