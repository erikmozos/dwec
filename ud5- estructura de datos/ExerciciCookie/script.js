let nom = prompt('Nom');
let llinatge = prompt('Llinatge');

function crearCookie(nom, llinatge){

    
    document.cookie = "usuari =" + encodeURIComponent(nom) + " llinatge = "+ encodeURIComponent(llinatge) +"; expires=Tue, 30 Oct 2024 19:00:00 UTC";
    cookiesarray = document.cookie
}

let cookiesarray = new Array();

cookiesarray = crearCookie(nom, llinatge)