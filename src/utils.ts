import type { Grid, CellCharState, Coords } from './types';

// generate a random grid based on a set dimension and random alive/dead cells
export function generateRandomGrid(
  dimensions: [number, number],
  chars: CellCharState = ['▄', ' ']
): Grid {
  const grid: Grid = [];

  // create the grid
  for (let y = 0; y < dimensions[1]; y++) {
    const row = [];
    for (let x = 0; x < dimensions[0]; x++) {
      if (Math.random() > 0.5) {
        row.push(chars[0]);
      } else {
        row.push(chars[1]);
      }
    }

    grid.push(row);
  }

  return grid;
}

export function applyRules(grid: Grid, cellCharState: CellCharState): [Grid, number] {
  // clone the grid for the next generation
  const newGrid: Grid = grid.map((row) => [...row]);
  // keep track if all of the cells are dead and exit if so
  let totalLiveNeighbors = 0;

  // iterate over each cell, apply the rules and update cell state
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const cellState = grid[y][x];
      const liveNeighborCount = getLiveNeighborCount(
        grid,
        [y, x],
        [cellCharState[0], cellCharState[1]]
      );

      totalLiveNeighbors += liveNeighborCount;

      // check the current cell state and apply the rules
      if (cellState === cellCharState[0]) {
        if (liveNeighborCount < 2 || liveNeighborCount > 3) {
          // dead
          newGrid[y][x] = cellCharState[1];
        }

        if (liveNeighborCount == 2 || liveNeighborCount == 3) {
          // alive
          newGrid[y][x] = cellCharState[0];
        }
      } else {
        if (liveNeighborCount == 3) {
          // alive
          newGrid[y][x] = cellCharState[0];
        }
      }
    }
  }

  return [newGrid, totalLiveNeighbors];
}

// based on a given cell, return the number of live neighbors
export function getLiveNeighborCount(
  grid: Grid,
  coords: Coords,
  cellCharState: CellCharState
): number {
  const [x, y] = coords;

  // 8 neighbors
  const neighbors = [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ];

  // iterate over neighbors
  const liveNeighbors = neighbors.filter(([x, y]) => {
    // handle out of bounds
    if (x < 0 || y < 0 || x >= grid.length || y >= grid.length) {
      return false;
    }

    // if alive add a tally mark
    if (grid[x][y] === cellCharState[0]) {
      return true;
    }
  });

  return liveNeighbors.length;
}
