// Capturar elementos del DOM.

const contenedor = document.querySelector('.contenedor');
const asientos = document.querySelectorAll('.fila .asiento:not(.ocupado)');
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula')


//Precio de la pelicula seleccionada.
let precioDelTicket = +peliculaSelect.value;
llenaIU();


function actualizaSeleccionAsiento() {
    
    const asientosSeleccionados = document.querySelectorAll('.fila .asiento.seleccionado');
    console.log(asientosSeleccionados);

    const indiceAsientos = [...asientosSeleccionados].map((asiento)=>[...asientos].indexOf(asiento));

    console.log(indiceAsientos);
    localStorage.setItem('asientosSeleccionados', JSON.stringify(indiceAsientos));
    
    const contadorAsientosSeleccionados = asientosSeleccionados.length;

    console.log(contadorAsientosSeleccionados);
    contador.innerText = contadorAsientosSeleccionados;

    total.innerText = contadorAsientosSeleccionados * precioDelTicket;
}

function llenaIU(){

    let asientosSeleccionados =  JSON.parse(localStorage.getItem('asientosSeleccionados'));

    if(asientosSeleccionados !== null && asientosSeleccionados.length > 0){
        asientos.forEach((asiento, index) => {
            if(asientosSeleccionados.indexOf(index) > -1){
                asiento.classList.add('seleccionado');
            }
        });
    }

    let IndicepeliculaSeleccionada = localStorage.getItem('indicePeliculaSeleccionada');
    if(IndicepeliculaSeleccionada){
        peliculaSelect.selectedIndex = IndicepeliculaSeleccionada;
    }

    let precioPeliculaSeleccionada = localStorage.getItem('precioPeliculaSeleccionada');
    if(precioPeliculaSeleccionada){
        precioDelTicket = +precioPeliculaSeleccionada;
    }

    actualizaSeleccionAsiento();
}


//Events
contenedor.addEventListener('click', (e)=>{
    console.log(e.target.classList);
    if(e.target.classList.contains('asiento') && !e.target.classList.contains('ocupado')){
        
        e.target.classList.toggle('seleccionado');
        actualizaSeleccionAsiento();
        
    }
}, false);


peliculaSelect.addEventListener('change', (e)=>{
    precioDelTicket = +e.target.value;

    localStorage.setItem('indicePeliculaSeleccionada', e.target.selectedIndex);
    localStorage.setItem('precioPeliculaSeleccionada', e.target.value);

    actualizaSeleccionAsiento();

})