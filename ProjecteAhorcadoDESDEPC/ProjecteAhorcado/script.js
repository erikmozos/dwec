const palabras = [
  "amarillo",
  "azul",
  "rojo",
  "verde",
  "negro",
  "puerta",
  "ventana",
  "techo",
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

  for (let i = 0; i < paraulaRandom.length; i++) {
    if (paraulaRandom[i] == lletra) {
      console.log("Si" + i);
      canviarGuioPerLletra(lletra, i);
      lletraTrobada = true;
    }
  }

  let spans = document.querySelectorAll("#paraula-oculta > span");
  let allUnderscores = true;
  spans.forEach((span) => {
    if (span.textContent === "_") {
      allUnderscores = false;
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

function canviarGuioPerLletra(lletra, index) {
  let spanARemplaçar = document.querySelector(
    `#paraula-oculta > span:nth-child(${index + 1})`
  );
  spanARemplaçar.innerHTML = lletra;
}

function lletraIncorrecta(lletra) {
  const divLletraIncorrecta = document.querySelector("#wrong-words > span");
  const divImatge = document.querySelector("#imatge > img");

  indexGlobal++;
  console.log(indexGlobal);
  divImatge.src = `./img/hangman/${indexGlobal}.jpg`;
  if (indexGlobal == 7) {
    hasPerdut();
  }

  if(lletra != undefined){
    divLletraIncorrecta.innerHTML += lletra + " ";
  }
  document.querySelector("#errors").innerHTML = `(${indexGlobal})`;
}

function disableButton(){
  butons.forEach(boto =>{
    boto.disabled = true;
  })
}

function hasPerdut(){
  detenerCronometroAdelante();
  detenerCronometroAtras();
  disableButton();
  pantallafinal.classList.remove('antes-partida');
  document.querySelector('.derrota').classList.remove('antes-partida');
  document.querySelector('.derrota > p').innerHTML = `La palabra era ${paraulaRandom}`;
}

function hasguanyat(){
  detenerCronometroAdelante();
  detenerCronometroAtras();
  disableButton();
  pantallafinal.classList.remove('antes-partida');
  document.querySelector('.victoria').classList.remove('antes-partida');
  const puntuacion = calcularPuntuacion(timerEnrreraSecs, indexGlobal, paraulaRandom.length);
  guardarPuntuacion(puntuacion);
  mostrarRanking();
}

let key = document.getElementById('keyboard');

key.addEventListener('click',(e)=>{
  if(e.target.value){
    timerEnrreraSecs = 10;
    if (!temporizadorAdelanteActivo && !temporizadorAtrasActivo) {
      iniciarCronometroAdelante();
      iniciarCronometroAtras();
    }
    let valorLletra = e.target.value;
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

const botonPlayAgain = document.querySelector(".play-again");

botonPlayAgain.addEventListener("click", () => {
  window.location.reload();
});

const startButton = document.getElementById('start-game');
const playerNameInput = document.getElementById('player-name');

startButton.addEventListener('click', () => {
  const playerName = playerNameInput.value.trim();

  if (playerName) {
    localStorage.setItem('currentPlayer', playerName);
    document.getElementById('player-selection').style.display = 'none';
    document.getElementById('player-change').style.display = 'block';
  }
});

function calcularPuntuacion(timerEnrreraSecs, errores, longitudPalabra) {
  const baseScore = 100;
  const tiempoBonus = timerEnrreraSecs * 2;
  const penalizacionErrores = errores * 10;
  const longitudBonus = longitudPalabra * 5;
  return Math.max(0, baseScore + tiempoBonus - penalizacionErrores + longitudBonus);
}

const changePlayer = document.getElementById('player-change');

changePlayer.addEventListener("click", () =>{
  localStorage.removeItem('currentPlayer');
  document.getElementById('player-selection').style.display = 'block';
  document.getElementById('player-change').style.display = 'none';
})

window.addEventListener('load', () => {
  mostrarRanking();
  const currentPlayer = localStorage.getItem('currentPlayer');
  if (currentPlayer) {
    console.log(`Jugador actual: ${currentPlayer}`);
    document.getElementById('player-selection').style.display = 'none';
    document.getElementById('player-change').style.display = 'block';       
  } else {
    document.getElementById('player-selection').style.display = 'block';
    document.getElementById('player-change').style.display = 'none';
  }
});

function guardarPuntuacion(puntuacion) {
  const player = localStorage.getItem('currentPlayer');
  if (!player) return;

  let scores = JSON.parse(localStorage.getItem('highScores')) || [];
  scores.push({ player, score: puntuacion, paraulaRandom, timerEncantmins, timerEncantsec });
  scores.sort((a, b) => b.score - a.score);
  localStorage.setItem('highScores', JSON.stringify(scores));

  console.log('Ranking actualizado: ', scores);
}

function mostrarRanking() {
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  const rankingElement = document.getElementById('high-scores');
  rankingElement.innerHTML = '';

  highScores.forEach((entry, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${entry.player} - ${entry.paraulaRandom}.  - ${entry.score} puntos`;
    rankingElement.appendChild(listItem);
  });
}

const selectPalabra = document.getElementById('Palabras');

function mostrarRanking() {
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  const rankingElement = document.getElementById('high-scores');
  const selectedWord = selectPalabra.value;

  rankingElement.innerHTML = '';
  let filteredScores = [];
  if (selectedWord === '') {
    filteredScores = highScores;
  } else {
    filteredScores = highScores.filter(entry => entry.paraulaRandom === selectedWord);
  }

  if (filteredScores.length > 0) {
    filteredScores.forEach((entry, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${entry.player} - ${entry.paraulaRandom}.  - ${entry.score} puntos`;
      rankingElement.appendChild(listItem);
    });
  } else {
    rankingElement.innerHTML = '<li>No hay puntuaciones para esta selección.</li>';
  }
}

selectPalabra.addEventListener('change', mostrarRanking);

window.addEventListener('load', mostrarRanking);

function juegoTerminado(puntuacion) {
  guardarPuntuacion(puntuacion);
  mostrarRanking();
}

let temporizadorAdelanteActivo = false;
let temporizadorAtrasActivo = false;

let containertimerEnvant = document.querySelector("#second-time");
let timerEncantmins = 0;
let timerEncantsec = 0;
let interval;

let containertimerAtras = document.querySelector("#time");
let timerEnrreraSecs = 10;
let intervalEnrrera;

function iniciarCronometroAdelante() {
  if (!temporizadorAdelanteActivo) {
    temporizadorAdelanteActivo = true;
    interval = setInterval(() => {
      timerEncantsec++;
      if (timerEncantsec === 60) {
        timerEncantsec = 0;
        timerEncantmins++;
      }
      containertimerEnvant.textContent = 
        `${timerEncantmins.toString().padStart(2, "0")}:${timerEncantsec.toString().padStart(2, "0")}`;
    }, 1000);
  }
}

function detenerCronometroAdelante() {
  clearInterval(interval);
  temporizadorAdelanteActivo = false;
}

function iniciarCronometroAtras() {
  if (!temporizadorAtrasActivo) {
    temporizadorAtrasActivo = true;
    intervalEnrrera = setInterval(() => {
      if (timerEnrreraSecs > 0) {
        timerEnrreraSecs--;
        containertimerAtras.textContent = timerEnrreraSecs.toString();
      } else if(timerEnrreraSecs === 0){
          lletraIncorrecta();
          timerEnrreraSecs = 10;
      }
    }, 1000);
  }
}

function detenerCronometroAtras() {
  clearInterval(intervalEnrrera);
  temporizadorAtrasActivo = false;
}
