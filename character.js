class Bird{
    constructor(height){
        this.y = height/2;
        this.x = 50;
        this.radius = 15;
        this.color = "red";
        this.gravity = 0.1;
        this.velocity = 0;
        this.height = height;
        this.alive = true;
    }
    getCoordinates(){
       let coordinates = [this.x, this.y, this.radius];
       return coordinates;
    }
    getColor(){
        return this.color;
    }
    fly(){
      this.y -= 80;
      this.velocity = 1;
     
    }

    getLife(){
       return this.alive;
    }

    update(){
       
      
      
       this.velocity += this.gravity;

       this.y += this.velocity;
       console.log("Y-axis: " + this.y);
       if(this.y > this.height){
          this.y = this.height;
          this.alive = false;
       }

       


    }
}
