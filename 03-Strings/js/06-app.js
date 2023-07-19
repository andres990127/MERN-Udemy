const producto = "Monitor de 20 Pulgadas";

// Para repetir un texto varias veces
const texto = ' en Promoción'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto}`);

// Dividir un string dado un separador en común creando un array
const actividad = 'Estoy aprendiendo JavaScript';
console.log(actividad.split(' '));

const hobbies = 'Leer, caminar, cocinar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(', '));

// Cómo obtener hashtags de un texto
const hashTag = 'Aprendiendo JavaScript #Udemy #Javascript #Data #UAO';
console.log(hashTag.slice(hashTag.indexOf("#")).split(' '));