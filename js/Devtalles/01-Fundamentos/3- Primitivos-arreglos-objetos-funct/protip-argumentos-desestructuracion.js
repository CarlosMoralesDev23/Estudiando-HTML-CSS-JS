const crearPersona = ( nombre, apellido) => ({ nombre, apellido });
let persona1 = crearPersona('Carlos', 'Morales');
console.log(persona1);


const imprimeArgumentos = ( edad, ...arg ) => {
    // console.log({ edad, arg})

    //En una funtcion flecha pasamos los arguments por referencia para luego operarlos como un objeto.

    //No puede haber argumentos luego de ...arg

    //Si paso un argumento antes de ...arg,  este se debe separar de args

    return arg
};
const argumentos = imprimeArgumentos(10, true, false, 'Fernando', 'Hola');
console.log({ argumentos })



