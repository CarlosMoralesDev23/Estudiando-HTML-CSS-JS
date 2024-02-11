
// Los METODOS son funciones que vienen interna d elos arreglos
//Se ejecutan colocandoles un  ()

// Las PROPIEDADES son como una variable que viene dentro de todos los arreglos

let juegos = ['Zelda', 'Mario', 'Metroid', 'Crash'];

console.log(`Largo del objeto juegos =  ${juegos.length}`);

let primero = juegos[ 2 -2 ];
console.log(primero);

let ultimo = juegos[ juegos.length -1 ];
console.log(ultimo);

console.log('Aplico un forEach para imprimir todos los elementos');
juegos.forEach( (elemento, indice, arr ) => {
    console.log({ elemento, indice, arr})
});


    `Al aplicar .push se agrega un elemento a lo ultimo, devuelve el largo del Array`
let nuevaLonguitud = juegos.push( 'F-Zero' ); 
console.log( { nuevaLonguitud, juegos } );


    `Al aplicar .unShift se agrega un elemento al inicio, devuelve el largo del array`
nuevaLonguitud = juegos.unshift("Fire Emblem");
console.log({ nuevaLonguitud, juegos });



    `Al aplicar .pop se borra el ultimo elemento, devuelve el largo del array`
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });



let pos = 1;
console.log( juegos );
let juegosBorrados= juegos.splice( pos, 2);
console.log( {juegos, juegosBorrados } );


    `Buscar por el indice de un elemento, por el nombre del mismo`
let metroidIndex = juegos.indexOf('Metroid')
console.log(`El indice de Metroid es: ${metroidIndex}`)

console.log(`metroid con minuscula no existe por eso indexOf, regresa: ${juegos.indexOf('metroid')}`)

