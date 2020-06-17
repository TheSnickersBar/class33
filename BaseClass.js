class BaseClass{ // this is the base class that most other classes extend off of because they have similar characterisics
    constructor(x, y, width, height, angle) { // what most classes have an will change in each class
        var options = { // all classes have the same options
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options); // adds the body(rectange) and gives it hight with x and y positions
        this.width = width; // gives the width and height here
        this.height = height;
        this.image = loadImage("sprites/base.png"); // loads image
        World.add(world, this.body); // adds it to the word
      }
      display(){ // all the classes that exetend off of this have the same display features
        var angle = this.body.angle; // sets the angle
        push(); // pushes the code
        translate(this.body.position.x, this.body.position.y); // transaltes the object
        rotate(angle); // rotates it if it has an angle
        imageMode(CENTER); // makes the image in the center
        image(this.image, 0, 0, this.width, this.height); // has the image x,y, with, height in realation to the sprite
        pop(); // tells the comuter to remove the above instrucions
      }
}