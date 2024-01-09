import { resetGame } from "./resetGame.js";

export function displayGameOver(arr) {
  const gameOver = document.querySelector(".game-over");
  const button = gameOver.querySelector(".try-again");

  gameOver.classList.add("active");

  button.addEventListener("click", () => {
    resetGame(arr, gameOver);
  });
  window.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      resetGame(arr, gameOver);
    }
  });
}
