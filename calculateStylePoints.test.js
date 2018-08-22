const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {

    it('should be 57.5', () => {
      const actual = calculateStylePoints([19, 20, 19.5, 19, 18.5]);

      const expected = 57.5;

      assert.equal(actual, expected);
    });

    it('should be 74.4', () => {
      const actual = calculateStylePoints([18, 18, 18.5, 18.5, 18.5]);

      const expected = 55;

      assert.equal(actual, expected);
    });



    it('should be wrong notes, not enough notes', () => {
      const actual = calculateStylePoints([18, 19]);

      const expected = 'Wrong notes';

      assert.equal(actual, expected);
    });

    it('should be wrong notes, too many notes', () => {
      const actual = calculateStylePoints([18, 19, 18, 18, 19.51, 18.5]);

      const expected = 'Wrong notes';

      assert.equal(actual, expected);
    });

})
