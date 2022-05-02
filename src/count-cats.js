const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  let count = 0;
  matrix.map ((el) => {
    el.map((i) => {
      if (i == '^^') { 
        return count +=1;
      } else { 
        return count +=0;
      }
    })
  })
  return count;
}

module.exports = {
  countCats
};
