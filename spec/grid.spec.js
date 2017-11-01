const Grid = require('../grid'),
  CellType = require('../cell-type').full;


describe('Grid', function() {

  let grid, config;

  beforeEach(function() {
    config = {
      start: [0,1],
      finish: [1,2],
      walls: [ [0,2] ],
      width: 2,
      height: 3
    };
    grid = Grid(config);
  });

  it('should return two-dimensional array when called', function() {
    let result = grid();
    expect(Array.isArray(result)).toBe(true);
    result.forEach(function(row) {
      expect(Array.isArray(row)).toBe(true);
    });
  });

  it('should return the correct width', function() {
    expect(grid.width()).toEqual(config.width);
  });

  it('should return the correct height', function() {
    expect(grid.height()).toEqual(config.height);
  });


  describe('getCell()', function() {
    it('should get a value at a cell', function() {
      let position = [0,2];
      let result = grid.getCell(position);
      expect(result).toEqual(CellType.Wall);
    });
  });

  describe('setCell()', function() {
    it('should set the value of a cell', function() {
      let position = [0,2];
      let value = CellType.Touched;
      let result = grid.setCell(position).to(value);
      expect(result.getCell(position)).toEqual(value);
    });
  });


});
