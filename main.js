const canvas=document.getElementById("myCanvas");
canvas.width=200;
const ctx=canvas.getContext('2d');


const road=new Road(canvas.width/2,canvas.width*0.9)
const car=new Car(road.getLaneCenter(1),100,30,50);
animate();

function animate(){
    car.update(road.borders);
    canvas.height=window.innerHeight;
    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.7);

    road.draw(ctx)
    car.draw(ctx);
    requestAnimationFrame(animate);
}

// const road2=new Road2(canvas.width*0.05,canvas.width*0.95)
// const car2=new Car2(road2.getLaneCenter(1),100,30,50)
// animate();

// function animate(){
//     car2.update();
//     canvas.height=window.innerHeight;
//     road2.draw(ctx)
//     car2.draw(ctx)
//     requestAnimationFrame(animate);
// }