// downMove
function downMove(tile) {
  downMoveTile(tile);
  downMergeTile(tile);
}

function downMoveTile(tile) {
  for (let i = 0; i < tile.length; i++) {
    const x = +tile[i].getAttribute("x");
    const y = +tile[i].getAttribute("y");
    for (let j = +y + 1; j < 4; j++) {
      const isEmpty1 = arr[j][x] === 0;

      if (isEmpty1) {
        tile[i].style.setProperty("--y", j);
        tile[i].setAttribute("y", j);
        arr[j - 1][x] = 0;
        arr[j][x] = 1;
      } else {
        break;
      }
    }
  }
}

function downMergeTile(tile) {
  for (let i = 0; i < tile.length; i++) {
    const x = +tile[i].getAttribute("x");
    const y = +tile[i].getAttribute("y");
    for (let j = +y + 1; j < 4; j++) {
      const isEmpty1 = arr[y][j] === 0;

      const afterTile = document.querySelector(`.tile[x="${x}"][y="${j}"]`);

      if (+afterTile?.textContent === +tile[i].textContent && !isEmpty1) {
        downMoveTile(tile);
        setValueTile(afterTile, +afterTile.textContent * 2);
        tile[i].remove();
        arr[j - 1][x] = 0;
      } else {
        break;
      }
    }
  }
}
