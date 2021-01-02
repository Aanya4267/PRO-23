class box {
    constructor(x,y,wid,hei){
        this.width  = wid ; 
        this.height = hei ; 
        this.x = x ; 
        this.y = y ; 
        this.body = Bodies.rectangle(x,y,wid,hei,{isStatic:true});
        World.add(world,this.body);
    }

   

    display(){
        var pos = this.body.position ; 
        rectMode(CENTER);
        fill("red");
        rect(this.x,this.y,this.width,this.height);
    }
    }
