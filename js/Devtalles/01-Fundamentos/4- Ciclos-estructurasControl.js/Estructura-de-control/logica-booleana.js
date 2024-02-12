
const regresaTrue = ()=> {
    console.log("Regresa True")
    return true
}

const regresaFalse = ()=> {
    console.log("Regresa False")
    return false
}

console.warn(' Not o la negación ')
console.log( true )
console.log( !true )
console.log( !false )
console.log( !regresaFalse ) //true,  estoy negando lo que regresa la funcion que era false, ahora es true

console.log("============================")
console.log( regresaFalse() && regresaTrue() ); // AND, cumplir ambas,  al ser la primera false ya la segunda no se ejecuta. 
console.log( regresaTrue() && regresaFalse() ); // AND, se ejecutan ambas porque la primera fue true 

regresaTrue() && regresaFalse()

console.warn('Asignaciones')

const soyUndefined = undefined;
const soyNull      = null;
const soyFalso     = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy false';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log( { a1, a2, a3, a4, a5 } )