const fher = {
    nombre : 'Fernando',
    edad : 30,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`)
    }
}

const pedro = {
    nombre: "Pedro",
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    },
};

fher.imprimir()

//--------------------------------------

function Persona(nombre, edad) {
    console.log('Se ejecuto la funcion Persona')

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
    
}

const maria = new Persona( 'Maria', 32 )
const melisa = new Persona( 'Melisa', 35)
maria.imprimir()
melisa.imprimir()



