import { createTile } from "./createTile.js";
import { moveAndMergeDown } from "./moveAndMergeDown.js";
import { moveAndMergeLeft } from "./moveAndMergeLeft.js";
import { moveAndMergeRight } from "./moveAndMergeRight.js";
import { moveAndMergeUp } from "./moveAndMergeUp.js";
import { placeRandom } from "./placeRandom.js";
let arr = Array.from({ length: 4 }, () => Array(4).fill(0));

displayCube();
displayCube();
window.addEventListener("keydown", handleInput);

function handleInput(e) {
  const checkBool = check => check.isMerge || check.isMove;
  let isMove = false;
  let isMerge = false;
  switch (e.code) {
    case "ArrowRight" || "KeyD":
      isMove = checkBool(moveAndMergeRight(arr));
      isMerge = moveAndMergeRight(arr).isMerge;
      break;
    case "ArrowLeft" || "KeyA":
      isMove = checkBool(moveAndMergeLeft(arr));
      isMerge = moveAndMergeLeft(arr).isMerge;
      break;
    case "ArrowDown" || "KeyS":
      isMove = checkBool(moveAndMergeDown(arr));
      isMerge = moveAndMergeDown(arr).isMerge;
      break;
    case "ArrowUp" || "KeyW":
      isMove = checkBool(moveAndMergeUp(arr));
      isMerge = moveAndMergeUp(arr).isMerge;
      break;
  }
  if (isMove) {
    displayCube();
  }

  const isEmpty = arr.some(row => row.includes(0));

  if (!isMerge && !isEmpty) {
    placeRandom(arr);
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
