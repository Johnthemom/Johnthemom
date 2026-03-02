panels = document.querySelectorAll('.panel')

for(i = 0; i < 5; i = i + !;){
    panels[i].addEventListener('click',() => {
        panels[i].classList.add('active')
    })
}
