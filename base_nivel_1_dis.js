class base_nivel_1_dis {
  constructor(x,y,width,height) {

    this.base_nivel_1_offc = createSprite(x,y,width,height)
    this.width = width;
    this.height = height;
    this.imagen_bases_nivel_1 = loadImage("base_central_nivel_1_abysmal_offc.png");  
    this.imagen_bases_nivel_1_mouse = loadImage("base_central_nivel_1_mouse_offc.png");
    //this.imagen_bases_nivel_1_mouseIs = loadImage("base_nivel_1_mouseIs_offc.png");
  

  }

  display() {

   // var pos = this.base_nivel_1_offc.position;
    //imageMode(CENTER);
    //image(this.imagen_bases_nivel_1,pos.x,pos.y,this.width,this.height)
    this.base_nivel_1_offc.addImage("uhuij",this.imagen_bases_nivel_1);
    this.base_nivel_1_offc.addImage("base-1_mouse",this.imagen_bases_nivel_1_mouse);
    //this.base_nivel_1_offc.addImage("com_mouse_na_base",this.imagen_bases_nivel_1_mouseIs);
    this.base_nivel_1_offc.scale = 0.095;
     

    if (estadomouse === "base_nivel_1") {
      this.base_nivel_1_offc.x = mouseX;
      this.base_nivel_1_offc.y = 350;
      this.base_nivel_1_offc.changeAnimation("base-1_mouse",this.imagen_bases_nivel_1_mouse);
     }
     if (est_base_central_offc === "nivel_1") {
      this.base_nivel_1_offc.changeAnimation("uhuij",this.imagen_bases_nivel_1);
     }

     if (mousePressedOver(this.base_nivel_1_offc)) {estadomouse === "base_nivel_1"}

  }
}