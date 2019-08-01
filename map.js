var canvas = document.getElementById("myCanvas");
var map = canvas.getContext("2d");
const width = document.getElementById("myCanvas").width;
const height = document.getElementById("myCanvas").height;
const player = new Bird(height);
var obstacles = [];
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
  obstacles.push(new Pipe(height, width));  
  var pipePos = obstacles[0].position();
  var pipeWidth = pipePos[3];
  player.update();
  var playCoord = player.getCoordinates();
   map.clearRect(0, 0, canvas.width, canvas.height)
   map.beginPath();
   map.arc(playCoord[0], playCoord[1], playCoord[2], 0, 2 * Math.PI);
   map.fillStyle = player.getColor();
   map.fill();
   map.rect(0, 0 , pipeWidth, pipePos[1]);
   map.stroke();
  console.log(playCoord);
  
 
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