import { setValueTile } from "./setValueTile.js";

export function moveAndMergeDown(arr) {
  const isMove = shiftDown(arr);
  const isMerge = mergeDown(arr);
  shiftDown(arr);
  return isMerge || isMove;
}

function shiftDown(arr) {
  let isMove = false;
  for (let x = 0; x < arr[0].length; x++) {
    let count = 0;
    for (let y = arr.length - 1; y >= 0; y--) {
      if (arr[y][x] !== 0) {
        const item = arr[y][x];
        const newY = arr.length - 1 - count;
        arr[y][x] = 0;
        arr[newY][x] = item;

        if (arr[newY][x] !== arr[y][x]) {
          isMove = true;
        }
        const tile = document.querySelector(`.tile[y="${y}"][x="${x}"]`);
        tile.style.setProperty("--y", newY);
        tile.style.setProperty("--x", x);
        tile.setAttribute("y", newY);
        tile.setAttribute("x", x);
        count++;
      }
    }
  }
  return isMove;
}

function mergeDown(arr) {
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
          const sum = item * 2;
          arr[y][x] = sum;
          arr[newY][x] = 0;
          const tile = document.querySelector(`.tile[y="${y}"][x="${x}"]`);
          setValueTile(tile, sum);
          document.querySelector(`.tile[y="${newY}"][x="${x}"]`).remove();
          isMerge = true;
          continue;
        }
        nonZeroCount++;
      }
    }
  }
  return isMerge;
}
