// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// Array di numeri
const numbers = [2, 3, 67, 89, 4, 90, 22, 1, 6, 55];

// Scorro i numeri presenti nell'array
for (let i = 0; i < numbers.length; i++) {
    const userNumber = numbers[i];

    // Creo un nuovo elemento h1
    const userMessageh1 = document.createElement('h1');

    // Stampo nell’id rosso i numeri dispari e in verde i numeri pari.
    if (userNumber % 2 === 0) {
        userMessageh1.innerHTML = userNumber;
        document.querySelector('#green').appendChild(userMessageh1);
        userMessageh1.classList.add('green');
    } else {
        userMessageh1.innerHTML = userNumber;
        document.querySelector('#red').appendChild(userMessageh1);
        userMessageh1.classList.add('red');
    }
}


