

const hoy = new Date(); // {}
let diaDeLaSemana = hoy.getDay(); // 0: Domingo, 1: Lunes ........
let diaDelMes = hoy.getDate(); // 0: Domingo, 1: Lunes ........


// console.log( { diaDeLaSemana } )

//Sin usar If, Else, o Switch, unicamente objetos
//Informe el dia de la semana

let dia = {
    0 : 'Domingo',
    1 : 'Lunes',
    2 : 'Martes',
    3 : 'Miercoles',
    4 : 'Jueves',
    5 : 'Viernes',
    6 : 'Sabado',
}

console.log(dia[diaDeLaSemana])
let dia2 = [ 'Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado', ];
console.log(dia2[diaDeLaSemana])

let today = 10
let dia3 = [ 'Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado', ];
console.log(dia3[today] || 'Dia no definido')

