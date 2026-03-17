let quotes = [
    "Hello world",
    "You got this",
    "Keep going",
    "Stay focused"
];

let button = document.getElementById("btn");
let text = document.getElementById("quote");

button.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    text.textContent = quotes[random];
});
