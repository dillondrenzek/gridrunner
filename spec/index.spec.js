const gridrunner = require('../index');
const { CellTypeEnum } = gridrunner;

// shorthand for readability
const CellType = CellTypeEnum.full;

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
    throw new Error('Need two arrays with length of 2.');
  }
};

const isGridCellAtPostionOfType = (grid, position, cellType) => {
  if (!isPosition(position)) throw new Error('Need a valid position.');
  if (!gridrunner.CellTypeEnum.isCellType(cellType)) throw new Error('Need a valid CellTypeEnum type');
  // return grid[position[0]][position[1]] ===
};



describe('Gridrunner', function() {

  describe('exported module', function() {

    it('should be an object', function() {
      expect(typeof gridrunner).toBe('object');
    });

    it('should contain the Gridrunner factory method', function() {
      expect(typeof gridrunner.gridrunner).toBe('function');
    });

    it('should contain an enum with information about the different cell types', function() {
      expect(typeof gridrunner.CellTypeEnum).toBe('object');
    });

  });





  describe('instances', function() {

    let instance;

    beforeEach(function() {
      instance = gridrunner.gridrunner();
    });

    describe('should have the property:', function() {
      it('grid', function() {
        expect(instance.hasOwnProperty('grid')).toBe(true);
      });
      it('player', function() {
        expect(instance.hasOwnProperty('player')).toBe(true);
      });
    });
  });





  describe('instance created with valid options object', function() {

    const valid_opts = {
        start: [0,0],
        finish: [3,0],
        walls: [ [2,2], [3,2] ],
        size: {
          width: 4,
          height: 3
        }
      };

    it('should not throw', function() {
      expect(() => gridrunner.gridrunner(valid_opts)).not.toThrow();
    });

    it('should set player\'s position to equal the Start position', function() {
      const g = gridrunner.gridrunner(valid_opts);
      const _equalPositions = equalPositions(g.player, valid_opts.start);
      expect(_equalPositions).toBe(true);
    });

    describe('should correctly place tiles on the grid:', function() {
      let game, grid, opts;

      beforeEach(function() {
        opts = valid_opts;
        game = gridrunner.gridrunner(opts);
        grid = game.grid;
      });

      it('Start', function() {
        let position = opts.start;
        expect(isGridCellAtPostionOfType(grid, position, CellType.Start)).toBe(true);
      });
      it('Finish', function() {
        let position = opts.finish;
        expect(isGridCellAtPostionOfType(grid, position, CellType.Finish)).toBe(true);
      });
      it('Wall', function() {
        for (let i = 0; i < opts.walls; i++) {
          let position = opts.walls[i];
          expect(isGridCellAtPostionOfType(grid, position, CellType.Wall)).toBe(true);
        }
      });
      // xit('Touched', function() {
      //   expect(isGridCellAtPostionOfType(grid, opts[], game
      // });
      // xit('Untouched', function() {
      //   expect(isGridCellAtPostionOfType(grid, opts[], game
      // });


    });

  });





  xdescribe('instance created with invalid input', function() {

    let instance, opts;

    beforeEach(function() {
      opts = {
        start: [0,0],
        finish: [3,0],
        walls: [ [2,2], [3,2] ],
        size: {
          width: 4,
          height: 3
        }
      };
      instance = gridrunner(opts);
    });

    describe('should throw when created with', function() {

    });

  });




});
