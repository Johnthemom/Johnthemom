const screens = document.querySelectorAll('.screen')
const startBtn = document.getElementById('start-btn')
const chooseBtns = document.querySelectorAll('.choose-insect-btn')
const gameContainer = document.querySelector('.game-container')
const scoreEl = document.getElementById('score')
const timeEl = document.getElementById('time')
const messageEl = document.getElementById('message')

let seconds = 0
let score = 0
let selectedInsect = {}

function showScreen(index) {
    screens.forEach(screen => screen.classList.remove('active'))
    screens[index].classList.add('active')
}

/* START BUTTON */
startBtn.addEventListener('click', () => {
    showScreen(1)
})

/* CHOOSE INSECT */
chooseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')

        selectedInsect = {
            src: img.src,
            alt: img.alt
        }

        showScreen(2)
        startGame()
    })
})

function startGame() {
    setTimeout(createInsect, 1000)
    setInterval(increaseTime, 1000)
}

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')

    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`

    insect.innerHTML = `
        <img src="${selectedInsect.src}" alt="${selectedInsect.alt}"
        style="transform: rotate(${Math.random() * 360}deg)">
    `

    insect.addEventListener('click', () => catchInsect(insect))

    gameContainer.appendChild(insect)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight

    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100

    return { x, y }
}

function catchInsect(insect) {
    increaseScore()
    insect.classList.add('caught')

    setTimeout(() => insect.remove(), 500)

    addInsects()
}

function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

function increaseScore() {
    score++
    scoreEl.innerText = `Score: ${score}`

    if (score === 30) {
        messageEl.classList.add('visible')
    }
}

function increaseTime() {
    seconds++

    let m = Math.floor(seconds / 60)
    let s = seconds % 60

    if (m < 10) m = `0${m}`
    if (s < 10) s = `0${s}`

    timeEl.innerText = `Time: ${m}:${s}`
}
