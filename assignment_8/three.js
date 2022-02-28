var my_array = [];

class myArray {

    pushString(){
        my_array.push("I am a String");
    }

    getArray(){
        this.pushString()
        my_array.push(3.14);
        my_array.push(['a','e','i','o','u']);
        var my_object = {
            fname: "Valliyapan",
            lname: "SM",
            age: 21
        };
        my_array.push(my_object);
        //console.log(my_array)
        return my_array;
    }
}

//getArray()
//let myObj = new myArray();
//console.log(myObj.getArray())

module.exports = myArray;