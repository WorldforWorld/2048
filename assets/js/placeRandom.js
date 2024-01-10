export function placeRandom(arr) {
  const empty = [];
  arr.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === 0) {
        empty.push([rowIndex, colIndex]);
      }
    });
  });

  if (empty.length > 0) {
    const [row, col] = empty[Math.floor(Math.random() * empty.length)];
    const value = Math.random() > 0.75 ? 4 : 2;
    return [row, col, value];
  } else {
    if (!mergeY(arr) && !mergeX(arr)) {
      return true;
    }
  }
}

function mergeY(arr) {
  let isMerge = false;
  for (let x = 0; x < arr[0].length; x++) {
    let nonZeroCount = 0;
    for (let y = arr.length - 1; y >= 0; y--) {
      if (arr[y][x] !== 0) {
        const item = arr[y][x];
        const newY = arr.length - nonZeroCount - 2;
        if (newY < 0) continue;
        const afterItem = arr[newY][x];
        if (item === afterItem) {
          isMerge = true;
          break;
        }
        nonZeroCount++;
      }
    }
  }
  return isMerge;
}
function mergeX(arr) {
  let isMerge = false;
  for (let y = 0; y < arr.length; y++) {
    for (let x = 0; x < arr[y].length; x++) {
      if (arr[y][x] !== 0) {
        const item = arr[y][x];
        const afterItem = arr[y][x + 1];
        if (item === afterItem) {
          isMerge = true;
          break;
        }
      }
    }
  }
  return isMerge;
}
