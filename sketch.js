



var database;
var gameState = 0;
var student, teacher, parent;
var game;
var stu_img, tea_img, par_img;
var emid, tb, ch;
var st, pt, t;
var tt;
var inp1, inp2, inp3, inp4;
var inp5, inp6, inp7, inp8, inp9, inp10
var flag = true

function preload() {
  stu_img = loadImage("student.jpg");
  par_img = loadImage("parent.png");
  tea_img = loadImage("teacher.png");
  emid = loadImage("emid.png");
  tb = loadImage("tb.png");
  // button = createButton("button text")

  //fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();

  game = new Game();
  if (gameState == 0) {
    game.start();
  }



}

function draw() {
  background("pink");


  drawSprites();
}


function mouseDragged() {
  if (flag){

    console.log("hello")
    gameState = 1
    background("red");
    student.visible = false;
    parent.visible = false;
    teacher.visible = false;
    //  tb.visible= false;
    // emid.visible=true;
    // ch.visible=true;
    st = new Student();
    st.display()
    flag = false
  }

}