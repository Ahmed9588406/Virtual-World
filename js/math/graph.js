// here the representation of the graph as it has points(nodes-vertics) and Segments(Links-Edges)
// as Segments =>{Point p1 , Point p2}

class Graph {
    constructor(points = [],segments = []){
        this.points=points;
        this.segments=segments
    }

    draw(ctx){
        for (const seg of this.segments){
            seg.draw(ctx)
        }

        for (const point of this.points){
            point.draw(ctx)
        }
    }
}