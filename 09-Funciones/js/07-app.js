// Funciones que llaman otras funciones
function iniciarApp(){
    console.log('Iniciando app...')
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda función');
};

iniciarApp();