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
            console.log("Annalyn espia el acampamiento...");
            console.log("Caballero:");
            if (KD == false)
                console.log(state(K));
            else
                console.log("Muerto");
            

            console.log("Arquero:");
            console.log(state(A));

            console.log("Prisionero:");
            console.log(state(P));

            SP = true;
            
        
        case 2:
            //Ataque
            console.log("Annalyn se acerca para atacar al caballero...");
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


        case 3:
            //Señala
            console.log("Annalyn señala al prisionero...");
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
            

        case 4:
            console.log("Annalyn entra al acampamiento e intenta liberar al prisionero...");
            if (A < 0.5){
                if (K < 0.5){
                    console.log("Annalyn llega al prisionero sin ser detectada")
                    console.log("Annalyn intenta liberar al prisionero...")
                    if (S = true){
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
                        console.log("El perro de Annalyn lo espanta");
                        console.log("Annalyn intenta liberar al prisionero...")
                        if (S = true){
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

        default:
            console.log("Error, esto no deberia pasar");
    }

    console.log("Annalyn y el prisionero han logrado escapar");
    

}