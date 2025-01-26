/**
 * Dessine le score sur le canvas.
 *
 * Cette fonction affiche le score actuel du jeu dans le coin supérieur gauche du canvas.
 * Le score est affiché en noir avec une police Arial de 20px.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {number} score - Le score à afficher, qui est un entier.
 */
//Les fonctions pour la stopwatch ont été inspirée par https://www.educative.io/answers/how-to-create-a-stopwatch-in-javascript


var startTime; // to keep track of the start time
var stopwatchInterval; // to keep track of the interval
var elapsedPausedTime = 0; // to keep track of the elapsed time while stopped


//cette ligne cherche l'id scorePosition pour plus tard savoir ou afficher le score
let scorePosition = document.getElementById("scorePosition")


//fonction servant a afficher le score
export function drawScore(score) {
  let scoreText = "<div>score :  </div>" + score;
  scorePosition.innerHTML = [scoreText]
}

//fonction pour lancer le chronomètre
export function startStopwatch() {
  if (!stopwatchInterval) {
    startTime = new Date().getTime() - elapsedPausedTime;
    stopwatchInterval = setInterval(updateStopwatch, 1000); 
  }
}

//fonction pour arreter le chronomètre
export function stopStopwatch() {
  clearInterval(stopwatchInterval); 
  elapsedPausedTime = new Date().getTime() - startTime; 
  stopwatchInterval = null; 
}

//fonction pour reset le chronomètre après une partie
export function resetStopwatch() {
  stopStopwatch(); 
  elapsedPausedTime = 0;
  document.getElementById("stopwatch").innerHTML = "00:00:00";
}

//fonction pour update en temps réel la stopwatch et surtout l'afficher
function updateStopwatch() {
  var currentTime = new Date().getTime(); 
  var elapsedTime = currentTime - startTime; 
  var seconds = Math.floor(elapsedTime / 1000) % 60; 
  var minutes = Math.floor(elapsedTime / 1000 / 60) % 60; 
  var hours = Math.floor(elapsedTime / 1000 / 60 / 60); 
  var displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds); 
  document.getElementById("stopwatch").innerHTML = displayTime;
}

//fonction servant a incrémenter les secondes et minutes
function pad(number) {
  return (number < 10 ? "0" : "") + number;
}


//fonction servant à afficher l'écran de mort ainsi que le bouton pour rejouer
export function deathScreen(){
   
  let text = ["<h1>game over</h1>" + "<button id = 'replay'>play again</button>"]
  return text
}
