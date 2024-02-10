let a = 10;
var b = 10;
const c = 10;

let e = 10,
    f = 20,
    g = 30,
    h = 40,
    x = e + h;
    y = 'Hola',
    z = ' Spider-Man'

    const saludo = y + z


// esto es una mala practica se debe declarar con let ó cons
d = 20;

// c = 20  Esto da error por que las constantes no se pueden modificar

// Tanto let como var permiten modificar su valor
a = 30;
b = 50;

console.log(x);

// Mensaje Warning
console.warn(x);

// Mensaje error,  no es un error de codigo, es una mensaje que introducimos
console.error(x)


console.log(e)
console.log(f)
console.log(g)

console.log(`e ${e}`);
console.log(`f ${f}`);
console.log(`g ${g}`);

// Encerrando las variables entre llaves se imprime variable y su valor
console.log({e});
console.log({f});
console.log({g});



console.log(saludo)