class muro_nivel_1 {
   constructor(x,y,width,height){


    this.muro_nivel_1_offc = createSprite(x,y,width,height)
    this.width = width;
    this.height = height;
    this.imagen_muro_nivel_1 = loadImage("muro_defesa_nivel_1_offc.png");  
    this.imagen_muro_nivel_1_mouse = loadImage("base_central_nivel_1_mouse_offc.png");
   }

  display() {
    this.muro_nivel_1_offc.addImage("muro_defesa_12078",this.imagen_muro_nivel_1);
    //this.muro_nivel_1_offc.addImage("base-1_mouse",this.imagen_bases_nivel_1_mouse);
    this.muro_nivel_1_offc.scale = 0.095;


    if (estadomouse === "muro_nivel_1") {
      this.muro_nivel_1_offc.x = mouseX;
      this.muro_nivel_1_offc.y = 350;
      this.muro_nivel_1_offc.changeAnimation("base-1_mouse",this.imagen_bases_nivel_1_mouse);
  
     }
     if (est_muro_defesa_offc === "nivel_1") {
      this.muro_nivel_1_offc.changeAnimation("uhuij",this.imagen_bases_nivel_1);
     }


  }
}