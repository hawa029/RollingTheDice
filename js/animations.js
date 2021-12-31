//SIDENAV initialization
$(document).ready(function() {
    $('.sidenav').sidenav();
})

//The Game 
let game;
let startGame;
let scores;
let pointGot;
let randomNumber;
let currentPlayer;
init();



// Buttons that make playing and hold the scores
let holdScore = document.querySelector('.hold');
let deResult = document.getElementById('deResult');


let rollDice = document.querySelector('.roll').addEventListener('click', function() {
    if(startGame) {
        randomNumber = parseInt(Math.floor(Math.random() * 6)+ 1) ;
        deResult.textContent = randomNumber;

document.getElementById('zone').url = `images/${randomNumber}.png`;
    switch(randomNumber) {
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

        default : zone.style.backgroundImage = false; 
    }

    if (randomNumber !== 1) {
        //Add score 
        pointGot += randomNumber;
        document.querySelector('#round-' + currentPlayer).textContent = pointGot;
    } else {
        pointGot = 0;
        nextPlayer();
    }
        
}
        

     
});


    holdScore.addEventListener('click', function() {
        if(startGame) {

            scores [currentPlayer] += pointGot;
            pointGot = 0;

            document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayer];
            //Check if player is already the winner
            if(scores[currentPlayer] >= 100) {
                document.querySelector('#player-' + currentPlayer).innerHTML = '<h1>Vainqueur !</h1>';
                game = false;
            }else {
                nextPlayer();
            }
        }
    });


function nextPlayer () {
    currentPlayer === 1 ? currentPlayer = 2 : currentPlayer = 1;
    deResult = 0;

    document.getElementById('round-1').textContent = 0;
    document.getElementById('round-2').textContent = 0;

    document.querySelector('.player-1').classList.toggle('active');
    document.querySelector('.player-2').classList.toggle('active');
}





function init() {
    scores = [0, 0];
    currentPlayer = 1;
    pointGot = 0;
    game = true;

   
    document.getElementById('score-1').textContent = 0;
    document.getElementById('score-2').textContent = 0;
    document.getElementById('round-1').textContent = 0;
    document.getElementById('round-2').textContent = 0;
    document.querySelector('#player-1').classList.remove('winner');
    document.querySelector('#player-2').classList.remove('winner');
    document.querySelector('#player-1').classList.remove('active');
    document.querySelector('#player-2').classList.remove('active');

    startGame = function () {

        document.getElementById('newGame').addEventListener('click', function() {
            return rollDice;
        })
    } 
}






