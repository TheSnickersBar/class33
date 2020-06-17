class Bird extends BaseClass { // extends of of baseclass
  constructor(x,y){ //constutor
    super(x,y,50,50); // all classes that exetnd have to have a super defining the x,y, width, and height of the class
    this.image = loadImage("sprites/bird.png"); // load the bird and the smoke image
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[]; // created an empty array
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display(); // displays the super

    if(this.body.velocity.x > 10 && this.body.position.x > 200){ // if the bird follows these conditions then the smoke trail is shown
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   
  // used to see how long the smoke trail needs to be
    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
