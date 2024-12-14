import { Snake } from "./snake.js";
import { Food } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore } from "./score.js";
import { deathScreen } from "./score.js";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const gameSpeed = 200;
let snake;
let food;
let direction = "RIGHT";
let score = 0;
let start = true;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle

gameInterval = setInterval(frame, gameSpeed); // Stockage de l'identifiant de l'intervalle

let wallCollision = false;
document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction, snake);
});


function startGame() {

  startScreen();
  start = true;
  score = 0;
  snake = new Snake(200,200,"green", false);
  snake.isDead = false;
  food = new Food(0,0, "red", false);
  food.generate(box, canvas)
}
function startScreen(){
  
  let position = document.getElementById("gameOverPosition")
  position.innerHTML = "<p> </p> ";
}


function frame() {
  if(start == true){
    update(direction, snake)
    draw()
  }
}
function update(direction, snake) {
  snake.move(direction, box);
  wallCollision = snake.checkWallCollision(canvas);
  let foodColision = snake.checkFoodCollision(food)
  if(foodColision){
    score++;
    drawScore(score)
  }
  if(snake.isDead == true){
    let replay = document.getElementById("replay")
    replay.addEventListener("click", startGame)
    wallCollision = false
    start = false;
  }

}
function draw() {
  ctx.clearRect(0,0,canvas.width, canvas.height)
  food.draw(box, ctx, food);
  snake.draw(box, ctx)
  drawScore(score);
}
console.log("snake va commencer")
startGame();
