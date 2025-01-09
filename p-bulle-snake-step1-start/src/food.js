/**
 * Génère de manière aléatoire la position de la nourriture sur la grille du jeu.
 *
 * La nourriture est placée à une position aléatoire sur la grille, en s'assurant
 * que les coordonnées sont alignées sur la grille en fonction de la taille des cases (box).
 * La position générée est dans les limites du canvas, définies par sa largeur et sa hauteur.
 *
 * Cette classe possède les constructeurs x,y et color donnant simplement des coordonées et une couleure à unhe case
 * la food n'est rien d'autre qu'une case de couleur avec des coordonées random
 * 
 * @constructor {x} - coordonée sur l'axe x.
 * @constructor {y} - coordonée sur l'axe y.
 * @constructor {color} - couleur de l'objet food.
 * @param {HTMLCanvasElement} canvas - L'élément canvas représentant la surface de jeu.
 * @returns {{x: number, y: number}} - Un objet contenant les coordonnées `x` et `y` de la nourriture générée.
 */

export class Food {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color
  }

  //methode servant à donner des coordonnées x et y random
  generate(box, canvas) {
    this.x = getRandom(box, canvas);
    this.y = getRandom(box, canvas);
  }

  /**
   * Dessine la nourriture sur le canvas à la position spécifiée.
   *
   * Cette fonction utilise le contexte de rendu 2D pour dessiner un carré représentant
   * la nourriture à l'emplacement indiqué par les coordonnées `x` et `y`. La taille du rectangle
   * est déterminée par la taille d'une case (box) sur la grille.
   *
   * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
   * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la taille de la nourriture.
   */
  draw(box, ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, box, box);
  }
}

//fonction servant à retourner un nombre random multiple de 20 entre 1 et 400
function getRandom(box, canvas) {
  do {
    var random = Math.floor(Math.random() * (canvas.width / box ));
    random *= box;
  } while (random > canvas);
  return random;
}
