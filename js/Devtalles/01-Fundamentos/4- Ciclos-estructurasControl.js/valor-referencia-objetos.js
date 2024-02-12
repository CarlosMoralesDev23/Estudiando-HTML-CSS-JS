let a = 10
let b = a;
a = 30
console.log({a, b})
//Los valores primitivos se pasan por valor


let juan = { nombre : 'Juan' }
let ana  = juan
console.log({juan, ana})
juan.nombre = 'Pedrito'
console.log({juan, ana})
// los objetos se pasan por referencia

const cambiaNombre = ( persona )=> {
    persona.nombre = 'Tony'
    return persona; 
}
let peter = { nombre : 'Peter'}
let tony = cambiaNombre( peter )
console.log({peter, tony})

//-------------- Spred ----------------------- 


let jose = { nombre : 'Jose' }
let margarita  = { ...jose }
margarita.nombre = 'Ana'
console.log( { jose, margarita } )
// De esta manera usando el operador spred pase una copia del objeto, y  no la referencia en memoria de jose

const cambiaNombre2 = ({ ...persona }) => {
    persona.nombre = "Tony";
    return persona;
};
let peter2 = { nombre: "Peter" };

let tony2 = cambiaNombre2(peter2);

console.log({ peter2, tony2 });