const carros = ["Ford", "Mazda", "Honda", "Toyota"];

let i = 0

do {
    console.log( carros[i] )
    i++
} while ( carros[i] );


i < carros.length; 

//Importante rescatar que si el contador i,  valiera 10,  tambien entra el do while,  porque la condicion se evalua al finalizar el codigo, entonces se imprimiria undefined. 


