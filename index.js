const grid = require('./grid'),
  CellTypeEnum = require('./cell-type');



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

  // throw error if invalid config object
  throwInvalidConfig(config);

  // two-dimensional matrix that holds the state of each cell
  let _grid = grid(config);

  // array of length 2, index 0 = x-coordinate, index 1 = y-coordinate
  let player = config['start'].slice();

  return {
    grid: _grid,
    player,
    width: () => _grid.width(),
    height: () => _grid.height()
  };
};


module.exports = {gridrunner, CellTypeEnum};
