var jeu, i, j;
var TAILLE_ROND = 30, ESPACEMENT = 3;
jeu = [];
for (i = 0; i < 7; i++) { // on crée une grille vide
  jeu[i] = [];
  for (j = 0; j < 5; j++) {
    jeu[i][j] = '';
  }
}

function AfficheGrille(jeu) {
  for (i = 0; i < 7; i++) {
    for (j = 0; j < 5; j++) {
      if (jeu[i][j] == 'X') {
        CerclePlein((i + 1) * (TAILLE_ROND + ESPACEMENT), (j + 1) * (TAILLE_ROND + ESPACEMENT), TAILLE_ROND, "red");
      } else if (jeu[i][j] == 'O') {
        CerclePlein((i + 1) * (TAILLE_ROND + ESPACEMENT), (j + 1) * (TAILLE_ROND + ESPACEMENT), TAILLE_ROND, "yellow");
      } else {
        CerclePlein((i + 1) * (TAILLE_ROND + ESPACEMENT), (j + 1) * (TAILLE_ROND + ESPACEMENT), TAILLE_ROND, "black");
      }
    }
  }
}

function SaisieColonne(jeu, joueur) {
  var col, i;
  col = SaisieEntier("Dans quelle colonne voulez-vous jouer ?");
  if(jeu[col][0] != ''){ return -1; } // la colonne est pleine
  i = 0;
  while(jeu[col][i] == '' && i < 4){
    i++;
  }
  jeu[col][i] = joueur;
  return i;
}

function Termine(jeu){
  // Vérification des colonnes
  for(i = 0 ; i < 2 ; i++){ // on fait le test pour les lignes 0 et 1 (il n'y a pas 4 cases en dessous après)
    for(j = 0 ; j < 7 ; j++){ // chaque colonne
      cas = jeu[i][j];
      if(cas != '' && jeu[i+1][j] == cas && jeu[i+2][j] == cas && jeu[i+2][j] == cas){
        return cas;
      }
    }
  }
  // Vérification des lignes
  for(i = 0 ; i < 5 ; i++){ // chaque ligne
    for(j = 0 ; j < 4 ; j++){ // on fait le test pour les cases 0 à 3
      cas = jeu[i][j];
      if(cas != '' && jeu[i][j+1] == cas && jeu[i][j+2] == cas && jeu[i][j+3] == cas){
        return cas;
      }
    }
  }
  // Vérification de la diagonale haut gauche -> bas droite
  for(i = 0 ; i < 2 ; i++){ // on fait le test pour les lignes 0 et 1
    for(j = 0 ; j < 4 ; j++){ // on fait le test pour les cases 0 à 3
      cas = jeu[i][j];
      if(cas != '' && jeu[i+1][j+1] == cas && jeu[i+2][j+2] == cas && jeu[i+3][j+3] == cas){
        return cas;
      }
    }
  }
  // Vérification de la diagonale bas gauche -> haut droite
  for(i = 3 ; i < 5 ; i++){ // on fait le test pour les lignes 3 et 4
    for(j = 0 ; j < 4 ; j++){ // on fait le test pour les cases 0 à 3
      cas = jeu[i][j];
      if(cas != '' && jeu[i-1][j+1] == cas && jeu[i-2][j+2] == cas && jeu[i-3][j+3] == cas){
        return cas;
      }
    }
  }
  return '';
}
