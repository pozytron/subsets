'use strict';

const getSubsetsBy3 = require('../getSubsetsBy3');

describe('when data for one set is passed', () => {
    it('should return single set', () => {
        const testValues = [1, 2, 3];
        const expected = [{"id": 0, "subset": [1, 2, 3], localSum: 6}];
        expect(getSubsetsBy3(testValues)).toEqual(expected);
    });

});

describe('when data for multiple sets are passed', () => {
    it('should return two sets', () => {
        const testValues = [1, 2, 3, 4];
        const expected = [
            {"id": 0, "subset": [1, 2, 3], "localSum": 6},
            {"id": 1, "subset": [2, 3, 4], "localSum": 9}
        ];
        expect(getSubsetsBy3(testValues)).toEqual(expected);
    });

    it('should return three sets', () => {
        const testValues = [1, 2, 5, 87, 1];
        const expected = [
            {"id": 0, "subset": [1, 2, 5], "localSum": 8},
            {"id": 1, "subset": [2, 5, 87], "localSum": 94},
            {"id": 2, "subset": [5, 87, 1], "localSum": 93}
        ];
        expect(getSubsetsBy3(testValues)).toEqual(expected);
    });
});