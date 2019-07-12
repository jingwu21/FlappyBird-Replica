class Bird{
  constructor(height){
      this.y = height/2;
      this.x = 50;
      this.radius = 15;
      this.color = "red";
  }
  getCoordinates(){
     let coordinates = [this.x, this.y, this.radius];
     return coordinates;
  }
  getColor(){
      return this.color;
  }
  
  update(){
     this.y -= 10;
  }
}
