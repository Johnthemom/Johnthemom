clickBox = document.querySelector('.click')
spinBox = document.querySelector('.spin')
moveBox = document.querySelector('.move')
dblclickBox = document.querySelector('.dblclick')
hoverBox = document.querySelector('.hover')

colors = ['blue', 'green', 'purple', 'red']
index = 0

clickBox.addEventListener('click', () => {
    clickBox.style.background = colors[index]
    index = index + 1
    if (index == colors.length){
        index = 0;
    }
    clickBox.style.color = 'white'
})

spinBox.addEventListener('click', () => {
    spinBox.classList.toggle('start')
})



x = 0;
y = 0;

document.addEventListener('keydown', (event) => {
    console.log(event.key)
})


document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowRight') {y = y + 10}
     if (event.key == 'ArrowUp'){x = x - 10}
     if (event.key == 'ArrowLeft') {y = y - 10}
     if (event.key == 'ArrowDown'){x = x + 10}
    moveBox.style.transform = `translate(${y}px, ${x}px)`
})

hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.height = "20px"
    hoverBox.style.width = "100px"
})

hoverBox.addEventListener('mouseleave', () => {
    hoverBox.style.height = "60px"
    hoverBox.style.width = "250px"
})

dblclickBox.addEventListener('dblclick', () => {
 dblclickBox.classList.toggle('fade')
})
