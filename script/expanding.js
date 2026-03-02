panels = document.querySelectorAll('.panel')

for (let i = 0; i < 5; i = i + 1;){
    panels[i].addEventListener('click',() => {
        panels[i].classList.add('active')
    })
}
