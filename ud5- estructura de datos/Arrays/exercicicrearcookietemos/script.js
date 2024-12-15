let CrearCookie = document.getElementById("crearCookie");

CrearCookie.addEventListener('click', crearCookie, false);

function crearCookie(){
    crono();
    let usuari = document.getElementById("nomusuari").value;
    document.cookie = "usuari=" + encodeURIComponent(usuari) + "; max-age=3"+ "; path=/";
    verificarCookie();
}   
 
function crono() {
    let contador = 0;
    let interval = setInterval(function () {
        contador++;
        document.getElementById("crono").innerHTML = contador;

        if (contador >= 30) {
            clearInterval(interval);
        }

        verificarCookie();
    }, 1000);
}

function verificarCookie() {
    let valorCookie = document.cookie;
    if (valorCookie.includes("usuari")) {
        document.getElementById("idcookie").innerHTML = "Cookie actual: " + valorCookie;
    } else {
        document.getElementById("idcookie").innerHTML = "La cookie ha expirado o no existe.";
    }
}