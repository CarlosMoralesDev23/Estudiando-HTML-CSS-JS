function saludar(nombre) {
    console.log( arguments )
    console.log(`Hola soy la function ${nombre}`)
};
saludar("Tradicional", 34, true, "Argentina");


const saludar2 = function(nombre){
    console.log(`Hola soy la function ${nombre}`)
};
saludar2("Anonima");


let saludar3 = (nombre)=> {
    console.log(`Hola soy la function ${nombre}`);
};
saludar3("Flecha;");

let saludar4 = nombre => {
    console.log(`Hola soy la function ${nombre}`);
}
saludar4("Flecha sin parentesis;");

let saludar5 = nombre => console.log(`Hola soy la function ${nombre}`);
saludar5("Flecha sin parentesis ni llaves;");




let multipleDatos = ()=> {

}

multipleDatos('Carlos', 34, true, 'Argentina')