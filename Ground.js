class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true // the ground is static
      }
      this.body = Bodies.rectangle(x,y,width,height,options); // the body is a rectangle
      this.width = width;
      this.height = height;
      World.add(world, this.body); // added to the world
    }
    display(){
      var pos =this.body.position; // the position is the bodys position
      rectMode(CENTER); // the rectangle is in the center
      fill("brown"); // the ground is brown
      rect(pos.x, pos.y, this.width, this.height); // the rectangle has these features
    }
  };
