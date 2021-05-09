class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:50
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }
    display(){
     if(this.sling.bodyA){
         strokeWeight(4);
         push();
         stroke("blue");
         var pointA = this.sling.bodyA.position;
         var pointB = this.pointB;
         line(pointA.x, pointA.y, pointB.x, pointB.y);
         pop();

     }
    }

    fly(){
     this.sling.bodyA = null;
    }

    attatch(body){
     this.sling.bodyA = body;
    }
}