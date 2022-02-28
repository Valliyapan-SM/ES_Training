const util = require('util');
class myClass {
    constructor() {}
    addTwoNos(a,b,cb){
        if(typeof a != 'number' || typeof b != 'number')
            cb("Invalid input",undefined);
        else{
            let c = a + b;
            let obj =  cb(undefined,c);
            return obj
        }
    }

    multTwoNos(err,data){
        if(err){
            console.log(err);
            return err;
        }
        else{
            console.log("Addition of two nos using callback= ",data);
            console.log("Multiplication of two nos using callback= ",10*data);
            return {add: data,mul: 10*data};
        }
    }

    myPromise(a,b){
        return new Promise((res,rej) => {
            if(typeof a != 'number' || typeof b != 'number')
                rej("Invalid input");
            else{
                let c = a + b;
                res(c);
            }
        }).then(
            (value) => { return this.myres(value); }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    async myAsync(a,b){
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


    myres(value) {
        console.log("Addition of two nos using promise = ",value);
        (() => {console.log("Multiplication of two nos using promise = ",10*value);})();
        return {add: value,mul: 10*value}
    }

    async callPromisify(a,b) {
        let prom_obj =  await addTwoNos_promise(a,b);
        //console.log("hello", prom_obj);
        return prom_obj;
    }
}

let myObj = new myClass();

//using call back

console.log(myObj.addTwoNos(10,20,myObj.multTwoNos));

//using promise
/*
myObj.myPromise(42,21).then(
    (value) => {myObj.myres(value)}
).catch(
    (err) => {
        console.log(err);
    }
);
*/

myObj.myPromise(42,21);

//Using async await

myObj.myAsync(42,21).catch(
    (err) => {
        console.log(err);
    }
);

// Using promisify

const addTwoNos_promise = util.promisify(myObj.addTwoNos);



myObj.callPromisify(21,24).then(
    (value) => {
        console.log("Addition of two nos using promisify = ",value);
        console.log("Multiplication of two nos using promisify = ",value*10);
    }
).catch(
    (err) => {console.log(err);}
);

/*
module.exports.addTwoNos = myObj.addTwoNos;
module.exports.multTwoNos = myObj.multTwoNos;
module.exports.myPromise = myObj.myPromise;
module.exports.myAsync = myObj.myAsync;
module.exports.callPromisify = myObj.callPromisify;
*/

module.exports = myClass;