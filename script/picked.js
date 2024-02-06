function pickedSpace() {
  let newContent = document.createElement("div");
  newContent.id = "step-2-3";
  newContent.className = "step23";
  newContent.innerHTML = `
    <h2 class="pickedTitle1">YOU PICKED</h2>
    <svg width="400" height="300" id="pickedUser">
      <circle cx="200" cy="150" r="80" fill="rgba(20, 40, 75, 0.8)"></circle>
    </svg>
    <div id="middleSection">
      <h2 id="user-message" class="sectionTitle">PFPPFPJFJFJFFJ FFF</h2>
      <button id="button-play" onclick="window.location.reload()">PLAY AGAIN</button>
    </div>
    <h2 class="pickedTitle2">THE HOUSE PICKED</h2>
    <svg width="400" height="300" id="pickedPC">
      <circle cx="200" cy="150" r="80" fill="rgba(20, 40, 75, 0.8)"></circle>
    </svg>`;
  return newContent;
}
function playAgain(){
  let pickedSpace = document.getElementById("step-2-3");
  pickedSpace.removeAttribute("class", "step23");
  pickedSpace.setAttribute("class", "step4");
  let middleSection = document.getElementById("middleSection");
  middleSection.classList.add("middleSection");
}
function userPicked(picked) {
  let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle"); // Crear elementos svg
  circle.setAttribute("cx", "200");
  circle.setAttribute("cy", "150");
  circle.setAttribute("r", "90");
  circle.setAttribute("fill", "white");
  circle.setAttribute("id", "circle-" + `${picked}`);
  circle.setAttribute("stroke-width", "20");
  let user = document.getElementById("pickedUser");
  let userPicked = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image"
  );
  userPicked.setAttribute("href", `./images/icon-${picked}.svg`);
  userPicked.setAttribute("x", "155");
  userPicked.setAttribute("y", "100");
  userPicked.setAttribute("class", "pickedIcon");
  user.appendChild(circle);
  user.appendChild(userPicked);
}

// Array con las opciones: rock, scissors, paper
const options = ["rock", "scissors", "paper"];
function pcPicked(userPicked) {
  console.log("User picked", userPicked);
  let lista = options.filter(item => item !== userPicked);
  console.log(lista);
  let picked = lista[Math.floor(Math.random() * lista.length)];
  console.log("PC picked", picked);
  let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle"); // Crear elementos svg
  circle.setAttribute("cx", "200");
  circle.setAttribute("cy", "150");
  circle.setAttribute("r", "90");
  circle.setAttribute("fill", "white");
  circle.setAttribute("id", "circle-" + `${picked}`);
  circle.setAttribute("stroke-width", "20");
  let pc = document.getElementById("pickedPC");
  let pcPicked = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image"
  );
  pcPicked.setAttribute("href", `./images/icon-${picked}.svg`);
  pcPicked.setAttribute("x", "155");
  pcPicked.setAttribute("y", "100");
  pcPicked.setAttribute("class", "pickedIcon");
  pc.appendChild(circle);
  pc.appendChild(pcPicked);
  playAgain();

  return picked;
}

export { pickedSpace, userPicked, pcPicked };
