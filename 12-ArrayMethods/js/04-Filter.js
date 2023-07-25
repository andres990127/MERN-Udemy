const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Encontrar todos los productos que tengan un precio mayor a 400
let resultado;

resultado = carrito.filter( producto => {
    return producto.precio > 400;
})
console.log(resultado); // Retorna un array de los objetos encontrados