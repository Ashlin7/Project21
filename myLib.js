function isTouching(spr1,spr2){
    if(spr1.x - spr2.x < spr1.width/2 + spr2.width/2 
       && spr2.x - spr1.x < spr1.width/2 + spr2.width/2 
       && spr1.y-spr2.y < spr1.height/2 + spr2.height/2 
       && spr2.y-spr1.y < spr1.height/2 + spr2.height/2) {

        return true;
       }
}

