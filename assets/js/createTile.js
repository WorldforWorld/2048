import { placeRandom } from "./placeRandom.js";
import { setValueTile } from "./setValueTile.js";

export function createTile(arr) {
  const tile = document.createElement("div");
  const [row, col, value] = placeRandom(arr);
  tile.classList.add("tile");
  setValueTile(tile, value);

  if (row !== undefined && col !== undefined && value !== undefined) {
    arr[[row, col][0]][[row, col][1]] = value;
    tile.style.setProperty("--y", row);
    tile.style.setProperty("--x", col);
    tile.setAttribute("y", row);
    tile.setAttribute("x", col);
    return tile;
  } else {
    return "";
  }
}
