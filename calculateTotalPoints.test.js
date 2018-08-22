const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
  describe('normal', () => {
    it('should return 131.8', () => {
      const actual = calculateTotalPoints(111, "normal", 98, [19, 19.5, 19, 19, 19], -14.4, 3.2);

      const expected = 131.8;

      assert.equal(actual, expected);
    });

    it('should return 60.8', () => {
      const actual = calculateTotalPoints(80, "normal", 98, [15, 15.5, 16, 15.5, 16], -10.2, 0);

      const expected = 60.8;

      assert.equal(actual, expected);
    });
  })

  describe('big', () => {
    it('should return 137.3', () => {
      const actual = calculateTotalPoints(134, "big", 120, [19, 20, 19.5, 19, 18.5], -5.4, 0);

      const expected = 137.3;

      assert.equal(actual, expected);
    });

    it('should return 104.2', () => {
      const actual = calculateTotalPoints(117.5, "big", 120, [17, 17.5, 17, 17.5, 17.5], -3.3, 0);

      const expected = 104.2;

      assert.equal(actual, expected);
    });
  })

  describe('mamooth', () => {
    it('should return 208.3', () => {
      const actual = calculateTotalPoints(227.5, "mamooth", 200, [18, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7);

      const expected = 208.3;

      assert.equal(actual, expected);
    });

    it('should return 126.9', () => {
      const actual = calculateTotalPoints(170, "mamooth", 200, [16, 15.5, 14.5, 16, 16], -4.6, 0);

      const expected = 126.9;

      assert.equal(actual, expected);
    });
  })
})
