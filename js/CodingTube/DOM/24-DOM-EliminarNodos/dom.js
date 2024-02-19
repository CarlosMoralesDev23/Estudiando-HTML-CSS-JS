let body     = document.querySelector( "body" );
let header   = document.createElement( "header" );
let h1       = document.createElement( "h1" );
let h2       = document.createElement( "h2" );
let section  = document.createElement( "section" );
let sectionReference = section;
body.append( header, section );
header.append( h1, h2 );
h1.innerText = " Eliminar nodos ";
h2.innerText = " Modificando el DOM ";

for (let i = 0 ; i < 5 ; i++) {
    let parrafo = document.createElement( "p" );
    parrafo.id  = `parrafo${i}`;
    parrafo.classList.add( "parrafos" );
    let parrafoTexto = document.createTextNode( `Párrafo ${i}` );
    parrafo.append( parrafoTexto )
    sectionReference.appendChild( parrafo );
}

let parrafo0 = document.getElementById( "parrafo0" );
let parrafo2 = document.getElementById( "parrafo2" );
let parrafo3 = document.getElementById( "parrafo3" );
let parrafo5 = document.createElement( "p" );
parrafo5.id = 'parrafo5'
parrafo5.innerText = 'Nuevo Párrafo 5'

section.removeChild(parrafo2)
parrafo0.remove()

section.replaceChild(parrafo5, parrafo3)

//Event Listener
parrafo5.addEventListener('click', ()=>{
    parrafo5.innerHTML = 'Ahora soy SUPER PARRAFO'
})




