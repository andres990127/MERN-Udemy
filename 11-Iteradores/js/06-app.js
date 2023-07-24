const carrito = [
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'Celular', precio: 900 },
    { nombre: 'Laptop', precio: 1500 },
];

carrito.forEach( (elemento, indice) => {
    console.log(indice + ': ' + elemento.nombre);
})

const result = carrito.map( (elemento) => {
    return elemento.nombre
})
console.log(result);