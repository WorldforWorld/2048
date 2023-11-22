import { placeRandom } from "./placeRandom.js";
import { setValueTile } from "./setValueTile.js";

let arr = Array.from({ length: 4 }, () => Array(4).fill(0));

displayCube();
displayCube();
window.addEventListener("keydown", handleInput);

function handleInput(e) {
  const tile = document.querySelectorAll(".tile");
  switch (e.code) {
    case "ArrowRight" || "KeyD":
      rightMove(tile);
      displayCube();
      break;
    case "ArrowLeft" || "KeyA":
      leftMove(tile);
      displayCube();
      break;
    case "ArrowDown" || "KeyS":
      downMove(tile);
      displayCube();
      break;
    case "ArrowUp" || "KeyW":
      upMove(tile);
      displayCube();
      break;

    default:
      break;
  }
}

function displayCube() {
  const cube = document.querySelector("#board");
  cube.append(createTile());
  const tile = cube.querySelectorAll(".tile");
  arr = Array.from({ length: 4 }, () => Array(4).fill(0));
  for (let i = 0; i < tile.length; i++) {
    const x = +tile[i].getAttribute("x");
    const y = +tile[i].getAttribute("y");
    arr[y][x] = 1;
  }
}

function createTile() {
  const value = Math.random() > 0.5 ? 2 : 4;
  const tile = document.createElement("div");
  tile.classList.add("tile");
  setValueTile(tile, value);
  const randomNums = placeRandom(arr);
  arr[randomNums[0]][randomNums[1]] = 1;
  tile.style.setProperty("--y", randomNums[0]);
  tile.style.setProperty("--x", randomNums[1]);
  tile.setAttribute("y", randomNums[0]);
  tile.setAttribute("x", randomNums[1]);
  console.log("arr: ", arr);
  return tile;
}

// uptMove
function upMove(tile) {
  upMoveTile(tile);
  upMergeTile(tile);
}

function upMoveTile(tile) {
  for (let i = 0; i < tile.length; i++) {
    const y = +tile[i].getAttribute("y");
    const x = +tile[i].getAttribute("x");
    for (let j = +y - 1; j >= 0; j--) {
      const isEmpty1 = arr[j][x] === 0;

      if (isEmpty1) {
        tile[i].style.setProperty("--y", j);
        tile[i].setAttribute("y", j);
        arr[j + 1][x] = 0;
        arr[j][x] = 1;
        continue;
      } else {
        break;
      }
    }
  }
}

function upMergeTile(tile) {
  for (let i = 0; i < tile.length; i++) {
    const y = +tile[i].getAttribute("y");
    const x = +tile[i].getAttribute("x");
    for (let j = +y - 1; j >= 0; j--) {
      const isEmpty1 = arr[y][j] === 0;

      const afterTile = document.querySelector(`.tile[x="${x}"][y="${j}"]`);

      upMoveTile(tile);
      if (+afterTile?.textContent === +tile[i].textContent && !isEmpty1) {
        setValueTile(afterTile, +afterTile.textContent * 2);
        tile[i].remove();
        arr[j + 1][x] = 0;
        continue;
      } else {
        break;
      }
    }
  }
}
// leftMove
function leftMove(tile) {
  leftMoveTile(tile);
  leftMergeTile(tile);
}

function leftMoveTile(tile) {
  for (let i = 0; i < tile.length; i++) {
    const y = +tile[i].getAttribute("y");
    const x = +tile[i].getAttribute("x");
    for (let j = +x - 1; j >= 0; j--) {
      const isEmpty1 = arr[y][j] === 0;

      if (isEmpty1) {
        tile[i].style.setProperty("--x", j);
        tile[i].setAttribute("x", j);
        arr[y][j + 1] = 0;
        arr[y][j] = 1;
        continue;
      } else {
        break;
      }
    }
  }
}

function leftMergeTile(tile) {
  for (let i = 0; i < tile.length; i++) {
    const y = +tile[i].getAttribute("y");
    const x = +tile[i].getAttribute("x");
    for (let j = +x - 1; j >= 0; j--) {
      const isEmpty1 = arr[y][j] === 0;

      const afterTile = document.querySelector(`.tile[x="${j}"][y="${y}"]`);

      leftMoveTile(tile);
      if (+afterTile?.textContent === +tile[i].textContent && !isEmpty1) {
        setValueTile(afterTile, +afterTile.textContent * 2);
        tile[i].remove();
        arr[y][j + 1] = 0;
        continue;
      } else {
        break;
      }
    }
  }
}
// rightMove
function rightMove(tile) {
  rightMoveTile(tile);
  rightMergeTile(tile);
}

function rightMoveTile(tile) {
  for (let i = 0; i < tile.length; i++) {
    const y = +tile[i].getAttribute("y");
    const x = +tile[i].getAttribute("x");
    for (let j = +x + 1; j < 4; j++) {
      const isEmpty1 = arr[y][j] === 0;

      if (isEmpty1) {
        tile[i].style.setProperty("--x", j);
        tile[i].setAttribute("x", j);
        arr[y][j - 1] = 0;
        arr[y][j] = 1;
        continue;
      } else {
        break;
      }
    }
  }
}

function rightMergeTile(tile) {
  for (let i = 0; i < tile.length; i++) {
    const y = +tile[i].getAttribute("y");
    const x = +tile[i].getAttribute("x");
    for (let j = +x + 1; j < 4; j++) {
      const isEmpty1 = arr[y][j] === 0;

      const afterTile = document.querySelector(`.tile[x="${j}"][y="${y}"]`);

      rightMoveTile(tile);
      if (+afterTile?.textContent === +tile[i].textContent && !isEmpty1) {
        setValueTile(afterTile, +afterTile.textContent * 2);
        tile[i].remove();
        arr[y][j - 1] = 0;
        continue;
      } else {
        break;
      }
    }
  }
}
// rightMove
function downMove(tile) {
  downMoveTile(tile);
  downMergeTile(tile);
}

function downMoveTile(tile) {
  for (let i = 0; i < tile.length; i++) {
    const y = +tile[i].getAttribute("y");
    const x = +tile[i].getAttribute("x");
    for (let j = +y + 1; j < 4; j++) {
      const isEmpty1 = arr[j][x] === 0;

      if (isEmpty1) {
        tile[i].style.setProperty("--y", j);
        tile[i].setAttribute("y", j);
        arr[j - 1][x] = 0;
        arr[j][x] = 1;
        continue;
      } else {
        break;
      }
    }
  }
}

function downMergeTile(tile) {
  for (let i = 0; i < tile.length; i++) {
    const y = +tile[i].getAttribute("y");
    const x = +tile[i].getAttribute("x");
    for (let j = +y + 1; j < 4; j++) {
      const isEmpty1 = arr[j][x] === 0;

      const afterTile = document.querySelector(`.tile[x="${x}"][y="${j}"]`);

      downMoveTile(tile);
      if (+afterTile?.textContent === +tile[i].textContent && !isEmpty1) {
        setValueTile(afterTile, +afterTile.textContent * 2);
        tile[i].remove();
        arr[j - 1][x] = 0;
        continue;
      } else {
        break;
      }
    }
  }
}
