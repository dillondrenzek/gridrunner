// Matrix<T>
class Matrix {

  // @param { T[][] } matrix
  constructor(matrix) {
    // sanity check
    if (!matrix) throw new Error('Cannot construct Grid with falsy constructor property.');
    if (!Array.isArray(matrix) || !matrix.length || !Array.isArray(matrix[0])) throw new Error('Cannot construct Grid without an array of arrays.');

    let width = matrix[0].length;
    for (let i = 0; i < matrix.length; i++) {
      if (!Array.isArray(matrix[i])) throw new Error('Cannot construct Grid without two-dimensional array');
      if (matrix[i].length !== width) throw new Error('Grid must be constructed with equal-length rows');
    }

    // initialize variables
    this._matrix = matrix;
  }


}

module.exports = { Matrix };
