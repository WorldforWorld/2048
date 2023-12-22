import { setValueTile } from "./setValueTile.js";
import { transforAnimationForMergeElement } from "./transforAnimationForMergeElement.js";
import { updateScore } from "./updateScore.js";
export function moveAndMergeLeft(arr) {
  const isMove = shiftLeft(arr);
  const isMerge = mergeLeft(arr);
  shiftLeft(arr);
  return [isMerge, isMove];
}

function shiftLeft(arr) {
  let count = 0;
  let isMove = false;
  for (let y = 0; y < arr.length; y++) {
    for (let x = 0; x < arr[y].length; x++) {
      if (arr[y][x] !== 0) {
        const item = arr[y][x];
        arr[y][x] = 0;
        arr[y][count] = item;

        if (arr[y][count] !== arr[y][x]) {
          isMove = true;
        }
        const tile = document.querySelector(`.tile[y="${y}"][x="${x}"]`);
        tile.style.setProperty("--y", y);
        tile.style.setProperty("--x", count);
        tile.setAttribute("y", y);
        tile.setAttribute("x", count);
        count++;
      }
    }
    count = 0;
  }
  return isMove;
}

function mergeLeft(arr) {
  let isMerge = false;
  for (let y = 0; y < arr.length; y++) {
    for (let x = 0; x < arr[y].length; x++) {
      if (arr[y][x] !== 0) {
        const item = arr[y][x];
        const afterItem = arr[y][x + 1];
        if (item === afterItem) {
          const sum = item * 2;
          const tile = document.querySelector(`.tile[y="${y}"][x="${x}"]`);
          transforAnimationForMergeElement(tile);
          arr[y][x] = sum;
          arr[y][x + 1] = 0;
          setValueTile(tile, sum);
          document.querySelector(`.tile[y="${y}"][x="${x + 1}"]`).remove();
          x++;
          isMerge = true;
          updateScore(sum);
        }
      }
    }
  }
  return isMerge;
}
