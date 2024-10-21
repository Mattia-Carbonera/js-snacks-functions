/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

let initialName = [];

names.forEach((currentWord) => {
  index = currentWord.charAt(0);
  initialName.push(index);
});

// Invoca la funzione qui e stampa il risultato in console
console.log(initialName);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
