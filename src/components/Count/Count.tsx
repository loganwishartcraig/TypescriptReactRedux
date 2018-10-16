import * as React from 'react';

export interface CountProps {
    readonly value: number;
    readonly autoIncrementing: boolean;
    readonly autoDecrementing: boolean;
}

const Count: React.StatelessComponent<CountProps> = ({ value, autoIncrementing, autoDecrementing }) => (
    <span>

        {value}

        <br />
        Auto incrementing: {autoIncrementing ? 'True' : 'False'}
        <br />
        Auto decrementing: {autoDecrementing ? 'True' : 'False'}

    </span>

);

export default Count;
