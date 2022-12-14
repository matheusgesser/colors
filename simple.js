const colors = ["white", "black", "red", "green", "blue", "silver", "purple", "fuchsia", "maroon", "lime", "olive", "yellow", "navy", "teal", "aqua"];

const botão = document.getElementById('btn');
const color = document.querySelector(".color");

botão.addEventListener('click', function(){
    number = randomNumber();
    console.log(number);
    color.textContent = colors[number];
    document.querySelector(".container").style.background = colors[number];
})

function randomNumber() {
    return Math.floor(Math.random() * colors.length)
}