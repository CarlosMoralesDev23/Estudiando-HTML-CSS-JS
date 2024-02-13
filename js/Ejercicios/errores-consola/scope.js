
let mensaje = "hola"

function saludo() {
    console.log(`inicio de la función: ****  ${mensaje}  ****`)  // recibe el dato de la linea 2. 
    mensaje = "Hola mundo" // modifica el contenido de mensaje  a nivel global,  para evitarlo declararla nuevamente, dentro d ela fucnión. 
    console.log(`Se modifico el mensaje en la funcion: ****  ${mensaje}  ****`); // imprime el contenido modificado
}

saludo()

console.log(`Mensaje luego de pasar por la funcion: ****  ${mensaje}  ****`); // Imprime el contenido modificado de la funcion. 


//Importante resalta,  que para evitar que se modifique a nivel global,   debes declarar la variable mensaje nuevamente dentro de la función. 