function contarPeix(cadena) {

    const i = cadena.indexOf("><>");
    if (i === -1) {
        return 0;
    }

    return 1 + contarPeix(cadena.slice(i + 3));
}


const sonBou = "~~~><>~~~><>><>~~~><>~~~~~~><>~><>~~~~~~~><>";
console.log('Ha Son Bou hi ha '+contarPeix(sonBou) + ' peixos.');