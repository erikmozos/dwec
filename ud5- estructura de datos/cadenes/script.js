// //Creació 
//  let saludo1 = 'hola';

// //Constructor

// let saludo = new String('hola');

// //Propietats
// //length
// console.log(saludo1.length);

// //Metodes més comuns
// //charArt(): Retorna el caracter de índex especific dins de la cadena, com si 
// //cada caracter fos un element d'un array.

// let caracter = saludo.charAt(1);

// //chatCodeAt(): Retorna el codi unicode del caràcter al index especificat.
// let codi = saludo.charCodeAt(3); //Retorna 97

// console.log(caracter);
// console.log(codi);
// console.log(saludo1);
// console.log(saludo + ' Peri');


// //concat(): combina una o més cadenes.
// let saludoCompleto = saludo.concat(', com estas?')
// console.log(saludoCompleto);

// //include(): Determina o verifica su una cadena conte una altre.
// console.log(saludo.includes('aña')); //False ja que no és igual
// console.log(saludo.includes('hola')); //true ja que  és igual

// //indexOf(): Retorna el índex de la primera aparició d'una cadena a una altre cadena.
// let index = saludo.indexOf('la');
// console.log(index);

// //lastIndexOf(): Retorna el índex de la darrera aparició d'una cadena en una altre.
// let candenaLast = 'hola, hola, adios y hola';
// let darrerIndex = candenaLast.lastIndexOf('hola');
// console.log(darrerIndex);

// //slice(): Extreu una part d'una cadena i retorna una nova cadena.
// let cadena = 'Hola, caracola de bola';
// let novaCadena = cadena.slice(-4, -1);
// console.log(novaCadena);

// //subString(): Similar a slice(), pero sense admitir index negatius.
// let cadenasubstring = "Hola, cara de tolola";
// let novaCadenaSub = cadenasubstring.substring(6, 10);
// console.log(novaCadenaSub);

// //toLowerCase(), toUpperCase(): Para pasar todo a minuscula o pasar todo a mayuscula.
// let cadenamayusminus = 'ElPeri';
// console.log(cadenamayusminus.toLowerCase());
// console.log(cadenamayusminus.toUpperCase());

//Exercici

// let cadena = 'Hola, cara de bola';
// let posicio = cadena.indexOf('bola');
// let darreraPosicio = cadena.lastIndexOf('');
// let aminuscula = (cadena.slice(0, posicio));
// let minuscula = aminuscula.toLowerCase();
// let amayuscula = cadena.slice(posicio, darreraPosicio);
// let mayuscula = amayuscula.toUpperCase();
// console.log(minuscula);
// console.log(mayuscula);
// console.log(minuscula.concat(mayuscula));


//replace()
// let cadena = "Hola, cara de bola";
// let mayus = cadena.toUpperCase();
// let minus = mayus.toLowerCase().replace('cara', 'CARA');
// console.log(minus);


//trim(): Elimina espais en blanc devant i darrera de la cadena.

// let cadena = "          Peri          ";
// let senseEspais = cadena.trim();
// console.log(cadena);
// console.log(senseEspais);

//split(): Divideix una cadena en un array de subcadenes.
// let cadena = 'Hola, Periko';
// let miArray = cadena.split(', ');
// console.log(miArray);
// console.log(miArray[1]);