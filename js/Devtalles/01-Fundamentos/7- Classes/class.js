class Persona {

    static _conteo = 0;
    static get getConteo(){
        return Persona._conteo + ' Instancias'
    }
    static mensaje(){
        console.log(this.nombre);
        console.log("Hola a todos soy un metodo Static")
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';
    
    constructor(nombre, codigo, frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++; 
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return this.comida
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi personaje es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

let spiderman = new Persona('Peter', 'Spiderman', 'El increible hombre araña');
let ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

spiderman.miFrase();
spiderman.setComidaFavorita = 'HotDogs'
console.log(spiderman)
console.log(spiderman.getComidaFavorita);

console.log(`Cuantas instancias se han creado:`, Persona._conteo)

console.log(Persona.getConteo)
console.log(Persona._conteo);
Persona.mensaje()


// JS  permite crear propiedades a la clase como si fuese un objeto literal
//!  No se recomienda porque no es un codigo limpio. 

Persona.nuevaPropiedadExterna = "Soy la propiedad Externa"
console.log( Persona.nuevaPropiedadExterna )
console.log( Persona )
//--------------------------------------------------------------





