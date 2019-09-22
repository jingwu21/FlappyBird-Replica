class Pipe{
    constructor(height, width){
      this.width = 45;
      this.topPipe = (Math.random() * height/3 + 60) ;
      this.bottomPipe = Math.random(height/2);
      this.speed = 2;
      this.start = width;
    }
    
    position(){
       var pos = [this.start, this.topPipe, this.bottomPipe, this.width, this.speed];
       return pos;
    }

    update(){
        this.start -= this.speed;
    }

}