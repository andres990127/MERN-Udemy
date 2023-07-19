const carrito = [
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'Celular', precio: 900 },
    { nombre: 'Laptop', precio: 1500 },
];

const resultado = carrito.map((producto) =>{
    return producto.nombre;
})

console.log(resultado);