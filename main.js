/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito19*/

// messaggio all'utente
alert("Gentile utente sei pronto a generare la tua nuova password?");
// creazione variabile nome utente
var nome;
// creazione variabile cognome utente
var cognome;
// creazione variabile colore preferito
var colore;
// creazione variabile costante
// var costante = 19;
var costante;
// imposto valore costante
costante = 19;
// chiedo all'utente il suo nome
nome = prompt("Digita il tuo nome");
// chiedo all'utente il suo cognome
cognome = prompt("Digita il tuo cognome");
// chiedo all'utente il suo colore preferito
colore = prompt("Digita il tuo colore preferito");
// stampo il risultato
document.getElementById('pass').innerHTML = ("Gentile utente la sua password è: " + nome + cognome + colore + costante);
