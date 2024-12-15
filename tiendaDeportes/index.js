function capturarArticulos(){

    const inici = Date.now();

    while(Date.now() - inici < 10000){
        console.log("Cagando...");
    }



    return [
        {id: 1, nombre: "Balón de fútbol", precio: 100},
        {id: 2, nombre: "Balón de baloncesto", precio: 150}
    ];
}

function mostrarArticulos(){
    const articulos = document.getElementById("articulos");

    articulos.innerHTML = "<p>Cargando artículos...</p>";

    const articulosCargados = capturarArticulos();

    articulos.innerHTML = articulosCargados.map((a) =>  {
        `<p>${a.nombre} - ${a.precio}</p>`.join("");
    
    });
}