import { createTile } from "./createTile.js";
import { updateScore } from "./updateScore.js";
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
    return [row, col];
  } else {
    if (!mergeY(arr) && !mergeX(arr)) {
      displayGameOver(arr);
    }
  }
}

function displayGameOver(arr) {
  const gameOver = document.querySelector(".game-over");
  const button = gameOver.querySelector(".try-again");
  gameOver.classList.add("active");
  button.addEventListener("click", () => {
    gameOver.classList.remove("active");
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => tile.remove());
    arr = Array.from({ length: 4 }, () => Array(4).fill(0));
    const cube = document.querySelector("#board");
    cube.append(createTile(arr));
    cube.append(createTile(arr));
    updateScore(0, true);
  });
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
