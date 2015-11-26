var jeu, i, j;
var TAILLE_ROND = 20, ESPACEMENT = 3;
jeu = [];
for (i = 0; i < 7; i++) {
  jeu[i] = [];
  for (j = 0; j < 5; j++) {
    jeu[i][j] = '';
    //if (i == 2) jeu[i][j] = 'X';
  }
}
jeu[1][0] = 'X';

function AfficheGrille(jeu) {
  for (i = 0; i < 7; i++) {
    var y = 5;
    for (j = 0; j < 5; j++) {
      if (jeu[i][j] == 'X') {
        CerclePlein((i + 1) * (TAILLE_ROND + ESPACEMENT), y * (TAILLE_ROND + ESPACEMENT), TAILLE_ROND, "red");
      } else if (jeu[i][j] == 'O') {
        CerclePlein((i + 1) * (TAILLE_ROND + ESPACEMENT), y * (TAILLE_ROND + ESPACEMENT), TAILLE_ROND, "yellow");
      } else {
        CerclePlein((i + 1) * (TAILLE_ROND + ESPACEMENT), y * (TAILLE_ROND + ESPACEMENT), TAILLE_ROND, "black");
      }
      y--;
    }
  }
}
AfficheGrille(jeu);

function SaisieColonne(jeu) {
  var colonne, ok, y;
  colonne = SaisieEntier("Dans quelle colonne voulez-vous jouer ?");
  ok = false;
  for (y = 0; y < 5; y++) {
    if (jeu[colonne][y] == '') {
      ok = true;
      break;
    }
  }
  if (ok) {
    return y;
  } else {
    return -1;
  }
}
//alert(SaisieColonne(jeu));

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
