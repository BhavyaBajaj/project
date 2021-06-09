class Rubber {
    constructor(x, y, width, height) {
      var options = {
          restitution:0.3,
          friction:0.5,
          density:1,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.r = width;
      this.r = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("green");
      stroke("white");
      strokeWeight(3)
      ellipse(0,0,this.r,this.r)
      pop();
    }
  };
			
			
