'use strict';

const maxOfSubsets = require('../maxOfSubsets');

describe('when subset cannot be calculated', () => {
    it('should return null for empty array', () => {
        const testValues = [];
        expect(maxOfSubsets(testValues)).toBeNull();
    });

    it('should return null for array with one value', () => {
        const testTwoValues = [1];
        expect(maxOfSubsets(testTwoValues)).toBeNull();
    });

    it('should return null for array with two values', () => {
        const testTwoValues = [1, 2];
        expect(maxOfSubsets(testTwoValues)).toBeNull();
    });
});

describe('when supplied data are correct', () => {
    it('should return set with sum 8 and id 0 ', () => {
        const testValues = [1, 2, 5];
        const expected = [8, 0];
        expect(maxOfSubsets(testValues)).toEqual(expected);
    });

    it('should return set with sum 94 and id 1 ', () => {
        const testValues = [2, 5, 87];
        const expected = [94, 0];
        expect(maxOfSubsets(testValues)).toEqual(expected);
    });
    it('should return set with sum 94 and id 1 ', () => {
        const testValues = [1, 2, 5, 87];
        const expected = [94, 1];
        expect(maxOfSubsets(testValues)).toEqual(expected);
    });

    it('should return set with sum 94 and id 1 ', () => {
        const testValues = [1, 2, 5, 87, 1];
        const expected = [94,1];
        expect(maxOfSubsets(testValues)).toEqual(expected);
    });
    it('should return set with sum 6 and id 0 ', () => {
        const testValues = [1, 2, 3, 1, 99, 3];
        const expected = [103,2];
        expect(maxOfSubsets(testValues)).toEqual(expected);
    });
});
