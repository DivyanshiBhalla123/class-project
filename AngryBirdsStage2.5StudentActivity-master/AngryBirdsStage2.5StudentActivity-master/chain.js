class Chain{
    constructor(bodyA,pointB,){
        var options={
            bodyA:bodyA,
            pointB:pointB,
        stiffness:0.04,
        length:18
        }
        this.sling=loadImage('sprites/sling1.png');
        this.sling=loadImage('sprites/sling2.png');
        this.sling=loadImage('sprites/sling3.png');
        this.pointB=pointB;
        this.chain=Constraint.create(options);
        World.add(world,this.chain);

    }
fly(){
    this.chain.bodyA=null;
}
 display(){
image(this.sling1, 200,20);
image(this.sling2, 170,20);

        if(this.chain.bodyA){
            var pointA=this.chain.bodyA.position;
            var pointB=this.pointB;
          push();
          stroke(48,22,8);
          if(pointA.x<220){
          storkeWeight(7)
          line(pointA.x -20,pointA.y,pointB.x -10,pointB.y);
          line(pointA.x -20,pointA.y,pointB.x -10,pointB.y -3);
   image(this.sling3,pointA.x+30,pointA.y-10,15,30);
        }
        else{
            storkeWeight(3);
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y-3);
           image(this.sling3,pointA.x+25,pointA.y-10,15,30);
        }
  pop();
        }
       
 }
}