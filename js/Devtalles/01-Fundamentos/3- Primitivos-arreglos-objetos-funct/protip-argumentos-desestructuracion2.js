const crearPersona = ( nombre, apellido) => ({ nombre, apellido });
const { nombre : nuevoNombre} = crearPersona('Carlos', 'Morales');
console.log(nuevoNombre)



const imprimeArgumentos = ( edad, ...arg ) => {
    return arg
};
const [casado, vivo, nombre] = imprimeArgumentos(10, true, false, 'Fernando', 'Hola');
console.log({casado})




let personaje = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: false,
    edad: 40,
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad}) => {
    console.log({nombre}), 
    console.log({codeName}), 
    console.log({vivo}), 
    console.log({edad})
}

console.log(imprimePropiedades(personaje))