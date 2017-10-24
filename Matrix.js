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

  // @return { number }
  get width() {
    return this._matrix[0].length;
  }

  // @return { number }
  get height() {
    return this._matrix.length;
  }

  // @param { number } x
  // @param { number } y
  // @return { T }
  get(x, y) {
    return this._matrix[y][x];
  }

  // @param { number } x
  // @param { number } y
  // @param { T } val
  set(x, y, val) {
    this._matrix[y][x] = val;
  }

  // @return { string }
  toString() {
    const rowSeparator = '\n';
    const itemSeparator = ' ';
    return this._matrix
      .map((row) => row.join(itemSeparator))
      .join(rowSeparator);
  }

}

module.exports = { Matrix };
