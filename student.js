class Student {
    constructor() {

        this.name = null;
        this.email = null;
        this.title = createElement("h1");
        this.nametext = createElement("h5")
        this.input = createInput("");


        this.emailtext = createElement("h5");
        this.input1 = createInput("");

        this.showButton = createButton("SHOWTT");
        this.showtt = false

        this.title.html("Student Data");
        this.title.position(400, 70);

        this.nametext.html("Enter Your Name");
        this.nametext.position(400, 140);
        this.input.position(400, 180);

        this.emailtext.html("Enter Your email");
        this.emailtext.position(400, 210);
        this.input1.position(400, 250);
        this.showButton.position(450, 300);

    }
    hide() {
        console.log('hide')
        this.title.hide();
        this.nametext.hide();
        this.emailtext.hide();
        this.input.hide();
        this.input1.hide();
        this.showButton.hide();
    }

    display() {




        this.showButton.mousePressed(() => {
            this.name = this.input.value();
            this.email = this.input1.value();
            console.log("Student show");
            gameState = 2;
            // st = new Student()
            this.hide();
            tt = new Timetable();
            this.showtt = true

        })
        if (this.showtt && tt) {
            tt.display();
        }

    }




}