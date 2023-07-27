// Obtener datos de elementos HTML con Javascript

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);
console.log(encabezado.innerText); // Puede ser afectado por CSS
console.log(encabezado.textContent);
console.log(encabezado.innerHTML); // Trae el HTML
console.log(document.querySelector('.contenido-hero h1').textContent);

// Editar elementos HTML con Javascript
document.querySelector('.contenido-hero h1').textContent = 'New Header';