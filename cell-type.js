// Raw values that show up when game board is printed
const Finish = 'F',
      Start = 'S',
      Touched = 'T',
      Untouched = 'U',
      Wall = 'W';

// Key names that can be used to retrieve raw values (useful for iterating)
const CELL_TYPE_NAMES = [
  'Finish',
  'Start',
  'Touched',
  'Untouched',
  'Wall'
];

// Exported object with a few different properties to help describe the enum
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


module.exports = CellTypeEnum;
