let email = prompt("quale è la tua email");


const utenti = ["Gino@gmail.com", "Mario@gmail.com", "Paolo@gmail.com", "Carlo@gmail.com"];


//----------------------VERSIONE PIÙ VELOCE-------------------------------- 
let messaggio = "male";

for (i = 0; i < utenti.length; i++) {

    let mail = utenti[i];

    if (email === utenti[i]) {
        messaggio = "bene";
    }
}

alert(messaggio);







// CHIEDERE LA MAIL ALL'UTENTE

// CREARE UNA LISTA

//VEDERE SE L'UTENTE È NELLA LISTA

// SE È NELLA LISTA VIENE ACCETTATO

// SE NON È NELLA LISTA NON VIENE ACCETTATO




//-----------------------VERSIONE PIÙ LUNGA-----------------------------

/* let utenteNonConsentito = true;

for (i = 0; i < utenti.length; i++) {



    if (email === utenti[i]) {
        utenteNonConsentito = false;
    }


}

if (utenteNonConsentito) {
    alert("non entri");
} else {
    alert("entri");
} */