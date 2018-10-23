var randomNumber = Math.floor(Math.random()*100)+1;
// console.log(randomNumber);

var guessField=document.querySelector('.guessField');
// console.log(guessField);
// console.log(guessField.type);

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lasResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit =document.querySelector('.guessSubmit');

var gussCoutn=1;
var resetButton;
guessField.focus();

function checkGuess(){
    guesses.innerHTML=guessField.Value;
    guesses.style.backgroundColor="red";
}

guessSubmit.addEventListener('click',checkGuess);
