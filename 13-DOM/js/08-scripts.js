const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children); // Obtener elementos hijos de un elemento
console.log(navegacion.children[0]); 

console.log(navegacion.parentElement); // Obtener elemento padre de un elemento
console.log(navegacion.parentElement.parentElement); // Obtener elemento abuelo de un elemento

console.log(navegacion.nextElementSibling); // Obtener elementos hermanos de un elemento