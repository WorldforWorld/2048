import { arrowDownMove } from "./arrowDownMove.js";
import { ArrowLeftMove } from "./arrowLeftMove.js";
import { arrowRightMove } from "./arrowRightMove.js";
import { arrowUpMove } from "./arrowUpMove.js";
const cube = document.getElementById("cube");

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
  for (let i = 0; i < cubeArray.length; i++) {
    for (let j = 0; j < cubeArray[i].length; j++) {
      const cubeItem = document.createElement("div");
      cubeItem.classList.add("cube__item");
      cubeItem.setAttribute("item", cubeArray[i][j]);
      cubeItem.textContent = cubeArray[i][j];
      cube.append(cubeItem);
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
    cube.innerHTML = "";
    console.log("isKey");

    displayCube();
    placeRandomTwo(cubeArray);
    cube.innerHTML = "";
    displayCube();
  }
  isKey = false;
}

// TODO: переписать, потому как при наличии оставшихся двух пустых ячеек происходит переполнение стека вызова.
function placeRandomTwo(matrix) {
  let emptyCells = [];

  // Находим все пустые ячейки
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        emptyCells.push({ row: i, col: j });
      }
    }
  }

  // Если есть пустые ячейки, выбираем случайную и заменяем на 2
  if (emptyCells.length > 0) {
    let randomIndex = Math.floor(Math.random() * emptyCells.length);
    let randomCell = emptyCells[randomIndex];
    matrix[randomCell.row][randomCell.col] = 2;
  }
}
