import * as React from 'react';

export interface ControlsProps {
    onIncrClick: () => void;
    onDecrClick: () => void;
    onAsyncIncrClick: () => void;
}

const Controls: React.SFC<ControlsProps> = ({onIncrClick, onDecrClick, onAsyncIncrClick}) => (
    <span>
        <button onClick={onIncrClick}>+</button>
        <button onClick={onDecrClick}>-</button>
        <button onClick={onAsyncIncrClick}>async +</button>
    </span>
);

export default Controls;
