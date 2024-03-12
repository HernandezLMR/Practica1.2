const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

function state(Estado){
    if  (Estado >=0.5)
        return("Despierto");
    else
        return("Dormido");
}


let K; //Knight
let A; //Archer
let D; //Dog
let P; //Prisoner
let S; //Signal
let KD; //Knight death
let SP; //Spy




let free = false;

A = Math.random();
D = Math.random();
P = Math.random();
KD = false;
if (D >= 0.5){
    console.log("Annalyn tiene a su perro");
}

while (free == false){
    //Don't change if Ann just spied
    if (SP == true){
        //Knight state
        if (KD == false){
            K = Math.random();     
        }
        //Archer state
        A = Math.random();
        

        //Prisoner state
        if (S == false){
            P = Math.random();
        }
        SP = false;
    }

    //Determine move
    move = Math.floor(Math.random() * (4)) + 1;

    switch(move){
        case 1:
            //Espiar
            console.log("\nAnnalyn espia el acampamiento...");
            console.log("\nCaballero:");
            if (KD == false)
                console.log(state(K));
            else
                console.log("Muerto");
            

            console.log("\nArquero:");
            console.log(state(A));

            console.log("\nPrisionero:");
            console.log(state(P));

            SP = true;
            break;
        
        case 2:
            //Ataque
            console.log("\nAnnalyn se acerca para atacar al caballero...");
            if (KD = false){
                if (K > 0.5){
                    console.log("Pero el caballero la derrota. Annalyn huye del acampamiento");
                }
                else{
                    console.log("Y lo ataca mientras duerme. El caballero ha muerto");
                    console.log("El arquero detecta a Annalyn, forzandola a huir");
                    KD = true;
                }
            }
            else{
                console.log("Pero el caballero ya esta muerto");
            }
            break;


        case 3:
            //Señala
            console.log("\nAnnalyn señala al prisionero...");
            if (A < 0.5){
                if (P >= 0.5){
                    console.log("El prisionero recibe la señal! Ahora se mantendrá despierto y preparado para escapar");
                    S = true;
                }
                else{
                    console.log("Pero el prisionero estaba dormido");
                }
            }
            else{
                console.log("Pero el arquero intercepta la señal! Annalyn se esconde sin poder terminar su señal");
            }
            break;
            

        case 4:
            console.log("\nAnnalyn entra al acampamiento e intenta liberar al prisionero...");
            if (A < 0.5){
                if (K < 0.5){
                    console.log("Annalyn llega al prisionero sin ser detectada")
                    console.log("\nAnnalyn intenta liberar al prisionero...")
                    if (S = true){
                        console.log("Annalyn ha liberado al prisionero")
                        free = true;
                    }
                    else{
                        console.log("Pero soprende al prisionero, alertando al arquero");
                        console.log("Annalyn huye del encampamiento");
                    }

                }
                else{
                    console.log("El caballero la detecta!");
                    if (D >= 0.5){
                        console.log("El perro de Annalyn espanta al caballero");
                        console.log("\nAnnalyn intenta liberar al prisionero...")
                        if (S = true){
                            console.log("Annalyn ha liberado al prisionero")
                            free = true;
                        }
                        else{
                            console.log("Pero soprende al prisionero, alertando al arquero");
                            console.log("Annalyn huye del encampamiento");
                        }
                        
                    }
                    else{
                        console.log("Annalyn huye del encampamiento");
                    }
                }
            }
            console.log("El arquero la detecta!");
            console.log("Annalyn huye del encampamiento");
            break;

        default:
            console.log("Error, esto no deberia pasar");
            break;
    }

    console.log("\n\nAnnalyn y el prisionero han logrado escapar");
    
}