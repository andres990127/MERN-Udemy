const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

// Concatenar varios arrays en 1 con 'Concat'
const resultado = meses.concat(meses2, meses3);
console.log(resultado);

// Concatenar varios arrays en 1 con 'Spread Operator'
const resultado2 = [...meses, ...meses2, ...meses3, 'Otro mes'];
console.log(resultado2);