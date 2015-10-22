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
  return false;
}
