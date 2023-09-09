
//é a física, gravidade,bonceOff,etc...;
//o Wolrd é onde criamos as coisas no mundo;
//Bodies são os objetos do mundo em que vamos criar;
//Ele fas um corpo ficar preso ao outro
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var chaos;

var fundo;

//objetos
var menu_selecao,imagen_menu_selecao;
//fim objetos

//botões
var botao_comecar,imagen_botao_comecar;imagen_botao_comecar_selecionado;

var quadro_niveis,imagen_quadro_niveis_0,imagen_muro_defesa_niveis_1;
var quadro_niveis_2,imagen_torre_combate_nivel_1;
var quadro_niveis_3;

var moldura_vazia_1,moldura_vazia_2,moldura_vazia_3,moldura_vazia_4,moldura_vazia_5,
imagen_muro_nivel_1_selecionado,imagen_torre_nivel_1_selecionado,imagen_base_central_nivel_1,
imagen_base_nivel_1_selecionado;

var base_central_offc;
var torre_combate_offc,imagen_torre_combate_nivel_1_mouse,imagen_torre_combate_nivel_1_offc;
var muro_defesa_offc,imagen_muro_defesa_nivel_1_mouse,imagen_muro_defesa_nivel_1_offc;

//var quadro_muro_defesa_nivel_1;
//var quadro_torre_combate_nivel_1;
//fim botões

var estadojogo = "selecao";
var estadomouse = "base_nivel_1";

var moldura_1 = "nivel_1";
var moldura_2 = "nivel_1"; 
var moldura_3 = "nivel_1";
var moldura_4 = "nivel_1";

var est_base_central_offc = "nivel_1";
var est_torre_combate_offc = "nivel_1";
var est_muro_defesa_offc = "nivel_1";

var moldura_1_sel = "nivel_0";
var moldura_2_sel = "nivel_0";
var moldura_3_sel = "nivel_0";
var moldura_4_sel = "nivel_0";
var moldura_5_sel = "nivel_0";

var munu_pausa,imagen_menu_pausa;
var botao_pausa,imagen_botao_pausa,imagen_botao_pausa_mouse,imagen_botao_play;

var estadocamera = "ggg";
var estadocameraY = "ymais";

var transicao,imagen_transicao;
var frames1;

 var matriz = [];

function preload() {

  imagen_transicao = loadImage ("tracisição.png");

  fundo = loadImage ("buraco_negro_abysmal_offc.jpg");
  imagen_menu_selecao = loadImage ("menu_selecao_abysmal_offc.png");
  imagen_menu_pausa = loadAnimation("menu_pausa_abysmal_offc.png");

  //botao
  imagen_botao_pausa = loadAnimation ("botao_pausa_abysmal.png");
  imagen_botao_pausa_mouse = loadAnimation ("botao_pausa_mouse_abysmal.png");

  imagen_botao_play = loadAnimation ("botao_play_abysmal.png");
  //botao



  imagen_torre_combate_nivel_1_mouse = loadAnimation ("torre_combate_nivel_1_mouse_offc.png");
  imagen_torre_combate_nivel_1_offc = loadAnimation ("imagen_torre_combate_nivel_1_offc.png");

  imagen_muro_defesa_nivel_1_mouse = loadAnimation ("muro_defesa_nivel_1_mouse_offc.png");
  imagen_muro_defesa_nivel_1_offc = loadAnimation ("muro_defesa_nivel_1_offc.png");
  

  //imagen_botoes
  imagen_botao_comecar = loadAnimation ("botao_comecar_abysmal_offc.png");

  imagen_botao_comecar_selecionado = loadAnimation ("botão_comecar_selecionado_abysmal_offc.png");

  imagen_quadro_niveis_0 = loadAnimation ("quadro_nivel_0_abysmal_offc.png");
  imagen_muro_defesa_niveis_1 = loadAnimation("muro_defesa_nivel_1_abysmal_offc.png")
  imagen_torre_combate_nivel_1 = loadAnimation("torre_combate_nivel_1_abysmal_offc.png")
  imagen_base_central_nivel_1 = loadAnimation("base_nivel_1_abysmal_offc.png")


  //selecionados
  imagen_muro_nivel_1_selecionado = loadAnimation("muro_defesa_nivel_1_selecionado_offc.png");
  imagen_torre_nivel_1_selecionado = loadAnimation("torre_combate_selecionado_offc.png");
  imagen_base_nivel_1_selecionado = loadAnimation("base_nivel_1_selecionado_offc.png");
  //fim_selecionados

  //fim_imagen_botoes
}

