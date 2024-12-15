let guardarLS = document.getElementById("guardarLS");
let recuperarLS = document.getElementById("recuperarLS");
let netejarLS = document.getElementById("netejarLS");
let valorsLS = document.getElementById("valorsLS");

let factura = {
   numero: 1,
   descripcion: "Factura de prueba",
   import: 100.13
};

let diHola = "Hola";
let diAdios = "Adios";
let i = 0;
guardarLS.addEventListener('click', function () {
    localStorage.setItem("despedida", diAdios);
    diAdios = diAdios + i++;
    localStorage.setItem("saludo", diHola);
    diHola = diHola + i++;

    localStorage.setItem("factura", JSON.stringify(factura));

});

recuperarLS.addEventListener('click', function () {
    let diHolaLs = localStorage.getItem('saludo');
    valorsLS.innerText = diHolaLs;
    let facturaLs = JSON.parse(localStorage.getItem('factura'));
    valorsLS.innerHTML += "<br>" + facturaLs.numero + " " + facturaLs.descripcion + " " + facturaLs.import;
}, false);


netejarLS.addEventListener('click', () => {
    localStorage.clear();
    valorsLS.innerHTML = "Local Storage netejat";
}, false);