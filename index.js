// Default Gridrunner constructor object
const default_config = {
  start: null,
  finish: null,
  walls: [],
  width: 1,
  height: 1
};

// @throws if config object cannot be used to build a valid grid
function throwInvalidConfig(config) {
  const msg = (str) => 'Invalid Config: ' + str;
  if (!config) throw new Error(msg('Must be truthy Value'));
  if (typeof config !== 'object') throw new Error(msg('Must be object'));
  if (!Object.keys(config).length) throw new Error(msg('Must have correct keys'));
}


// The Gridrunner game factory method
// @param config a config object used to configure the grid in a specific way
// @returns Gridrunner object with all the data and functions needed to play the game
function gridrunner(config) {
  throwInvalidConfig(config);

  const grid = buildGrid(config);

  return {
    grid,
    player: config['start'],
    width: () => getGridWidth(grid),
    height: () => getGridHeight(grid)
  };
};


// Returns the width of a given grid
// @returns { number }
function getGridWidth(grid) {
  let i = 0, ret_width = 0, row = null;
  if (Array.isArray(grid)) {
    for (i = 0; i < grid.length; i++) {
      row = grid[i];
      // row must be array
      if (Array.isArray(row)) {
        if (ret_width && row.length !== ret_width) {
          // error: different length rows
        } else {
          ret_width = row.length;
        }
      } else {
        // error: row is not array
      }
    }
  } else {
    // error: grid is not array
  }
  return ret_width;
}

// Returns the height of a given grid
// @returns { number }
function getGridHeight(grid) {
  return grid.length;
}

// Sets the position in the grid as Start
function setGridStartPosition(grid, pos) {
  grid[pos[1]][pos[0]] = Start;
}

// Sets the position in the grid as Finish
function setGridFinishPosition(grid, pos) {
  grid[pos[1]][pos[0]] = Finish;
}

// Sets each of the positions in the grid as Wall
function setGridWallPositions(grid, walls) {
  walls.forEach(function(wall_pos) {
    grid[wall_pos[1]][wall_pos[0]] = Wall;
  });
}




// Builds a grid
// @param config a valid gridrunner config object
// @return { string[][] }
function buildGrid(config) {
  let ret_grid = new Array(config.height),
    i = j = 0;

  const buildRow = function(width, value) {
    let ret_row = [], i = 0;
    while (i < width) {
      ret_row.push(value);
      i++;
    }
    return ret_row;
  };


  // seed properly sized grid with untouched squares
  for(i = 0; i < ret_grid.length; i++) {
    ret_grid[i] = buildRow(config.width, Untouched);
  }


  // set wall positions
  setGridWallPositions(ret_grid, config.walls);

  // set start position
  setGridStartPosition(ret_grid, config.start);

  // set finish position
  setGridFinishPosition(ret_grid, config.finish);

  return ret_grid;
}





const Finish = 'F',
      Start = 'S',
      Touched = 'T',
      Untouched = 'U',
      Wall = 'W';

const CELL_TYPE_NAMES = [
  'Finish',
  'Start',
  'Touched',
  'Untouched',
  'Wall'
];

const CellTypeEnum = {
  full: {
    Finish,
    Start,
    Touched,
    Untouched,
    Wall
  },
  shortened: {
    F: Finish,
    S: Start,
    T: Touched,
    U: Untouched,
    W: Wall
  },
  types: CELL_TYPE_NAMES,

  // !untested
  // @returns boolean - true if the value can be recognized as a valid CellType
  isCellType: (val) => {
    if (typeof val === 'string') {
      if (val.length === 1) {
        return ['F','S','T','U','W'].indexOf(val) !== -1;
      } else {
        return CELL_TYPE_NAMES.map(t => t.toLowerCase()).indexOf(val.toLowerCase()) !== -1;
      }
    }
  }
}



module.exports = {gridrunner, CellTypeEnum};
