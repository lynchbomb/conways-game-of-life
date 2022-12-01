# conways-game-of-life

typescript + node. program runs in terminal window. execute with 4 args.

- clone the repo
- pnpm install

WIDTH = the width of the map eg. 20
HEIGHT = the height of the map eg. 30
ALIVE_CHAR = the char to represent an "alive" cell eg. ▄
DEAD_CHAR = the char to represent a "dead" cell eg. _

then do the thing:

`ts-node src/index.ts WIDTH HEIGHT ALIVE_CHAR DEAD_CHAR`
