

const carros = [ 'Ford', 'Mazda', 'Honda', 'Toyota' ]

let i = 0

while (i < carros.length ) {
    console.log(carros[i])
    i++
}

/**
 * La condición en While debe ser true para ejecutarse
 * Undefined, null, false,     se consideran false
 * El ciclo nunca se ejecutaria, pero no arrojaria un errror,  a menos que lo induzcamos con un console.warn() o .error
 */


// El siguiente codigo es igual al de arriba, con otra sintaxis. 
// La condición evalua si i en carros todavia existe. 

i = 0
while ( carros[i] ) {
    if (i === 2) {
        break
    }
    console.log( carros[i] )
    i++
}


//cerrar ciclo infinito en chrome
// tres puntos,   more tools,  TaskManager, selecciona la tarea, end process,  cerrar todo. 


i = 0;
while (carros[i]) {
    if (i === 1) {
        i++
        continue;
    }
    console.log(carros[i]);
    i++;
}