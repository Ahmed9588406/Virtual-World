// Class to represent the edges between the points
class Segment {
    // constructor to initialize points to make line between them
    constructor(p1,p2){
        this.p1=p1
        this.p2=p2
    }

    equals(seg){
        return this.includes(seg.p1) && this.includes(seg.p2)
    }

    includes(point){
       return this.p1.equals(point) || this.p2.equals(point) 
    }

    // This function to draw lines between points
    draw(ctx,width=2,color="black"){
        ctx.beginPath()
        ctx.lineWidth=width
        ctx.strokStyle = color
        ctx.moveTo(this.p1.x,this.p1.y)
        ctx.lineTo(this.p2.x,this.p2.y)
        ctx.stroke()
    }
}