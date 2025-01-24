import { add } from "./addString";

describe('Add String Numbers', () => {

    it('should return 0 for empty string', () => {
        expect(add('')).toBe(0);
    });
});