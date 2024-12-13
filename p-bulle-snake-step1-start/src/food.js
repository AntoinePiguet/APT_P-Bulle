/**
 * Génère de manière aléatoire la position de la nourriture sur la grille du jeu.
 *
 * La nourriture est placée à une position aléatoire sur la grille, en s'assurant
 * que les coordonnées sont alignées sur la grille en fonction de la taille des cases (box).
 * La position générée est dans les limites du canvas, définies par sa largeur et sa hauteur.
 *
 * @param {number} box - La taille d'une case de la grille en pixels.
 * @param {HTMLCanvasElement} canvas - L'élément canvas représentant la surface de jeu.
 * @returns {{x: number, y: number}} - Un objet contenant les coordonnées `x` et `y` de la nourriture générée.
 */

export class Food {
  constructor(x, y, color, sprite) {
    this.x = 0;
    this.y = 0;
  }

  static generate(box, canvas) {
    const apple = Object.create(Food);
    apple.x = getRandom(box, canvas);
    apple.y = getRandom(box, canvas);
    console.log("generateFood");
    return apple;
  }

  /**
   * Dessine la nourriture sur le canvas à la position spécifiée.
   *
   * Cette fonction utilise le contexte de rendu 2D pour dessiner un rectangle représentant
   * la nourriture à l'emplacement indiqué par les coordonnées `x` et `y`. La taille du rectangle
   * est déterminée par la taille d'une case (box) sur la grille.
   *
   * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
   * @param {{x: number, y: number}} food - Un objet contenant les coordonnées `x` et `y` où la nourriture doit être dessinée.
   * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la taille de la nourriture.
   */
  static draw(box, ctx, food) {
    // A compléter
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);
    console.log("drawfood");
  }
}
function getRandom(box, canvas) {
  do {
    var random = Math.floor(Math.random() * (canvas.width / box - 0 + 1)) + 0;
    random *= box;
  } while (random > canvas);
  return random;
}
