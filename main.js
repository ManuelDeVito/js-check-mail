

// Creo la mia array con gli indirizzi mail dentro.

var indirizzi_mail = ['manuel87@gmail.com', 'laura79@gmail.com', 'roberto81@gmail.com', 'davide90@gmail.com']

// Chiedo all'utente il suo indirizzo mail.

var mail_utente = prompt ('Inserisci il tuo indirizzo mail')

// Creo una variante che mi dice che di default tutto quello che cerca e trova è falso.

var isFound = false;

// verificare se è nella lista tramite un ciclo for.

for (var i = 0; i < indirizzi_mail.length; i++) {

// Creo una variante dove la mail utente e uguale a gli indirizzi mail

var mail_utente = indirizzi_mail[i]

// Se la mail utente e uguale agli indirizzi mail allora trova una cosa vera e allora posso stampare il fatto che si trova in lista.

if (mail_utente == indirizzi_mail) {
    var isFound = true;
    console.log('Sei in lista');

// Altrimenti di conseguenza se la mail utente e diversa dagli indirizzi mail di default è falsa e quindi posso stampare che non si trova in lista.

} else if (mail_utente !== indirizzi_mail) {
    console.log('Non sei in lista');
}

}
