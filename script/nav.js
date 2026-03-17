nav = document.querySelector('.nav')

window.addEventListener('scroll', () => {
    console.log(scrollY)
    if (scrollY > 500){
        nav.classList.add('active')
    }
    else {
        nav.classList.remove('active')
    }
})
