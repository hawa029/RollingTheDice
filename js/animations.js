//SIDENAV initialization
$(document).ready(function() {
    $('.sidenav').sidenav();
})

//The Game 
let game;
let currentScore;
let randomNumber;

//PLAYERS
let startGame = document.getElementById('newGame');
let firstPlayer = document.querySelector('#player-1');
let secondPlayer = document.querySelector('#player-2');
let player = document.querySelector('.currentPlayer');


//Score and Turn 
let firstScore = document.querySelector('#score-1');
let secondScore = document.querySelector('#score-2');
let firstTurn = document.querySelector('#turn-1');
let secondTurn = document.querySelector('#turn-2');


//Button to hold the current score
let holdScore = document.querySelector('.hold');
let deResult = document.getElementById('deResult');

//Catch the zone 
let rollDice = document.querySelector('.roll').addEventListener('click', function() {
    if(startGame){
        randomNumber = parseInt(Math.floor(Math.random() * 6)+ 1)  ;
        deResult.innerText = randomNumber;
 //Create a random number
   document.getElementById('zone').url = `images/${randomNumber}.png`;
          switch (randomNumber) {
                case 1: 
                    zone.style.backgroundImage = "url('images/1.png')";
                 break;
                case 2: 
                    zone.style.backgroundImage = "url('images/2.png')";
                    break;
                case 3: 
                    zone.style.backgroundImage =  "url('images/3.png')";
                    break;
                case 4: 
                    zone.style.backgroundImage = "url('images/4.png')";
                    break;
                case 5: 
                    zone.style.backgroundImage =  "url('images/5.png')";
                    break;
                case 6: 
                    zone.style.backgroundImage = "url('images/6.png')";
                    break;
                default: zone.style.backgroundImage = false;
          }
        }
});






