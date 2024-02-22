
class Mascota{
    static cola = 'larga'
    static contadorMascota = 0 //utilidad de una propiedad static
    pelaje ='lacio'

    constructor(nombre, edad){
        this._nombre = nombre
        this._edad = edad
        this._numero = ++Mascota.contadorMascota

    }

    get numeroCreacion(){
        return this._numero
    }

    static saludo(){
        return 'moverla cola'
    }
}


let mascota1 = new Mascota('Boby', 5)
let mascota2 = new Mascota('Luky', 7)
let mascota3 = new Mascota('Danco', 9)

console.log(mascota1)
console.log(mascota1.cola)
console.log(Mascota.cola)
console.log(mascota1.pelaje)



console.log(mascota1._numero)
console.log(mascota3._numero)
console.log(mascota2._numero)

console.log(mascota1.saludo)
console.log(Mascota.saludo())

class Perro extends Mascota{

    //Hereda atributos Stactic
    constructor(nombre,edad, raza){
        super(nombre, edad)
        this._raza = raza
    }
    //Hereda metodos Static
}

console.log(Perro.cola)
console.log(Perro.saludo())
console.log(Perro.contadorMascota)

let perro1 = new Perro('Duky', 3, 'Dalmata')
console.log(Perro.contadorMascota)

