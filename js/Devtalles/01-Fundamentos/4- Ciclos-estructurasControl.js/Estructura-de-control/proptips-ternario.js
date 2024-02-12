
const elMayor = ( a, b ) => ( a > b ) ? a : b

console.log( elMayor(20, 15))

const tieneMenbresia = ( miembro ) => (miembro) ? '2 Dolares' : '10 Dolares'
console.log(tieneMenbresia(false))

const amigo = false;
const amigosArrr = [
    'Peter',
    'Tony',
    'Dr. Strange', 
    amigo ? 'Thor': 'Loki',
    (()=> 'Nick Fury')(), //Function autoinvocada,
    elMayor(50 ,75)
]
console.log(amigosArrr)


console.warn('Notas de la clase')
const nota = 65;
const grado =   nota >= 95 ? 'A':
                nota >= 85 ? 'B':
                nota >= 75 ? 'C': 'F'

                console.log({ nota, grado })