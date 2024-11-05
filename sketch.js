let angle = 0;
let r=255, g=0, b=0

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#81b29a");
}

function draw() {
  background("#81b29a");
  rectMode(CENTER) 
  noFill();
  stroke("#ecf8f8");
  strokeWeight(2);

  let rectWidth = 50 + mouseX / 10; 
  let circleSize = 50 + mouseY / 10;

  for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 40; i++) {
      if(j<5){
        stroke("#f1f0cc")
      }else if (j<15){
        stroke("#f0fff1")
      }else{
        stroke("#e8eddf")
      }
      ellipse(25 + 50 * i, 25 + 50 * j, 30, circleSize);
      rect(10+50*i,10+50*j,rectWidth,10)
      ellipse(25 + 50 * i, 25 + 50 * j, 10, circleSize);
      rect(10+50*i,10+50*j,rectWidth,30)
    }
  }

  r=(r+1)%256;
  g=(g+2)%256;
  b=(b+3)%256;

  noFill();
  stroke(r,g,b)
  strokeWeight(5)

  textSize(150)
  textAlign(CENTER,CENTER)
  
  push()
  translate(width/2,height/2)
  rotate(angle)
  text("TKU",0,0)
  pop()

  angle+=0.02
}
