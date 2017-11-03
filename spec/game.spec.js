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


  // PASSING
  describe('state -', function() {

    let getState, playerPos, grid;

    beforeEach(function() {
      getState = game;
      playerPos = getState().player;
      grid = getState().grid;
    });

    it('should be returned when calling the game function', function() {
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





  describe('player movement -', function() {

    describe('player should not move if player tries to move to a Wall cell', function() {

      let prePos;

      beforeEach(function() {
        // player surrounded by walls
        config = {
          start: [1,1],
          finish: [0,0],
          walls: [ [0,1], [1,0], [1,2], [2,1] ],
          width: 3,
          height: 3
        }

        game = game_module(config);

        prePos = game().player;
      });

      it('up', function() {
        let postPos = (game.moveUp())().player;
        expect(helpers.equalPositions(prePos, postPos)).toBe(true);
      });

      it('down', function() {
        let postPos = (game.moveDown())().player;
        expect(helpers.equalPositions(prePos, postPos)).toBe(true);
      });

      it('left', function() {
        let postPos = (game.moveLeft())().player;
        expect(helpers.equalPositions(prePos, postPos)).toBe(true);
      });

      it('right', function() {
        let postPos = (game.moveRight())().player;
        expect(helpers.equalPositions(prePos, postPos)).toBe(true);
      });


    });


    describe('if a Wall isn\'t present', function() {

      let prePos;

      beforeEach(function() {
        config = {
          start: [1,1],
          finish: [0,0],
          walls: [ ],
          width: 3,
          height: 3
        };

        game = game_module(config);
        prePos = game().player;
      });


      it('Up', function() {
        let expected = [ prePos[0], prePos[1] + 1];
        game = game.moveUp();
        let actual = game().player;
        expect(helpers.equalPositions(actual, expected)).toBe(true);
      });
      it('Down', function() {
        let expected = [ prePos[0], prePos[1] - 1];
        game = game.moveDown();
        let actual = game().player;
        expect(helpers.equalPositions(actual, expected)).toBe(true);
      });
      it('Left', function() {
        let expected = [ prePos[0] - 1, prePos[1]];
        game = game.moveLeft();
        let actual = game().player;
        expect(helpers.equalPositions(actual, expected)).toBe(true);
      });
      it('Right', function() {
        let expected = [ prePos[0] + 1, prePos[1]];
        game = game.moveRight();
        let actual = game().player;
        expect(helpers.equalPositions(actual, expected)).toBe(true);
      });

    });

    it('unless a wall is present',function() {

    });

  });

});
