class Form{
    constructor(){
        this.input = createInput("Participant Name");
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Let's Do a survey on recent Hackathon chapionship :)");
        this.question1 = createElement('h3', "Q1. There should also be prizes for top 50/100 participants on leaderBoard?");
        this.radio = createRadio('h4');
        this.radio.option('Yes(top 50):)');
        this.radio.option('Yes(top 100)XD');
        this.radio.option('Nope(Top 5 only):(');
        this.question2 = createElement('h3', "Q2. Do you think chapionship leaderBoard was unfair ?");
        this.radio1 = createRadio('h4');
        this.radio1.option('Yes :)');
        this.radio1.option('Nope :(');
        this.question3 = createElement('h3', "Q3.How was Hackathon experience For You ? ");
        this.radio2 = createRadio('h4');
        this.radio2.option('Fun :)');
        this.radio2.option('Boring XD');

    }


    display() {
        this.input.position(570, 165)
        this.button.position(700, 700)
        this.greeting.position(600, 105)
        this.text.position(500, 5)
        this.question1.position(300, 360)
        this.radio.position(500, 440)
        this.question2.position(300, 480)
        this.radio1.position(500, 540)
        this.question3.position(300, 580)
        this.radio2.position(500, 630)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.text.hide();
            this.question1.hide();
            this.question2.hide();
            this.question3.hide();
            this.radio.hide();
            this.radio1.hide();
            this.radio2.hide();
            Player.input = this.input.value();
            this.greeting.html("Thank you " + Player.input)
            this.greeting = createElement('h2');
            this.greeting.position(displayWidth/2 - 100, displayHeight/4);
          });
        
    }
}