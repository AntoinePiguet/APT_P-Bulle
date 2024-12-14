
08.11.2024
[1h]
Introduction du projet
On peut utiliser un fichier de notes pour toute la classe
- Nommage du commit exemple : feat(snake):Répondre à une touche, écoute(kickoff): - - Ajouter notes
- Exemple description : [45] [Done]
- Question à se poser pour nommer un commit : "Qu'est ce que j'ai fait pour arriver au résultat?" donc, quoi(sur quoi): qu'est ce qui est fait
- Description des commits (Journal de travail) : [temps] [WIP ou bien DONE]

[1h]
J'ai regardé la doc que m.Carrel nous avait envoyé [JavaScript](https://fr.javascript.info/)
Puis j'ai directement commencer à coder mon snake à l'aide de mes connaissances de base et de [StackOverflow](https://stackoverflow.com/questions/4416505/how-to-take-keyboard-input-in-javascript)
J'ai rempli les fonctions directionnelles de mon snake de manière à ce que lorsque j'appuie sur une touche de mon clavier, il change de sens.
J'ai aussi ajouté une classe "Food" qui me servira à faire spawn de la nourriture.

[20min]
ajout de "export" sur tout le code pour pouvoir acceder facilement aux methodes et classes.
amélioration globale et correction de petites erreurs, plus premiers tests pour voir comment réagit javascript

[30min]
J'ai lu plusieurs documents pour apprendre à faire du **mardown** ainsi que d'autres documments pour m'aider dans mon code
- **Sources**
	- [GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#relative-links)
	- [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
	- [W3school](https://www.w3schools.com/js/js_htmldom_html.asp)
	- [superuser](https://superuser.com/questions/586177/how-to-use-markdown-in-notepad)
22.11.24
*aujourdhui je vais :*
cloner le repo gitjournal etml, changer le type de fichier de config.js.exemple en config.js 
aller sur le git, chopper un tocken, changer le nom de la const dans config.js

[30min]
J'ai cloné le gitjournal et fait le reste comme annoncé

[3h]
j'ai ajouté divers fonction à mon code, entre autes le fait que mes pommes peuvent spawn de manière alèatoire sans sortir du cadre.
j'ai aussi ajouté les fonctionalités nécéssaires pour faire spawn mon snake. Mais il ne peut pas encore se déplacer.
	
13.12.24
[2h20]
j'ai restructuré toute ma classe *snake* pour ne plus avoir de fonctions statiques. J'ai aussi dû adapter mon main en fonction.
j'ai aussi ajouté un système de boucle pour faire tourner le jeu et déplacer mon snake.

[15min]
j'ai du enlever mon token github de mon fichier notes.md car il refusait de push un secret github.

[10min]
j'ai restructuré ma classe *food* tout en adaptant mon *main*.

[40 min]
j'ai ajouté des fonctionnalités à ma classe snake pour qu'il puisse mourir si il touche un mur et qu'il détécte
les colisions avec les food, et qu'il ne puisse pas tourner dans la direction contraire de la ou il se dirige.
J'ai aussi créé un écran de fin.

14.12.24

[20min]
scrum meeting : aujourd'hui je vais ajouter une methode _destroy_ à ma classe food ainsi qu'un moyen pour elle de respawn
je vais ajouter une methode _grow_ à ma classe snake, pour lui permettre de grandir lorsqu'il mange une pomme.
je vais adapter le reste de mon code pour éviter des erreurs comme les pommes qui spawn dans le snake et un moyen de relancer la partie.

[10min]
j'ai modifié mon fichier notes.md pour avoir un meilleur markdown et aussi car je n'avais pas fini de le remplir hier.

[15min]
j'ai du installer et connecter mon compte aux outils nécéssaires pour commencer à coder.

[3h]
j'ai ajouté une fonction *drawScore* au fichier score, j'ai ajouté du contenu à ma fonction update pour empêcher les updates si le snake est mort,
j'ai utilisé la fonction *checkFoodCollision* pour augmenter le score quand le snake mange une pomme,
j'ai modifier la manière dont allait s'afficher l'écran de fin, j'ai permi d'enlever l'écran de fin quand on restart,

j'ai modifié mon fichier notes.md et fait mon commit avant la fin de l'heure.