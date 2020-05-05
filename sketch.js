var player;
var playerImg;
var lineArray = [];

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);

  player = createSprite(cnv.width / 2, cnv.height / 1.5,  50, 100);
  playerImg = loadImage('download.jpeg');
  player.addImage(playerImg);

  for (var i = 1; i < 4; i++) {
    var quarter = cnv.width / 4;
    lineArray.push(quarter*i);
  }
}

function draw() {
  if (frameCount % 200 == 0) {
    spawnEnemy();
  }
  drawSprites();
}

function spawnEnemy() {
  var enemy = createSprite()
}
