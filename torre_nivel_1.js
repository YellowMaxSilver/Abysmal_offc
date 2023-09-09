class torre_nivel_1 {
  constructor(x,y,width,height) {

    this.torre_nivel_1_offc = createSprite (x,y,width,height);
    this.width = width;
    this.height = height;
    this.imagen_torre_nivel_1 = loadImage("imagen_torre_combate_nivel_1_offc.png");
    this.imagen_torre_nivel_1_mouse = loadImage("torre_combate_nivel_1_mouse_offc.png");
  }
  display() {

    this.torre_nivel_1_offc.addAnimation("imagen_torre",this.imagen_torre_nivel_1);
    this.torre_nivel_1_offc.addAnimation("imagen_torre_mouse",this.imagen_torre_nivel_1_mouse)
    this.torre_nivel_1_offc.scale = 0.18;

    if (estadomouse === "torre_nivel_1") {
     this.torre_nivel_1_offc.changeAnimation("imagen_torre_mouse",this.imagen_torre_nivel_1_mouse);
     this.torre_nivel_1_offc.x = mouseX;
     this.torre_nivel_1_offc.y = 310;
    }
    if (est_torre_combate_offc === "nivel_1") {
    this.torre_nivel_1_offc.changeAnimation("imagen_torre",this.imagen_torre_nivel_1);
  }


    }
}