function setup() {
  tela = createCanvas(1024,500);

  engine = Engine.create();
  world = engine.world; 

  moldura_1_sel = "muro_nivel_1";
  moldura_2_sel = "torre_nivel_1";
  moldura_3_sel = "base_nivel_1";

  estadocamera = "xmais";
  estadocameraY = "ymais";

  //pausa


  //.yMax = 400;
  //.ymin = ?;
  //pausa
      
  


  muro_defesa_offc = createSprite (-100,-100,1,1);
  muro_defesa_offc.addAnimation("sobre_mouse_muro",imagen_muro_defesa_nivel_1_mouse);
  muro_defesa_offc.addAnimation("sobre_o_muro_nivel_1",imagen_muro_defesa_nivel_1_offc);
  muro_defesa_offc.scale = 0.12;
  

  //selecao
  menu_selecao = createSprite (-100,-100,1,1);
  menu_selecao.addImage("qualcando",imagen_menu_selecao);
  menu_selecao.scale = 0.40;

  //quadro_niveis_1 = createSprite (70,100,10,10);
  //quadro_niveis_1.addAnimation("quadro_de_itens",imagen_quadro_niveis_0);
 // quadro_niveis_1.addAnimation("quadro_de_itens_1",imagen_muro_defesa_niveis_1)
  //quadro_niveis_1.scale = 0.10;

  //quadro_niveis_2 = createSprite (70,220,10,10);
  //quadro_niveis_2.addAnimation("quadro_itens_2",imagen_quadro_niveis_0);
 // quadro_niveis_2.addAnimation("quadro_itens_3",imagen_torre_combate_nivel_1)
  //quadro_niveis_2.scale = 0.10;

  //quadro_niveis_3 = createSprite (70,340,10,10);
  //quadro_niveis_3.addAnimation("quadro_3_nivel_0",imagen_quadro_niveis_0);
  //quadro_niveis_3.addAnimation("quadro_3_nivel_1",imagen_base_central_nivel_1);
  //quadro_niveis_3.scale = 0.10;
  


  botao_comecar = createSprite (-200,-200,1,1);
  botao_comecar.addAnimation("comecando",imagen_botao_comecar);
  botao_comecar.addAnimation("presionado",imagen_botao_comecar_selecionado)
  botao_comecar.scale = 0.14;


   //molduras
   moldura_vazia_1 = createSprite (-280,-100,50,50);
   moldura_vazia_1.addAnimation("moldurando_1",imagen_muro_defesa_niveis_1)
   moldura_vazia_1.addAnimation("moldurando_2_1",imagen_muro_nivel_1_selecionado)
   moldura_vazia_1.scale = 0.08;

   moldura_vazia_2 = createSprite (380,100,50,50);
   moldura_vazia_2.addAnimation("moldurando_2",imagen_quadro_niveis_0);
   moldura_vazia_2.addAnimation("moldurando_3_2",imagen_torre_nivel_1_selecionado);
   moldura_vazia_2.scale = 0.08;
   moldura_vazia_2.addAnimation("moldurando_1_2",imagen_torre_combate_nivel_1);

   moldura_vazia_3 = createSprite (480,100,50,50);
   moldura_vazia_3.addAnimation("moldurando_3",imagen_quadro_niveis_0);
   moldura_vazia_3.addAnimation("base_central_botao",imagen_base_central_nivel_1);
   moldura_vazia_3.addAnimation("base_nivel_1_sele",imagen_base_nivel_1_selecionado);
   moldura_vazia_3.scale = 0.08;

   moldura_vazia_4 = createSprite (580,100,50,50);
   moldura_vazia_4.addAnimation("moldurando_4",imagen_quadro_niveis_0);
   moldura_vazia_4.scale = 0.08;

   moldura_vazia_5 = createSprite (680,100,50,50);
   moldura_vazia_5.addAnimation("moldurando_5",imagen_quadro_niveis_0);
   moldura_vazia_5.scale = 0.08
   //fim_molduras
  //fim selecao

  
  menu_pausa = createSprite (512,540,1,1);
  menu_pausa.addAnimation("pausando_o_jogo",imagen_menu_pausa);
  menu_pausa.scale = 0.50;
  botao_pausa = createSprite (512,465,1,1);
  botao_pausa.addAnimation("botao_pausa",imagen_botao_pausa);
  botao_pausa.addAnimation("botao_pausa_mouse",imagen_botao_pausa_mouse);
  botao_pausa.addAnimation("botao_play",imagen_botao_play);
  botao_pausa.scale = 0.04;

  chaos = new solo(512,425,1054,170);
  base_central_offc = new base_nivel_1_dis (-100,-100,65,50);
  torre_combate_offc = new torre_nivel_1 (-100,-100,40,40);
  muro_defesa_offc = new muro_nivel_1 (-100,-100,0,0);

  quadro_niveis = new molduras (100,100,12,12);
   
  transicao = createSprite (2200,250,1,1);
  transicao.addImage("827643",imagen_transicao);
  transicao.scale = 1.80;

  frames1 = new Group();
  
   //caixa_1 = new caixa(1000,350,50,50);
 
   //fios = new constituti (passaro.geral,tronco_3.geral)
 
}

