class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle); // gives the width and shows another feature of the log (angle)
    this.image = loadImage("sprites/wood2.png"); // loads image
    Matter.Body.setAngle(this.body, angle); // uses set angle funciton
  }
}