const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', ()=>{
    console.log('Escribiendo.');
})

busqueda.addEventListener('blur', ()=>{
    console.log('Quitando foco del buscador.'); // Especial para validaciones de campos
})

busqueda.addEventListener('input', (e)=>{
    console.log(e.target.value); // Especial para saber qué se está escribiendo en el buscador
})