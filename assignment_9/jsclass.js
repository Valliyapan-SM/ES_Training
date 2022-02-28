//"use strict";
class Student{
    constructor(){
        this.name = '';
        this.dept = 'cse';
        this.age = 21;
    }
    set setName(name){
        this.name = name;
    }
    get getName(){
        return this.name;
    }
    get getAge(){
        return this.age;
    }
    greet(){
        return "Greetings of the day " + this.name + " !";
    }
}

var s1 = new Student();
console.log(s1.greet());
s1.name = "Valliyapan";
console.log(Student.name);
console.log(s1.name," is ",s1.age," years old and from ",s1.dept," department");
