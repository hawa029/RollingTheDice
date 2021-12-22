//SIDENAV initialization
$(document).ready(function() {
    $('.sidenav').sidenav();
})



let zone = document.getElementById('zone');

//initialization of the button
const game = document.getElementById('newGame');
const holdScore = document.getElementById('hold');

//Create random number according to Dice's faces

let rollDice = document.getElementById('roll');
    rollDice.addEventListener('click', function() {
    let randomNumber = Math.floor(Math.random() * 6) + 1 ;

      switch (randomNumber) {
        case 1: 
            zone.style.backgroundImage = "url('images/1.png')";
            break;
        case 2: 
            zone.style.backgroundImage = "url('images/2.png')";
            break;
        case 3: 
            zone.style.backgroundImage = "url('images/3.png')";
            break;
        case 4: 
            zone.style.backgroundImage = "url('images/4.png')";
            break;
        case 5: 
            zone.style.backgroundImage = "url('images/5.png')";
            break;
        case 6: 
            zone.style.backgroundImage = "url('images/6.png')";
            break;
        default: zone.style.backgroundImage = false;
      }
      
   });
 
//PLAYERS
const playerOne = document.getElementById('playerOne');
const playerTwo = document.getElementById('playerTwo');




//Scores
let globalScore1 = document.getElementById('displayScore1');
let globalScore2 = document.getElementsByClassName('displayScore2');

//Rounds



