class Particle{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.color=(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var particlepos=this.body.position;
        push();
        translate(particlepos.x,particlepos.y);
        imageMode(CENTER);
        image(this.image, 0,0,this.r, this.r)
        pop();
    }
}