// Variáveis para posicionamento dos inimigos
let enemSize = 30, enemX = 950;
// imagens animadas
let imgHabi = [];
// imagens estáticas
let imgEne = [];
// Variáveis para posicionamento dos poderes
let moviXHabi = [800, 800, 800, 800];
// Velocidade dos poderes
let speHability = [7, 6, 5, 5];
// Tamanho da habilidade
let habiSize = [70,50,70,70];
// Posição no eixo Y
let yHabi = [60, 160, 260, 360];

function carregaEnemy() {
  imgEne[0] = loadImage('assets/enemyone.png');
  imgEne[1] = loadImage('assets/enemytwo.png');
  imgEne[2] = loadImage('assets/enemythree.png');
  imgEne[3] = loadImage('assets/enemyfour.png');
  imgHabi[0] = loadImage('assets/specialHabilityOne.png');
  imgHabi[1] = loadImage('assets/specialHabilityTwo.png');
  imgHabi[2] = loadImage('assets/specialHabilityThree.png');
  imgHabi[3] = loadImage('assets/specialHabilityFour.png');
}

function mostraEnemy() {
  image(imgEne[0], enemX, 80, enemSize, enemSize);
  image(imgEne[1], enemX, 180, enemSize, enemSize);
  image(imgEne[2], enemX, 280, enemSize, enemSize);
  image(imgEne[3], enemX, 380, enemSize, enemSize);
  image(imgHabi[0], moviXHabi[0], yHabi[0], habiSize[0], habiSize[0]);
  image(imgHabi[1], moviXHabi[1], yHabi[1], habiSize[1], habiSize[1]);
  image(imgHabi[2], moviXHabi[2], yHabi[2], habiSize[2], habiSize[3]);
  image(imgHabi[3], moviXHabi[3], yHabi[3], habiSize[2], habiSize[3]);
}

function movimentHabilities() {
  // Movimento do poder 1
  speHability[0] += 0.15;
  moviXHabi[0] -= speHability[0];
  if (moviXHabi[0] < -70) {
    moviXHabi[0] = 800;
    speHability[0] = random(7, 10);
  }

  // Movimento do poder 2
  moviXHabi[1] -= speHability[1]
  habiSize[1] += 0.5;
  if (moviXHabi[1] < -70) {
    moviXHabi[1] = 800;
    speHability[1] = random(5, 8);
    habiSize[1] = 50;
  }


  // Movimento do poder 3
  moviXHabi[2] -= speHability[2];
  if (moviXHabi[2] < -60) {
    speHability[2] *= -1;
  }
  if (moviXHabi[2] > 800) {
    speHability[2] = random(4, 6);
  }
  // Movimento do poder 4
  moviXHabi[3] -= speHability[3];
  if (moviXHabi[3] < -70) {
    moviXHabi[3] = 800;
    speHability[3] = 5;
  }
}