import { Snake } from "./snake.js";
import { Food } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore } from "./score.js";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const gameSpeed = 200;
let snake;
let food;
let direction = "RIGHT";
let score = 0;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle

document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction);
});

function startGame() {

  snake = new Snake(200,200,"green");
  food = new Food(0,0, "red", false);
  food.generate(box, canvas)

  gameInterval = setInterval(frame, gameSpeed); // Stockage de l'identifiant de l'intervalle
}
function frame() {
  update(direction, snake)
  draw()
}
function update(direction, snake) {
  snake.move(direction, box);
}
function draw() {
  ctx.clearRect(0,0,canvas.width, canvas.height)
  food.draw(box, ctx, food);
  snake.draw(box, ctx)
}

startGame();
