let body     = document.querySelector( "body" );
let header   = document.createElement( "header" );
let h1       = document.createElement( "h1" );
let h2       = document.createElement( "h2" );
let section  = document.createElement( "section" );
const parrafos = [" Párrafo beforebegin "," Párrafo afterbegin "," Párrafo beforeend "," Párrafo afterend ",];
let sectionReference = section;
body.append( header, section );
header.append( h1, h2 );
h1.innerText = " Crear y agregar nodos ";
h2.innerText = " Modificando el DOM ";

for (let i = 0 ; i < 10 ; i++) {
    let parrafo = document.createElement( "p" );
    parrafo.id  = `parrafo${i}`;
    parrafo.classList.add( "parrafos" );
    if( i >=6 ){
        let parrafoTexto = parrafos[ i-6 ];
        parrafo.append( parrafoTexto );
    }else{
        let parrafoTexto = document.createTextNode( `Párrafo ${i}` );
        parrafo.append( parrafoTexto )
    }
    sectionReference.appendChild( parrafo );
}

//Prueba insertBefore
let parrafo0 = document.getElementById( "parrafo0" );
let parrafo2 = document.getElementById( "parrafo2" );;
//*parrafo2.classList.add('superParrafo')                 //*PROBANDO; si se agrego como segunda clase.
sectionReference.insertBefore( parrafo0, parrafo2 );

//Agregar segunda clase
let superParrafos = document.querySelectorAll('p')
superParrafos = [...superParrafos]
console.log(superParrafos)
superParrafos.forEach(p => p.classList.add('superParrafo'))

const insert = [ 'beforebegin', 'afterbegin', 'beforeend', 'afterend' ]
for (let i = 6; i < superParrafos.length; i++) {
    sectionReference.insertAdjacentElement(`${insert[i-6]}`, superParrafos[i]);   
}