function draw() {
  background(fundo);  

  Engine.update(engine);

  //display
  chaos.display();
  base_central_offc.display();
  torre_combate_offc.display();
  muro_defesa_offc.display();

  quadro_niveis.display();

  //fim_display

  movimento_camera();
  menu_selecao_offc();

  //estados
    if (estadojogo === "selecao") {
    menu_selecao.x = 512;
    menu_selecao.y = 212; 

    botao_comecar.x = 910;
    botao_comecar.y = 420;

    moldura_vazia_1.x = 280;
    moldura_vazia_1.y = 100;

    moldura_vazia_2.x = 380;
    moldura_vazia_2.y = 100;

    moldura_vazia_3.x = 480;
    moldura_vazia_3.y = 100;

    moldura_vazia_4.x = 580;
    moldura_vazia_4.y = 100;

    moldura_vazia_5.x = 680;
    moldura_vazia_5.y = 100;
    }
    else {
    moldura_vazia_1.x = -280;
    moldura_vazia_1.y = -100;

    moldura_vazia_2.x = -380;
    moldura_vazia_2.y = -100;

    moldura_vazia_3.x = -380;
    moldura_vazia_3.y = -100;

    moldura_vazia_4.x = -380;
    moldura_vazia_4.y = -100;

    moldura_vazia_5.x = -380;
    moldura_vazia_5.y = -100;

    menu_selecao.x = -200;
    menu_selecao.y = -200;

    botao_comecar.x = -200;
    botao_comecar.y = -200;
    }

    
   if (estadojogo === "pausa") {
    animacao_menu_pausa();

    if (mouseWentDown("leftButton") && mousePressedOver(botao_pausa) && estadojogo === "pausa") {estadojogo = "jogar";}
    botao_pausa.changeAnimation("botao_play",imagen_botao_play);}

    else {animacao_menu_pausa_2();
    if (mouseWentDown("leftButton") && mousePressedOver(botao_pausa) && estadojogo === "jogar") {estadojogo = "pausa";}
    if (mouseIsOver(botao_pausa)){botao_pausa.changeAnimation("botao_pausa_mouse",imagen_botao_pausa_mouse); botao_pausa.scale = 0.06;}
    else{botao_pausa.changeAnimation("botao_pausa",imagen_botao_pausa);botao_pausa.scale = 0.05;}}
  
   if (keyDown("w")) {
    //quadro_niveis_1.rotationSpeed = -2;
    camera.y = camera.y - 1;
   }
   if (keyDown("s")){camera.y = camera.y + 1;}
   if(keyDown("d")){camera.x = camera.x + 1}
   if (keyDown("a")){camera.x = camera.x -1}
   console.log(camera.position);
    

  
   if (estadojogo === "jogar") {
  

    
     if (estadomouse === "base_nivel_1") {est_base_central_offc = "nivel_0";}

    if (mouseWentUp("leftButton") && estadomouse === "base_nivel_1" && estadojogo === "jogar") {estadomouse = "none";
    est_base_central_offc = "nivel_1";}
     
     //if (mousePressedOver(quadro_niveis_3) && base_central === "nivel_1" && mouseWentDown("leftButton")) {
     //estadomouse = "base_nivel_1";
     //base_central_offc = new base_nivel_1_dis (100,100,65,50);
     //est_base_central_offc = "none";}


     //frameCount %10 === 2

     //base_central_offc.addAnimation("sobre_mouse_base",imagen_base_central_nivel_1_mouse);
     //base_central_offc.addAnimation("sobre_a_base_nivel_1",imagen_base_central_nivel_1_offc);
     //base_central_offc.scale = 0.12;

     
     //torre_combate
    // if (mousePressedOver(quadro_niveis_2) && torre_combate === "nivel_1" && estadojogo === "jogar" && mouseWentDown("leftButton")) {
     //  estadomouse = "torre_nivel_1";
      // torre_combate_offc = new torre_nivel_1 (100,100,40,40);
     //}
     if (estadomouse === "torre_nivel_1") {
       torre_combate_offc.x = mouseX;
       torre_combate_offc.y = 310;
       est_torre_combate_offc = "none";
     }
      if (mouseWentUp("leftButton") && estadomouse === "torre_nivel_1" && estadojogo === "jogar") {
       est_torre_combate_offc = "nivel_1";
       estadomouse = "none";
      }
     if (est_torre_combate_offc === "nivel_1") {
      //torre_combate_offc.changeAnimation("sobre_a_torre_nivel_1",imagen_torre_combate_nivel_1_offc);
     }
    
     //torre_combate
     

     //muro_defesa
     // if (mousePressedOver(quadro_niveis_1) && muro_defesa === "nivel_1" && estadojogo === "jogar") {
      // estadomouse = "muro_nivel_1";
      // }
      if (estadomouse === "muro_nivel_1") {
        muro_defesa_offc.x = mouseX;
        muro_defesa_offc.y = 350;
        muro_defesa_offc.changeAnimation("sobre_mouse_muro",imagen_muro_defesa_nivel_1_mouse);
        est_muro_defesa_offc = "none";
       }
       if (mouseWentUp("leftButton") && estadomouse === "muro_nivel_1" && estadojogo === "jogar") {
        est_muro_defesa_offc = "nivel_1";
        estadomouse = "none";
       }
       if (est_muro_defesa_offc === "nivel_1") {
        muro_defesa_offc.changeAnimation("sobre_o_muro_nivel_1",imagen_muro_defesa_nivel_1_offc);
        //muro_defesa_offc.attraction Point (2,400,500);
       }
      }
     //muro_defesa
     
  //fim dos estados
  
  

  if (keyDown("space")) {
  estadojogo = "selecao";   
  }

  if (keyDown("v")) {}

  drawSprites();
}

