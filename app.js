const cube = document.getElementById("cube");

let cubeArray = [
  [0, 0, 0, 0],
  [2, 0, 0, 2],
  [2, 0, 0, 0],
  [0, 2, 2, 2],
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
  cube.innerHTML = "";

  if (e.key == "ArrowRight" || e.key == "KeyD") {
    for (let k = 0; k < cubeArray.length; k++) {
      for (let i = 0; i < cubeArray[k].length; i++) {
        if (cubeArray[k][i] === 0) {
          let count = cubeArray[k][i];
          cubeArray[k].splice(i, 1);
          cubeArray[k].unshift(count);
        }
      }
    }
    for (let k = 0; k < cubeArray.length; k++) {
      let arrRow = cubeArray[k];

      for (let i = arrRow.length - 2; i >= 0; i--) {
        let currentValue = arrRow[i + 1];
        if (currentValue === arrRow[i]) {
          arrRow[i + 1] = 0;
          arrRow[i] = currentValue + arrRow[i];
          if (i === 0) {
            break;
          }
          i--;
          currentValue = arrRow[i];
        }
      }
    }
    for (let k = 0; k < cubeArray.length; k++) {
      for (let i = 0; i < cubeArray[k].length; i++) {
        if (cubeArray[k][i] === 0) {
          let count = cubeArray[k][i];
          cubeArray[k].splice(i, 1);
          cubeArray[k].unshift(count);
        }
      }
    }

    addRandom();
    displayCube();
  }
  if (e.key == "ArrowLeft" || e.key == "KeyA") {
  }
  if (e.key == "ArrowDown" || e.key == "KeyS") {
  }
  if (e.key == "ArrowUp" || e.key == "KeyW") {
  }
}

function addRandom() {
  const positionI = Math.floor(Math.random() * 3);
  const positionJ = Math.floor(Math.random() * 3);
  if (cubeArray[positionI][positionJ] !== 0) {
    addRandom();
  } else {
    cubeArray[positionI][positionJ] = 2;
  }
}
