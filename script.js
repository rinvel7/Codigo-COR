const button = document.querySelector(".btn");
const conteiner = document.querySelector(".conteiner");
const hex = document.querySelector(".hex");

const vectorHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function hexColor() {
    let numHex = "#";
    for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * vectorHex.length);
    numHex += vectorHex[random];    
    }
    conteiner.style.backgroundColor = numHex;
    hex.innerHTML = numHex;
}

button.addEventListener("click", hexColor);
