/* console.log("ciao")
 */
/* 
Descrizione: Visualizzare in pagina 5 numeri casuali.Da lì parte un timer di 30 secondi.Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const countdownEl = document.querySelector("#countdown")


const btnEl = document.querySelector("#btn")
const answers_formEl = document.querySelector("#answers-form")
const numbersEl = document.querySelector("#numbers-list")
const messageEl = document.querySelector("#message")


//Da lì parte un timer di 30 secondi
let v = 2;
const countdownInterval = setInterval(() => {
    if (v == 0) {
        // con questo svuoto il testo dei numeri
        numbersEl.innerText = '';
        // con questo tolgo il d-none
        answers_formEl.classList.remove('d-none')
        clearInterval(countdownInterval);
    }
    countdownEl.innerHTML = v;

    v--;
    console.log(v);
}, 1000)

/* const asdasd = document.querySelector("#") */

console.log(btnEl)
console.log(answers_formEl)
console.log(messageEl)


//Visualizzare in pagina 5 numeri casuali.
function generaNumeriCasuali(fiveTime) {
    let numeri = [];
    for (let i = 0; i < fiveTime; i++) {
        numeri.push(Math.floor(Math.random() * 50) + 1); // Genera numeri da 1 a 50
    } return numeri;
}

let numeriCasuali = generaNumeriCasuali(5); // Genera 5 numeri casuali
console.log(numeriCasuali); // da qui vedo in console i 5 numeri casuali

numbersEl.innerText = numeriCasuali; //.join(',');



answers_formEl.addEventListener('submit', function (e) { //event
    console.log(e);

    e.preventDefault();

    console.log('cliccato');


    let userInputs = document.querySelectorAll('#answers-form .form-control');


    let userNumbers = [];



    for (let i = 0; i < 5; i++) {
        const numero = parseInt(userInputs[i].value); // Lo fai una volta sola
        console.log(numero);

        userNumbers.push(numero); // Push direttamente il numero
        console.log(userNumbers);

        console.log(numeriCasuali.includes(numero)); // Usa la variabile

        if (numeriCasuali.includes(numero)) {
            console.log("esatto!", numero);
        }
        else {
            console.log("Sbagliato")
        }
    }
    // Filtra i numeri indovinati: quelli che sono sia nei numeri generati che in quelli inseriti
    const numeriIndovinati = userNumbers.filter(numero => numeriCasuali.includes(numero));

    // Mostra il messaggio finale all’utente
    alert(`Hai indovinato ${numeriIndovinati.length} numero/i: 
  ${numeriIndovinati.join(", ")}
`);
});


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