function menu_selecao_offc() {

  moldura_2_sel = "torre_nivel_1";

      //muro_defesa
     // if (muro_defesa === "nivel_0") {quadro_niveis_1.changeAnimation("quadro_de_itens",imagen_quadro_niveis_0);}
     // if (muro_defesa === "nivel_1") {quadro_niveis_1.changeAnimation("quadro_de_itens_1",imagen_muro_defesa_niveis_1);}
      //fim_muro_defesa
  
  
      //torre_combate
      //if (torre_combate === "nivel_0") {quadro_niveis_2.changeAnimation("quadro_itens_2",imagen_quadro_niveis_0);}
      //if (torre_combate === "nivel_1") {quadro_niveis_2.changeAnimation("quadro_itens_3",imagen_torre_combate_nivel_1)}
      //fim_torre_combate


      //base_central
     // if (base_central === "nivel_0") {quadro_niveis_3.changeAnimation("quadro_3_nivel_0",imagen_quadro_niveis_0);  }
     // if (base_central === "nivel_1") {quadro_niveis_3.changeAnimation("quadro_3_nivel_1",imagen_base_central_nivel_1);}
      //fim_base_central
  
  
    //molduras
    if (moldura_1_sel === "muro_nivel_1") {moldura_vazia_1.changeAnimation("moldurando_1",imagen_muro_defesa_niveis_1);}
    if (moldura_2_sel === "torre_nivel_1") {moldura_vazia_2.changeAnimation("moldurando_1_2",imagen_torre_combate_nivel_1);}
    if (moldura_3_sel === "base_nivel_1") {moldura_vazia_3.changeAnimation("base_central_botao",imagen_base_central_nivel_1);}



    //moldura_1_sel
    if (mousePressedOver(moldura_vazia_1) && moldura_1_sel === "muro_nivel_1") {estadomouse = "moldura_muro_nivel_1"}


    if (mouseIsOver(moldura_vazia_1) && moldura_1_sel === "muro_nivel_1"){moldura_vazia_1.changeAnimation("moldurando_2_1",imagen_muro_nivel_1_selecionado)}
    //moldura_1_sel
  
  
    //moldura_2_sel
    if (mousePressedOver(moldura_vazia_2) && moldura_2_sel === "torre_nivel_1") {estadomouse = "moldura_torre_nivel_1";}
    if (mouseIsOver(moldura_vazia_2) && moldura_2_sel === "torre_nivel_1") {moldura_vazia_2.changeAnimation("moldurando_3_2",imagen_torre_nivel_1_selecionado);}
    //moldura_2_sel
  

    //moldura_3_sel
    if (mousePressedOver(moldura_vazia_3) && moldura_3_sel === "base_nivel_1") {estadomouse = "moldura_base_nivel_1"}
    if (mouseIsOver(moldura_vazia_3) && moldura_3_sel === "base_nivel_1") {moldura_vazia_3.changeAnimation("base_nivel_1_sele",imagen_base_nivel_1_selecionado);}
    //moldura_3_sel

  
  //quadro_niveris_clik
  //if (mousePressedOver(quadro_niveis_1) && estadojogo === "selecao") {muro_defesa = "nivel_0";}

  //if (mousePressedOver(quadro_niveis_2) && estadojogo === "selecao") {torre_combate = "nivel_0";}

  //if (mousePressedOver(quadro_niveis_3) && estadojogo == "selecao") {base_central = "nivel_0";}
  //quadro_niveis_clik


  //quadro_niveis_mouse
 // if (mouseIsOver(quadro_niveis_1)) {animacao_mouse_1(quadro_niveis_1,quadro_niveis_2,quadro_niveis_3);}
  //else {animacao_mouse_1_2(quadro_niveis_1,quadro_niveis_2,quadro_niveis_3);}

  //if (mouseIsOver(quadro_niveis_2)) {animacao_mouse_2(quadro_niveis_2,quadro_niveis_1,quadro_niveis_3);} 
  //else {animacao_mouse_2_2(quadro_niveis_2,quadro_niveis_1,quadro_niveis_3);}

  //if (mouseIsOver(quadro_niveis_3)) {animacao_mouse_3(quadro_niveis_3,quadro_niveis_1,quadro_niveis_2);}
 // else {animacao_mouse_3_2(quadro_niveis_3,quadro_niveis_1,quadro_niveis_2);}
  //fim_quadro_niveis_mouse


  //botao_comecar
  if (mousePressedOver(botao_comecar) && estadojogo === "selecao") {estadojogo = "jogar";}

  if (mouseIsOver(botao_comecar)) {botao_comecar.changeAnimation("presionado",imagen_botao_comecar_selecionado);}
  else {botao_comecar.changeAnimation("comecando",imagen_botao_comecar);}
  //botao_comecar

}


