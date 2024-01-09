export function updateScore(sum, isTryAgain = false) {
  const score = document.querySelector(".score .count");
  const bestScore = document.querySelector(".best-score .count");
  const result = isTryAgain ? 0 : sum + +score.textContent;
  score.textContent = result;
  if (!isTryAgain) {
    const volumeScore = +score.textContent;
    const volumeBestScore = +bestScore.textContent;
    if (volumeScore > volumeBestScore) {
      localStorage.setItem("bestScore", result);
      bestScore.textContent = result;
    }
  } else {
    const bestScoreStorage = localStorage.getItem("bestScore");
    bestScore.textContent = bestScoreStorage === null ? 0 : bestScoreStorage;
  }
}
