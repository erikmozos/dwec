const palabras = [
  "amarillo",
  "azul",
  "rojo",
  "verde",
  "negro",
  "blanco",
  "naranja",
  "morado",
  "cielo",
  "mar",
  "tierra",
  "fuego",
  "aire",
  "sol",
  "luna",
  "estrella",
  "coche",
  "tren",
  "avion",
  "bicicleta",
  "barco",
  "puente",
  "camino",
  "calle",
  "casa",
  "edificio",
  "torre",
  "jardin",
  "puerta",
  "ventana",
  "techo",
  "pared",
  "mesa",
  "silla",
  "cama",
  "armario",
  "sofa",
  "espejo",
  "cuadro",
  "lampara",
  "manzana",
  "platano",
  "naranja",
  "pera",
  "uva",
  "fresa",
  "melon",
  "sandia",
  "perro",
  "gato",
  "conejo",
  "pajaro",
  "pez",
  "caballo",
  "vaca",
  "oveja",
  "agua",
  "viento",
  "lluvia",
  "nieve",
  "nube",
  "rio",
  "montana",
  "bosque",
  "libro",
  "cuaderno",
  "lapiz",
  "boligrafo",
  "papel",
  "goma",
  "mochila",
  "carpeta",
  "computadora",
  "telefono",
  "television",
  "radio",
  "altavoz",
  "teclado",
  "raton",
  "pantalla",
  "amigo",
  "familia",
  "amor",
  "felicidad",
  "tristeza",
  "alegria",
  "miedo",
  "esperanza",
  "dia",
  "noche",
  "manana",
  "tarde",
  "semana",
  "mes",
  "siglo"
];

const nombreAleatori = Math.floor(Math.random() * palabras.length);
let paraulaRandom = funcioparaulaRandom();
let paraulaRandomArray = [paraulaRandom];
let indexGlobal = 0;
let temporizador = false;
const butons = document.querySelectorAll("#keyboard > button");
const pantallafinal = document.querySelector(".pantalla-final");
//Funcions

function funcioparaulaRandom() {
  console.log(nombreAleatori);
  let paraulaaleatoria = palabras[nombreAleatori];
  return paraulaaleatoria;
}

console.log(paraulaRandom);
console.log(paraulaRandomArray);

function afegirSpans() {
  divParaulaOculta = document.getElementById("paraula-oculta");
    console.log(paraulaRandom.length);
    for (let j = 0; j < paraulaRandom.length; j++) {
      divParaulaOculta.innerHTML += `<span>_</span>`;
}
}

afegirSpans(paraulaRandom);

function lletraCorrecta(lletra) {
  let lletraTrobada = false;

  // Verificar si la letra está en paraulaRandom
  for (let i = 0; i < paraulaRandom.length; i++) {
    if (paraulaRandom[i] == lletra) {
      console.log("Si" + i);
      canviarGuioPerLletra(lletra, i);
      lletraTrobada = true;
    }
  }

  // Comprobar si quedan guiones bajos
  let spans = document.querySelectorAll("#paraula-oculta > span");
  let allUnderscores = true;
  spans.forEach((span) => {
    if (span.textContent === "_") {
      allUnderscores   = false;
    }
  });

  if (allUnderscores) {
    hasguanyat();
  }

  if (!lletraTrobada) {
    lletraIncorrecta(lletra);
    return false;
  } else {
    return true;
  }
}


//Si la lletra es correcte es canvia guió per la lletra
function canviarGuioPerLletra(lletra, index) {
  let spanARemplaçar = document.querySelector(
    `#paraula-oculta > span:nth-child(${index + 1})`
  );
  spanARemplaçar.innerHTML = lletra;
}


//Lletra Incorrecta
function lletraIncorrecta(lletra) {
  const divLletraIncorrecta = document.querySelector("#wrong-words > span");
  const divImatge = document.querySelector("#imatge > img");

  indexGlobal++;
  divLletraIncorrecta.innerHTML += lletra + " ";
  console.log(indexGlobal);
  divImatge.src = `./img/hangman/${indexGlobal}.jpg`;
  if (indexGlobal == 10) {
    hasPerdut()
  }
}





function disableButton(){
  butons.forEach(boto =>{
    boto.disabled = true;

  })
}


function hasPerdut(){
  stopCrono()
  disableButton();
  pantallafinal.classList.remove('antes-partida');
  const derrota = document.querySelector('.derrota');
  derrota.classList.remove('antes-partida')
}


function hasguanyat(){
  stopCrono()
  disableButton();
  pantallafinal.classList.remove('antes-partida');
  const victoria = document.querySelector('.victoria');
  victoria.classList.remove('antes-partida')
}

