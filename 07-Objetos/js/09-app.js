"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};

// Para impedir que se agreguen o eliminen llaves del objeto pero si deja editar sus valores
Object.seal(producto);


producto.disponible = false;
//producto.imagen = "Imagen.jpg";

console.log(producto);
console.log(Object.isSealed(producto));