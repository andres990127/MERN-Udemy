const nav = document.querySelector('.navegacion');

nav.addEventListener('click', () => {
    console.log('click en nav')
})

nav.addEventListener('mouseenter', () => {
    console.log('entrando al nav')
})

nav.addEventListener('mouseout', () => {
    console.log('saliendo del nav')
})

nav.addEventListener('dblclick', () => {
    console.log('Diste doble click')
})