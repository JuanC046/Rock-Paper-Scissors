// Obtén la puntuación almacenada en localStorage
const getScore = () => {
  const score = localStorage.getItem("Score");
  return score ? parseInt(score, 10) : 0;
};

// Establece la puntuación en localStorage
const setScore = (new_score) => {
  localStorage.setItem("Score", new_score.toString());
};

// Actualiza y muestra la puntuación en la interfaz de usuario
const updateScore = () => {
  const score_element = document.getElementById("score");
  score_element.textContent = getScore();
};


function action(winner) {
  const user_message = document.getElementById("user-message");
  let new_score;
  const current_score = getScore();
  if (winner === "pc") {
    user_message.textContent = "YOU LOSE";
    new_score = current_score - 1;
  } else {
    user_message.textContent = "YOU WIN";
    new_score = current_score + 1;
  }
  setScore(new_score);
  updateScore();
}

export { action, updateScore };
