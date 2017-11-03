const game_module = require('../game'),
  helpers = require('./helpers'),
  CellType = require('../cell-type').full;



describe('Game', function() {

  let game, config, initial_state;

  beforeEach(function() {
    config = {
      start: [0,0],
      finish: [3,0],
      walls: [ [2,2], [3,2] ],
      width: 4,
      height: 3
    };

    game = game_module(config);
  });



  describe('maintains game state', function() {

    let getState, playerPos, grid;

    beforeEach(function() {
      getState = game;
      playerPos = getState().player;
      grid = getState().grid;
    });

    it('should return a function that returns the state', function() {
      expect(getState).toBeDefined();
    });

    it('should have a player position', function() {
      expect(playerPos).toBeDefined();
    });

    it('should have a grid instance', function() {
      expect(grid).toBeDefined();
    });


    describe('- initial state', function() {

      let initial_state;

      beforeEach(function() {
        initial_state = getState();
        playerPos = initial_state.player;
        grid = initial_state.grid;
      });

      it('should set player\'s position to equal the Start position', function() {
        let expectedPos = config.start;
        expect(helpers.equalPositions(expectedPos, playerPos)).toBe(true);
      });

      describe('should correctly place tiles on the grid:', function() {

        it('Start', function() {
          let position = config.start;
          expect(helpers.isGridCellAtPostionOfType(grid, position, CellType.Start)).toBe(true);
        });
        it('Finish', function() {
          let position = config.finish;
          expect(helpers.isGridCellAtPostionOfType(grid, position, CellType.Finish)).toBe(true);
        });
        it('Wall', function() {
          for (let i = 0; i < config.walls; i++) {
            let position = config.walls[i];
            expect(helpers.isGridCellAtPostionOfType(grid, position, CellType.Wall)).toBe(true);
          }
        });
      });

    });

  });

});
