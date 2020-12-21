class box{
    constructor(x,y,width,height){
        var opt={
            restitution:0.8
        }
this.body=Bodies.rectangle(x,y,width,height,opt)
World.add(myWorld,this.body)
this.width=width;
this.height=height;
    }
    display(){
        var angle=this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}