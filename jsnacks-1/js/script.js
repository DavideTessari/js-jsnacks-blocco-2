// L'utente inserisce un numero nel prompt, se è pari stampa il numero,
// se è dispari stampa il numero successivo

// Inizializza un array vuoto per i Numeri
const numbers = [];

// Chiedi all'utente un numero e stampalo se è pari
const userNumber = parseInt(prompt("Inserisci un numero:"));

// Verifica se il numero è pari o dispari
if (userNumber % 2 === 0) {
    numbers.push(userNumber);
} else {
    numbers.push(userNumber + 1);
    }

alert(numbers);

