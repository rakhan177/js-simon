/*Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.*/


// funzione genera numero random
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

// controllo ripetizione
function controlRepeat(arr, num){
  return (arr.includes(num));
}

// numeri utente corretti
function numeriUtente(){
  var array = [];
  var numeroUtente;
  for(x = 0; x < arrayRandom.length; x++){
    numeroUtente = Number(prompt('Inserisci un numero'));
    if(!isNaN(numeroUtente) || !controlRepeat(array, numeroUtente)){
      alert('Inserisci un NUMERO non ripetuto!');
    }else if(controlRepeat(arrayRandom, numeroUtente)){
      array.push(numeroUtente);
    }
  }

  return array;
}

// dichiarazione variabii
var arrayRandom = [];
var numeroRandom;

// genero 5 numeri randomici
while(arrayRandom.length < 5){
  numeroRandom = randomNumber(1, 99);
  if(!controlRepeat(arrayRandom,numeroRandom)){
    arrayRandom.push(numeroRandom);
  }
}

// mostro numeri all' utente
console.log(arrayRandom)
alert('Memorizza i seguenti numeri,dai l\' ok e attendi 30 secondi ' + arrayRandom);






setTimeout(function(){
  var arrayUtente = numeriUtente();
  console.log(arrayUtente);




}, 2000)
