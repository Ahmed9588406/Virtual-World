// Class to represent the points 

class Point {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    //Equals function to test if there are two points equal to each other
    equals(point){
        return this.x == point.x && this.y == point.y
    }


    // function to draw the points on canvas
    draw(ctx, size=18,color="black"){
        const rad=size/2;
        ctx.beginPath();
        ctx.fillStyle = color
        ctx.arc(this.x,this.y,rad,0,Math.PI*2)
        ctx.fill()
    }
}