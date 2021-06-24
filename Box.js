class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.04,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("bowlingpin.png");
 
    
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    var pos = this.body.position;
push();
translate(this.body.position.x+100, this.body.position.y);
rotate(angle);
imageMode(CENTER);
image(this.image, this.body.position.x, this.body.position.y,100,100);
pop();
  }
}