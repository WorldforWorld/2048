import { placeRandom } from "./placeRandom.js";
import { setValueTile } from "./setValueTile.js";

export function createTile(arr) {
  const value = Math.random() > 0.75 ? 4 : 2;
  const tile = document.createElement("div");
  tile.classList.add("tile");
  setValueTile(tile, value);
  const randomNums = placeRandom(arr);
  if (randomNums !== undefined) {
    arr[randomNums[0]][randomNums[1]] = value;
    tile.style.setProperty("--y", randomNums[0]);
    tile.style.setProperty("--x", randomNums[1]);
    tile.setAttribute("y", randomNums[0]);
    tile.setAttribute("x", randomNums[1]);
    return tile;
  }
}
