class Persona {

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';
    
    constructor(nombre, codigo, frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
    }

    setComidaFavorita(comida){
        this.comida = comida;
    }

    quienSoy(){
        console.log(`Mi nombre es ${this.nombre} y mi el nombre de mi personaje es ${this.codigo}`)
    }

    fraseFavorita(){
        console.log(this.quienSoy)
        console.log(`Mi frase favorita es ${this.frase} y me encanta comer ${this.comida}`)
    }
}

const spiderman = new Persona('Peter', 'Spiderman', 'El increible hombre araña', 'Hamburguer');

console.log(spiderman)