const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: '1kg',
        medida: '1m'
    }
};

const { nombre, informacion, informacion: { peso } } = producto; 

console.log(nombre);
console.log(informacion);
console.log(peso);