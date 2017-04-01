const arrayChunker = require('array-chunker');

module.exports = sort;

/**
 * Sorts data for displaying vertical columns when the
 * browser floats them horizontally.
 *
 * @param {Array} data The data to be sorted as columns.
 * @param {Integer} [n = 2] The number of columns.
 * @return {Array}
 */

function sort(data, n) {

  // Default to 2 columns.
  n = (!n || n < 2) ? 2 : n;
  var chunked = arrayChunker(data, n),
    newD = [];

  for (var i = 0; i < Math.ceil((1 / n) * data.length); i += 1) {
    for (var j = 0; j < n; j += 1) {
      if (chunked[j][i] !== undefined) newD.push(chunked[j][i]);
    }
  }
  return newD;
}
