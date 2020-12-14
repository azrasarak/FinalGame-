
let ballA=400; 
let ballB= 400; 
let BallSize= 50; 
let score = 0; 
let GameLevel= "L1";

let song = "game.mp3";
let slider; 

// background color for text 
let elem = document.getElementById('elem');
  elem.style.background = 'red';

// user intraction 
let questions = 1;
let questionsLeft = ' [' + questions + ' questions left]';
let adjective = prompt('Write your full name ' + questionsLeft);
questions -= 0;
alert('Ok, ready to play the game?');
let sentence = "This game is played by: " + adjective;
document.write(sentence);

//setup of the game
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(30);
  song=loadSound("game.mp3",loaded);
  slider= createSlider(0,1,0.5,0.01)
}
function loaded(){
  song.play();
}
//Levels and design 
function draw() {
  song.setVolume(slider.value());
  if (GameLevel === "L1"){
    levelOne();
  }
  if (GameLevel === "L2"){
    levelTwo();
  }
  if (GameLevel === "L3"){
    levelThree();
  }
  
 text(("Score:" +score),width/2,40);

// loops - to make the design on the drawing
for (let x = 0; x<= width; x= x+20){
  fill('white');
  rect (x,535,10,10);
}
for (let x = 0; x <=height; x = x+20){
  fill ('white');
  rect (x, 50,10,10)}
}

// LEVEL 1
function levelOne(){
  background ('green')
  text("Level 1",width/2,height-30);
  let distToBall= dist(ballA,ballB,mouseX,mouseY);
  if (distToBall < BallSize/2){
  ballA = random(width);
  ballB = random(height);
  score = score + 100;
  }
  if (score>1000){
    GameLevel = "L2";
  }
  line(ballA,ballB,mouseX,mouseY);
  fill('white');
  ellipse(ballA,ballB,BallSize,BallSize);
}
//LEVEL 2
function levelTwo(){
  background ('yellow');
  text("Level 2",width/2,height-30);
  let distToBall= dist(ballA,ballB,mouseX,mouseY);
  if (distToBall < BallSize/2){
  ballA = random(width);
  ballB = random(height);
  score = score + 100;
  BallSize = BallSize - 4; 
  }
  if (score>1500){
  GameLevel = "L3";
  }
   
  ellipse(ballA,ballB,BallSize,BallSize);
}
// LEVEL 3 
function levelThree(){
  background('red');
  text("Level 3",width/2,height-30);
  let distToBall= dist(ballA,ballB,mouseX,mouseY);
  if (distToBall < BallSize/2){
  ballA = random(width);
  ballB = random(height);
  score = score + 100;
  BallSize = BallSize - 6; 
  }
  ellipse(ballA,ballB,BallSize,BallSize);
}

