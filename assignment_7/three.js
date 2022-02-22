const util = require('util');

function addTwoNos(a,b,cb){
    if(typeof a != 'number' || typeof b != 'number')
        cb("Invalid input",undefined);
    else{
        let c = a + b;
        cb(undefined,c);
    }
}

function multTwoNos(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log("Addition of two nos using callback= ",data);
        console.log("Multiplication of two nos using callback= ",10*data);
    }
}

function myPromise(a,b){
    return new Promise((res,rej) => {
        if(typeof a != 'number' || typeof b != 'number')
            rej("Invalid input");
        else{
            let c = a + b;
            res(c);
        }
    });
}

async function myAsync(a,b){
    let prom_obj = new Promise((res,rej) => {
        if(typeof a != 'number' || typeof b != 'number')
            rej("Invalid input");
        else{
            let c = a + b;
            res(c);
        }
    });
    let res = await prom_obj;
    console.log("Addition of two nos using async await = ",res);
    console.log("Multiplication of two nos using async await = ",res*10);
}

//using call back

addTwoNos(42,21,multTwoNos);

//using promise

myPromise(42,21).then(
    (value) => {
        console.log("Addition of two nos using promise = ",value);
        console.log("Multiplication of two nos using promise = ",10*value);
    }
).catch(
    (err) => {
        console.log(err);
    }
);

//Using async await

myAsync(42,21).catch(
    (err) => {
        console.log(err);
    }
);

// Using promisify

const addTwoNos_promise = util.promisify(addTwoNos);

let callPromisify = async (a,b) => {
    let prom_obj =  await addTwoNos_promise(a,b);
    //console.log("hello", prom_obj);
    return prom_obj;
}

callPromisify(21,24).then(
    (value) => {
        console.log("Addition of two nos using promisify = ",value);
        console.log("Multiplication of two nos using promisify = ",value*10);
    }
).catch(
    (err) => {console.log(err);}
);