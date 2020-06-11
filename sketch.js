var player1;
var playerCount = 0;
var database;
var gameState = 0;

function setup() {
  createCanvas(800,400);
  database = firebase.database();
  form = new Form();
}

function draw() {
  background(128);
  form.display();
  if(playerCount === 4){
    background(37)
    game = new Game();
    game.update(1);
  }
  if (gameState === 1){
    game.start();
  }
}
