const matrix_js = require('matrix-js'),
  CellTypeEnum = require('./cell-type'),
  {Untouched, Touched, Wall, Start, Finish} = CellTypeEnum.full;





// Builds a grid
// @param config a valid gridrunner config object
// @return { Grid }
function grid(config) {

  // Unwind config object
  const { width, height, seedValue } = config;

  // [UNTESTED]
  // throw if
  // - no width or height
  if (!width) throw new Error('Grid must have a width.');
  if (!height) throw new Error('Grid must have a height.');

  // generate two-dimensional matrix
  let _matrix = seedMatrix(width, height, seedValue);


  return Object.assign(function() {
    return _matrix;
  }, {
    getCell: (pos) => getMatrixPosition(_matrix, pos),
    setCell: (pos) => ({
      to: (cellType) => _grid(setMatrixPosition(_matrix, pos, cellType))
    }),
    width: () => getMatrixSize(_matrix).width,
    height: () => getMatrixSize(_matrix).height
  });
}






// Returns the width of a given grid
// @returns { width, height }
function getMatrixSize(matrix) {
  let size = matrix_js(matrix).size();
  return {
    width: size[1],
    height: size[0]
  };
}





// Gets the position in the matrix
// @returns { CellType }
function getMatrixPosition(matrix, pos) {
  return matrix_js(matrix)(pos[1], pos[0]);
}





// Sets the position in the matrix as value
// @returns { CellType[][] }
function setMatrixPosition(matrix, pos, value) {
  return matrix_js(matrix).set(pos[1], pos[0]).to(value);
}





// Returns a two-dimensional array with (height) number of rows (width) in length,
// each index populated with (value)
function seedMatrix(width, height, value) {
  let ret_matrix = new Array(height),
    i = j = 0;

  // seed properly sized grid with untouched squares
  for(i = 0; i < ret_matrix.length; i++) {
    ret_matrix[i] = [];
    while (j < width) {
      ret_matrix[i].push(value);
      j++;
    }
    j = 0;
  }
  return ret_matrix;
}



module.exports = grid;
