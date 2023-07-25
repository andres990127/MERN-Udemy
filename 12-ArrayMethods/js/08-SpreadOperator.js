const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Agregar un nuevo mes al array
const meses2 = [...meses, 'Agosto'];
console.log(meses2);

// Agregar un nuevo producto al carrito
const carrito2 = [ ...carrito, {nombre: 'Xbox One', precio: '800'}];
console.log(carrito2);