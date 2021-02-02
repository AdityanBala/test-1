class Platform {
    constructor(x,y,w,h,color){
        this.platform = createSprite(x,y,w,h);
        this.platform.shapeColor = color
    }

    collider(){
        ninja.collide(this.platform);
    }

    Bounce(obj1,obj2){
        this.platform.bounceOff(obj1);
        this.platform.bounceOff(obj2);
        this.platform.velocityX = 5
    }

}