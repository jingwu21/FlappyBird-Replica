var canvas = document.getElementById("myCanvas");
var map = canvas.getContext("2d");
const player = new Bird(500);
function createMap(){
  
   var playCoord =  player.getCoordinates();
   map.beginPath();
   map.arc(playCoord[0], playCoord[1], playCoord[2], 0, 2 * Math.PI);
   map.fillStyle = player.getColor();
   map.fill();
}

function startGame(){
    document.onkeydown = control;
    window.requestAnimationFrame(draw);
    
   
}

function draw(){
  
  var playCoord = player.getCoordinates();
   map.clearRect(0, 0, canvas.width, canvas.height)
   map.beginPath();
   map.arc(playCoord[0], playCoord[1], playCoord[2], 0, 2 * Math.PI);
   map.fillStyle = player.getColor();
   map.fill();
   console.log(playCoord);
   window.requestAnimationFrame(draw);
   
}

function control(event){
      var c = event || window.event;
      if(c.keyCode == '38'){
         player.update();
         console.log(c.keyCode);
         console.log(this.y);
      }
}
//createMap();
startGame();