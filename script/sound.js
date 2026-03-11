buttons = document.querySelector('.buttons')
applause = document.querySelector('.applause')
boo = document.querySelector('.boo')
btn = document.createElement('button')
btn.innerText = "Applause"
btn.classList.add('btn')
btn.addEventListener('click', () => {
    applause.play()
})
buttons.appendChild(btn)
