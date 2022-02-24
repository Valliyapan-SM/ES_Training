class Vehicle { 
    #colour;
    constructor(n,w){
        this.#colour = "black";
        this.name = n;
        this.wheels = w;
    }
    static welcome(){
        console.log("Welcome user");
    }
    set setWheelCount(n){
        this.wheels = n;
    }
    set setName(n){
        this.name = n;
    }
    disp(){
        return this.name + " has " + this.wheels + " wheels and is " + this.#colour + " colour";
    }
}

class Car extends Vehicle{
    constructor(n,w){
        super(n,w);
    }
    disp(){
        console.log("I am a car.");
        console.log(super.disp());
    }
}

let c1 = new Car("Volvo",4);
Car.welcome();
c1.disp();
c1.name = "Ford";
c1.disp();
c1.wheels = 6;
c1.disp();