function animacao_mouse_1(potion_1,potion_2,potion_3) {
  potion_1.scale = potion_1.scale + 0.01;
  potion_2.y = potion_2.y + 5;
  potion_3.y = potion_3.y + 5;
  if (potion_2.y > 240) {potion_2.y = 240;}
  if (potion_3.y > 360) {potion_3.y = 360;}
  if (potion_1.scale > 0.12) {potion_1.scale = 0.13;}
}
function animacao_mouse_1_2(potion_1,potion_2,potion_3) {
 potion_1.scale = potion_1.scale - 0.01;
 potion_2.y = potion_2.y - 5;
 potion_3.y = potion_3.y - 5; 
 if (potion_2.y < 220) {potion_2.y = 220;}
 if (potion_3.y < 340) {potion_3.y = 340;}
 if (potion_1.scale < 0.10) {potion_1.scale = 0.10;}
}

function animacao_mouse_2(potion_1,potion_2,potion_3) {
  potion_1.scale = potion_1.scale + 0.01;
  potion_2.y = potion_2.y - 5;
  potion_3.y = potion_3.y + 8; 
  if (potion_2.y < 80) {potion_2.y = 80;}
  if (potion_1.scale > 0.12) {potion_1.scale = 0.12;}
  if (potion_3.y > 360) {potion_3.y = 360;}
}

