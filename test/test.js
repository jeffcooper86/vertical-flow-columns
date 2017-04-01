const assert = require('chai').assert;
const vfc = require('../index.js');

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

describe('sort()', function() {
  it('should rearrange an array for 2 columns', function() {
    var sorted = vfc(data);
    assert.deepEqual(sorted, [0, 5, 1, 6, 2, 7, 3, 8, 4, 9]);
  });

  it('should rearrange an array for 3 columns', function() {
    var sorted = vfc(data, 3);
    assert.deepEqual(sorted, [0, 4, 7, 1, 5, 8, 2, 6, 9, 3]);
  });

  it('should rearrange an array for 4 columns', function() {
    var sorted = vfc(data, 4);
    assert.deepEqual(sorted, [0, 3, 6, 8, 1, 4, 7, 9, 2, 5]);
  });

  it('should return the same array when n is > arr.length', function() {
    var sorted = vfc(data, 11);
    assert.deepEqual(sorted, data);
  });

  it('should return an empty array when passed an empty array', function() {
    var sorted = vfc([]);
    assert.deepEqual(sorted, []);
  });

  it('should return the same array when passed a single array', function() {
    var sorted = vfc([1]);
    assert.deepEqual(sorted, [1]);
  });
});
