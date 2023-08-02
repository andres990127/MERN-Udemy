const enlace = document.createElement('a'); // Se crea un nuevo elemento HTML
enlace.textContent = 'Nuevo Enlace'; // Se le asigna un texto al nuevo elemento
enlace.href= '/nuevo-enlace';
enlace.target= '_blank'
console.log(enlace);

const navegacion = document.querySelector('.navegacion'); // Se obtiene el elemento en donde vamos a insertar el nuevo elemento HTML
//navegacion.appendChild(enlace); // Se inserta el elemento (Queda al final)
navegacion.insertBefore(enlace, navegacion.children[1]); // Se inserta antes de la posición 1
