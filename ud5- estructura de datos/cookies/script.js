let CrearCookie = document.getElementById("crearCookie");

CrearCookie.addEventListener('click', crearCookie, false);
VerCookies.addEventListener('click', verCookies, false);

function crearCookie(){
    let usuari = 'Carglass@peri';
    document.cookie = "usuari =" + encodeURIComponent(usuari) + "; expires=Tue, 29 Oct 2024 12:00:00 UTC";
}

function verCookies(){
    console.log(decodeURIComponent(document.cookie));
}