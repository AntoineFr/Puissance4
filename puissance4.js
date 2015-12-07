var TAILLE_ROND = 30,
 ESPACEMENT = 3;

function AfficheGrille(jeu) { // Affiche la grille de jeu
  var i, j;
  for (i = 0; i < 5; i++) {
    for (j = 0; j < 7; j++) {
      if (jeu[i][j] == 'X') {
        CerclePlein(500 + (j + 1) * (TAILLE_ROND + ESPACEMENT), (i + 1) * (TAILLE_ROND + ESPACEMENT), TAILLE_ROND, "red");
      } else if (jeu[i][j] == 'O') {
        CerclePlein(500 + (j + 1) * (TAILLE_ROND + ESPACEMENT), (i + 1) * (TAILLE_ROND + ESPACEMENT), TAILLE_ROND, "yellow");
      } else {
        CerclePlein(500 + (j + 1) * (TAILLE_ROND + ESPACEMENT), (i + 1) * (TAILLE_ROND + ESPACEMENT), TAILLE_ROND, "black");
      }
    }
  }
}

function SaisieColonne(jeu, joueur) {
  var col, i, resultat;
  if (mode == "jcj") { // joueur contre joueur
    col = SaisieEntier("Dans quelle colonne voulez-vous jouer [1-7] (" + joueur + ") ?");
  }
  else { // joueur contre ordinateur
    if (joueur == 'X') {
      col = SaisieEntier("Dans quelle colonne voulez-vous jouer [1-7] ?");
    } else {
      col = Hasard(7) + 1; // Une colonne entre 0 et 6    + 1 pour faire de 1 à 7
    }
  }
  col--; // car le programme prend une colonne de 0 à 6
  if (col < 0 || col > 6 || jeu[0][col] != '') { // en dehors ou la colonne est pleine
    return -1;
  }
  resultat = -1;
  i = 4;
  while (resultat == -1 && i >= 0) { // recherche de la ligne la plus basse possible
    if (jeu[i][col] == '') resultat = i;
    i--;
  }
  if (resultat != -1) jeu[resultat][col] = joueur;
  return resultat;
}

function Termine(jeu) {
  var i, j, cas;
  // Vérification des colonnes
  for (i = 0; i < 2; i++) { // on fait le test pour les lignes 0 et 1 (il n'y a pas 4 cases en dessous après)
    for (j = 0; j < 7; j++) { // chaque colonne
      cas = jeu[i][j];
      if (cas != '' && jeu[i + 1][j] == cas && jeu[i + 2][j] == cas && jeu[i + 3][j] == cas) {
        return cas;
      }
    }
  }
  // Vérification des lignes
  for (i = 0; i < 5; i++) { // chaque ligne
    for (j = 0; j < 4; j++) { // on fait le test pour les cases 0 à 3
      cas = jeu[i][j];
      if (cas != '' && jeu[i][j + 1] == cas && jeu[i][j + 2] == cas && jeu[i][j + 3] == cas) {
        return cas;
      }
    }
  }
  // Vérification des diagonales haut gauche -> bas droite
  for (i = 0; i < 2; i++) { // on fait le test pour les lignes 0 et 1
    for (j = 0; j < 4; j++) { // on fait le test pour les cases 0 à 3
      cas = jeu[i][j];
      if (cas != '' && jeu[i + 1][j + 1] == cas && jeu[i + 2][j + 2] == cas && jeu[i + 3][j + 3] == cas) {
        return cas;
      }
    }
  }
  // Vérification des diagonales bas gauche -> haut droite
  for (i = 3; i < 5; i++) { // on fait le test pour les lignes 3 et 4
    for (j = 0; j < 4; j++) { // on fait le test pour les cases 0 à 3
      cas = jeu[i][j];
      if (cas != '' && jeu[i - 1][j + 1] == cas && jeu[i - 2][j + 2] == cas && jeu[i - 3][j + 3] == cas) {
        return cas;
      }
    }
  }
  return '';
}

function Rempli(jeu) { // Teste si la grille est pleine (égalité)
  var i, j;
  for (i = 0; i < 5; i++) {
    for (j = 0; j < 7; j++) {
      if (jeu[i][j] == '') {
        return false;
      }
    }
  }
  return true;
}

// Création d'une grille vide
var jeu = [];
var i, j;
for (i = 0; i < 5; i++) {
  jeu[i] = [];
  for (j = 0; j < 7; j++) {
    jeu[i][j] = '';
  }
}

// Boucle de jeu
var fini = false;
var joueur = 'X';
var mode = Saisie("Entrez le mode (jcj, jco) \r\n[joueur contre joueur | joueur contre ordinateur]");
while (!fini) {
  AfficheGrille(jeu);
  var col = -1;
  while (col == -1) { // placer le jeton dans la colonne
    col = SaisieColonne(jeu, joueur);
  }
  if (Rempli(jeu)) { // plus aucune case de libre
    fini = true;
    AfficheGrille(jeu);
    Texte(500, 7 * (TAILLE_ROND + ESPACEMENT) + 10, " Egalité !", "black");
  } else if (Termine(jeu) != '') { // un des joueurs a gagné
    fini = true;
    AfficheGrille(jeu);
    Texte(500, 7 * (TAILLE_ROND + ESPACEMENT) + 10, joueur + " gagne !", "black");
  } else { // on continue et on inverse les tours
    if (joueur == 'X') {
      joueur = 'O';
    } else {
      joueur = 'X';
    }
  }
}
