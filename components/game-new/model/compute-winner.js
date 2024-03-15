export function computeWinner(gameState, sequenceSize = 5, fieldSize = 19) {
  const cells = gameState.cells;
  const gap = Math.floor(sequenceSize / 2);

  function compareElements(indexes) {
    let result = true;

    for (let i = 1; i < indexes.length; i++) {
      result &&= !!cells[indexes[i]];
      result &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }

    return result;
  }

  function getSequenceIndexes(i) {
    const res = [
      [],
      [],
      [],
      [], // |
    ];

    for (let j = 0; j < sequenceSize; j++) {
      res[0].push(j - gap + i);
      res[1].push(fieldSize * (j - gap) + (j - gap) + i);
      res[2].push(-fieldSize * (j - gap) + (j - gap) + i);
      res[3].push(fieldSize * (j - gap) + i);
    }

    const x = i % fieldSize;
    if (x < gap || x >= fieldSize - gap) {
      res.shift();
      res.shift();
      res.shift();
    }

    return res;
  }

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRows = getSequenceIndexes(i);

      const winnerIndexes = indexRows.find((row) => compareElements(row));

      if (winnerIndexes) {
        return winnerIndexes;
      }
    }
  }

  console.log("computeWinner");
  return undefined;
}

// 0             |  x = 0, y = 0 => 19 * 0 + 0
// 19 * 1 + 1    | x = 1, y = 1 => 20
// 19 * 2 + 2    | x = 2, y = 2 => 40
// 19 * 3 + 3    | x = 3, y = 3 => 60
// 19 * 4 + 4    | x = 4, y = 4 => 80
// x + y * 19
