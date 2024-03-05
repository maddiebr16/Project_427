

let currentText = '';
let textDisplayTime = 0;
let prompt = 'click anywhere. Do they love you?'
let p1img, p2img, p3img, p4img, p5img, p6img, p7img, p8img; 
let song1, song2, song3, song4, song5, song6, song7, song8; 
//song1 is I want to know what love is by foreigner. 

let flower = {
  circlex: 300,
  circley: 320, 
  diameter: 120,
  circleOn: true,
  p1x: 15,
  p1y: 20,
  p1On: true,
  //top left petal
  p2x: 0,
  p2y: 20,
  p2On: true,
  //bottom left
  p3x: 10,
  p3y: 100,
  p3On: true,
  //right top
  p4x: 10,
  p4y: 90,
  p4On: true,
  //right bottom
  p5x: 10,
  p5y: 90,
  p5On: true,
  //bottom right
  p6x: -65,
  p6y: 95,
  p6On: true,
  //left bottom
  p7X: -80, 
  p7y: 30, 
  p7On: true,
  //left top
  p8x: -100,
  p8y: 5,
  p8On: true, 
  display:function(){
    
    if (this.p1On){
      image(p1img, this.p1x, this.p1y, width, height);
    }
    if (this.p2On){
      image(p2img, this.p2x, this.p2y, width, height);
    }
    if (this.p3On){
      image(p3img, this.p3x, this.p3y, width, height); 
    }
    if (this.p4On){
      image(p4img, this.p4x, this.p4y, width, height); 
    }
    if(this.p5On){
      image(p5img, this.p5x, this.p5y, width, height); 
    }
    if (this.p6On){ 
      image(p6img,this.p6x,this.p6y,width, height);
    }
    if(this.p7On){
      image(p7img, this.p7X, this.p7y, width, height)
    }
    if(this.p8On){
      image(p8img, this.p8x, this.p8y, width, height); 
    }
    if (this.circleOn){
      circle(this.circlex,this.circley, this.diameter); 
    }
  }

}
function preload(){
  p1img = loadImage('petal-01.png');
  p2img = loadImage('petal-02.png');
  p3img = loadImage('petal-03.png');
  p4img = loadImage('petal-04.png');
  p5img = loadImage('petal-05.png');
  p6img = loadImage('petal-06.png');
  p7img = loadImage('petal-07.png');
  p8img = loadImage('petal-08.png');
  song1 = loadSound('Iwanttoknowwhatloveis.mp3');
  song2 = loadSound('sundaykindoflove.mp3');
  song3 = loadSound('canthelpfallinginlove.mp3');
  song4 = loadSound('yoursong.mp3');
  song5 = loadSound('fastcar.mp3');
  song6 = loadSound('allofme.mp3');
  song7 = loadSound('savingallmylove.mp3');
  song8 = loadSound('timeaftertime.mp3');
}
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background('#84D8E8');
  noStroke();
  fill('black');
  textSize(35);
  text(prompt, 50, 50);
  fill('#F6F868');
  flower.display();

  if (currentText !== '') {
    fill('black');
    textSize(18);
    text(currentText, width / 2, height - 20);
  }
  if (millis() > textDisplayTime){
    currentText = '';
  }

  if (!flower.p1On && !flower.p2On && !flower.p3On && !flower.p4On &&
    !flower.p5On && !flower.p6On && !flower.p7On && !flower.p8On) {
    fill('red');
    textSize(30);
    textAlign(CENTER, CENTER);
    text("They love you! Happy Valentine's Day!", width / 2, height / 2);
  }
  if (!flower.p1On && !flower.p2On && !flower.p3On && !flower.p4On &&
    !flower.p5On && !flower.p6On && !flower.p7On && !flower.p8On) {
    fill('red');
    rect(width / 2 - 50, height - 70, 100, 40);
    fill('white');
    textSize(18);
    textAlign(CENTER, CENTER);
    text('restart', width / 2, height - 50);
  }
}

function restart(){
  flower.p1On =true;
  flower.p2On =true;
  flower.p3On =true;
  flower.p4On =true;
  flower.p5On =true;
  flower.p6On =true;
  flower.p7On =true;
  flower.p8On =true;
}
  
function mousePressed() {
  if (flower.p1On) {
    flower.p1On = false;
    song1.play();
    currentText = 'they love me not';
    textDisplayTime = millis() + 10000;
  } else if (flower.p2On) {
    flower.p2On = false;
    song1.stop();
    song2.play();
    currentText = 'they love me';
    textDisplayTime = millis() + 10000;
  } else if (flower.p3On) {
    flower.p3On = false;
    song2.stop();
    song3.play();
    currentText = 'they love me not';
    textDisplayTime = millis() + 10000;
  } else if (flower.p4On) {
    flower.p4On = false;
    song3.stop();
    song4.play();
    currentText = 'they love me';
    textDisplayTime = millis() + 10000;
  } else if (flower.p5On) {
    flower.p5On = false;
    song4.stop();
    song5.play();
    currentText = 'they love me not';
    textDisplayTime = millis() + 10000;
  } else if (flower.p6On) {
    flower.p6On = false;
    song5.stop();
    song6.play();
    currentText = 'they love me';
    textDisplayTime = millis() + 10000;
  } else if (flower.p7On) {
    flower.p7On = false;
    song6.stop();
    song7.play();
    currentText = 'they love me not';
    textDisplayTime = millis() + 10000;
  } else if (flower.p8On) {
    flower.p8On = false;
    song7.stop();
    song8.play();
    currentText = 'they love me';
    textDisplayTime = millis() + 10000;

  } else if (
    !flower.p1On &&
    !flower.p2On &&
    !flower.p3On &&
    !flower.p4On &&
    !flower.p5On &&
    !flower.p6On &&
    !flower.p7On &&
    !flower.p8On &&
    mouseX > width / 2 - 50 &&
    mouseX < width / 2 + 50 &&
    mouseY > height - 70 &&
    mouseY < height - 30
  ) {
    restart();
    song8.stop();
  }
}

