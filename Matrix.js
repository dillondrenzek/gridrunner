// Matrix<T>
class Matrix {

  // @param { T[][] } matrix
  constructor(matrix) {
    // sanity check
    if (!matrix) throw new Error('Cannot construct Matrix with falsy constructor property.');
    if (!Array.isArray(matrix) || !matrix.length || !Array.isArray(matrix[0])) throw new Error('Cannot construct Matrix without an array of arrays.');

    let width = matrix[0].length;
    for (let i = 0; i < matrix.length; i++) {
      if (!Array.isArray(matrix[i])) throw new Error('Cannot construct Matrix without two-dimensional array');
      if (matrix[i].length !== width) throw new Error('Matrix must be constructed with equal-length rows');
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

  // STATIC METHODS

  // [UNTESTED]
  // @param { number } width
  // @param { number } height
  // @param { T } val
  // @return { Matrix<T> }
  static generate(width, height, val) {
    let matrix = seedMatrix({width, height}, val);
    return new Matrix(matrix);
  }

  // [UNTESTED]
  // @param { Matrix<T> } a
  // @param { Matrix<T> } b
  // @param { (T, T) => T }
  static reduce(a, b, fn) {
    let n = Matrix.generate(a.width, a.height, null);
    a.forEach((a_el, x, y) => {
      let b_el = b.get(x, y);
      n.set(x, y, fn(a_el, b_el));
    });
    return n;
  }

  // [UNTESTED]
  // @param { Matrix<T> } a
  // @param { Matrix<T> } b
  // @return { boolean }
  static equal(a, b) {
    for(let i = 0; i < a.height; i++) {
      for(let j = 0; j < a.width; j++) {
        let a_el = a.get(j, i);
        let b_el = b.get(j, i);
        if (a_el !== b_el) return false;
      }
    }
    return true;
  }

}

module.exports = { Matrix };
