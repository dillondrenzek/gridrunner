






// The exported function
// @param opts an options object used to configure the grid in a specific way
// @returns Gridrunner object with all the data and functions needed to play the game
function gridrunner(opts) {
  return {
    CellTypeEnum,
    grid: [],
    player: {}
  };
};

module.exports = gridrunner;



const Finish = 'F',
      Start = 'S',
      Touched = 'T',
      Untouched = 'U',
      Wall = 'W';

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
  }
}
