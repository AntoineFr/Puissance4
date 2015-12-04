var TAILLE_ROND = 30, ESPACEMENT = 3;

function AfficheGrille(jeu) {
  for (i = 0; i < 5; i++) {
    for (j = 0; j < 7; j++) {
      if (jeu[i][j] == 'X') {
        CerclePlein((j + 1) * (TAILLE_ROND + ESPACEMENT), (i + 1) * (TAILLE_ROND + ESPACEMENT), TAILLE_ROND, "red");
      } else if (jeu[i][j] == 'O') {
        CerclePlein((j + 1) * (TAILLE_ROND + ESPACEMENT), (i + 1) * (TAILLE_ROND + ESPACEMENT), TAILLE_ROND, "yellow");
      } else {
        CerclePlein((j + 1) * (TAILLE_ROND + ESPACEMENT), (i + 1) * (TAILLE_ROND + ESPACEMENT), TAILLE_ROND, "black");
      }
    }
  }
}

function SaisieColonne(jeu, joueur) {
  var col, i;
  col = SaisieEntier("Dans quelle colonne voulez-vous jouer ?");
  if (jeu[0][col] != '') { // la colonne est pleine
    return -1;
  }
  i = 0;
  while (jeu[i][col] == '' && i < 4) {
    i++;
  }
  jeu[i][col] = joueur;
  return i;
}

function Termine(jeu) {
  // Vérification des colonnes
  for (i = 0; i < 2; i++) { // on fait le test pour les lignes 0 et 1 (il n'y a pas 4 cases en dessous après)
    for (j = 0; j < 7; j++) { // chaque colonne
      cas = jeu[i][j];
      if (cas != '' && jeu[i + 1][j] == cas && jeu[i + 2][j] == cas && jeu[i + 2][j] == cas) {
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

// Création d'une grille vide
var i, j;
var jeu = [];
for (i = 0; i < 5; i++) {
  jeu[i] = [];
  for (j = 0; j < 7; j++) {
    jeu[i][j] = '';
  }
}

// Boucle de jeu
var fini = false;
var joueur = 'X';
while (!fini) {
  AfficheGrille(jeu);
  var col = SaisieColonne(jeu, joueur);
  if (col == -1) {
    col = SaisieColonne(jeu, joueur);
  } else {
    if (Termine(jeu)) {
      fini = true;
    } else {
      if (joueur == 'X') {
        joueur = 'O';
      } else {
        joueur = 'X';
      }
    }
  }
}
