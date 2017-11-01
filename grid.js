const matrix_js = require('matrix-js'),
  CellTypeEnum = require('./cell-type'),
  {Untouched, Touched, Wall, Start, Finish} = CellTypeEnum.full;





// Builds a grid
// @param config a valid gridrunner config object
// @return { Grid }
function grid(config) {

  let _matrix = seedMatrix(config.width, config.height, Untouched);
  const { start, finish, walls } = config;

  // set wall positions
  walls.forEach((pos) => {
    _matrix = setMatrixPosition(_matrix, pos, Wall);
  });

  // set start position
  _matrix = setMatrixPosition(_matrix, start, Start);

  // set finish position
  _matrix = setMatrixPosition(_matrix, finish, Finish);

  return Object.assign(function() {
    return _matrix;
  }, _grid(_matrix));
}

function _grid(mat) {
  return {
    getCell: function(pos) { return matrix_js(mat)(pos[1], pos[0]); },
    setCell: function(pos) {
      return {
        to: function(cellType) {
          let _newMat = setMatrixPosition(mat, pos, cellType);
          return _grid(_newMat);
        }
      }
    },
    width: () => getMatrixWidth(mat),
    height: () => getMatrixHeight(mat)
  };
}






// Returns the width of a given grid
// @returns { number }
function getMatrixWidth(matrix) {
  return matrix_js(matrix).size()[1];
}




// Returns the height of a given grid
// @returns { number }
function getMatrixHeight(matrix) {
  return matrix_js(matrix).size()[0];
}




// Gets the position in the matrix
function getMatrixPosition(matrix, pos) {
  return matrix_js(matrix)(pos[1], pos[0]);
}




// Sets the position in the matrix as value
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
