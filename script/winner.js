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
  if (winner == "pc") {
    user_message.textContent = "YOU LOSE";
    const current_score = getScore();
    const new_score = current_score - 1;
    setScore(new_score);
    updateScore();
  } else {
    user_message.textContent = "YOU WIN";
    const current_score = getScore();
    const new_score = current_score + 1;
    setScore(new_score);
    updateScore();
  }
}

export { action, updateScore };
