/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = "Mario";

let greeting = (nameOf) => {
  return "Ciao " + nameOf;
};

console.log(greeting(name));

// Dichiara la funzione qui.

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa 'Mario': // ciao Mario
