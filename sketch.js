var player;
var playerImg;
var lineArray = [];
var enemy;
var enemyImg;
var gameState = "play";
var score = 0;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);

  player = createSprite(cnv.width / 2, cnv.height / 1.5, 50, 100);
  playerImg = loadImage('car.jpeg');
  enemyImg = loadImage('enemy.jpeg');
  player.addImage(playerImg);
  for (var i = 1; i < 4; i++) {
    var quarter = cnv.width / 4;
    lineArray.push(quarter * i);
  }
}

function draw() {
  background("white");
  spawnEnemy();

  if (keyIsDown(LEFT_ARROW) && gameState == "play") {
    player.x += 10;
    score += 5;
  } else if (keyIsDown(RIGHT_ARROW) && gameState == "play") {
    player.x -= 10;
    score += 5;
  }


  if (gameState = "play") {
    textSize(25);
    text(`Score: ${score}`, 25, 25);
  } else {
    text(`Game Has Ended!`, 25, 25);
  }
  drawSprites();
}

function spawnEnemy() {
  if (enemy == undefined) {
    var xPos = random(lineArray);
    enemy = createSprite(xPos);
    enemy.setVelocity(0, 10)
    enemy.addImage(enemyImg);
  } else if (enemy.y >= windowWidth) {
    enemy.remove()
    enemy = undefined;
  } else {
    if (player.collide(enemy)) {
      gameState = "end";
    }
  }
}
