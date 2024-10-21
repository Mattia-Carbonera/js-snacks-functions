/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.

let data = new Date();

let hours = data.getHours();
let min = data.getMinutes();

console.log(`Sono le ore: ${hours}:${min}`);

const checkHour = (time, nameOf) => {
  if (time <= 13) {
    return alert(`Sono le ore: ${hours}:${min}\rBuongiorno ${nameOf} `);
  }

  if (time >= 17) {
    return alert(`Sono le ore: ${hours}:${min}\rBuonasera ${nameOf} `);
  }

  if (time > 13 && hours < 17) {
    return alert(`Sono le ore: ${hours}:${min}\rBuon pomeriggio ${nameOf} `);
  }
};

let result = checkHour(hours, name);

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
