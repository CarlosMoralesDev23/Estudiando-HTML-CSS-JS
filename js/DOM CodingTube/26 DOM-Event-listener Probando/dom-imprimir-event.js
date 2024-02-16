let body = document.getElementsByTagName("body");
let header = document.createElement("header");
let h1 = document.createElement("h1");
let h2 = document.createElement("h2");
let section = document.createElement("section");
h1.innerText = "Event Listener";
h2.innerText = "Modificando el DOM";
header.append(h1, h2);
body[0].append(header, section);

let sectionReference = section;
for (let i = 1; i <= 10; i++) {
    let button = document.createElement("button");
    button.id = `saludoBtn${i}`;
    button.innerText = `Soy el boton ${i}`;
    sectionReference.append(button);
}

let todosAddEventListener = ["click", "contextmenu", "mouseover"];
let arrayBotones = document.querySelectorAll("button");
arrayBotones = [...arrayBotones];
arrayBotones[0].addEventListener("click", () =>
    console.log(`Soy Super párrafo 1`)
);
arrayBotones[1].addEventListener("contextmenu", () =>
    console.log(`Soy Super párrafo 2`)
);
arrayBotones[2].addEventListener("mouseover", () =>
    console.log(`Soy Super párrafo 3`)
);
arrayBotones[3].addEventListener("click", () =>
    console.log(`Soy Super párrafo 4`)
);
arrayBotones[4].addEventListener("click", () =>
    console.log(`Soy Super párrafo 5`)
);
arrayBotones[5].addEventListener("click", () =>
    console.log(`Soy Super párrafo 6`)
);
arrayBotones[6].addEventListener("click", () =>
    console.log(`Soy Super párrafo 7`)
);
saludoBtn8.addEventListener("click", () => console.log(`Soy Super párrafo 8`));
saludoBtn10.addEventListener("click", () =>
    console.log(`Soy Super párrafo 10`)
);

let saludar = ( event ) => {
    console.log( event.target.innerHTML );
};
saludoBtn9.addEventListener( "click", saludar );

userInput.addEventListener( 'keypress', ( event )=> {
    if( event.keyCode === 13 ){
        console.log( event )
    }
})

userInputDos.addEventListener( 'keypress', ( event )=> {
    if( event.key === 'Enter' ){
        console.log( event )
    }
})

userInputTres.addEventListener( 'keypress', ( event )=> {
    if( event.key === 'Enter' ){
        console.log(event.target.value)
    }
})

