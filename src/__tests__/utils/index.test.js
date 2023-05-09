import { multiply } from '../../utils/index.js';

describe(('test-multiply'), ()=> {

    it('adds 1 * 0 to equal 1', () => {
        const result = multiply(1, 0)
        expect(result).toBe(0);
    }),

    xit('adds 1 * 1 to equal 1', () => {
        const result = multiply(1, 1)
        expect(result).toBe(1);
    })

});