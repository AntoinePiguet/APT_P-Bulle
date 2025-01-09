/**
 * Dessine le score sur le canvas.
 *
 * Cette fonction affiche le score actuel du jeu dans le coin supérieur gauche du canvas.
 * Le score est affiché en noir avec une police Arial de 20px.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {number} score - Le score à afficher, qui est un entier.
 */

//cette ligne cherche l'id scorePosition pour plus tard savoir ou afficher le score
let scorePosition = document.getElementById("scorePosition")


//fonction servant a afficher le score
export function drawScore(score) {
  let scoreText = "<div>score :  </div>" + score;
  scorePosition.innerHTML = [scoreText]
}

//fonction servant à afficher l'écran de mort ainsi que le bouton pour rejouer
export function deathScreen(){
   
  let text = ["<h1>game over</h1>" + "<button id = 'replay'>play again</button>"]
  return text
}
