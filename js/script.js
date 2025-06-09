/* console.log("ciao")
 */
/* 
Descrizione: Visualizzare in pagina 5 numeri casuali.Da lì parte un timer di 30 secondi.Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const btnEl = document.querySelector("#btn")

const answers_formEl = document.querySelector("#answers-form")

const messageEl = document.querySelector("#message")

/* const asdasd = document.querySelector("#") */

console.log(btnEl)
console.log(answers_formEl)


/* console.log() */



//Visualizzare in pagina 5 numeri casuali.
function generaNumeriCasuali(quantita) {
    let numeri = [];
    for (let i = 0; i < quantita; i++) {
        numeri.push(Math.floor(Math.random() * 50) + 1); // Genera numeri da 1 a 50
    }
    return numeri;


}

let numeriCasuali = generaNumeriCasuali(5); // Genera 5 numeri casuali
console.log(numeriCasuali);












/* //setInterval
Facciamo qualcosa ogni tot

setInterval(nomeFunzione, tempoPerOgniRipetizione);
1. invoca una funzione
2. che si attiverà ogni tot millisecondi
2 setInterval attiva una funzione all’infinito, ogni tot di tempo.
Per terminare l’esecuzione di setTimeout() si usa clearTimeout.*/




/* //setTimeout
Facciamo qualcosa dopo un tot

setTimeout(nomeFunzione, tempoDaAspettare);
1. invoca una funzione
2. che si attiverà quando saranno passati tot millisecondi
1 setTimeout attiva una funzione dopo un certo tempo. */