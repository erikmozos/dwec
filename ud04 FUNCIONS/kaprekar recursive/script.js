// Kaprekar

function kaprekar(numero, iteracions = 0){


    if(iteracions == 0){
        console.log(`Número inicial: ${numero}`);
    }


    if(numero === 6174 || iteracions == 7){
        return iteracions;
    }else{

        let major = "";
        let menor = "";

        let num = numero + "";
        let longitud = num.length;

        for(let i = 0; i < longitud; i++){
            let max = 0;
            for(let j = 0; j < longitud; j++){
                let digit = +num[j]; 
                if(digit > max){
                    max = digit;
                }

                let indexmax = num.indexOf(max);
                num = num.substring(0, indexmax) + num.substring(indexmax + 1);

                major += max;
            }

            
        }

    }

}

kaprekar(7342, 0)