// querySelector solo retorna el 1er elemento
const card = document.querySelector('.card'); // Para clases
console.log(card);

// Podemos tener selectores especificos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Seleccionar elemento por ID
const formulario = document.querySelector('#formulario'); // Para ID
console.log(formulario);

// Seleccionar elementos HTML
const navegacion = document.querySelector('nav'); // Para elementos HTML
console.log(navegacion);