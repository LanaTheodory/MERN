class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`name is: ${this.name} ,  health is ${this.health} Speed:  ${this.speed}, Strength:  ${this.strength} `);
    

    }
    drinkSake(){
        this.health += 10;
        console.log("xxxxxxxxxxxxxxxxxxxxx");
    }

    
}

// const ninja1 = new Ninja("Hyabusa" , 100);
// ninja1.sayName();
// ninja1.showStats();

class Sensei extends Ninja{
constructor(name){
    super(name, 200)
    this.speed = 10;
    this.strength =10;
    this.wisdome = 10;
  
}
speakWisdom(){
    super.drinkSake();
    console.log( "What one programmer can do in one month, two programmers can do in two months.");
}
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
