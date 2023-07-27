// Modificar CSS con Javascript
const encabezado = document.querySelector('h1');
encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';

// Añadir y eliminar clases de elementos HTML
const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('card');
console.log(card);