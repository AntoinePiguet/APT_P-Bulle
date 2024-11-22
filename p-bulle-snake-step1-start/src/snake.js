/**
 * Initialise le serpent au début du jeu.
 *
 * Cette fonction crée le serpent en tant que tableau contenant un seul segment,
 * positionné à une position de départ définie sur la grille.
 *
 * @returns {Array<{x: number, y: number}>} - Un tableau contenant un objet représentant la position du premier segment du serpent.
 */
export class Snake {
  constructor(x, y, color){
    this.x = 0
    this.y = 0
    this.color = "green"
    }

  static initSnake(box, ctx, snake) {
    let snake = Object.create(Snake)
    snake.x = 200;
    snake.y = 200;

    this.drawSnake(box, ctx, snake)
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
   static moveSnake() {
    if(direction == "LEFT"){
      x -=box
    }
    else if(direction == "RIGHT"){
      x+=box
    }
    else if(direction == "UP"){
      y+=box
    }
    else if(direction == "DOWN"){
      y-=box
    }
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
  static drawSnake(box, ctx, snake) {
      
      // A compléter
      ctx.fillStyle = "green";
      ctx.fillRect(snake.x, snake.y, box, box);
    }
}