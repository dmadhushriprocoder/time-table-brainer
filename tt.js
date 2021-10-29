class Timetable {
    constructor() {
        this .text1 =createElement ("h2","DAYS");
        this.text1.position (60,50);

        this.inp1 = createInput("a");
        this.inp1.position(60, 200);
        this.inp1v = this.inp1.value();

        this.inp2 = createInput("MONDAY");
        this.inp2.position(60, 100);
       

    
        this.inp3 = createInput("MATHEMATICS");
        this.inp3.position(260, 100);
       

    
        this.inp4 = createInput("SCIENCE");
        this.inp4.position(460, 100);
       

    
        this.inp5 = createInput("e");
        this.inp5.position(60, 200);
     

    
        this.inp6 = createInput("f");
        this.inp6.position(260, 200);
      

    
        this.inp5 = createInput("g");
        this.inp5.position(460, 200);
       

    
        this.inp6 = createInput("h");
        this.inp6.position(60, 300);
      

    
        this.inp7 = createInput("i");
        this.inp7.position(260, 300);
       
    
        this.inp8 = createInput("j");
        this.inp8.position(460, 300);
        

    
        this.inp9 = createInput("k");
        this.inp9.position(60, 400);
       

    
        this.inp10 = createInput("l");
        this.inp10.position(260, 400);
      

    
        this.inp5 = createInput("m");
        this.inp5.position(460, 400);
      

        this .saveButton= createButton ("SAVE TT");
        this.saveButton.position (300,460);
        this.saveButton.mousePressed(this.saveTimeTableData);


    }

    saveTimeTableData(){
        console.log("saving data");
        this.inp2v = this.inp2.value();//a
        this.inp3v = this.inp3.value();//b
        this.inp4v = this.inp4.value();//c
        this.inp5v = this.inp5.value();//d
        this.inp6v = this.inp6.value();
        this.inp5v = this.inp5.value();
        this.inp6v = this.inp6.value();
        this.inp7v = this.inp7.value();
        this.inp8v = this.inp8.value();
        this.inp9v = this.inp9.value();
        this.inp10v = this.inp10.value();
        this.inp5v = this.inp5.value();

    }

    showTT(){
        this.inp2v + "&emsp;" + this.inp3v + "&emsp;" + this.inp2v ;
    }

    display() {
        //creating  the student object and calling hide function 
        console.log('displaying tt')
        if (gameState === 2) {


            background("yellow");
            //st=new Student();
            //st.hide();
            for (var i = 50; i < 300; i = i + 100) {
                for (var j = 50; j < 500; j = j + 100)
                    line(i, j, i + 400, j);
            }

            for (var i = 50; i < 700; i = i + 200) {
                for (j = 50; j < 400; j = j + 200)
                    line(i, j, i, j + 200);
            }

        }
    }
}
