import { createTile } from "./createTile.js";
import { moveAndMergeDown } from "./moveAndMergeDown.js";
import { moveAndMergeLeft } from "./moveAndMergeLeft.js";
import { moveAndMergeRight } from "./moveAndMergeRight.js";
import { moveAndMergeUp } from "./moveAndMergeUp.js";

let arr = Array.from({ length: 4 }, () => Array(4).fill(0));

displayCube();
displayCube();
window.addEventListener("keydown", handleInput);

function handleInput(e) {
  switch (e.code) {
    case "ArrowRight" || "KeyD":
      moveAndMergeRight(arr);
      break;
    case "ArrowLeft" || "KeyA":
      moveAndMergeLeft(arr);
      break;
    case "ArrowDown" || "KeyS":
      moveAndMergeDown(arr);
      break;
    case "ArrowUp" || "KeyW":
      moveAndMergeUp(arr);
      break;

    default:
      break;
  }
  displayCube();
}

function displayCube() {
  const cube = document.querySelector("#board");
  cube.append(createTile(arr));
}
