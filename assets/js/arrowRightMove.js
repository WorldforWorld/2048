export function arrowRightMove(cubeArray) {
  for (let k = 0; k < cubeArray.length; k++) {
    sortArray(cubeArray[k]);

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

    sortArray(cubeArray[k]);
  }
}

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let count = arr[i];
      arr.splice(i, 1);
      arr.unshift(count);
    }
  }
}
