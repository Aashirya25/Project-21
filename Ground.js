class Ground 
{
  constructor(x, y, w, h) 
  {
    var Ground_options = {
      isStatic : true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, Ground_options);

    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(0,128,225);
    fill(225,178,102);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}