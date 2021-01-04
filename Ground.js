class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width=width;
        this.height=height;
        this.ground=Bodies.rectangle(x,y,width,height,options);
        World.add(myWorld,this.ground);
    }
    display(){
        push();
        rectMode(CENTER); 
        fill ("brown"); 
 rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
   pop (); 
}
}