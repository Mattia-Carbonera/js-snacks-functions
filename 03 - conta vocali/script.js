/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

let numVowels = 0;
const whitelist = ["a", "e", "i", "o", "u"];

const checkWord = (stringToCheck, wordToCheck) => {
  for (let i = 0; i < wordToCheck.length; i++) {
    let index = stringToCheck == wordToCheck[i];
    if (index == true) numVowels++;

    console.log(index);
  }
};

for (let i = 0; i < word.length; i++) {
  let index = checkWord(stringToCheck.charAt(i));
}

console.log(checkWord(word, whitelist));

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
