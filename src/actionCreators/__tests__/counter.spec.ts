import * as Counter from '../counter';

describe('ActionCreator - Counter', () => {

    it('Should produce the correct INCREMENT action', () => {

        const action: Counter.IncrCounterAction = {
            type: 'COUNTER::INCREMENT'
        };

        const result = Counter.incrCounter();

        expect(result).toEqual(action);

    });

    it('Should produce the correct DECREMENT action', () => {

        const action: Counter.DecrCounterAction = {
            type: 'COUNTER::DECREMENT'
        };

        const result = Counter.decrCounter();

        expect(result).toEqual(action);

    });

});
