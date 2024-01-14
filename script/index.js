import { mostrarVentana, cerrarVentana } from "./rules.js";
import { pickedSpace, userPicked, pcPicked } from "./picked.js";
import { action, updateScore } from "./winner.js";
const button_rules = document.getElementById("rules");
button_rules.addEventListener("click", mostrarVentana);

const button_close = document.getElementsByClassName("ventanaBoton");
button_close[0].addEventListener("click", cerrarVentana);

/* Define winner */
const defineWinner = (user, pc) => {
    if (user === "rock" && pc === "scissors") {
        return "YOU WIN";
    } else if (user === "scissors" && pc === "paper") {
        return "user";
    } else if (user === "paper" && pc === "rock") {
        return "user";
    } else {
        return "pc";
    }
}
/* User Picked */
const options_picked = document.getElementById("options");

let selectedOption = () => {
        options_picked.classList.add("hiddenContent");
        document.getElementById("mainContent").appendChild(pickedSpace());
    }
const rock_picked = document.getElementById("rock");
rock_picked.addEventListener("click", () => {
    selectedOption();
    userPicked("rock");
    let pc = pcPicked("rock");
    action(defineWinner("rock", pc));
})
const paper_picked = document.getElementById("paper");
paper_picked.addEventListener("click", () => {
    selectedOption();
    userPicked("paper");
    let pc = pcPicked("paper");
    action(defineWinner("paper", pc));
})
const scissors_picked = document.getElementById("scissors");
scissors_picked.addEventListener("click", () => {
    selectedOption();
    userPicked("scissors");
    let pc = pcPicked("scissors");
    action(defineWinner("scissors", pc));
})

updateScore();


