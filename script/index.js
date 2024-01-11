import { mostrarVentana, cerrarVentana } from "./rules.js";
import { pickedSpace, userPicked, pcPicked } from "./picked.js";

const button_rules = document.getElementById("rules");
button_rules.addEventListener("click", mostrarVentana);

const button_close = document.getElementsByClassName("ventanaBoton");
button_close[0].addEventListener("click", cerrarVentana);

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
    pcPicked();
})
const paper_picked = document.getElementById("paper");
paper_picked.addEventListener("click", () => {
    selectedOption();
    userPicked("paper");
    pcPicked();
})
const scissors_picked = document.getElementById("scissors");
scissors_picked.addEventListener("click", () => {
    selectedOption();
    userPicked("scissors");
    pcPicked();
})
// const options_picked = document.getElementById("options");
// options_picked.addEventListener("click", () => {
//     options_picked.classList.add("hiddenContent");
//     document.getElementById("mainContent").appendChild(pickedSpace());
// })

