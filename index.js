// Default Gridrunner constructor object
const default_config = {
  start: null,
  finish: null,
  walls: []
};


// The Gridrunner game factory method
// @param config a config object used to configure the grid in a specific way
// @returns Gridrunner object with all the data and functions needed to play the game
function gridrunner(config) {
  config = config || default_config;
  const grid = buildGrid(config['start'], config['finish'], config['walls']);

  return {
    grid,
    player: config['start']
  };
};



// Builds a grid
// @param startPos
// @param finishPos
// @param walls - array of grid positions for each Wall
function buildGrid(startPos, finishPos, walls) {

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
