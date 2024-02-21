
class Rectangulo{

    area = 0;

    constructor(base = 0, altura = 0){
        this._base = base;
        this._altura = altura;

        this._area = base * altura
    
    }
    #calcularArea(){
        console.log( this._area * 2)
    }


}



const rectangulo1 = new Rectangulo( 10, 15 )

console.log(rectangulo1._area);