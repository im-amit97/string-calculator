import { add } from "./addString";

describe('Add String Numbers', () => {

    it('should return 0 for empty string', () => {
        expect(add('')).toBe(0);
    });

    it('should return sum of string numbers', () => {
        expect(add('10, 20, 30')).toBe(60);
    });

    it('should not return wrong sum of string numbers', () => {
        expect(add('10, 20, 30')).not.toBe(40);
    });
});