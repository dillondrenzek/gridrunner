const grid = require('./grid'),
  { Untouched, Touched, Start, Finish, Wall } = require('./cell-type').full;


// Takes a valid config object and creates a game object
function game(config) {

  let state = Object.assign({},
    getConfiguredGridState(config),
    getConfiguredPlayerState(config)
  );

  return _game(state);
}



function _game(state) {
  return (function() {
    return Object.assign(function() {
      return state;
    }, {
      moveUp: () => movePlayer(state, 'up'),
      moveDown: () => movePlayer(state, 'down'),
      moveLeft: () => movePlayer(state, 'left'),
      moveRight: () => movePlayer(state, 'right')
    });
  })();
}






function getConfiguredGridState(config) {

  // initialize new grid
  let _grid = grid({
    width: config.width,
    height: config.height,
    seedValue: Untouched
  });

  // set special cells
  _grid = _grid.setCell(config.start).to(Start)
    .setCell(config.finish).to(Finish)
    .setCells(config.walls).to(Wall);

  return { grid: _grid };
}



// Returns what the player
function getConfiguredPlayerState(config) {
  return { player: config.start.slice() };
}





// Moves the player position if the player can legally make the move. If not, no update
// @returns a new game state with the updated (or not, if move failed) player position
function movePlayer(state, dir) {
  if (typeof dir !== 'string') throw new Error('Direction must be a string.');

  const direction = {
    up: [0,1],
    down: [0,-1],
    left: [-1, 0],
    right: [1, 0]
  };

  // get the new position
  dir = direction[dir.toLowerCase()];
  let newPos = translatePosition(state.player, dir);

  // depending on type of cell at newPos:
  switch(state.grid.getCell(newPos)) {

    case Untouched:
      // move player
      state = setPlayerPosition(newPos);
      break;

    case Finish:
      // test end game
      break;

    case Touched:
    case Wall:
    case Start:
    default:
      // do nothing
      break;
  }

  return state;

}

// Sets the player's position
function setPlayerPosition(state, position) {
  return Object.assign({}, state, { player: position });
}

// @param { number[2] } pos - position to apply the delta to
// @param { number[2] } delta - difference to add to the position [0] + [0], [1] + [1]
// @returns { number[2] } - first index is new x coord, second is new y coord
function translatePosition(pos, delta) {
  return [
    pos[0] + delta[0],
    pos[1] + delta[1]
  ];
}



module.exports = game;
