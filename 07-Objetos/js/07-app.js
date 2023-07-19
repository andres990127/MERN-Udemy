const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};

// A pesar de que sea un const las propiedades son editables
producto.disponible = false;
delete producto. precio;