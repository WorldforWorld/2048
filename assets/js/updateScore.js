export function updateScore(sum) {
  const score = document.querySelector(".score .count");
  const bestScore = document.querySelector(".best-score .count");
  score.textContent = sum + +score.textContent;
  bestScore.textContent = sum + +bestScore.textContent;
}
