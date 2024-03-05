/* INPUT FROM UTENTE */
const kilometri = prompt('Quanti km vuoi percorrere?');
const eta = prompt('Quanti anni hai?');

/* VARIABILI FISSE */
const prezzo = 0.21;
const scontoMinorenni = 0.20;
const scontiOver65 = 0.40;

/* VARIABILI NON FISSE */
let costoBiglietto = prezzo * kilometri;

/* CONDIZIONE */
if (eta <= 17) {
    costoBiglietto = costoBiglietto - (costoBiglietto * scontoMinorenni);
} if (eta >= 65) {
    costoBiglietto = costoBiglietto - (costoBiglietto * scontiOver65);
} 

/* APPROSSIMAZIONE */
costoBiglietto = costoBiglietto.toFixed(2)

/* OUTPUT */
document.getElementById('kilometri').innerHTML = kilometri;
document.getElementById('eta').innerHTML = eta;
document.getElementById('prezzo').innerHTML = `${prezzo}€`;
document.getElementById('costo-biglietto').innerHTML = costoBiglietto;
