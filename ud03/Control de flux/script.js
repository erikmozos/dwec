// while (true) {
//     let numero = prompt("Ingrese un número");

//     if (!isNaN(numero) && numero !== null && numero !== "") {
//         console.log(Number(numero)); 
//         break; 
//     } else {
//         alert("Un número coño");
//     }
// }


let pregunta = prompt("Quin temps fa?");
switch(pregunta){
    case 'plou': 
        console.log('pues no surtis boig');
        break;
    case 'sol':
        console.log('pues deixa de jugar a lol i surt cony');
        break;
    case 'nublat':
        console.log('deixa de queixar-te');
        break;
}
