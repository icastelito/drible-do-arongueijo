// imagens estáticas
let bgImgRoad;
// Variáveis para velocidade de animação
let widthCanva = 1000, heightCanva = 500;

function preload() {
    bgImgRoad = loadImage('assets/river.jpg');
    carregaEnemy();
    carregaActor();
}

function setup() {
    createCanvas(widthCanva, heightCanva);
}

function draw() {
    background(bgImgRoad);
    mostraActor();
    mostraEnemy();
    movimentHabilities();
    moviActor();
    coliActor();
}


