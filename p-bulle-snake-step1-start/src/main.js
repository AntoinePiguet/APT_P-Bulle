import { Snake } from "./snake.js";
import { Food } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { drawScore, stopStopwatch, startStopwatch, resetStopwatch } from "./score.js";

//déclaration des constantes
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const box = 20;
const gameSpeed = 140;

//déclaration des variables
let snake;
let food;
let direction = "RIGHT";
let score = 0;
let start = true;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle
let foodColision;

gameInterval = setInterval(frame, gameSpeed); // Stockage de l'identifiant de l'intervalle

let wallCollision = false;
document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction);
});

//fonction permettant de commencer ou recommencer le jeu.
function startGame() {
  //enlève l'écran de mort si le user appuie sur le bouton rejouer
  startScreen();

  //reinitialise la stopwatch a 0
  resetStopwatch();

  //initialisation de variables demandant à être reset à chaque fois que le jeu recommence
  start = true;
  score = 0;

  //affiche le score
  drawScore(score);

  //créé un objet snake
  snake = new Snake(200,200,"green", false, box);

  //créé un objet food
  food = new Food(0,0, "red", false);

  //donne des coordonnées randoms à food
  food.generate(box, canvas)

  //lance le chronomètre
  startStopwatch();
}

//permet d'enlever l'écran de fin 
function startScreen(){
  
  //prends la position de l'écran de fin
  let position = document.getElementById("gameOverPosition")

  //change son html pour le faire disparaitre
  position.innerHTML = "<p> </p> ";
}

//fonction permettant d'actualiser le jeu tout les x temps et de redessiner le snake à une position différente à chaque tic
function frame() {

  //actualise les positions, morts, génération des food et check des colisions entre objets ou avec les limites du canvas etc...
  if(start == true){

    //check des colisions entre objets ou avec les limites du canvas
    update(direction, snake)

    //dessine les objets à l'écran
    draw()
  }
}

//actualise les positions, morts, génération des food et check des colisions entre objets ou avec les limites du canvas etc...
function update(direction, snake) {
  //vérifie si la tête du snake touche une food
  foodColision = snake.checkFoodCollision(food);
  //fait se mouvoir le snake
  snake.move(direction, box, foodColision);
  //check si le snake touche les limites du canvas
  wallCollision = snake.checkWallCollision(canvas);

  //si le snake touche une food, change la food de place, ajoute 1 au score et au corps du snake
  if(foodColision){

    //obtient de nouvelles coordonnées et dessine à nouveau la food
    food.generate(box, canvas);
    food.draw(box, ctx, food);

    //augmente le score
    score++;

    //reset le paramètre pour ne pas revenir dans le if tant que le snake n'a pas touché une autre food
    foodColision = false;
  }

  ///si le snake meurt cherche la coordonnée du bouton replay créé à sa mort et relance le jeu si le bouton replay est cliqué
  if(snake.isDead == true){

    //cherche la coordonnée du bouton replay
    let replay = document.getElementById("replay")

    //relance le jeu si le bouton replay est cliqué
    replay.addEventListener("click", startGame)
    
    //actualise les variables après la mort de snake
    wallCollision = false
    start = false;
  }

}

//affiche les objets et le score à l'écran
function draw() {
  ctx.clearRect(0,0,canvas.width, canvas.height)

  //affiche les objets
  food.draw(box, ctx, food);
  snake.draw(box, ctx, snake.x, snake.y)

  //affiche le score
  drawScore(score);
}

//commence le jeu après que le code ait été compilé
startGame();
