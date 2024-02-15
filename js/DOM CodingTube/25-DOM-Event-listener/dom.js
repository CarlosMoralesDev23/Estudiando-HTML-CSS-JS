let body    = document.getElementsByTagName('body');
let header  = document.createElement('header');
let h1      = document.createElement('h1');
let h2      = document.createElement('h2');
let section = document.createElement('section')
h1.innerText = "Event Listener";
h2.innerText = "Modificando el DOM";
header.append(h1, h2);
body[0].append(header, section);

let sectionReference  = section
for (let i = 1; i <= 10; i++) {
    let button = document.createElement("button");
    button.id = `saludoBtn${i}`;
    button.innerText = `Soy el boton ${i}`;
    sectionReference.append(button)
}

let todosAddEventListener = ['click', 'contextmenu', 'mouseover' ]
let arrayBotones          = document.querySelectorAll('button')
arrayBotones              = [...arrayBotones]       


for (let i = 1; i <= todosAddEventListener.length; i++) {
    let boton = document.getElementById(`saludoBtn${i}`);
    boton.addEventListener(`${todosAddEventListener[i - 1]}`, (function(index) {
        return ()=>{
            ( index === 1 ) ? boton.innerHTML = "Ahora soy super Button":
            ( index === 2 ) ? console.log("Hola desde la consola"):
            ( index === 3 ) ? console.log("Hola con mouseover"): null
        }
    })(i))
}





// for (let i = 1; i < arrayBotones.length; i++) {
//     let boton = document.getElementById(`saludoBtn${i}`)
//     boton.addEventListener(`${todosAddEventListener[i-1]}`, () => {
//         if (i === 1){
//             boton.innerHTML = "Ahora soy super Button";
//         }else if ( i === 2 ) {
//             console.log("Hola desde la consola")
//         }
//     });
// }