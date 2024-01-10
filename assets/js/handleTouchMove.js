import { checkGame } from "./checkGame.js";
import { moveAndMergeDown } from "./moveAndMergeDown.js";
import { moveAndMergeLeft } from "./moveAndMergeLeft.js";
import { moveAndMergeRight } from "./moveAndMergeRight.js";
import { moveAndMergeUp } from "./moveAndMergeUp.js";

export function handleTouchMove(evt, arr, xDown, yDown) {
  if (!xDown || !yDown) {
    return;
  }

  const xUp = evt.touches[0].clientX;
  const yUp = evt.touches[0].clientY;

  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;

  let isMerge = false;
  let isMove = false;
  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff < 0) {
      [isMerge, isMove] = moveAndMergeRight(arr);
    } else {
      [isMerge, isMove] = moveAndMergeLeft(arr);
    }
  } else {
    if (yDiff < 0) {
      [isMerge, isMove] = moveAndMergeDown(arr);
    } else {
      [isMerge, isMove] = moveAndMergeUp(arr);
    }
  }

  /* reset values */
  xDown = null;
  yDown = null;
  return checkGame(isMove, isMerge, arr);
}
