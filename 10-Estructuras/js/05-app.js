const metodoPago = 'efectivo';

switch(metodoPago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;

    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;

    default:
        console.log('Aún no has seleccionado un método de pago');
        break;
}