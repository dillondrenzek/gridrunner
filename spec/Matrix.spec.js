const { Matrix } = require('../Matrix');

describe('Matrix', () => {

  // should be constructed from a two dimensional array
  describe('should throw if it isn\'t constructed with a two-dimensional array', function() {

    it('must be a truthy value', function() {
      const invalid_1 = null;
      expect(() => new Matrix(invalid_1)).toThrow();
    });

    it('must not be a one-dimensional array', function() {
      const invalid_2 = [];
      expect(() => new Matrix(invalid_2)).toThrow();
    });

    it('must not be an array of variable-length arrays', function() {
      const invalid_3 = [[0, 1], [0, 1, 2]];
      expect(() => new Matrix(invalid_3)).toThrow();
    });

  });


  // - width
  xit('should have a width', function() {

  });

  // - height
  xit('should have a height', function() {

  });

  // - get()
  xit('should return the value at a given (x, y)', function() {

  });

  // - set()
  xit('should set the value at a given (x, y) to a given value', function() {

  });

  // - toString()

});
