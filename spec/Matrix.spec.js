const { Matrix } = require('../Matrix');

describe('Matrix', () => {
  // matrix - the Matrix to be tested
  // _matrix - used to construct the Matrix `matrix`
  let matrix, _matrix;

  beforeEach(function() {
    _matrix = [[0, 1],[3, 4],[6, 7]];
    matrix = new Matrix(_matrix);
  });

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
  describe('- width', function() {

    it('should be defined', function() {
      expect(matrix.width).toBeDefined();
    });

    it('should be a number', function() {
      expect(typeof matrix.width).toBe('number');
    });

    it('should be the correct value', function() {
      const expected = _matrix[0].length;
      expect(matrix.width).toEqual(expected);
    });

  });



  // - height
  describe('- height', function() {

    it('should be defined', function() {
      expect(matrix.height).toBeDefined();
    });

    it('should be a number', function() {
      expect(typeof matrix.height).toBe('number');
    });

    it('should be the correct value', function() {
      const expected = _matrix.length;
      expect(matrix.height).toEqual(expected);
    });

  });



  // - get()
  describe('- get()', function() {

    describe(', given a position (x, y),', function() {
      let x = 0, y = 2;

      it('should return the value', function() {
        let expected = _matrix[y][x];
        expect(matrix.get(x, y)).toEqual(expected);
      });

    });

  });



  // - set()
  describe('- set()', function() {

    describe(', given a position (x, y) and a value,', function() {
      let x = 0, y = 2, value= 73;

      it('should set the value', function() {
        matrix.set(x, y, value);
        expect(matrix.get(x,y)).toEqual(value);
      });

    });

  });



  // - toString()
  describe('- toString()', function() {

    describe('when not provided an item separator or row separator', function() {
      let rowSeparator = '\n';
      let itemSeparator = ' ';
      let result, result_values;

      beforeEach(function() {
        result = matrix.toString();
        result_values = result
          .split(rowSeparator)
          .map((row_str) => row_str.split(itemSeparator));
      });

      it('should separate the rows with a new-line character', function() {
        let rows = result_values;
        expect(rows.length).toEqual(matrix.height);
      });
      it('should separate the items with a space', function() {
        // for each row of output string
        result_values.forEach((row) => {
          // expect the number of items separated by the `itemSeparator` to equal the width of the grid
          expect(row.length).toEqual(matrix.width);
        });
      });
    });
  });

});
