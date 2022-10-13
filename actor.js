// Movimento do arongueiro
let xImgActor = 500, yImgActor = 450;
let imgActor;


function carregaActor() {
  imgActor = loadImage('assets/aronga - up.png');
}

function mostraActor() {
  image(imgActor, xImgActor, yImgActor, 70, 70);
}

function moviActor() {
  if (keyIsDown(UP_ARROW)) {
      yImgActor -= 5;
      imgActor = loadImage('assets/aronga - up.png');
  }
  if (keyIsDown(LEFT_ARROW)) {
      xImgActor -= 5;
      imgActor = loadImage('assets/aronga - left.png');
  }
  if (keyIsDown(RIGHT_ARROW)) {
      xImgActor += 5;
      imgActor = loadImage('assets/aronga - right.png');
  }
  if (yImgActor < 0) {
      yImgActor = 450;
  }
  if (xImgActor < 0) {
      xImgActor = 0;
  }
  if (xImgActor > 900) {
      xImgActor = 900;
  }
}

function coliActor(){
  if (xImgActor <= moviXHabi[0] + habiSize[0] 
    && xImgActor >= moviXHabi[0] - habiSize[0] + 25 
    && yImgActor >= yHabi[0] - habiSize[0] 
    && yImgActor <= yHabi[0] + habiSize[0] -25) {
    yImgActor = 450;
  }

  if (xImgActor <= moviXHabi[1] + habiSize[1] 
    && xImgActor >= moviXHabi[1] - habiSize[1] + 25 
    && yImgActor >= yHabi[1] - habiSize[1] 
    && yImgActor <= yHabi[1] + habiSize[1] - 20) {
    yImgActor = 450;
  }
  if (xImgActor <= moviXHabi[2] + habiSize[2] - 25
    && xImgActor >= moviXHabi[2] - habiSize[2] + 25 
    && yImgActor >= yHabi[2] - habiSize[2] 
    && yImgActor <= yHabi[2] + habiSize[2]) {
    yImgActor = 450;
  }
  if (xImgActor <= moviXHabi[3] + habiSize[3] 
    && xImgActor >= moviXHabi[3] - habiSize[3] + 25 
    && yImgActor >= yHabi[3] - habiSize[3] 
    && yImgActor <= yHabi[3] + habiSize[3]) {
    yImgActor = 450;
  }
}