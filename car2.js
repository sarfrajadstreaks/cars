const engines=[
    {
        name:"v1",
        maxSpeed:3,//*100 km/h
        acceleration_decceleration:0.2,
        angleOfrotation:0.03, //radian
        tireFriction:0.05
    },
    {
        name:"v2",
        maxSpeed:4,//*100km/h
        acceleration_decceleration:0.2,
        angleOfrotation:0.03, //radian
        tireFriction:0.03
    },
    {
        name:"v3",
        maxSpeed:6,//*100 km/h
        acceleration_decceleration:0.3,
        angleOfrotation:0.05, //radian
        tireFriction:0.03
    }
]
class Car2{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.speed=0;
        this.controls=new Controls()
        this.engine={
            name:"v1",
            maxSpeed:3,//*100 km/h
            acceleration_decceleration:0.2,
            angleOfrotation:0.03, //radian
            tireFriction:0.03
        };
    }
    changeEngine(name){
        this.engine=engines.find(engine=>engine.name=name);
    }
    #move(){
        if(this.controls.forward){
            this.speed+=this.engine.acceleration_decceleration;
         }
         if(this.controls.reverse){
             this.speed-=this.engine.acceleration_decceleration;
         }
         if(this.speed>this.engine.maxSpeed){
             this.speed=this.engine.maxSpeed;
         }
         if(this.speed<-this.engine.maxSpeed/2){
             this.speed=-this.engine.maxSpeed/2;
         }
         if(this.speed>0){
             this.speed-=this.engine.tireFriction;
         }
         if(this.speed<0){
             this.speed+=this.engine.tireFriction
         }
         if(Math.abs(this.speed)<this.engine.tireFriction){
             this.speed=0;
         }
         if(this.speed!=0){
             const flip=this.speed>0?1:-1;
             if(this.controls.left){
                 this.engine.angleOfrotation+=0.03*flip;
             }
             if(this.controls.right){
                 this.engine.angleOfrotation-=0.03*flip;
             }
         }
        
         this.x-=Math.sin(this.engine.angleOfrotation)*this.speed;
         this.y-=Math.cos(this.engine.angleOfrotation)*this.speed;
    }
    update(){
       this.#move();
    }
    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.engine.angleOfrotation);
        ctx.beginPath();
        ctx.rect(-this.width/2,
            -this.height/2,
            this.width,
            this.height
        )
        ctx.fillStyle="black"
        ctx.fill();
        ctx.beginPath();
        ctx.rect(-this.width/2,
            -this.height/2,
            10,
            10
        );
        ctx.fillStyle="red"
        ctx.fill();

        ctx.beginPath();
        ctx.rect(this.width/2,
            -this.height/2,
            -10,
            10
        );
        ctx.fillStyle="red"
        ctx.fill();
        ctx.restore();
    }
}