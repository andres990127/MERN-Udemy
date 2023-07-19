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

// Añade al final del arreglo
carrito.push(producto);

// Añade al inicio del arreglo
carrito.unshift(producto2);

console.log(carrito);