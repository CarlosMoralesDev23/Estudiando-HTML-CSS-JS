
const arr = new Array( 15 );
console.log( arr );

const arr2 = [ ];
console.log( arr2 );

let videoJuegos = [ 'Mario', 'Megaman', 'Pokemon'];
console.log( videoJuegos );
console.log( videoJuegos[0] );

let arregloCosas = [
    true,
    123,
    'Fernando',
    1+2,
    function(){},
    ()=>{},
    [ 'x', 'Megaman', 'Zero', 'Doctor', ['Dr. Willy', 'Woodman'], 'Soy el ultimo elemento'],
    { a : 1},
    // esto es un objeto literal
];

console.log( arregloCosas );
console.log( arregloCosas[0] )
console.log( arregloCosas[1] )
console.log( arregloCosas[2] )
console.log( arregloCosas[3] )
console.log( arregloCosas[4] )
console.log( arregloCosas[5] )
console.log( arregloCosas[6][3] )
console.log( arregloCosas[6][4] )
console.log( arregloCosas[6][4][0] )
console.log( arregloCosas[6][4][1] )

console.log(`Lenght -1`)
console.log( arregloCosas[6].length-1) //Eso me dice la cantidad de elementos del arreglo. 

console.log( arregloCosas[6][arregloCosas[6].length-1]) //Esto me imprime el ultimo elemento del arreglo ubicado en la posicion 6. 

