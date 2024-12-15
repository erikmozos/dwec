// // // // // // // let unCliente = {
// // // // // // //     nombre: "Erik Mozos",
// // // // // // //     "Direccion" : "C/Mike de Cervants",
// // // // // // //     "-+-+-+-+-": "bonu tu",
// // // // // // //     pago: {
// // // // // // //         tipo: "Visa",
// // // // // // //         tarjeta: "1234",
// // // // // // //         "Fecha Caducidad" : "no"

// // // // // // //     }
// // // // // // // };

// // // // // // // console.log(unCliente.tipo);

// // // // // let estudiante = {
// // // // //     id: 2,
// // // // //     nombre: "Erik Mozos",
// // // // //     diHola: function(){
// // // // //         return "Hola";
// // // // //     }
// // // // // };

// // // // //  console.log(estudiante);
// // // // // // console.log(estudiante.diHola());

// // // // // estudiante.edad = 19;

// // // // // estudiante.diAdios = function(){
// // // // //     return "Adios";
// // // // // }

// // // // // console.log(estudiante.diAdios());
// // // // // console.log(estudiante);

// // // // //this´

// // // // let factura = {
// // // //     descripcio : "Aña",
// // // //     import : 100.0,
// // // //     iva : 21.00,
// // // //     subtotal: function(){
// // // //         return this.import;
// // // //     },

// // // //     total: function(){
// // // //         return this.import + (this.iva * this.import) / 100;
// // // //     }
// // // // }

// // // // console.log(factura.total());

// // // //Constructors
// // // function Web(url, nombre, visitas) {
// // //     this.url = "http://localhost";
// // //     this.nombre = "Localhost";
// // //     this.mostrarInfo = ()=>{
// // //         return this.nombre +  " :: " + this.url;
// // //     }
// // // }

// // // let unaWeb = new Web();
// // // unaWeb.url = "http://aña.com"
// // // unaWeb.nombre = "Aña"
// // // this.visitas = 10
// // // console.log(unaWeb);

// // // let otraWeb = new Web("huh", "peri", 10);
// // // console.log(otraWeb.mostrarInfo());

// // // //Prototype

// // // console.log(unaWeb);

// // // Web.prototype.visitas = 20;
// // // console.log(unaWeb.visitas);

// // // Web.prototype.diHola = function(){
// // //     return "Hola";
// // // };

// // // console.log(unaWeb.diHola());

// // //Recorrer un objecte

// // // let notas = {
// // //     diw: 8,
// // //     dwes : 9.5,
// // //     dwec : 4.9,
// // //     daw : {
// // //         test: 1,
// // //         practic: 3
// // //     }
// // // };

// // // for(let nota in notas){

// // //     console.log(typeof notas[nota]);
// // //     console.log(nota + " " + notas[nota]);
// // // }

// // // Star Wars: Personajes y edades

// // /* Eres un joven padawan que colecciona datos sobre los heroes de Star Wars.
// // Se te proporcionan dos Array: uno con los nombres de algunos de estos heroes y
// // otro con sus edades (en el episodio 4), con la indexacion corresponiente a su
// // nombre en el otro array
// // */

// // const nombres = ["Luke", "Obi-Wan", "Yoda", "Leia"];
// // const edades = [19, 57, 900, 19];

// // /*
// //     Escribe un programa que combine los datos de ambos arrays en un objeto y
// //     los muestre por consola.
// //     Calcula además, la suma de las edades y muéstrala al final.
// // */

// // function personajeStarWars(nombre, edad) {

// //     this.nombre = nombre;
// //     this.edad = edad;
// //     this.info = function(){
// //         return "El personaje " + this.nombre + " tiene " + edad + " años.";
// //     }
// // }

// // let edad;
// // let nombre = "";
// // let nuevopersonaje = Array();
// // let edadtotal = 0;

// // for(let i = 0; i< nombres.length; i++){
// //     nombre = nombres[i];
// //     edad = edades[i];
// //     edadtotal += edad;
// //     nuevopersonaje.push(new personajeStarWars(nombre, edad));
// // }

// // for(personaje of nuevopersonaje)
// // console.log(personaje.info());
// // console.log("Todas las edades tiene un total de " + edadtotal + " años.");

// //Desestruración de objetos

// const persona = {
//     nombre: "pere",
//     edad : 33
// };

// const {nombre, edad} = persona;

// console.log(nombre, edad);

// const nombre = "Toni";
// const edad = "54";
// const persona = {
//     nombre,
//     edad
// };

// console.log(persona.nombre + " " + persona.edad);

//Ordenar matrius con objetos
const ciudades = [
  {
    municipio: "Zaragoza",
    provicia: "Zaragoza",
  },
  {
    municipio: "Avila",
    provicia: "Avila",
  },
  {
    municipio: "Madrid",
    provicia: "Madrid",
  },
];

ciudades.sort((a, b) => a.municipio.localeCompare(b.municipio))

console.log(ciudades);