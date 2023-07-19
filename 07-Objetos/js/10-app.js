const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};

const garantia = {
    compañia: 'Samsung',
    tiempo: '2 años',
    sede: 'Bogotá'
}

const resultado = Object.assign(producto, garantia);
console.log(resultado);

// Spread operator o Rest operator
const resultado2 = { ...producto, ...garantia };
console.log(resultado2);