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

// Eliminar el ultimo elemento del arreglo
carrito.pop();

// Elimina el primer elemento del arreglo
carrito.shift();

// Elimina desde la posición dada (Primer parámetro), una cantidad de elementos (Segundo parámetro)
carrito.splice(1, 2);