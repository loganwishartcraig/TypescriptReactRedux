import * as React from 'react';

export interface ControlsProps {
    onIncrClick: () => void;
    onDecrClick: () => void;
}

const Controls: React.SFC<ControlsProps> = ({onIncrClick, onDecrClick}) => (
    <span>
        <button onClick={onIncrClick}>+</button>
        <button onClick={onDecrClick}>-</button>
    </span>
);

export default Controls;
