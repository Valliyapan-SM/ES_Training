//splice method
const days = ["Sunday","Monday","Wednesday","Delete me from array","Thursday","Delete me from array"]
function modifyArray(){
    //deleting element from array
    days.splice(3,1);
    //console.log("After deleting an element..");
    //console.log(days);
    //insert Tuesday using splice
    //console.log("After inserting Tuesday..");
    days.splice(2,0,"Tuesday");
    //console.log(days);
    //delete element and add elements at same time
    days.splice(5,1,"Friday","Saturday");
    //console.log("After deleting and adding elements at same time");
    //console.log(days);
    return days;
}

module.exports = modifyArray;