function genera(){
var nomeUtente = document.getElementById('nome').value;
var km = document.getElementById('chilometri').value;
var fascia = document.getElementById('fascia').value;

var prezzo = km * 0.21;

var carrozza = Math.floor(Math.random() * 9) + 1;

var biglietto = numeroBiglietto(min, max);
var min = 90000;
var max = 100000;

function numeroBiglietto(min, max) {
    return Math.floor(Math.random() * (100000 - 90000) ) + 90000;
  }

document.getElementById('nomePasseggero').innerHTML = nomeUtente;
document.getElementById('codiceBiglietto').innerHTML = biglietto;
document.getElementById('carrozza').innerHTML = carrozza;


if(fascia == 'minorenne'){
    prezzo -= (prezzo * 20) / 100;
    document.getElementById('offerta').innerHTML = ('Offerta Minorenni');
    document.getElementById('prezzo').innerHTML = prezzo.toFixed(2) + ' ' + '€';

} 
else if(fascia == 'over65'){
    prezzo -= (prezzo * 40) / 100;
    document.getElementById('offerta').innerHTML = ('Offerta Over 65');
    document.getElementById('prezzo').innerHTML = prezzo.toFixed(2) + ' ' + '€';

} 
else {
    document.getElementById('offerta').innerHTML = ('Nessuna offerta');
    document.getElementById('prezzo').innerHTML = prezzo.toFixed(2) + ' ' + '€';
}

}

function annulla(){
var nomeUtente = document.getElementById('nome').style.display = 'none';
var km = document.getElementById('chilometri').style.display = 'none';;
}
