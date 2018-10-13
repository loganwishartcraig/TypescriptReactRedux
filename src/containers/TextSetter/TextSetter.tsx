import * as React from 'react';
import { MapStateToProps, MapDispatchToProps, connect } from 'react-redux';
import { AppState } from '../../reducers/reducer';
import { Dispatch } from 'redux';
import { setText, clearText, concatText } from '../../actionCreators/displayText';

export interface TextSetterOwnProps {

}

export interface TextSetterStateProps {
    displayText: string;
}

export interface TextSetterDispatchProps {
    onClearClick: () => void;
    onSetClick: (text: string) => void;
    onConcatClick: (text: string) => void;
}

export type TextSetterProps = TextSetterOwnProps & TextSetterStateProps & TextSetterDispatchProps;

const mapStateToProps: MapStateToProps<TextSetterStateProps, TextSetterOwnProps, AppState> = ({ displayText }) => ({
    displayText
});

const mapDispatchToProps: MapDispatchToProps<TextSetterDispatchProps, TextSetterOwnProps> = dispatch => ({
    onClearClick: () => dispatch(clearText()),
    onSetClick: (text: string) => dispatch(setText(text)),
    onConcatClick: (text: string) => dispatch(concatText(text))
});

class TTextSetter extends React.Component<TextSetterProps> {

    private readonly inputRef: React.RefObject<HTMLInputElement>;

    constructor(props: TextSetterProps) {
        super(props);
        this.inputRef = React.createRef();
    }

    private onSetClick() {

        if (this.inputRef && this.inputRef.current) {
            this.props.onSetClick(this.inputRef.current.value);
            this.inputRef.current.value = '';
        }

    }

    private onConcatClick() {

        if (this.inputRef && this.inputRef.current) {
            this.props.onConcatClick(this.inputRef.current.value);
            this.inputRef.current.value = '';
        }

    }

    public render() {

        const { displayText } = this.props;

        return (
            <p>
                <span>Text says: {displayText ? displayText : 'nothing'}</span>
                <br />
                <input ref={this.inputRef} type="text" placeholder="Text Here"></input>
                <button onClick={() => this.onSetClick()}>Set</button>
                <button onClick={() => this.onConcatClick()}>Concat</button>
                <button onClick={this.props.onClearClick}>Clear</button>
            </p>
        );
    }
}

const TextSetter = connect(
    mapStateToProps,
    mapDispatchToProps
)(TTextSetter);

export default TextSetter;
