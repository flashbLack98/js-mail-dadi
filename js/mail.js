let email = prompt("quale è la tua email");


const utenti = ["Gino@gmail.com", "Mario@gmail.com", "Paolo@gmail.com", "Carlo@gmail.com"];



let utenteNonConsentito = true;

for (i = 0; i < utenti.length; i++) {



    if (email === utenti[i]) {
        utenteNonConsentito = false;
    }


}

if (utenteNonConsentito) {
    alert("non entri");
} else {
    alert("entri");
}







// CHIEDERE LA MAIL ALL'UTENTE

// CREARE UNA LISTA

//VEDERE SE L'UTENTE È NELLA LISTA

// SE È NELLA LISTA VIENE ACCETTATO

// SE NON È NELLA LISTA NON VIENE ACCETTATO





/* let messaggio = "";

for (i = 0; i < utenti.length; i++) {

    let mail = utenti[i];
    console.log(utenti);

    if (mail === email) {
        messaggio = "bene";

    } else {
        messaggio = "male";
    }
}

alert(messaggio); */