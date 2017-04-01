const arrayChunker = require('array-chunker');

module.exports = sort;

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
