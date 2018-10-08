import * as React from 'react';

export interface CountProps {
    count: number;
}

const Count: React.StatelessComponent<CountProps> = ({count}) => (
    <span>{count}</span>
);

export default Count;
