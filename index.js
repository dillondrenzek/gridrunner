







var gridrunner = function(opts) {
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
