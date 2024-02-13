// Resolver problemas de referencia de variable

//Error tipico
//ReferenceError: *identificador* is not defined


console.log(mensaje)

function maostrarSaludo() {
    var mensaje = "hola... este mensaje se ejecuta dentro de una funcion"
    console.log(mensaje)
    
}

console.log( mensaje ) //ReferenceError: *identificador* is not defined

// ESTO SE RESUELVE   declarando la variable mensaje por fuera de la funcion,  asi sera de uso global. 
// La puedo incluso volver a declarar dentro de la funcion pero esta pasa a ser solo d euso  dentro de la funcion. 



