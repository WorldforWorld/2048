import { createTile } from "./createTile.js";

export function resetGame(arr, gameOver) {
  const tiles = document.querySelectorAll(".tile");
  const cube = document.querySelector("#board");

  gameOver?.classList.remove("active");

  tiles.forEach(tile => tile.remove());
  cube.append(createTile(arr));
  cube.append(createTile(arr));
}
