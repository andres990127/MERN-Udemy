const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Encontrar el indice de 'Abril'
const indice = meses.findIndex( mes => {
    return mes === 'Abril';
})
console.log(indice); // 3

// Encontrar si 'Celular' existe
const resultado = carrito.findIndex( producto => {
    return producto.nombre === 'Celular'
})
console.log(resultado);