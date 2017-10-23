# Gridrunner

## Description
Grid Runner is a minimalist and challenging puzzle game created by Dillon Drenzek and Logan McCaul for Digital Media 2. The goal of the game is to make it from the start to the finish after touching every tile on the grid exactly once. The Green tiles are the start, the Orange tiles are touched, the Blue tiles are Walls, the White tiles are untouched, and finally the Pink tile is the finish. Use the arrow keys to move. If you get stuck, press Enter to reload.



## Rules

### Setup
1. Given a `Puzzle` that contains a configuration for a `Grid`:
  - (`width` x `height`) in size
  - an array of positions for `Wall` cells
  - a `Start` position
  - a `Finish` position
1. Every `Cell` in a `Grid` that isn't a `Wall`, `Start`, or `Finish` is initially `Untouched`
1. `Player` starts at the designated starting position `Start`

### Goal
1. When `Player` moves to `Finish`
  - and there are no remaining `Untouched` cells, the `Player` wins
  - and there are remaining `Untouched` cells, the `Player` loses and the puzzle is reset

### Playing
1. `Player` may move from a `Cell` to any bordering `Cell` (Up, Down, Left, or Right) that isn't a `Wall` or `Touched`
1. `Player` "touches" a `Cell` by moving to it from another cell
  - the `Cell` then becomes `Touched`
