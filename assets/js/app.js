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

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ); // jQuery
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

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff < 0) {
      moveAndMergeRight(arr);
      displayCube();
    } else {
      moveAndMergeLeft(arr);
      displayCube();
    }
  } else {
    if (yDiff < 0) {
      moveAndMergeDown(arr);
      displayCube();
    } else {
      moveAndMergeUp(arr);
      displayCube();
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}
