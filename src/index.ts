/*
https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

RULES:
1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

These rules, which compare the behavior of the automaton to real life, can be condensed into the following:

  Any live cell with two or three live neighbours survives.
  Any dead cell with three live neighbours becomes a live cell.
  All other live cells die in the next generation. Similarly, all other dead cells stay dead.
*/
