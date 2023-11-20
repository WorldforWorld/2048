export function arrowDownMove(cubeArray) {
  sortArray(cubeArray);
  for (let i = cubeArray.length - 1; i > 0; i--) {
    for (let j = 0; j < cubeArray[i].length; j++) {
      if (cubeArray[i][j] === cubeArray[i - 1][j]) {
        cubeArray[i][j] *= 2;
        cubeArray[i - 1][j] = 0;
      }
    }
  }
  sortArray(cubeArray);
}
function sortArray(arr) {
  for (let j = 0; j < arr[0].length; j++) {
    let nonZeroIndex = arr.length - 1;

    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i][j] !== 0) {
        const number = arr[i][j];
        arr[i][j] = 0;
        arr[nonZeroIndex][j] = number;
        nonZeroIndex--;
      } else if (arr[i][j] === 0) {
        continue;
      } else {
        arr[nonZeroIndex][j] = arr[i][j];
        if (nonZeroIndex !== i) {
          arr[i][j] = 0;
        }
        nonZeroIndex--;
      }
    }
  }
}
