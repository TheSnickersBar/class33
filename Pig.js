class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png"); // loads pig image
    this.Visiblity = 255; // gives its visibility
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){ // is the pigs velocity is less than 3 then it will show
    super.display();
   }
   else{ // if now the pig will slowly dissapear
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }

  score(){ // if the pig is gone then the player is awarded points
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }



};