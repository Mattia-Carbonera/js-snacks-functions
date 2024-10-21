/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

let numVowels = [];
const whitelist = ["a", "e", "i", "o", "u"];

const checkWord = (stringToCheck, wordToCheck) => {
  for (let i = 0; i < stringToCheck.length; i++) {
    let index = stringToCheck.charAt(i);
    // let checkChar = whitelist.includes(index)
    if (whitelist.includes(index)) {
      numVowels.push(index);
    }
  }
};

console.log(checkWord(word, whitelist));
console.log(numVowels);

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
