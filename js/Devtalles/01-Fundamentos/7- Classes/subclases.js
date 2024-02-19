class Persona {
    static _conteo = 0;
    static get getConteo() {
        return Persona._conteo + " Instancias";
    }
    static mensaje() {
        console.log(this.nombre);
        console.log("Hola a todos soy un metodo Static");
    }

    nombre = "";
    codigo = "";
    frase = "";
    comida = "";

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return this.comida;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi personaje es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}


class Heroe extends Persona{
    clan;

    constructor(nombre, codigo, frase, clan){
        super(nombre, codigo, frase)
        this.clan = clan
    }
}


// let spiderman = new Persona("Peter", "Spiderman", "El increible hombre araña");
let spiderman = new Heroe("Peter", "Spiderman", "El increible hombre araña");

console.log(spiderman)