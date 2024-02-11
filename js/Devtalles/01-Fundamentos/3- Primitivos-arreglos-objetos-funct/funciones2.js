function saludar() {
    return 1000
    console.log("Esto no se ejecutara, porque esta despues del return")
};

let retorno1 = saludar();
console.log(retorno1);
console.log(saludar());

function dosRetornos() {
    return [1, 2]    
};

resultadoDosRetornos = dosRetornos();
console.log(resultadoDosRetornos[0], resultadoDosRetornos[1]);


const sumar = (a, b) => a + b;
let suma1 = sumar(1, 2);
console.log(suma1);

let numAleatorio = ()=> Math.random(); 
console.log(numAleatorio())
console.log(numAleatorio())
console.log(numAleatorio())