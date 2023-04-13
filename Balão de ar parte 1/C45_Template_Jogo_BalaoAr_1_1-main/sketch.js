var bg, bgImg
var ballon, ballonImg

function preload(){
    bgImg = loadImage("assets/cityImage.png");
    ballonImg = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png");

}

function setup(){
    createCanvas(700, 560);

    //Imagem de fundo.
    bg = createSprite(350, 280);
    bg.addImage(bgImg);
    bg.scale = 0.4;

    //criando balão
    ballon = createSprite(100, 200, 20, 50);
    ballon.addAnimation("ballon", ballonImg);
    ballon.scale = 0.25;

}

function draw() {
    background("black");

    //fazendo o balão de ar quente pular
    if(keyDown("space")){
        ballon.velocityY = -6;
    }

    //adicioando gravidade
    ballon.velocityY = ballon.velocityY +2;
  
    drawSprites();
}
