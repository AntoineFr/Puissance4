var jeu, i, j;
jeu = [];
for (i = 0; i < 7; i++) {
  jeu[i] = [];
  for (j = 0; j < 5; j++) {
    jeu[i][j] = '';
  }
}
jeu[1][4] = 'X';

function AfficheGrille(jeu) {
  for (i = 0; i < 7; i++) {
    for (j = 0; j < 5; j++) {
      if (jeu[i][j] == 'X') {
        CerclePlein((i + 1) * 22, (j + 1) * 22, 20, 'red');
      } else if (jeu[i][j] == 'O') {
        CerclePlein((i + 1) * 22, (j + 1) * 22, 20, 'yellow');
      } else {
        CerclePlein((i + 1) * 22, (j + 1) * 22, 20, 'black');
      }
    }
  }
}
AfficheGrille(jeu);
