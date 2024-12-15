function capturarArticulos() {

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve([
                {id: 1, nombre: "Balón de fútbol", precio: 100},
                {id: 2, nombre: "Balón de baloncesto", precio: 150}
            ])
        }, 5000) // Simula un delay de 5 sec.
    })
};

async function mostrarArticulos(){

    const articulos = document.getElementById("articulos");

    articulos.innerHTML = "<p>Cargando artículos...</p>";

    const articulosCargados = await capturarArticulos();

    articulos.innerHTML = articulosCargados.map((a) => 
        `<p>${a.nombre} - ${a.precio}</p>`
    ).join("");
};