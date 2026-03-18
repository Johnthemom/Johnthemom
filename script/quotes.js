let quote = document.querySelector('.quote')
let btn = document.querySelector('.btn')

let quotes = [
    "Hello world",
    "You got this",
    "Keep going",
    "Stay focused"
]

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length)
    quote.textContent = quotes[random]
})
