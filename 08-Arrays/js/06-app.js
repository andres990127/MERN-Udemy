const carrito = [];

// Definir producto
const producto = {
    nombre:'Monitor',
    precio: 200
}

// Definir producto2
const producto2 = {
    nombre:'Celular',
    precio: 300
}

let resultado = [...carrito, producto]
resultado = [...resultado, producto2]

console.log(resultado);