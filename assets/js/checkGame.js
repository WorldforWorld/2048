import { createTile } from "./createTile.js";
import { displayGameOver } from "./displayGameOver.js";
import { placeRandom } from "./placeRandom.js";
import { updateScore } from "./updateScore.js";

export function checkGame(isMove, isMerge, arr) {
  if (isMove) {
    const cube = document.querySelector("#board");
    cube.append(createTile(arr));
  }

  const isEmpty = arr.some(row => row.includes(0));

  if (!isMerge && !isEmpty) {
    placeRandom(arr);
  }

  if (placeRandom(arr) === true) {
    updateScore(0, true);
    const nullArray = Array.from({ length: 4 }, () => Array(4).fill(0));
    displayGameOver(nullArray);
    return nullArray;
  }
  return arr;
}
