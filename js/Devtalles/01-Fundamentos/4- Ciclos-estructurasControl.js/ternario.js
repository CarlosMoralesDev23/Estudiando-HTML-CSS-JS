
/**
* Dias de la semana abrimos a las 11,
* Pero los fines de semana abrimos a las 9
*/

// Entra a un sitio web, para consultar si esta abierto hoy... 

let dia = 6;
let horaActual = 12

let horaApertura; 
let mensaje; 

if ( [0,6].includes(dia) ){
    console.log('Fin de semana')
    horaApertura = 9
}else{
    console.log('Dia de semana')
    horaApertura = 11
};

if (horaActual >= horaApertura){
    mensaje = 'Esta abierto'
}else{
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`
}
console.log({ horaApertura, mensaje })



console.warn('Ternario')
horaApertura = ( [0,6].includes( dia ) ? 9 : 11 )
dia = horaApertura === 9 ? 'Fin de semana' : 'Dia de semana'
mensaje = horaActual>=horaApertura ? 'Esta abierto' : 'Esta cerrado'
console.log({ dia, horaApertura, mensaje})
console.log(`Es ${dia}, abrimos a las ${horaApertura} y ya ${mensaje}`)