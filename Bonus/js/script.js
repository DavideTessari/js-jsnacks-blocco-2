// Chiedi un numero di 4 cifre all’utente e calcola la somma di 
// tutte le cifre che compongono il numero.

// Chiedo un numero di 4 cifre all’utente
const userNumber = prompt("Inserisci un numero di 4 cifre:");

// Calcolo la somma di tutte le cifre che compongono il numero.
let sum = 0;
for (let i = 0; i < userNumber.length; i++) {
    const number = parseInt(userNumber[i]);
    sum += number;
}

// Visualizzo il risultato
alert(`La somma delle cifre di ${userNumber} è ${sum}`);


