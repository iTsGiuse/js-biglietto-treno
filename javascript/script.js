/* INPUT FROM UTENTE */
const kilometri = prompt('Quanti km vuoi percorrere?');
const eta = prompt('Quanti anni hai?');

/* VARIABILI FISSE */
const prezzo = 0.21;

/* Calcoli */

let costoBiglietto = prezzo * kilometri;

/* CONDIZIONE */
if (eta <= 17) {
    costoBiglietto = costoBiglietto * (20 / 100);
} if (eta => 65) {
    costoBiglietto = costoBiglietto * (40 / 100);
} 

/* APPROSSIMAZIONE */
costoBiglietto = costoBiglietto.toFixed(2)

/* OUTPUT */
document.getElementById('kilometri').innerHTML = kilometri;
document.getElementById('eta').innerHTML = eta;
document.getElementById('prezzo').innerHTML = 'Il prezzo del biglietto è' + ' ' + prezzo;
document.getElementById('costo-biglietto').innerHTML = costoBiglietto;