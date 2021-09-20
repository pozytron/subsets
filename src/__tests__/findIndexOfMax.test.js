'use strict';
const findIndexOfMax = require("../findIndexOfMax");

describe('when multiple sets are provided ', () => {

    it('should return id of max ', () => {
        const data = [
            {id: 0, subset: [1, 2, 5], localSum: 8},
            {id: 1, subset: [2, 5, 87], localSum: 94},
            {id: 2, subset: [5, 87, 1], localSum: 93}
        ];

        const expected = 1;
        expect(findIndexOfMax(data)).toEqual(expected);
    });
    it('should return id of max ', () => {
        const data = [
            {id: 0, subset: [1, 2, 5], localSum: 8},
            {id: 1, subset: [2, 5, 87], localSum: 94},
            {id: 2, subset: [5, 87, 1], localSum: 93},
            {id: 3, subset: [87, 1, 100], localSum: 188},
        ];

        const expected = 3;
        expect(findIndexOfMax(data)).toEqual(expected);
    });

});
