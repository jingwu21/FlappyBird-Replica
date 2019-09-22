var canvas = document.getElementById("myCanvas");
var map = canvas.getContext("2d");
const width = document.getElementById("myCanvas").width;
const height = document.getElementById("myCanvas").height;
const player = new Bird(height);
var obstacles = [];
var j = 0;
console.log(width);


function createMap(){
   
   obstacles.push(new Pipe(height, width));  
   var playCoord =  player.getCoordinates();
   map.beginPath();
   map.arc(playCoord[0], playCoord[1], playCoord[2], 0, 2 * Math.PI);
   map.fillStyle = player.getColor();
   map.fill();
   
}

function startGame(){
    document.onkeydown = control;
    
    
    requestAnimationFrame(draw);
    
   
}

function draw(){
  if(!player.getLife())
     return;
  

  map.clearRect(0, 0, canvas.width, canvas.height);
  
  if(j % 60 == 0){
    
    obstacles.push(new Pipe(height, width));
  }

   
    
  for(var i = 0; i < obstacles.length; i++){
    if(i == obstacles.length - 1)
       player.update();
  

    var playCoord = player.getCoordinates();
  
    map.beginPath();
    map.arc(playCoord[0], playCoord[1], playCoord[2], 0, 2 * Math.PI);
    map.fillStyle = player.getColor();
    map.fill();

    obstacles[i].update();
    

    var pipePos = obstacles[i].position();
  
    /*var pipeWidth = pipePos[0];
   
    map.beginPath();
    map.rect(pipeWidth, 0 , pipePos[3], pipePos[1]);
    map.fillStyle = "green";
    map.fill();*/

    drawPipe(map, pipePos);
    /*
    map.beginPath();
    map.rect(pipeWidth, 0 , pipePos[3], pipePos[1]);
    map.fillStyle = "green";
    map.fill();*/


  }
  
 function drawPipe(map, pipePos){
    var pipeWidth = pipePos[0];
    map.beginPath();
    map.rect(pipeWidth, 0 , pipePos[3], pipePos[1]);
    map.fillStyle = "green";
    map.fill();


 }
  

 
  
  j++;
  requestAnimationFrame(draw);
   
   
}

function control(event){
      var c = event || window.event;
      if(c.keyCode == '38'){
         player.fly();
         console.log(c.keyCode);
         
      }
}
//createMap();
startGame();