//Events



let key = document.getElementById('keyboard');

key.addEventListener('click',(e)=>{
  if(e.target.value){
    let valorLletra = e.target.value;
    if(temporizador == false){
      startCrono();
      }
    console.log(valorLletra);
    let esCorrecte = lletraCorrecta(valorLletra.toLowerCase());
    e.target.disabled = true;
    if(esCorrecte == true){
      e.target.style.background = 'green';
    }else{
      e.target.style.background = 'red';
    }
  }
})




//TEMPORIZADOR

let timert = document.querySelector("#timer > span >span");
let minutos = "00";
let segundos = "30";
let milisegundos = "00";

let cronoInterval;

function startCrono() {
    cronoInterval = setInterval(timer, 10); // Actualiza cada 10 milisegundos
}

function stopCrono(){
  clearInterval(cronoInterval);
}

function timer() {
    temporizador = true;
    milisegundos = parseInt(milisegundos) - 1;
    if (milisegundos < 0) {
        milisegundos = 99;
        segundos = parseInt(segundos) - 1;
        if (segundos < 10) {
            segundos = "0" + segundos;
        } else if (segundos < 0) {
            segundos = "59";
            minutos = parseInt(minutos) - 1;
            if (minutos < 10) {
                minutos = "0" + minutos;
            }
        }
    }
    if (milisegundos < 10) {
        milisegundos = "0" + milisegundos;
    }
    timert.innerHTML = minutos + ":" + segundos + ":" + milisegundos;

    // Detener el temporizador cuando llegue a 00:00:00
    if (minutos === "00" && segundos === "00" && milisegundos === "00") {
        clearInterval(cronoInterval);
        hasPerdut();
    }
}

const botonPlayAgain = document.querySelector(".play-again");

botonPlayAgain.addEventListener("click", () => {
  window.location.reload();
});


// const startButton = document.getElementById('start-game');
// const playerNameInput = document.getElementById('player-name');

// // Al hacer clic en "Iniciar", guardamos el nombre del jugador
// startButton.addEventListener('click', () => {
//   const playerName = playerNameInput.value.trim();

//   if (playerName) {
//     // Guardamos el nombre del jugador en localStorage
//     localStorage.setItem('currentPlayer', playerName);
//     alert(`Jugador seleccionado: ${playerName}`);

//     // Ocultamos la pantalla de selección y comenzamos el juego
//     document.getElementById('player-selection').style.display = 'none';
//     iniciarJuego(playerName); // Llamamos a la función para iniciar el juego
//   } else {
//     alert('Por favor, ingrese un nombre de jugador');
//   }
// });

// // Función para iniciar el juego (se puede personalizar)
// function iniciarJuego(playerName) {
//   console.log(`Juego iniciado por ${playerName}`);
//   // Aquí podrías agregar lógica para empezar la partida
// }


// // Al cargar la página, mostramos el jugador guardado (si existe)
// window.addEventListener('load', () => {
//   const currentPlayer = localStorage.getItem('currentPlayer');
  
//   if (currentPlayer) {
//     console.log(`Jugador actual: ${currentPlayer}`);
//   } else {
//     console.log('No hay un jugador seleccionado');
//     document.getElementById('player-selection').style.display = 'block';  // Muestra la selección de jugador si no hay uno
//   }
// });

// function guardarPuntuacion(puntuacion) {
//   const player = localStorage.getItem('currentPlayer');
//   if (!player) return;

//   // Obtener el ranking actual desde localStorage
//   let scores = JSON.parse(localStorage.getItem('highScores')) || [];

//   // Agregar la nueva puntuación
//   scores.push({ player, score: puntuacion });

//   // Ordenar las puntuaciones de mayor a menor
//   scores.sort((a, b) => b.score - a.score);

//   // Mantener solo las 5 mejores puntuaciones
//   scores = scores.slice(0, 5);

//   // Guardar el nuevo ranking en localStorage
//   localStorage.setItem('highScores', JSON.stringify(scores));

//   console.log('Ranking actualizado: ', scores);
// }

// function mostrarRanking() {
//   const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
//   const rankingElement = document.getElementById('high-scores');
  
//   // Limpiar el listado actual de rankings
//   rankingElement.innerHTML = '';

//   // Mostrar las 5 mejores puntuaciones
//   highScores.forEach((entry, index) => {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${index + 1}. ${entry.player} - ${entry.score} puntos`;
//     rankingElement.appendChild(listItem);
//   });
// }

// function juegoTerminado(puntuacion) {
//   guardarPuntuacion(puntuacion);
//   mostrarRanking();
// }
