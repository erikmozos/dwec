// // // // const quadrat = function(n){
// // // //     return n * n;
// // // // }

// // // // console.log(quadrat(3));

// // // // const redondeaA = function(n, r){
// // // //     //redondear n a multiplo más cercano
// // // //     let resto = n % m;
// // // //     return n - resto + (resto < m / 2 ? 0 : m);

// // // // }

// // // // let x = 10; // Global
// // // // if(true){

// // // //     let y = 20; // Local
// // // //     var z = 30; // Global (VAR  en desuso)
// // // // }

// // // const mitad = function(n){
// // //     return n / 2;
// // // }

// // // let n = 10;
// // // console.log(mitad(100));
// // // console.log(n);

// // //Ambito anidado
// // const humus = function(factor){
// //     const ingrediente = function(cantidad, unidad, nombre){
// //         let cantidadIngrediente = cantidad * factor;
// //         if(cantidadIngrediente > 1){
// //             unidad += "s";
// //         }else if(cantidadIngrediente < 1){
// //             unidad += "s";
// //         }
// //         console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
// //     };
// //     ingrediente(1, "lata", "garbanzos");
// //     ingrediente(0.25, "taza", "anis");
// //     ingrediente(0.25, "taza", "judias");

// // };

// // humus(4);

// // const redondeaA = (n, r) => {
// //     //redondear n a multiplo más cercano
// //     let resto = n % m;
// //     return n - resto + (resto < m / 2 ? 0 : m);

// // }

// const saluda = (nombre)=> "hola" + nombre;
// console.log(saluda(" Joan"));

// Pila de llamadas
// function saludar(nombre){
//     console.log("Hola " + nombre);
// }

// saludar("Joan");
// console.log("Adiós");

//no en función
// en saludar
// en clg
// en saludar
// no en funcion
// en clg
// no en funcion

// function gallina(){
//     return huevo();
// }

// function huevo(){
//     return(gallina);
// }

// console.log("Qué fue antes" + huevo() + gallina());

//Parametros opcionales

// const quadrat = function(n) {
//     return n*n;
// };
// console.log(quadrat(3, true, "Joan"));

//Cierre o Clausura
// function valor(n){
//     let local = n;
//     return () => local;
// }

// let valor1 = valor(1);
// let valor2 = valor(2);
// console.log(valor1());
// console.log(valor2());

//Recursividad

// function exponencial(base, exponente){

//     if(exponente == 0){
//         return 1;
//     }else{
//     return base * exponencial(base, exponente -1)
//     }
// }

// console.log(exponencial(2, 9));

// //Factorial de n: n! = n* (n-1) * (n-2)... * 1
// // Ej.: 4! = 4*3*2*1=24
// // SPOILER: 5! = 5*4!

// function factorial(n) {
//     if (n == 0 || n == 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// console.log(factorial(4)); // 24

//Crecicimiento de las funciones

//imprimirInventarioGranja(10, 15);

// function imprimirInventarioGranja(vacas, pollos){
//     let cadenaVaca = String(vacas);

//     while(cadenaVaca.length < 3){
//         cadenaVaca = "0" + cadenaVaca;
//         }

//         console.log(`${cadenaVaca} Vacas`);

//         let cadenaPollos = String(pollos);

//         while(cadenaPollos.length < 3){
//             cadenaPollos = "0" + cadenaPollos;
//             }

//             console.log(`${cadenaPollos} Pollos`);

// }

// function rellenarConCeros(numero, longitud){
//     let cadenaNumero = String(numero);

//     while(cadenaNumero.length < 3){
//         cadenaNumero = "0" + cadenaNumero;
//         }

//     return cadenaNumero;

// }

// function imprimirInventario(vacas, pollos, cerdos){
//     console.log(`${rellenarConCeros(vacas,5)} Vacas`);
//     console.log(`${rellenarConCeros(pollos,5)} Pollos`);
//     console.log(`${rellenarConCeros(cerdos,5)} Cerdos`);
// }

// imprimirInventario(12, 9 , 1);

//Math.min()
// let a = Math.min(2,4);
// console.log(a);

//Una función que devuelva el mínimo de 3 numeros.

// let nombre = numeroMinimo(4, 5, 3);
// function numeroMinimo(a, b, c){
//     let numeroMesPetit = Math.min(a, b, c);
//     return numeroMesPetit;
// }
//     console.log(nombre);

// Ejercicio recursividad:
/*  Podemos usar % para verificar si un número es par o impar
        al usar el %2 para ver si es divisible por dos.
        Existe otra manera de definir si un número es par o impar:
        - 0 es PAR
        - 1 es IMPAR
        - N: su paridad es la misma que N - 2
        Define la función recursiva esPar que corresponda a esta
        descripción. La función debe aceptar un solo parámetro (número
        entero positivo) y devolver un booleano.
        Probar con 50 y 75.
    */
// let resposta = esPar(75);
// function esPar(n) {
//     console.log(n);
//   if (n == 1 ){
//     return true;

//   }else if(n == 0) {
//         return false;
//   }else{
//     return esPar(n - 2);
//   }
// }

// if (resposta == true) {
//   console.log("Es impar");
// } else {
//   console.log("Es par");
// }


// function kaprekar(n) {
//   let pasos = 0;
//   let numero = n;
//   numero = numero.toString().padStart(4, "0");

//   while (numero !== 6174 && pasos < 7) {

//     let min = numero.split('').sort().join();
//     let max = numero.split('').sort().reverse().join();
//     let minNum = parseInt(min, 10);
//     let maxNum = parseInt(max, 10);

//     console.log(pasos + 'Paso' + min + ' - ' + max + ' = ' + min - max);
//     pasos ++;
//   }
//   return pasos;
// }

// kaprekar(245);

function kaprekar(n) {
    let pasos = 1;
    let numero = n.toString().padStart(4, "0"); // Ensure the input is 4 digits
  
    while (numero !== '6174' && pasos < 8) {
      // Sort digits in ascending and descending order
      let min = numero.split('').sort().join('');         // ascending order
      let max = numero.split('').sort().reverse().join(''); // descending order
      
      // Convert to numbers
      let minNum = parseInt(min, 10);
      let maxNum = parseInt(max, 10);
  
      // Calculate the difference
      let result = maxNum - minNum;
      numero = result.toString().padStart(4, "0"); // Ensure 4 digits after subtraction
      
      // Log the current step
      console.log(`Paso ${pasos}: ${maxNum} - ${minNum} = ${numero}`);
      
      pasos++; // Increment the step count
    }
    
    return pasos -1;
  }
  
  console.log(`Resolt en ${kaprekar(3524)} passes`);
  
  