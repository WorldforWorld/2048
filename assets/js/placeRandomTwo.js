export function placeRandomTwo(matrix) {
  let emptyCells = [];

  // Находим все пустые ячейки
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        emptyCells.push({ row: i, col: j });
      }
    }
  }

  // Если есть пустые ячейки, выбираем случайную и заменяем на 2
  if (emptyCells.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const randomCell = emptyCells[randomIndex];
    matrix[randomCell.row][randomCell.col] = 2;
  }
}
