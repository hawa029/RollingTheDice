//Fonction musique de début de jeu
let Start = document.getElementById('newGame');
    Start.addEventListener('click', function() {
    let gameMelody = new Audio ('sounds/newGameSound.mp3');
    gameMelody.play()  


     let switchOff = document.getElementById('volume_off');
     switchOff.addEventListener('click', function() {
          if(gameMelody.play()) {
               gameMelody.pause();
          }
          
     });
    
})




let bruit = document.getElementById('roll');
	bruit.addEventListener('click', function() {
		let bruit_de_dee = new Audio('sounds/cf_gagne.mp3');
		bruit_de_dee.play();
});


