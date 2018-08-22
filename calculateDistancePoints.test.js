const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
  describe('normal', () => {
    it('should return higher score than 60', () => {
      const actual = calculateDistancePoints(111, "normal", 98);

      const expected = 86;

      assert.equal(actual, expected);
    });

    it('should return lower score than 60', () => {
      const actual = calculateDistancePoints(85.5, "normal", 98);

      const expected = 35;

      assert.equal(actual, expected);
    });
  })

  describe('big', () => {
    it('should return higher score than 60', () => {
      const actual = calculateDistancePoints(133.5, "big", 120);

      const expected = 84.3;

      assert.equal(actual, expected);
    });

    it('should return lower score than 60', () => {
      const actual = calculateDistancePoints(111, "big", 120);

      const expected = 43.8;

      assert.equal(actual, expected);
    });
  })

  describe('mamooth', () => {
    it('should return higher score than 120', () => {
      const actual = calculateDistancePoints(227.5, "mamooth", 200);

      const expected = 153;

      assert.equal(actual, expected);
    });

    it('should return lower score than 120', () => {
      const actual = calculateDistancePoints(170, "mamooth", 200);

      const expected = 84;

      assert.equal(actual, expected);
    });
  })
})
