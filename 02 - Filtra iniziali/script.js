/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

let filteredName = [];

const searchedWord = "A";

names.filter((currentWord) => {
  let index = currentWord.indexOf(searchedWord);
  // console.log("index: " + index);

  if (index >= 0) {
    filteredName.push(currentWord);
  }
  // console.log("Filtered name: " + filteredName);
});

// Invoca la funzione qui e stampa il risultato in console
console.log(filteredName);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
