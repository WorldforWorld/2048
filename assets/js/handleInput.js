import { checkGame } from "./checkGame.js";
import { moveAndMergeDown } from "./moveAndMergeDown.js";
import { moveAndMergeLeft } from "./moveAndMergeLeft.js";
import { moveAndMergeRight } from "./moveAndMergeRight.js";
import { moveAndMergeUp } from "./moveAndMergeUp.js";

export function handleInput(e, arr) {
  let isMerge = false;
  let isMove = false;
  switch (e.code) {
    case "ArrowRight" || "KeyD":
      [isMerge, isMove] = moveAndMergeRight(arr);
      break;
    case "ArrowLeft" || "KeyA":
      [isMerge, isMove] = moveAndMergeLeft(arr);
      break;
    case "ArrowDown" || "KeyS":
      [isMerge, isMove] = moveAndMergeDown(arr);
      break;
    case "ArrowUp" || "KeyW":
      [isMerge, isMove] = moveAndMergeUp(arr);
      break;
  }
  return checkGame(isMove, isMerge, arr);
}
