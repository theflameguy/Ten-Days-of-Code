var n=12
var x=[],y=[],w=[],h=[]
spd=1;


function setup() {
  // put setup code here
  // createCanvas(window.innerWidth,window.innerHeight);  //full scr
  createCanvas(700, 700);  //test scr
  // createCanvas(1080, 2340);  //phone scr(realme 3 pro)

  noFill();
  rectMode(CENTER)
  n=floor(width/40);
  for(var i=0;i<n;i++){
    x.push(width/2)
    y.push(height/2)
    w.push(map(i,0,n-1,150*2,50*2))
    h.push(map(i,0,n-1,300*2,150*2))
    
  }

  

}

function draw() {
  // record the canvas(start)
  
  // if(frameCount===1)
  // capturer.start()

  background(20);
  strokeWeight(3);
  stroke(255,50,50);
  
  rect(width/2,height/2,150*2,300*2,100*2)
  
  for(var i=1;i<n;i++){
    
    w[i]-=spd;
    h[i]-=(spd*(3/2));
    if(w[i]<50*2) {w[i]=150*2; h[i]=300*2}    

    strokeWeight(map(w[i],150*2,50*2,3,0.05))
    stroke(255,50,50,map(w[i],150*2,50*2,200,0));
    rect(x[i],y[i],w[i],h[i],350)
  }
  stroke(200,10,10,180)
  rect(width/2,height/2,50*2,150*2,350)
  
  // frameRate(5)
  // console.log(frameCount);

  
  // record the canvas(end)

  // var sec=200/60
  // if(frameCount< 60*sec){
  //   capturer.capture(canvas)
  // }
  // else if(frameCount ===60*sec ){
  //   capturer.save();
  //   capturer.stop();
  // }

}

