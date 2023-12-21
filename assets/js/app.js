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
  let isMove = false;
  switch (e.code) {
    case "ArrowRight" || "KeyD":
      isMove = moveAndMergeRight(arr);
      break;
    case "ArrowLeft" || "KeyA":
      isMove = moveAndMergeLeft(arr);
      break;
    case "ArrowDown" || "KeyS":
      isMove = moveAndMergeDown(arr);
      break;
    case "ArrowUp" || "KeyW":
      moveAndMergeUp(arr);
      break;

    default:
      break;
  }
  if (isMove) {
    displayCube();
  }
}

function displayCube() {
  const cube = document.querySelector("#board");
  cube.append(createTile(arr));
}

// touch
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

let xDown = null;
let yDown = null;

function getTouches(evt) {
  return evt.touches || evt.originalEvent.touches;
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  const xUp = evt.touches[0].clientX;
  const yUp = evt.touches[0].clientY;

  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;
  let isMove = false;
  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff < 0) {
      isMove = moveAndMergeRight(arr);
    } else {
      isMove = moveAndMergeLeft(arr);
    }
  } else {
    if (yDiff < 0) {
      isMove = moveAndMergeDown(arr);
    } else {
      isMove = moveAndMergeUp(arr);
    }
  }
  if (isMove) {
    displayCube();
  }
  /* reset values */
  xDown = null;
  yDown = null;
}
