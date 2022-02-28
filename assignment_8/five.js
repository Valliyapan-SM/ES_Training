var person = {
    fname: "Valliyapan",
    lname: "SM",
    age: 21,
    fav_colour: ['blue','pink'],
    grades: {
        DS: "A+",
        CPP: "S",
        M1: "A",
        DSD: "S"
    }
};
//console.log(JSON.stringify(person));
function return_person(){
    return JSON.stringify(person);
}

module.exports = return_person;