//Objeto Date

// let miFecha = new Date();
// console.log(miFecha);

// let horas = miFecha.getHours();
// let minutos = miFecha.getMinutes();
// let segundos = miFecha.getSeconds();
// let hora;

// if(horas > 12){
//     hora = horas - 12;
//     console.log(hora +':'+  minutos +':'+ segundos + ' PM');
// }else{
//     console.log(hora +':'+  minutos +':'+ segundos + 'AM');
// }


function rellenarZeros(num){
    if(num < 10){
        return "0" + num;
    }

    return num;
}
let data = new Date();
let elcrono;
//Crono

// window.onload = new function() {
//     elcrono = setInterval(crono, 1000)
// }

let stop = document.getElementById('stop');
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let lahora = document.getElementById('lahora')
restart();

function restart(){
    data.setHours(0, 0, 0, 10);
    lahora.innerHTML = "00:00:10"
    start.innerHTML = "Inici"
    start.disabled = false;
}

start.addEventListener('click', function(){
    elcrono = setInterval(crono, 1000);
    start.disabled = true;
    stop.disabled = false;
}, false);

stop.addEventListener('click', function(){
    clearInterval(elcrono);
    this.disabled = true;
    start.disabled = false;
    reset.disabled = false;
}, false);

reset.addEventListener('click', function(){
    restart();
    this.disabled = true;
    stop.disabled = true;
}, false);

function crono(){

    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    segundos--;

    data.setSeconds(segundos);

    if(segundos == 60){
        segundos = 0;
        minutos -= 1;
        data.setMinutes(minutos);
    }
    if(minutos == 60){
        minutos = 0;
        horas --;
        data.setHours(horas);

    }

    horas = rellenarZeros(horas);
    minutos = rellenarZeros(minutos);
    segundos = rellenarZeros(segundos);

    lahora.innerHTML = horas + ":" + minutos + ":" + segundos; 

}