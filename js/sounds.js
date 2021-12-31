//Fonction musique de début de jeu
let Start = document.getElementById('newGame');
    Start.addEventListener('click', function() {
          let gameMelody = new Audio ('sounds/newGameSound.mp3');
          gameMelody.play()  

//Set the function to start musique after a pause event
let soundAgain = document.getElementById('volume_up');
    soundAgain.addEventListener('click', function() {
         gameMelody.play();
      
    });   

// function to stop musique on playing
let switchOff = document.getElementById('volume_off');
     switchOff.addEventListener('click', function() {
          if(gameMelody.play()) {
               gameMelody.pause();
          }
     });
})

//Sound when the Dice is rolling
let bruit = document.querySelector('.roll')
bruit.addEventListener('click', function() {
		let bruit_de_dee = new Audio('sounds/BELLHand_Clochette.mp3');
		bruit_de_dee.play()

let switchOff = document.getElementById('volume_off');
     switchOff.addEventListener('click', function(){
                  bruit_de_dee.pause();         
     });
})