function animacao_mouse_2_2(potion_1,potion_2,potion_3) {
  potion_1.scale = potion_1.scale - 0.01;
  potion_2.y = potion_2.y + 5;
  if (potion_2.y > 100) {potion_2.y = 100;}
  if (potion_1.scale < 0.10) {potion_1.scale = 0.10;}
}

function animacao_mouse_3(potion_1,potion_2,potion_3) {
    potion_1.scale = potion_1.scale + 0.01;
    potion_2.y = potion_2.y - 8;
    potion_3.y = potion_3.y - 8;
    if (potion_2.y < 80) {potion_2.y = 80;}
    if (potion_3.y < 200) {potion_3.y = 200;}
    if (potion_1.scale > 0.12) {potion_1.scale = 0.12;}
}

function animacao_mouse_3_2(potion_1,potion_2,potion_3) {
 potion_1.scale = potion_1.scale - 0.01;
 if (potion_1.scale < 0.10) {potion_1.scale = 0.10;}
}
   

//pausa
function animacao_menu_pausa() {
 menu_pausa.y = menu_pausa.y - 23;
 botao_pausa.y = botao_pausa.y - 23;
 if (menu_pausa.y < 400) {menu_pausa.y = 400;}
 if (botao_pausa.y < 353) {botao_pausa.y = 353;}
} 
function animacao_menu_pausa_2() {
 menu_pausa.y = menu_pausa.y + 23;
 botao_pausa.y = botao_pausa.y + 23;
 if (botao_pausa.y > 465){botao_pausa.y = 465}
 if (menu_pausa.y > 512) {menu_pausa.y = 512;}
}
//pausa



function movimento_camera() {
 
  //if(camera.x > 530){camera.y = camera.y- 1}
  //else {camera.x = camera.x + 1;}
  if (estadocamera === "xmais") {
    camera.x = camera.x + 0.26;
  }
  if (camera.x > 520) {
   estadocamera = "xmenos"; 
  }
  if (camera.x < 510){estadocamera = "xmais";}

  if (estadocamera === "xmenos") {
    camera.x = camera.x - 0.20;
  }

  if (estadocameraY === "ymais") {camera.y = camera.y - 0.20}
  if (estadocameraY === "ymenos") {camera.y = camera.y + 0.20}

  if (camera.y < 250) {estadocameraY = "ymenos"}
  if (camera.y > 260) {estadocameraY = "ymais"}
}

function transition() {

 // transicao.x = transicao.x - 1;
 transicao.x = 2200;
 transicao.velocityX = -215;

 if (transicao.x < -500) {transicao.x = 100;}
}