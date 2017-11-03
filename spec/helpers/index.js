const gridrunner = require('../../index');

const isPosition = (p) => {
  return Array.isArray(p)
    && p.length === 2
    && typeof p[0] === 'number'
    && typeof p[1] === 'number';
}

const equalPositions = (p1, p2) => {
  if (isPosition(p1) && isPosition(p2)) {
    return (p1[0] === p2[0]) && (p1[1] === p2[1]);
  } else {
    throw new Error('Need two arrays with length of 2. Got:' + p1 + ' ' + p2);
  }
};

const isGridCellAtPostionOfType = (grid, position, cellType) => {
  if (!isPosition(position)) throw new Error('Need a valid position.');
  if (!gridrunner.CellTypeEnum.isCellType(cellType)) throw new Error('Need a valid CellTypeEnum type');
  return grid()[position[1]][position[0]] === cellType;
};

module.exports = {
  isPosition,
  equalPositions,
  isGridCellAtPostionOfType
}
