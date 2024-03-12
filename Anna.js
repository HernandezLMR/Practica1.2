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


let free = false;

K = Math.random();
A = Math.random();
D = Math.random();
P = Math.random();


while (free == false){
    


    console.log(state(K));
    console.log(state(A));
    console.log(state(P));


}