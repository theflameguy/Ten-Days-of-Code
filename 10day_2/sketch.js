var points=[]
var points2=[]
var off=0
var yoff=2

var font;
function preload() {
  font = loadFont('Helvetica.ttf');
}

function setup() {
  createCanvas(700, 700);
  stroke(200)
  strokeWeight(2)
  
  
}

function draw() {
    // if(frameCount==20)
    //   capturer.start()

  background(20,80);
  
  fill(200,0)
  // setLineDash([1, 10])
  textSize(500)
  // text('2',150,450)

  points=font.textToPoints('2',200,500,550)
  // points2=font.textToPoints('2',120,380,400)

  
  
  beginShape()
  curveVertex(points[0].x,points[0].y)
  for(var i=0;i<points.length;i++){
    var x=points[i].x;
    var y=points[i].y;
    // ellipse(x,y,5)
    curveVertex(x+25*noise(off),y+25*noise(yoff))
    
    off+=0.051
    yoff+=0.05
  }
  curveVertex(points[points.length-1].x,points[points.length-1].y)

  endShape()
  // frameRate(12)
  
  
  
  var sec=3
  // if(frameCount< 60*sec){
  //   capturer.capture(canvas)
  // }
  // else if(frameCount ===60*sec ){
  //   capturer.save();
  //   capturer.stop();
  // }
  
  
  
  
  
}
