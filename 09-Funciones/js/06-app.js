// Parámetros con valores por defecto
function saludar(nombre = 'Pepito', apellido = 'Lopez'){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar();
saludar("Andrés", "Gutiérrez");