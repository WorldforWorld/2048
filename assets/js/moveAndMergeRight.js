import { setValueTile } from "./setValueTile.js";

export function moveAndMergeRight(arr) {
  shiftRight(arr);
  mergeRight(arr);
  shiftRight(arr);
}

function shiftRight(arr) {
  let count = 3;
  for (let y = 0; y < arr.length; y++) {
    for (let x = arr[y].length - 1; x >= 0; x--) {
      if (arr[y][x] !== 0) {
        const item = arr[y][x];
        arr[y][x] = 0;
        arr[y][count] = item;
        const tile = document.querySelector(`.tile[y="${y}"][x="${x}"]`);
        tile.style.setProperty("--y", y);
        tile.style.setProperty("--x", count);
        tile.setAttribute("y", y);
        tile.setAttribute("x", count);
        count--;
      }
    }
    count = 3;
  }
}

function mergeRight(arr) {
  for (let y = 0; y < arr.length; y++) {
    for (let x = arr[y].length - 1; x >= 0; x--) {
      if (arr[y][x] !== 0) {
        const item = arr[y][x];
        const afterItem = arr[y][x - 1];
        if (item === afterItem) {
          const sum = item * 2;
          const tile = document.querySelector(`.tile[y="${y}"][x="${x}"]`);
          arr[y][x] = sum;
          setValueTile(tile, sum);
          arr[y][x - 1] = 0;
          document.querySelector(`.tile[y="${y}"][x="${x - 1}"]`).remove();
          x--;
        }
      }
    }
  }
}
