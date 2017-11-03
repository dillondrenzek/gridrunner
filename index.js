const game = require('./game'),
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

  return game(config);
};



module.exports = {gridrunner, CellTypeEnum};
