class Parent {
    constructor() {
     this.name=null;
     this.email=null;

     this.nametext=createElement ("h5")
     this.input=createInput("");

      
     this.emailtext=createElement ("h5" );
     this.input1=createInput("");

     this.button=createButton("SHOW");
     
    }

    display(){

        var title=createElement("h1");
        title.html("Student Data");
        title.position(400,70);

        this.nametext.html ("Enter Your Name");
        this.nametext.position(400,140);
        this.input.position(400,180);
        this.name=this.input.value();

        this.emailtext.html ("Enter Your email");
        this.emailtext.position(400,210);
        this.input1.position(400,250);
        this.email=this.input1.value();

        this.button.position(450,300);
  
        
    }
}