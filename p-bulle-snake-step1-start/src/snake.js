import { Food } from "./food";
import { deathScreen } from "./score";
/**
 * Initialise le serpent au début du jeu.
 *
 * Cette fonction crée le serpent en tant que tableau contenant un seul segment,
 * positionné à une position de départ définie sur la grille.
 *
 * @returns {Array<{x: number, y: number}>} - Un tableau contenant un objet représentant la position du premier segment du serpent.
 */
export class Snake {
  constructor(headx, heady, color, isDead, box) {
    this.body = [
      { x: headx, y: heady },
      { x: headx - box, y: heady }
    ]
    this.color = color;
    this.isDead = isDead;
  }



  /**
   * Déplace le serpent dans la direction actuelle.
   *
   * Cette fonction calcule la nouvelle position de la tête du serpent en fonction
   * de la direction actuelle (gauche, haut, droite, bas). Le reste du corps du serpent
   * suit la tête. La fonction retourne un objet représentant la nouvelle position de la tête du serpent.
   *
   * @param {Array<{x: number, y: number}>} snake - Le tableau représentant le serpent, où chaque élément est un segment avec des coordonnées `x` et `y`.
   * @param {string} direction - La direction actuelle du mouvement du serpent ("LEFT", "UP", "RIGHT", ou "DOWN").
   * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la distance de déplacement du serpent.
   * @returns {{x: number, y: number}} - Un objet représentant les nouvelles coordonnées `x` et `y` de la tête du serpent après le déplacement.
   */
  move(direction, box, foodColision) {
    let newHead = {x:this.body[0].x, y: this.body[0].y}
    if (direction == "LEFT") {
      newHead.x -= box;
    } else if (direction == "RIGHT") {
      newHead.x += box;
    } else if (direction == "UP") {
      newHead.y -= box;
    } else if (direction == "DOWN") {
      newHead.y += box;
    }
    this.body.unshift(newHead);
    if(foodColision == false){
      this.body.pop();
    }
    this.checkBodyColision();
  }

  /**
   * Dessine le serpent sur le canvas.
   *
   * Cette fonction parcourt chaque segment du serpent et le dessine sur le canvas en utilisant
   * un rectangle coloré. La tête du serpent est dessinée dans une couleur différente des autres segments
   * pour la distinguer visuellement. Chaque segment est dessiné à sa position actuelle sur la grille,
   * avec une taille déterminée par la valeur de `box`.
   *
   * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
   * @param {Array<{x: number, y: number}>} snake - Un tableau représentant le serpent, où chaque élément est un segment avec des coordonnées `x` et `y`.
   * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la taille de chaque segment du serpent.
   */
  draw(box, ctx, x, y) {
    // A compléter
    ctx.fillStyle = this.color;
    for(let i = 0; i< this.body.length; i++){
      ctx.fillRect(this.body[i].x, this.body[i].y, box, box);
    }
  }
  destroy() {
    //clearInterval(gameInterval);
    let position = document.getElementById("gameOverPosition")
    position.innerHTML = deathScreen();
    this.isDead = true;
  }
  checkWallCollision(canvas) {
    let collision = false;
    if (this.body[0].x <= -20 || this.body[0].x >= canvas.width || this.body[0].y <= -20 || this.body[0].y >= canvas.height) {
      this.destroy();
      collision = true;
    }
    return collision;
  }
  checkFoodCollision(food) {
    let collision = false;
    if (this.body[0].x == food.x && this.body[0].y == food.y) {
      collision = true
    }
    return collision;
  }
  checkBodyColision(){
    for(let i = 1; i < this.body.length; i++){
      if(this.body[0].x == this.body[i].x &&this.body[0].y == this.body[i].y){
        this.destroy();
      }
    }
  }
}
