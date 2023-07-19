const producto = "Monitor de 20 Pulgadas";
const precio = '30 USD';

// Concatenar con metodo
console.log(producto.concat(precio));
console.log(producto.concat(' En descuento'));

// Concatenar con +
console.log(producto + ' tiene un precio de ' + precio);

// Concatenar con string templates
console.log(`${producto} tiene el precio de ${precio}`);