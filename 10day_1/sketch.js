var pos=[];
var posR=[];
var posF=[];

var gapx=10;
var gapy=15;

var xoff=230;
var yoff=125;

function setup() {
  // put setup code here
  createCanvas(700,700);  //tst scr
  // createCanvas(window.innerWidth,window.innerHeight);  //full scr
  
  fill(200,60,170)
  textSize(15)


  for(var i=0;i<7;i++){
    for(var j=7-i;j<7;j++){

      var x=xoff+i*gapx;
      var y=yoff+j*gapy
      var vect=createVector(x,y)

      pos.push(vect);
    }
  }

  for(var i=0;i<6;i++){
    for(var j=0;j<6-i;j++){
      
      var x=xoff+i*gapx;
      var y=yoff+105+j*gapy
      var vect=createVector(x,y)
      
      pos.push(vect);
    }
  }

  for(var i=0;i<5;i++){
    for(var j=0;j<30;j++){
      
      var x=xoff+70+i*gapx
      var y=yoff+j*gapy
      var vect=createVector(x,y)

      pos.push(vect);
    }
  }

  for(var i=0;i<20;i++){
    for(var j=0;j<3;j++){

      var x=xoff-10+i*gapx;
      var y=yoff+450+j*gapy
      var vect=createVector(x,y)

      pos.push(vect);
    }
  }

  var tempVect
  for(var i=0;i<pos.length;i++){
    // text('1',pos[i].x,pos[i].y)

    // if(x<0.5) x=map(x,0,0.5,-200,-100)
    // else x=map(x,0,0.5,width+100,width+200)

    // if(y<0.5) y=map(y,0,0.5,-200,-100)
    // else y=map(y,0,0.5,height+100,height+200)

    var x=map(random(),0,1,10,width-10)
    var y=map(random(),0,1,10,height-10)
    var vect=createVector(x,y)
    tempVect=createVector(x,y)

    posR.push(vect);
    posF.push(tempVect);
  }



  
}



function draw() {
  // record the canvas(start)

  // if(frameCount===1)
  // capturer.start()
  
  background(20);
  
  if(frameCount>300){
    for(var i=0;i<posF.length;i++){
      text('1',posR[i].x,posR[i].y);
  
      var v=p5.Vector.sub(posF[i],posR[i]);
      posR[i].add(v.div(25))
    }

  }
  
  else{  
      for(var i=0;i<posR.length;i++){
        text('1',posR[i].x,posR[i].y);
    
        var v=p5.Vector.sub(pos[i],posR[i]);
        posR[i].add(v.div(25))
      }
    }




  


  

  // record the canvas(end)
  
  // var sec=420/60 //seconds to capture
  // if(frameCount< 60*sec){
  //   capturer.capture(canvas)
  // }
  // else if(frameCount ===60*sec ){
  //  capturer.save();
  //  capturer.stop();
  //}

}

