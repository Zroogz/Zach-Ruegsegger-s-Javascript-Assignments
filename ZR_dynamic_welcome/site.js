const h1 = document.querySelector('h1')

h1.addEventListener('mouseover', () => {
    h1.style.backgroundColor = 'red'
})

h1.addEventListener('mouseout', () => {
    h1.style.backgroundColor = 'white'
})

