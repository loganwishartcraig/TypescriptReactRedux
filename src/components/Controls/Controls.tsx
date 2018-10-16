import * as React from 'react';

export type ControlsProps = DispatchProps & StateProps;

export interface DispatchProps {
    onIncrClick: () => void;
    onDecrClick: () => void;
    onAsyncIncrClick: () => void;
    onStopAutoIncrClick: () => void;
    onStartAutoIncrClick: () => void;
}

export interface StateProps {
    isAutoIncrementing: boolean;

}

const Controls: React.SFC<ControlsProps> = ({ onIncrClick, onDecrClick, onAsyncIncrClick, onStopAutoIncrClick, onStartAutoIncrClick, isAutoIncrementing }) => (
    <span>
        <button onClick={onIncrClick}>+</button>
        <button onClick={onDecrClick}>-</button>
        <button onClick={onAsyncIncrClick}>async +</button>

        {
            isAutoIncrementing ?
                <button onClick={onStopAutoIncrClick}>stop +</button>
                :
                <button onClick={onStartAutoIncrClick}>start +</button>
        }

    </span>
);

export default Controls;
