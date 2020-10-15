

// Creo la mia array con gli indirizzi mail dentro.

var indirizzi_mail = ['manuel87@gmail.com', 'laura79@gmail.com', 'roberto81@gmail.com', 'davide90@gmail.com']

// Chiedo all'utente il suo indirizzo mail.

var mail_utente = prompt ('Inserisci il tuo indirizzo mail')
// mail_utente = X

// Creo una variante che mi dice che di default tutto quello che cerca e trova è falso.

var isFound = false;

// verificare se è nella lista tramite un ciclo for.

for (var i = 0; i < indirizzi_mail.length; i++) {

// Creo una variante dove la mail attuale e uguale a gli indirizzi mail

    var mail_attuale = indirizzi_mail[i]

// Se la mail utente e uguale alla mail attuale allora trova una mail vera.

    if (mail_utente == mail_attuale) {
        isFound = true;
    }
}

// Se trova una mail vera posso stampare che sei in lista, altrimenti di conseguenza non lo sei.

if (isFound == true) {
    console.log('Sei in lista');

}else {
    console.log('Non sei il lista');
}
