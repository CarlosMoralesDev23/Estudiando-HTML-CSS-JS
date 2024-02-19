// Seleccionando Elementos

//Por Tag
let body = document.getElementsByTagName('body')

//Por ID
let header = document.getElementById('header')

//Por clase
let section = document.getElementsByClassName('section')



//---------- h1  y  h2 -------------
// Crear h1 y h2
let h1 = document.createElement('h1')
let h2 = document.createElement('h2')
// Texto a los h
h1.innerText= "Manipulando el DOM"
h2.innerText= "Curso JavaScript"


//---------- Parrafos  -------------
//Crear Parrafo
let parrafo1 = document.createElement('p')
let parrafo2 = document.createElement('p')
let parrafo3 = document.createElement('p')
//Texto a los parrafos
parrafo1.innerHTML = "HTML"
parrafo2.innerHTML = "CSS";
parrafo3.innerHTML = "JavaScript"
// Clases a los parrafos
parrafo1.classList.add('parrafos') 
parrafo2.classList.add('parrafos') 
parrafo3.classList.add('parrafos') 
// Insertar Id a parrafos
parrafo1.id = 'parrafo1' 
parrafo2.id = 'parrafo2' 
parrafo3.id = 'parrafo3' 


//-------Insertar headings en el header----- 
header.append(h1)
header.append(h2)


//------Insertar parrafos al section
section[0].append(parrafo1)   
section[1].append(parrafo2)
section[2].append(parrafo3)
// El selector ByClassName de section devuelve una colección de 3 secciones que hay en el html



//Agregar stilos css al parrafo1
let parrafo1Style = parrafo1.style
parrafo1.style.background = 'black';
parrafo1Style.color = 'white';
parrafo1Style.borderRadius= '10px';
parrafo1Style.width = '100px';
parrafo1Style.textAlign = 'center';
parrafo1Style.padding = '4px';
parrafo1Style.border = '3px solid green'
parrafo1Style.cursor = 'pointer'