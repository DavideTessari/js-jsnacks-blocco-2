// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// Chiedi all'utente 2 parole
const userNames1 = prompt("Inserisci una parola:");
const userNames2 = prompt("Inserisci una parola:");

// Determina la parola più corta e quella più lunga
let shortWord, longWord;
if (userNames1.length < userNames2.length) {
    shortWord = userNames1;
    longWord = userNames2;
    alert(shortWord + '-' + longWord);
} else if (userNames1.length > userNames2.length) {
    shortWord = userNames2;
    longWord = userNames1;
    alert(shortWord + '-' + longWord);
} else {
    alert( 'L\'ordine è cronologico: ' + userNames1 + '-' + userNames2)
}

