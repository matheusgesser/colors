const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const botão = document.getElementById('btn');
const color = document.querySelector(".color");

botão.addEventListener('click', function(){
    hex = randomHex();
    console.log(hex);
    color.textContent = hex;
    document.querySelector(".container").style.background = hex;
})

function randomHex() {
    const hexGerado = [];
    for (let i=0; i<6; i++) {
        hexGerado.push(hexCode[(Math.floor(Math.random() * hexCode.length))]);
    }
    return "#" + String(hexGerado).replace(/,/g, "");
}