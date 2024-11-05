let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle = 0
let r = 5
// ==================================================
function preload(){ 
    font = loadFont("fonts/NotoSansTC-VariableFont_wght.ttf") 
}
//===================================================

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#81b29a");
  angleMode(DEGREES) //設定三角函數的角度用0~360度
  background("#CAD2C5")
//===================================================
  points = font.textToPoints("TKUET", -300, 80, 200, {
    sampleFactor:0.06
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小。值越小代表點數越小                                                              
}

function draw() {
  background("#81b29a"); 
  noFill();
  stroke("#ecf8f8");
  strokeWeight(2);

  let rectWidth = 50 + mouseX / 20; 
  let circleSize = 50 + mouseY / 20;

  translate(width/2,height/2) //把原本原點(0,0)在左上角，改到畫布中心點

  rotate(frameCount%360) // 360旋轉

  for (let i=0; i<points.length-1; i++) { 
    //text(str(i),points[i].x,points[i].y) //在(points[i].x,points[i].y)座標上，顯示一個文字
    fill("#59C3C3")
    //noStroke()
    strokeWeight(1)
    ellipse(points[i].x+r*sin(angle+i*15),points[i].y,10) //+i*15 所有點不同搖晃
    stroke("#52489C")
    strokeWeight(3)
    //line(points[i].x,points[i].y,points[i+1].x,points[i+1].y) //畫線，兩個點，第一個點(points[i].x,points[i].y)，第二個點(points[i+1].x,points[i+1].y)
 } 

    angle = angle+10

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
