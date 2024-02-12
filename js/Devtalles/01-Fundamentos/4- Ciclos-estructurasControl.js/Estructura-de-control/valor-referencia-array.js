

const frutas = [ 'Manzana', 'Pera', 'Piña' ];
console.time('Spread')
const otrasFrutas = [ ...frutas ];
console.timeEnd('Spread')
otrasFrutas.push('Mango');
console.table( { frutas , otrasFrutas });



const frutas2 = ["Manzana", "Pera", "Piña"];
console.time('Slice')
const otrasFrutas2 = frutas2.slice()
console.timeEnd('Slice')
otrasFrutas2.push("Mango");
console.table({ frutas2, otrasFrutas2 });


