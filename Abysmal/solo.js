class solo {
  constructor(x,y,width,height) {

   var confing_piso = {
    isStatic : true  
   }

   this.body = Bodies.rectangle(x,y,width,height,confing_piso);
   this.width = width;
   this.height = height;
   this.lunar = loadImage("chao_abysmal_offc.png");
   World.add(world,this.body);
  }

  display() {

   var pos = this.body.position;
   imageMode(CENTER);
   image(this.lunar,pos.x,pos.y,this.width,this.height);
  }
}