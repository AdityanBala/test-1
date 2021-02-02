class Ninja {
    constructor(){
       this.ninja = createSprite(200,200,20,20);
       this.anim = loadAnimation("images/Ninja 1.png" , "images/Ninja 2.png" , "images/Ninja 3.png" , "images/Ninja 4.png" , "images/Ninja 5.png" , "images/Ninja 6.png")
    }

    display(){
       
       this.ninja.addAnimation("Running", this.anim)

        drawSprites();
    }

    
}