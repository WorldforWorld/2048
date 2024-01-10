import { createTile } from "./createTile.js";
import { handleInput } from "./handleInput.js";
import { handleTouchMove } from "./handleTouchMove.js";
import { handleTouchStart } from "./handleTouchStart.js";
import { resetGame } from "./resetGame.js";
import { updateScore } from "./updateScore.js";
let arr = Array.from({ length: 4 }, () => Array(4).fill(0));
const cube = document.querySelector("#board");
cube.append(createTile(arr));
cube.append(createTile(arr));

updateScore(0, true);

window.addEventListener("keydown", e => (arr = handleInput(e, arr)));

document.querySelector(".new-game").addEventListener("click", () => {
  if (confirm("Всё слетит! Оно вам надо?")) {
    arr = Array.from({ length: 4 }, () => Array(4).fill(0));
    resetGame(arr);
  }
});

// touch
let xDown = null;
let yDown = null;
let touchSwitch = false;

document.addEventListener("touchstart", e => {
  [xDown, yDown] = handleTouchStart(e, xDown, yDown);
  touchSwitch = true;
});

document.addEventListener("touchmove", e => {
  if (touchSwitch) {
    arr = handleTouchMove(e, arr, xDown, yDown);
    touchSwitch = false;
  }
});
