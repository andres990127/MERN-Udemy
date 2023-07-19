"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};

// Para impedir que se editen valores, agregen o eliminen llaves del objeto
Object.freeze(producto);

/*
producto.disponible = false;
producto.imagen = "Imagen.jpg";
*/

console.log(producto);
console.log(Object.isFrozen(producto));