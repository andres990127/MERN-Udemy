// Para iterar sobre objetos se usa el for..in

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

// for( let elemento in automovil ){
//     console.log(`${automovil[elemento]}`);
// }

for( let [llave, valor] of Object.entries(automovil) ){
    console.log(valor);
    console.log(llave);
}