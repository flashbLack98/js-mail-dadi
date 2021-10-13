// GENERARE UN NUMERO CASUALE DA 1 A 6 PER ME

// GENERARE UN NUMERO CASUALE DA 1 A 6 PER IL COMPUTER

// CAPIRE CHI HA IL NUMERO MAGGIORE 

let numMy = Math.ceil(Math.random() * 6);
console.log(numMy);

let numCpu = Math.ceil(Math.random() * 6);
console.log(numCpu);


if (numMy < numCpu) {
    alert("Perso");
} else if (numMy === numCpu) {
    alert("Pareggio");
} else {
    alert("Vinto");
}