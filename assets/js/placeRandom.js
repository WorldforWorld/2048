export function placeRandom(arr) {
  const ITEM = 4;
  const x = Math.floor(Math.random() * ITEM);
  const y = Math.floor(Math.random() * ITEM);
  const nums = [y, x];

  if (arr[y][x] === 0) {
    return nums;
  } else {
    return placeRandom(arr);
  }
}
