class molduras {
    constructor(x,y,width,height) {

      this.moldura_1 = createSprite (70,80,10,10);
      this.moldura_2 = createSprite (70,180,10,10);
      this.moldura_3 = createSprite (70,290,10,10);
      this.moldura_4 = createSprite (70,400,10,10);

      this.moldura_muro_nivel_1 = createSprite (-100,-100,1,1);

      this.imagen_moldura_nivel_0 = loadImage("quadro_nivel_0_abysmal_offc.png");
      this.imagen_moldura_muro_nivel_1 = loadImage("muro_defesa_nivel_1_abysmal_offc.png");

      this.moldura_torre_nivel_1 = createSprite (-100,-100,1,1);
      this.imagen_torre_nivel_1 = loadImage ("torre_combate_nivel_1_abysmal_offc.png");

      this.moldura_base_nivel_1 = createSprite (-100,-100,1,1);
      this.imagen_base_nivel_1 = loadImage ("base_nivel_1_abysmal_offc.png");

      this.matriz = [];

      this.width = width;
      this.height = height;
    }

  display() {

      this.moldura_1.addAnimation("imagen_1_ernivel_0",this.imagen_moldura_nivel_0);
      this.moldura_1.addAnimation("16274",this.imagen_moldura_muro_nivel_1);
      this.moldura_1.addAnimation("23213",this.imagen_torre_nivel_1);
      this.moldura_1.addAnimation("base_nivel_1_1235",this.imagen_base_nivel_1);
      this.moldura_1.scale = 0.08;


      this.moldura_2.addAnimation("imagen_1_ernivel_0",this.imagen_moldura_nivel_0);
      this.moldura_2.addAnimation("77492",this.imagen_moldura_muro_nivel_1);
      this.moldura_2.addAnimation("torre_nivel_1",this.imagen_torre_nivel_1);
      this.moldura_2.addAnimation("base_nivel_1_48675",this.imagen_base_nivel_1);
      this.moldura_2.scale = 0.08;

      this.moldura_3.addAnimation("imagen_1_ernivel_0",this.imagen_moldura_nivel_0);
      this.moldura_3.addAnimation("663749",this.imagen_moldura_muro_nivel_1);
      this.moldura_3.addAnimation("torre_nivel_1_9798",this.imagen_torre_nivel_1);
      this.moldura_3.addAnimation("base_nivel_1_8677",this.imagen_base_nivel_1);
      this.moldura_3.scale = 0.08;

      this.moldura_4.addAnimation("imagen_1_ernivel_0",this.imagen_moldura_nivel_0);
      this.moldura_4.addAnimation("88596",this.imagen_moldura_muro_nivel_1);
      this.moldura_4.addAnimation("torre_nivel_1_76713",this.imagen_torre_nivel_1);
      this.moldura_4.addAnimation("base_nivel_1_84629",this.imagen_base_nivel_1);
      this.moldura_4.scale = 0.08;

      this.moldura_muro_nivel_1.addAnimation("88849",this.imagen_moldura_muro_nivel_1);
      this.moldura_muro_nivel_1.scale = 0.08;

      this.moldura_torre_nivel_1.addAnimation("9826",this.imagen_torre_nivel_1);
      this.moldura_torre_nivel_1.scale = 0.08;

      this.moldura_base_nivel_1.addAnimation("base_nivel_1_890",this.imagen_base_nivel_1);
      this.moldura_base_nivel_1.scale = 0.08;

      
      //estados
      if (estadomouse === "moldura_muro_nivel_1") {
      this.moldura_muro_nivel_1.x = mouseX;
      this.moldura_muro_nivel_1.y = mouseY;
      this.moldura_muro_nivel_1.visible = true;
      }
      else{this.moldura_muro_nivel_1.visible = false}

      if (estadomouse === "moldura_torre_nivel_1") {
       this.moldura_torre_nivel_1.x = mouseX;
       this.moldura_torre_nivel_1.y = mouseY;
       this.moldura_torre_nivel_1.visible = true;
      }
       else {this.moldura_torre_nivel_1.visible = false;}
       if (estadomouse === "moldura_base_nivel_1") {
         this.moldura_base_nivel_1.x = mouseX;
         this.moldura_base_nivel_1.y = mouseY;
         this.moldura_base_nivel_1.visible = true;
       }
       else {this.moldura_base_nivel_1.visible = false;}
      //estados 

    //muro_defesa
    if (mousePressedOver(this.moldura_1) && estadomouse === "moldura_muro_nivel_1") {
     moldura_1 = "muro_nivel_1"
     estadomouse = "none";}
    if (moldura_1 === "muro_nivel_1") { this.moldura_1.changeAnimation("16274",this.imagen_moldura_muro_nivel_1);}


    if (mousePressedOver(this.moldura_2) && estadomouse === "moldura_muro_nivel_1") {
    moldura_2 = "muro_nivel_1";estadomouse = "none";}
    if (moldura_2 === "muro_nivel_1") {this.moldura_2.changeAnimation("77492",this.imagen_moldura_muro_nivel_1);}


    if (mousePressedOver(this.moldura_3) && estadomouse === "moldura_muro_nivel_1") {
    moldura_3 = "muro_nivel_1";estadomouse = "none";}
    if (moldura_3 === "muro_nivel_1") {this.moldura_3.changeAnimation("663749",this.imagen_moldura_muro_nivel_1);}


    if (mousePressedOver(this.moldura_4) && estadomouse === "moldura_muro_nivel_1") {
    moldura_4 = "muro_nivel_1";estadomouse = "none";}
    if (moldura_4 === "muro_nivel_1") {this.moldura_4.changeAnimation("88596",this.imagen_moldura_muro_nivel_1);}
     //muro_defesa



    //torre_combate
   
    if (mousePressedOver(this.moldura_1) && estadomouse === "moldura_torre_nivel_1") {
     moldura_1 = "torre_nivel_1";
     estadomouse = "none";}
    if (moldura_1 === "torre_nivel_1") {this.moldura_1.changeAnimation("23213",this.imagen_torre_nivel_1);}


    if (mousePressedOver(this.moldura_2) && estadomouse === "moldura_torre_nivel_1") {
      moldura_2 = "torre_nivel_1";
      estadomouse = "none";}
     if (moldura_2 === "torre_nivel_1") {this.moldura_2.changeAnimation("torre_nivel_1",this.imagen_torre_nivel_1);}


     if (mousePressedOver(this.moldura_3) && estadomouse === "moldura_torre_nivel_1") {
      moldura_3 = "torre_nivel_1";
      estadomouse = "none";}
     if (moldura_3 === "torre_nivel_1") {this.moldura_3.changeAnimation("torre_nivel_1_9798",this.imagen_torre_nivel_1);}
     
     if (mousePressedOver(this.moldura_4) && estadomouse === "moldura_torre_nivel_1") {
      moldura_4 = "torre_nivel_1";
      estadomouse = "none";}
     if (moldura_4 === "torre_nivel_1") {this.moldura_4.changeAnimation("torre_nivel_1_76713",this.imagen_torre_nivel_1);}
 
    //torre_combate

    //base_central
   if (mousePressedOver(this.moldura_1) && estadomouse === "moldura_base_nivel_1") {
    moldura_1 = "base_nivel_1";
    estadomouse = "none";}
   if (moldura_1 === "base_nivel_1") {this.moldura_1.changeAnimation("base_nivel_1_1235",this.imagen_base_nivel_1);}
   

   if (mousePressedOver(this.moldura_2) && estadomouse === "moldura_base_nivel_1") {
    moldura_2 = "base_nivel_1";
    estadomouse = "none";}
   if (moldura_2 === "base_nivel_1") {this.moldura_2.changeAnimation("base_nivel_1_48675",this.imagen_base_nivel_1);}

   if (mousePressedOver(this.moldura_3) && estadomouse === "moldura_base_nivel_1") {
    moldura_3 = "base_nivel_1";
    estadomouse = "none";}
   if (moldura_3 === "base_nivel_1") {this.moldura_3.changeAnimation("base_nivel_1_8677",this.imagen_base_nivel_1);}


   if (mousePressedOver(this.moldura_4) && estadomouse === "moldura_base_nivel_1") {
    moldura_4 = "base_nivel_1";
    estadomouse = "none";}
   if (moldura_4 === "base_nivel_1") {this.moldura_4.changeAnimation("base_nivel_1_84629",this.imagen_base_nivel_1);}
   //base_central

   //click
   if (mousePressedOver(this.moldura_1) && mouseWentDown("leftButton") && moldura_1 === "base_nivel_1" && estadojogo === "jogar") {
     estadomouse = "base_nivel_1";
     base_central_offc = new base_nivel_1_dis (100,100,65,50);
     this.matriz.push(base_central_offc);
    }
    if (mousePressedOver(this.moldura_2) && mouseWentDown("leftButton") && moldura_2 === "base_nivel_1" && estadojogo === "jogar") {
      estadomouse = "base_nivel_1";
      base_central_offc = new base_nivel_1_dis (100,100,65,50);
     }
     if (mousePressedOver(this.moldura_3) && mouseWentDown("leftButton") && moldura_3 === "base_nivel_1" && estadojogo === "jogar") {
      estadomouse = "base_nivel_1";
      base_central_offc = new base_nivel_1_dis (100,100,65,50);
     }
     if (mousePressedOver(this.moldura_4) && mouseWentDown("leftButton") && moldura_4 === "base_nivel_1" && estadojogo === "jogar") {
      estadomouse = "base_nivel_1";
      base_central_offc = new base_nivel_1_dis (100,100,65,50);
     }



     //torre
     if (mousePressedOver(this.moldura_1) && mouseWentDown("leftButton") && moldura_1 === "torre_nivel_1" && estadojogo === "jogar") {
      torre_combate_offc = new torre_nivel_1 (0,0,0,0);
      estadomouse = "torre_nivel_1";
     }
     if (mousePressedOver(this.moldura_2) && mouseWentDown("leftButton") && moldura_2 === "torre_nivel_1" && estadojogo === "jogar") {
      torre_combate_offc = new torre_nivel_1 (0,0,0,0);
      estadomouse = "torre_nivel_1";
     }
     if (mousePressedOver(this.moldura_3) && mouseWentDown("leftButton") && moldura_3 === "torre_nivel_1" && estadojogo === "jogar") {
      torre_combate_offc = new torre_nivel_1 (0,0,0,0);
      estadomouse = "torre_nivel_1";
     }
     if (mousePressedOver(this.moldura_4) && mouseWentDown("leftButton") && moldura_4 === "torre_nivel_1" && estadojogo === "jogar") {
      torre_combate_offc = new torre_nivel_1 (0,0,0,0);
      estadomouse = "torre_nivel_1";
     }
     //torre
    



  }



}


