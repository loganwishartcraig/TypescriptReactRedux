import * as Counter from '../counter';

describe('ActionCreator - Counter', () => {

    it('Should export the right constants', () => {
        expect(Counter.CounterActionTypes.INCREMENT).toEqual('COUNTER::INCREMENT');
        expect(Counter.CounterActionTypes.DECREMENT).toEqual('COUNTER::DECREMENT');
        expect(Counter.CounterActionTypes.INCREMENT_ASYNC).toEqual('COUNTER::INCREMENT_ASYNC');
    });

    it('Should produce the correct INCREMENT action', () => {

        const action: Counter.CounterActions.Increment = {
            type: Counter.CounterActionTypes.INCREMENT
        };

        const result = Counter.incrCounter();

        expect(result).toEqual(action);

    });

    it('Should produce the correct DECREMENT action', () => {

        const action: Counter.CounterActions.Decrement = {
            type: Counter.CounterActionTypes.DECREMENT
        };

        const result = Counter.decrCounter();

        expect(result).toEqual(action);

    });

    it('Should produce the correct INCREMENT_ASYNC action', () => {

        const action: Counter.CounterActions.IncrementAsync = {
            type: Counter.CounterActionTypes.INCREMENT_ASYNC
        };

        const result = Counter.incrCounterAsync();

        expect(result).toEqual(action);

    });

});
