function pickedSpace () {
    let newContent = document.createElement('div');
    newContent.id = 'step-2-3';
    newContent.className = 'step23';
    newContent.innerHTML = `
    <h2 class="pickedTitle1">YOU PICKED</h2>
    <svg width="256" height="300" id="pickedUser">
      <circle cx="128" cy="150" r="100" fill="rgba(20, 40, 75, 0.8)"></circle>
    </svg>
    <h2 class="pickedTitle2">THE HOUSE PICKED</h2>
    <svg width="256" height="300" id="pickedPC">
      <circle cx="128" cy="150" r="100" fill="rgba(20, 40, 75, 0.8)"></circle>
    </svg>`
    return newContent
}

let circle_color = {
  "rock": "hsl(349, 71%, 52%);",
  "paper": "hsl(230, 89%, 62%);",
  "scissors": "hsl(39, 89%, 49%);",

}
function userPicked (picked) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle"); // Crear elementos svg
    circle.setAttribute("cx","128");
    circle.setAttribute("cy","150");
    circle.setAttribute("r","100");
    circle.setAttribute("fill","white");
    circle.setAttribute("id","circle-"+`${picked}`);
    circle.setAttribute("stroke-width","20");
    let user = document.getElementById('pickedUser');
    let userPicked = document.createElementNS("http://www.w3.org/2000/svg",'image');
    userPicked.setAttribute("href",`./images/icon-${picked}.svg`);
    userPicked.setAttribute("x","70");
    userPicked.setAttribute("y","90");
    userPicked.setAttribute("class", 'pickedIcon')
    user.appendChild(circle);
    user.appendChild(userPicked);
}

// Array con las opciones: rock, scissors, paper
const options = ["rock", "scissors", "paper"];
function pcPicked () {
  let picked = options[Math.floor(Math.random() * options.length)];
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle"); // Crear elementos svg
    circle.setAttribute("cx","128");
    circle.setAttribute("cy","150");
    circle.setAttribute("r","100");
    circle.setAttribute("fill","white");
    circle.setAttribute("id","circle-"+`${picked}`);
    circle.setAttribute("stroke-width","20");
    let pc = document.getElementById('pickedPC');
    let pcPicked = document.createElementNS("http://www.w3.org/2000/svg",'image');
    pcPicked.setAttribute("href",`./images/icon-${picked}.svg`);
    pcPicked.setAttribute("x","70");
    pcPicked.setAttribute("y","90");
    pcPicked.setAttribute("class", 'pickedIcon')
    pc.appendChild(circle);
    pc.appendChild(pcPicked);

}


export {
    pickedSpace,
    userPicked,
    pcPicked
}