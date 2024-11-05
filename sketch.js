function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#81b29a");
}

function draw() {
  background("#81b29a"); 
  noFill();
  stroke("#ecf8f8");
  strokeWeight(2);

  let rectWidth = 50 + mouseX / 20; 
  let circleSize = 50 + mouseY / 20;

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
      ellipse(25 + 50 * i, 25 + 50 * j, 10, rectWidth);
      rect(10+50*i,10+50*j,rectWidth,30)
    }
  }
}
