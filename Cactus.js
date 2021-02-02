class Cactus {
    constructor(x,y,w,h){
        this.cactus = createSprite(x,y,w,h);
        this.cactusImg = loadImage("images/Cactus2.png");
        this.cactus.addImage(this.cactusImg)
        this.cactus.scale = 0.3
    }

}