// // // window.addEventListener('click', function() {
// // //     console.log('Has hecho click en la ventana');
// // // }   );

// // let boton = document.querySelector('button');
// // let parrafo = document.getElementsByTagName('p')[0];

// // // boton.addEventListener('click', clic);


// // // function clic() {
// // //     console.log("Clic sobre el botón");
// // //     boton.removeEventListener('click', clic);
// // // }

// // // boton.addEventListener('mousedown', (e) => {
// // //     console.log(e);
// // //     if(e.button === 0){
// // //         console.log('Has hecho click izquierdo');
// // //     }else if(e.button === 1){
// // //         console.log('Has hecho click central');
// // //     }
// // //     else if(e.button === 2){
// // //         console.log('Has hecho click derecho');
// // //     }
// // // });

// // // parrafo.addEventListener('mousedown', () => {
// // //     console.log('Controlador de evento para el párrafo');
// // // });

// // // boton.addEventListener('mousedown', (e) => {
// // //     console.log('Controlador de evento para el botón');
// // //     if(e.button === 2){
// // //         e.stopPropagation();
// // //     }
// // // }    
// // // )


// // document.addEventListener('click', (e) => {
// //     console.log(e.target.nodeName);
// //     if(e.target.nodeName.toLowerCase() == 'button'){
// //         console.log('Click en ', e.target.textContent);
// //     }
// // });

// let enlace = document.querySelector('a');


// enlace.addEventListener('click', (e) =>{
//     console.log('Corrento');
// })

// window.addEventListener('keydown', (e) => {
//     if(e.key == 'v'){
//         document.body.style.background = "violet";
//     }
// })

// window.addEventListener('keyup', (e) => {
//     if(e.key == 'v'){
//         document.body.style.background = "white";
//     }
// })


// window.addEventListener('keydown', (e)=>{
//     if(e.ctrlKey && e.key == " "){
//         console.log('Hola');
//     }
// })

let isMouseDown = false;

window.addEventListener('mousedown', (e) =>{
    isMouseDown = true;
    pintar(e);
})

window.addEventListener('mousemove', (e) =>{
    if(isMouseDown){
        pintar(e);
    }
})

window.addEventListener('mouseup', (e) => {

    isMouseDown = false

    
});

let button = document.querySelector('button');

button.addEventListener('click', ()=>{
    
    let dots = document.querySelectorAll(".dot")

    dots.forEach(dot => {
        dot.remove();
    });
})


function pintar(aña){
    
    let punto = document.createElement("div");
    punto.className = "dot";
    punto.style.left = aña.pageX - 4 + "px";
    punto.style.top = aña.pageY - 4 + "px";
    document.body.appendChild(punto);
}