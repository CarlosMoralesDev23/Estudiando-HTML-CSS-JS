class Player {
    constructor(nombre, colorTraje, sexo, tipo = 'humano') {
        this._nombre = nombre;
        this._colorTraje = colorTraje;
        this._sexo = sexo;
        this._tipo = tipo;
    }

    saludar() {
        let mensaje = `Hola soy ${this._nombre}`;
        console.log(mensaje);
    }
    saltar() {}
    correr() {}

    get obtenerNombre() {
        return this._nombre;
    }

    set cambiarNombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get obtenerColorTraje() {
        return this._colorTraje;
    }

    set cambiarColorTraje(nuevoColorTraje){
        this._colorTraje = nuevoColorTraje
    }

    get obtenerSexo(){
        return this._sexo
    }

    set cambiarSexo(nuevoSexo){
        this._sexo = nuevoSexo
    }

    get obtenerTipo(){
        return this._tipo
    }

    set cambiarTipo(nuevoTipo){
        this._tipo = nuevoTipo
    }
}



class PlayerProtagonistas extends Player{
    constructor( nombre, colorTraje, sexo, colorGorro, tipo ){
        super(nombre, colorTraje, sexo, tipo );
        this._colorGorro = colorGorro;
    }
    get colorGorro(){
        return this.colorGorro
    }
    set cambiarColorGorro(nuevoColorGorro){
        this._colorGorro = nuevoColorGorro
    }
}
let mario = new PlayerProtagonistas('Mario', 'rojo', 'hombre', 'rojo')
let luigi = new PlayerProtagonistas('Luigi', 'verde', 'hombre', 'verde')

class PlayerPrincesa extends Player {
    constructor(nombre, colorVestido, sexo = 'mujer') {
        super(nombre, sexo);
        this._colorVestido = colorVestido
    }
    get colorVestido(){
        return this._colorVestido
    }
    set cambiarColorVestido(nuevoColorVestido){
        this._colorVestido = nuevoColorVestido
    }
}
let peach    = new PlayerPrincesa('Peach', 'rosado')
let daisy    = new PlayerPrincesa('Daisy', 'amarillo')
let rosalina = new PlayerPrincesa('Rosalina', 'celeste')

class PlayerVillanos extends Player {
    constructor(nombre, colorTraje, sexo, tipo){
        super(nombre, colorTraje, sexo, tipo);
    }
}
let bowser  = new PlayerVillanos('Bowser', 'ninguno', 'hombre', 'tortuga' )
let waluigi = new PlayerVillanos('Waluigi', 'morado', 'hombre' )
let reyBoo  = new PlayerVillanos('Rey Boo', 'blanco', 'hombre', 'fantasma')

class PlayerMascotas extends Player{
    constructor(nombre, colorTraje, colorPiel, sexo, tipo, colorGorra = 'ninguna'){
        super(nombre, colorTraje, sexo, tipo)
        this._colorPiel = colorPiel
        this._colorGorra = colorGorra
    }
    get obtenerColorPiel(){
        return this._colorPiel
    }
    set cambiarColorpiel(nuevoColorPiel){
        this._colorPiel = nuevoColorPiel
    }
    get obtenerColorGorra(){
        return this._colorGorra
    }
    set cambiarColorGorro(nuevoColorGorra){
        this._colorGorra = nuevoColorGorra
    }
}
let yoshi      = new PlayerMascotas('Yoshi', 'ninguno', 'verde', 'hombre', 'caballito')
let donkeyKong = new PlayerMascotas('Donkey Kong', 'ninguno', 'marron', 'hombre', 'Gorila')
let diddyKong  = new PlayerMascotas('Diddy Kong', 'ninguno', 'marron', 'hombre', 'Gorila', 'roja')


mario.saludar()
daisy.saludar()
waluigi.saludar()
diddyKong.saludar()

console.log()
console.log(luigi.obtenerNombre)
console.log(peach.obtenerNombre)
console.log(bowser.obtenerNombre)
console.log(yoshi.obtenerNombre)

console.log()
yoshi.cambiarTipo = 'humano'
console.log(yoshi._tipo)

console.log()
console.log(luigi._colorGorro)
luigi.cambiarColorGorro = 'azul'
console.log(luigi._colorGorro)

console.log()
console.log(rosalina._colorVestido)
rosalina.cambiarColorVestido = 'verde'
console.log(rosalina._colorVestido)

console.log()
console.log(bowser._colorTraje)
bowser.cambiarColorTraje = 'negro'
console.log(bowser._colorTraje)

console.log()
console.log(donkeyKong._colorPiel)
donkeyKong.cambiarColorpiel = 'amarillo'
console.log(donkeyKong._colorPiel)

console.log()
console.log(diddyKong._colorGorra)
diddyKong.cambiarColorGorro = 'negra'
console.log(diddyKong._colorGorra)