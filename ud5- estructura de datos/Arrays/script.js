// // // let numeros = [1, 2, 3,4]; // 4 Elementos
// // // console.log(numeros[1]); //indexados de 0 hasta su longitud - 1
// // // console.log(numeros[0]);
// // // console.log(numeros[2]);

// // // // length: longitud de elementos de array
// // // console.log(numero[numero.length -1]);

// // // let nombres = ["pepe", 'maria', `joan`];

// // // let mesclat1 = ["Hola", 10, true];
// // // console.log(mesclat1[0]);
// // // console.log(mesclat1[1]);
// // // console.log(mesclat1[2]); 

// // // let numeros = new Array(5).fill(5);
// // // console.log(numeros);

// // //metodos de array
// // // push(): Agrega uno o más elementos al final del array
// // const frutas = ['manzana', 'platano', 'uva'];
// // console.log(frutas);
// // frutas.push('sandia');
// // console.log(frutas);

// // //pop(): Elimina el último elemento del array

// // let uva = frutas.pop();
// // console.log(uva);
// // console.log(frutas);

// // //shift(): Elimina el priemr elemento del array.

// // let primer = frutas.shift();
// // console.log(primer);
// // console.log(frutas);

// // //unshift(): Agregar uno o más elementos del array

// // frutas.unshift('uva', 'sandia');
// // console.log(frutas);

// // //concat(): Combina dos arrays y retorna un nuevo array

// // const frutas2 = ['melocoton', 'kiwi'];
// // const combinacion = frutas.concat(frutas2);
// // console.log(combinacion);

// // //slice(): Devuelve una copia superficial  de una porción del array
// // const frutas3 = frutas.slice(1, 3);
// // console.log(frutas3);

// // //splice(): Cambia el contenido de un array eliminando, remplazando o agregando elementos.
// // console.log(frutas2);
// // frutas2.splice(1, 0, 'aña', 'tomate');
// // console.log(frutas2);

// // //indexOf(): Devuelve el primer indice en el que se encuentra un elemento dado en un array

// // const indiceElemento = frutas.indexOf('sandia');
// // console.log(indiceElemento);

// //Despues de ver objetos, vemos alguna cosa más de array

// // forEach(): ejecuta una funcion una vez por cada elemento del array.

// // const numeros = [1, 2, 3, 7, 18];
// // numeros.forEach((numero)=>{
// //     let resultado = numero * 2;
// //     console.log(resultado);
// // });


// //map(): Crea un nuevo array con los resultados de aplicar una funcion a cada elemento del array original.
// // const numeros = [1, 2, 5, 6, 8];

// // const doblaNumeros = numeros.map((numero)=>{
// //     return numero *2;
// // });

// // console.log(doblaNumeros);

// //filter(): Crea un nuevo array con todos los elementos que cumplan una condicion determinada.

// // const numeros = [1, 2, 5, 6, 8];
// // const numeroPares = numeros.filter((numero)=>{
// //     return numero % 2 == 0;
// // });

// // console.log(numeros);
// // console.log(numeroPares);

// //reduce(): aplica una funcion a un acumulador y a cada elemento del array (de izquierda a derecha). Para reudcirlo a un unico valor.

// // const numeros = [1, 2, 5, 6, 8];
// // let suma = numeros.reduce((acumula, numero)=>{
// //     return acumula + numero;
// // });

// // console.log(suma);

// //find(): Devuelve el primer elemento del array que cumpla una condicion determinada.
// // const numeros = [1, 2, 5, 6, 8];
// // const numeroEncontrado = numeros.find((numero) =>{
// //    return numero > 3; 
// // });

// // console.log(numeroEncontrado);

// //findIndex(): Devuelve el Indice del primer elemento del array que cumple con una funcion de prueba, o "-1" si no se encuentra.
// const numeros = [1, 2, 5, 6, 8];
// const indiceEncontrado = numeros.findIndex((numero)=>{
//     return numero > 3;
// });

// console.log(indiceEncontrado);

//some(): Comprueba si al menos un elemento del array cumple una condicion determinada.

// const numeros = [1, 2, 5, 6, 8];
// const tieneNumeroPar = numeros.some((numero)=>{
//     return numero % 2 == 0;
// });

// console.log(tieneNumeroPar);

//every(): Comprueba si todos los elementos del array cumplen con una codicion determinada.
const numeros = [1, 2, 5, 6, 8];
const sonPares = numeros.every((numero)=>{
    return numero % 2 == 0;
});

console.log(sonPares);