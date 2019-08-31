
//constructor
let monster = function () {
    this.hungry = true;
    this.sleepy = true;
    this.bored = true

    this.age = 0;
   //feed method
    this.feed = function () {
        if (this.hungry) {
            console.log("That was delicious!");
            this.hungry = false;
            this.sleepy = true;
        }
        else {
            console.log("No thanks, I'm not hungry");
        }
    };

    //sleep method    
    this.sleep = function () {
        if (this.sleepy) {
            console.log("ZzzzZZZzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }
        else {
                console.log("I'm not tired");
        }
    };

    this.play = function(){
        if(this.bored){
          console.log("Yay, lets play");
          this.bored = false;
          this.hungry = true;
        }
        else {
          console.log("Not now! Maybe Later?");
        }
      };

      this.increaseAge = function(){

        this.age++;
        console.log("Happy Birthday to me!" + this.age + "old");
      };
  };
  

    const characters = {};

    //creating green

    characters.green = new monster();
    
    characters.green.outside = false;

    characters.green.scream = function(){
        console.log("Yeahhh ");
    };

    characters.green.letOutside = function(){
        if(!this.outside){
          console.log("I'm ready to go out!");
          this.outside = true;
          this.scream();
        }
        else{
            console.log("It feels good to be outside!!");
        }
    };

    characters.green.letInside = function(){
        if(this.outside){
            console("Time to go inside? Nooo!!");
            this.outside = false;
        }
        else{
            console.log("We are already inside.");
        }
    };

    var character = process.argv[2];
    var method = process.argv[3];
    
    characters[character][method]();


    




