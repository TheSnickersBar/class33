
class SlingShot{
    constructor(bodyA, pointB){ // the 2 items that the slingshot is put on to
        var options = { // options of the slingshot
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sprites/sling1.png'); // 3 images of the sling shot
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options); // creates the constraint
        World.add(world, this.sling); // adds it to the world
    }
    attach(body){ // attaches body a to body b
        this.sling.bodyA = body;
    }
    
    fly(){ // makes the sling null letting the bird fly
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20); // where sling 1 and 2 have to show
        image(this.sling2,170,20);
        if(this.sling.bodyA){ // adds the sling between body a and b
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8); // when the slingshot is streched back then the lines become smaller or bigger
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}