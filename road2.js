class Road2{
    constructor(startAt,width,laneCount=3){
        const infinity=-1000000
        this.left=startAt;
        this.right=width;
        this.top=-infinity;
        this.bottom=window.innerHeight+infinity;
        this.laneCount=laneCount;
        
    }
    getLaneCenter(laneIndex){
        const laneWidth=this.right/this.laneCount
        return this.left+laneWidth/2+Math.min(laneIndex,this.laneCount-1)*laneWidth
    }
    draw(ctx){
        const laneWidth=(this.right-this.left)/this.laneCount
        for(let i=0;i<=this.laneCount;i++){
            let x=this.left+laneWidth*i// this is actually linear interpolation
            ctx.strokeStyle='white';
            ctx.lineWidth=5;
            if(i>0 && i<this.laneCount){
                ctx.setLineDash([20,20])
            }else{
                ctx.setLineDash([])
            }
            ctx.beginPath();
            ctx.moveTo(x,this.top);
            ctx.lineTo(x,this.bottom);
            ctx.stroke();
        }
    }
}