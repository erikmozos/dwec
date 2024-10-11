// //Ejercicio 1
// /*
// Escribe un bucle que realice siete llamadas a cosole.log para mostrar la siguiente figura :
// #
// ##
// ###
// ####
// #####
// ######
// #######
// */

// for (let i = 1; i <= 7; i++) {
//     console.log('#'.repeat(i));
// }



// //Ejercicio 2
// /*
//     Escribe un programa que use console.log parra imprimir
//     todos los números del 1 al 100, con dos excepciones:
//     "Jander".

//     Para los numeros divisibles por 5 (y no por 3), imprime:
//     "Clander".
// */

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log("Jander");
//     } else if (i % 5 === 0) {
//         console.log("Clander");
//     } else {
//         console.log(i);
//     }
// }

// //Ejercicio 2 EXTENSION
// /*
//     Escribe un programa que use console.log parra imprimir
//     todos los números del 1 al 100, con dos excepciones:
//     "Jander".

//     Para los numeros divisibles por 5 (y no por 3), imprime:
//     "Clander".

//     PARA LOS NUMEROS QUE SON DIVISIBLES POR 3 Y 5, IMPRIMIR JANDERCLANDER.
// */

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("JanderClander");
//     } 
//     else if (i % 3 === 0) {
//         console.log("Jander");
//     } 
//     else if (i % 5 === 0) {
//         console.log("Clander");
//     } 
//     else {
//         console.log(i);
//     }   
// }


// /*Ejercicio 3
// Escribe un programa que creo una cadona que represente un tablero de 8 x 8, usando caracteres de salto de línea para separar las lincas.
// En cada posición del tablero hay un carácter de espacio o un carácter
// "#". Los caracteres deben forear un tablero de ajedrez:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  */

// let tableru = ''; 

// for (let i = 0; i < 8; i++) { 
//     for (let j = 0; j < 8; j++) { 
        
//         if ((i + j) % 2 ==  0) {
//             tableru += '#'; 
//         } else {
//             tableru += ' '; 
//         }
//     }
//     tableru += '\n'; 
// }

// console.log(tableru); 


let opcion;

opcion = prompt("Elige un ejercicio: ex1, ex2, ex3 o ex4")

switch(opcion){

    case 'ex1':
        for (let i = 1; i <= 7; i++) {
            console.log('#'.repeat(i));
        }
        break;
    
    case 'ex2':
        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0) {
                console.log("Jander");
            } else if (i % 5 === 0) {
                console.log("Clander");
            } else {
                console.log(i);
            }
        }
        break;
    case 'ex3':
        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("JanderClander");
            } 
            else if (i % 3 === 0) {
                console.log("Jander");
            } 
            else if (i % 5 === 0) {
                console.log("Clander");
            } 
            else {
                console.log(i);
            }   
        }
        break;
    case 'ex4':
        let tableru = ''; 

        for (let i = 0; i < 8; i++) { 
            for (let j = 0; j < 8; j++) { 
        
                if ((i + j) % 2 ==  0) {
                    tableru += '#'; 
            } else {
                tableru += ' '; 
            }
        }
        tableru += '\n'; 
        }   
        console.log(tableru); 
        break;

    default:
        console.log('No es correcte');


}