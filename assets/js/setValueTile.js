export function setValueTile(tile, value) {
  const bgLightness = 100 - Math.log2(value) * 9;
  const textLightness = `${bgLightness < 50 ? 90 : 10}%`;

  tile.style.setProperty("--bg-lightness", `${bgLightness}%`);
  tile.style.setProperty("--text-lightness", textLightness);
  tile.textContent = value;
}
