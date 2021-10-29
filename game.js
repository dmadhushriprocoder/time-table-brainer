class Game {
    constructor(){

    }

    start(){
        if (gameState ===0){
            parent = createSprite(500,100,10,10);
            parent.addImage(par_img);
            parent.scale=2.0;
            
            teacher = createSprite(500, 300, 10,10);
            teacher.addImage(tea_img);
            teacher.scale=2.0;

            student = createSprite(500,500,20,20);
            student.addImage(stu_img);
            student.scale=2.0;

        
        
               
            }
            
          
          
          if(mousePressedOver(parent)){
            student.visible=false;
            parent.visible=false;
            teacher.visible=false;
             //   tb.visible= false;
              //      emid.visible=true;
              //          ch.visible=true;
              pt=new Parent();
              pt.display()
        
        
        
        
          }
          
          if(mousePressedOver(teacher)){
            student.visible=false;
            parent.visible=false;
            teacher.visible=false;
             //   tb.visible= false;
          // emid.visible=true;
           // ch.visible=true;
         t=new Teacher();
         t.display()
          }
          
          //if(mousePressedOver(ch)){
          //  ch.visible=false;
          //  emid.visible=false;
         // }
    }
}
