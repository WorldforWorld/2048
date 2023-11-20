import { arrowDownMove } from "./arrowDownMove.js";
import { ArrowLeftMove } from "./arrowLeftMove.js";
import { arrowRightMove } from "./arrowRightMove.js";
import { arrowUpMove } from "./arrowUpMove.js";
import { placeRandomTwo } from "./placeRandomTwo.js";
let cubeArray = [
  [0, 0, 0, 0],
  [0, 0, 2, 0],
  [0, 0, 0, 0],
  [2, 0, 0, 0],
];
let cubeArrayGameOver = [
  [2, 64, 4, 2],
  [16, 8, 256, 32],
  [4, 32, 64, 16],
  [2, 4, 8, 2],
];

function displayCube() {
  let cube = document.querySelector("#cube");
  let cubeItems = cube.querySelectorAll(".cube__item");
  let counter = 0;
  for (let y = 0; y < cubeArray.length; y++) {
    for (let x = 0; x < cubeArray[y].length; x++) {
      console.log("counter: ", counter);
      const positionClass = "position-" + y + "-" + x;
      // TODO: переделать
      cubeItems[counter].classList.add(positionClass);
      cubeItems[counter].setAttribute("item", cubeArray[y][x]);
      cubeItems[counter].textContent =
        cubeArray[y][x] === 0 ? "" : cubeArray[y][x];
      counter++;
      if (cubeArray[y][x] === 0) {
        continue;
      }
      // if (true) {
      //   const item = document.createElement("div");
      //   item.classList.add("cube__item");
      //   item.classList.add(positionClass);
      //   item.setAttribute("item", cubeArray[i][j]);
      //   item.textContent = cubeArray[i][j];
      //   cube.append(item);
      // } else {
      // }
    }
  }
}

displayCube();

document.addEventListener("keydown", moveCube);

function moveCube(e) {
  const key = e.code;
  let isKey = false;
  if (key == "ArrowRight" || key == "KeyD") {
    arrowRightMove(cubeArray);
    isKey = true;
  }
  if (key == "ArrowLeft" || key == "KeyA") {
    ArrowLeftMove(cubeArray);
    isKey = true;
  }
  if (key == "ArrowDown" || key == "KeyS") {
    arrowDownMove(cubeArray);
    isKey = true;
  }
  if (key == "ArrowUp" || key == "KeyW") {
    arrowUpMove(cubeArray);
    isKey = true;
  }
  if (isKey) {
    placeRandomTwo(cubeArray);
    displayCube();
  }
  isKey = false;
}
