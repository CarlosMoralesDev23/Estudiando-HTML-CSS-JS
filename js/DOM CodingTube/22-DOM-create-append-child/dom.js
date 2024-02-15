let body = document.querySelector("body");

//Crear Elementos
let header = document.createElement("header");
let h1 = document.createElement("h1");
h1.innerText = "Crear y agregar nodos";
let h2 = document.createElement("h2");
h2.innerText = "Modificando el DOM";
header.append(h1, h2);


let section = document.createElement("section");
let sectionReference = section;
for (let i = 1; i < 6; i++) {
    let parrafo = document.createElement("p");
    parrafo.id = `parrafo${i}`;
    parrafo.classList.add("parrafos");
    let textoParrafo = document.createTextNode(`Párrafo ${i}`);
    parrafo.appendChild(textoParrafo);
    sectionReference.appendChild(parrafo);


}

//Seleccionar raiz de nodo
body.append(header, section);


