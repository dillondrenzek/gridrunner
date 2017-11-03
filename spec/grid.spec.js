const grid_module = require('../grid');



describe('Grid', function() {

  let grid, config;

  beforeEach(function() {
    config = {
      width: 2,
      height: 3,
      seedValue: 'x'
    };

    grid = grid_module(config);
  });



  describe('built with a config object', function() {

    it('should return two-dimensional array when called', function() {
      let result = grid();
      expect(Array.isArray(result)).toBe(true);
      result.forEach(function(row) {
        expect(Array.isArray(row)).toBe(true);
      });
    });

    it('should initialize all its values to the given "seedValue" key', function() {
      grid().forEach(function(row) {
        row.forEach(function(el) {
          expect(el).toEqual(config.seedValue);
        });
      });
    });

    it('should return the correct width', function() {
      expect(grid.width()).toEqual(config.width);
    });

    it('should return the correct height', function() {
      expect(grid.height()).toEqual(config.height);
    });

  });



  describe('getCell()', function() {
    it('should get a value at a cell', function() {
      let p = [0,2];
      let expected = grid()[p[1]][p[0]];
      let result = grid.getCell(p);
      expect(result).toEqual(expected);
    });
  });



  describe('setCell()', function() {
    it('should set the value of a cell', function() {
      let p = [0,2];
      let value = 'test';
      let result = grid.setCell(p).to(value);
      expect(result.getCell(p)).toEqual(value);
    });
  });

});
