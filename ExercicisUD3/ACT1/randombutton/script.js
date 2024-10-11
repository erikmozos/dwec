
const contenidor = document.getElementById('contenidor');
let nombreAleatori = Math.floor(Math.random() * 100);  
let intents = 0;
let botoclickat;  

 
for (let i = 1; i <= 100; i++) {
    let button = document.createElement('button');
    button.innerHTML = `Botó ${i}`;
    button.id = `${i}`;
    contenidor.appendChild(button);

   

    button.addEventListener('click', function() {
        botoclickat = parseInt(this.id);  
        botoPitjat();
    });
}

function botoPitjat() {
    intents++; 

    if (intents <= 5) {
        if (botoclickat === nombreAleatori) {
            console.log('Has guanyat');
        } else if (botoclickat < nombreAleatori) {

            for (let i = botoclickat - 1; i >= 1; i--) {
                let botoEliminat = document.getElementById(i);
                if (botoEliminat) {
                    botoEliminat.remove();
                }
            }
        } else if (botoclickat > nombreAleatori) {

            for (let i = botoclickat + 1; i <= 100; i++) {
                let botoEliminat = document.getElementById(i);
                if (botoEliminat) {
                    botoEliminat.remove();
                }
            }
        }

        if (intents === 5 && botoclickat !== nombreAleatori) {
            console.log('Has perdut. El nombre és: ' + nombreAleatori);
        }
    }
}