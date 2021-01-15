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
  while(array.length < 5){
    numeroUtente = Number(prompt('Inserisci un numero'));
    if(isNaN(numeroUtente) || controlRepeat(array, numeroUtente) || numeroUtente < 1){
      alert('Inserisci un NUMERO non ripetuto!');
    }else{
      array.push(numeroUtente);
    }
  }
  return array;
}

// dichiarazione variabii
var arrayRandom = [];
var numeroRandom;
var arrayWinLose = [];

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
  for(x = 0; x < arrayUtente.length; x++){
    if(controlRepeat(arrayRandom, arrayUtente[x])){
      arrayWinLose.push(arrayUtente[x])
    }
  }
  if(arrayWinLose.length === 5){
    alert('Bravo! Hai vinto!!!')
  }else{
    alert('Hai indovinato ' + arrayWinLose.length + ' numeri: ' + arrayWinLose)
  }




}, 2000)
