
let personaje= {

    nombre : 'Tony Stark',
    codeName : 'Ironman',
    vivo: false,
    edad : 40,
    coords : {
        lat : 34.034,
        lng : -118.70
    },
    trajes : [ 'Mark I', 'Mark V', 'Hulkbuster' ],
    direccion : {
        zip : '10880, 90265',
        ubicacion: 'Malibu California'
    },
    'ultima-pelicula' : 'EndGame'
}

console.log(personaje)
console.log(`El nombre: ${personaje.nombre}`);
console.log(`Nombre por key-propiedad: ${personaje['nombre']}`);
console.log(`La edad: ${personaje.edad}`);
console.log(`La longuitud: ${personaje.coords.lng}`);
console.log(`La latitud: ${personaje.coords.lat}`);
console.log(`No. Trajes : ${personaje.trajes.length}`);
console.log(`Ultimo traje : ${personaje.trajes[personaje.trajes.length-1]}`);
const x = 'vivo';
console.log(`Vivo?: ${personaje[x]}`);
console.log(`Ultima pelicula es: ${personaje["ultima-pelicula"]}`);


console.log(`----MAS DETALLES----`);
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries( personaje );
console.log(entriesPares);
//retorna cada key y value como pares de objetos. 




//Hacer inmutable un objeto,   No basta conque se declare como constante
Object.freeze( personaje ); // bloquea las asignaciones directas
Object.freeze( personaje.trajes ); //bloquea elementos de los objetos, array
personaje.dinero = 1000000000;
personaje.casado = false;
console.log(personaje);

const propiedades = Object.getOwnPropertyNames( personaje );
const valores     = Object.values( personaje );
console.log( { propiedades, valores } )
