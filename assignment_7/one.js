
const fs = require('fs');
var XMLHttpRequest = require('xhr2');

function getresource_callback(resource, cb){
    let req = new XMLHttpRequest();
    req.open('GET',resource);
    req.onload = () => {
        if(req.status === 200 && req.readyState === 4){
            cb(undefined,req.responseText, resource);
        }
        else if(req.readyState === 4){
            cb("Error : "+ req.status, undefined, resource);
        }
    }
    req.send();
}

function result_callback(err,data, resource){
    if(err){
        console.log(err);
    }
    else if(data){
        fs.writeFile(`${resource.slice(12)}.txt`,data,(er) => {
            if(er){
                console.log("File 1 not written!");
            }
            else{
                console.log("File " + resource +" written successfully");
            }
        });
        /*
        getresource_callback("https://www.gmail.com", (err,data, resource) => {
            if(err) console.log(err);
            else if(data){
                fs.writeFile(`${resource.slice(12)}.txt`,data,(er) => {
                    if(er){
                        console.log("File 2 not written!");
                        console.log(er);
                    }
                    else{
                        console.log("File " + resource +" written successfully");
                    }
                });
                getresource_callback("https://www.yahoo.com", (err,data, resource) => {
                    if(err) console.log(err);
                    else if(data){
                        fs.writeFile(`${resource.slice(12)}.txt`,data,(er) => {
                            if(er){
                                console.log("File 3 not written!");
                            }
                            else{
                                console.log("File " + resource +" written successfully");
                            }
                        });
                    }
                });
            }
        });*/
    }
}

function result_promise(data,resource){
    console.log(resource);
    fs.writeFile(`${resource.slice(12)}.txt`,data,(er) => {
        if(er){
            console.log("File not written!");
        }
        else{
            console.log("File ",resource," written successfully");
        }
    });
}

async function async_await(resource){
    let myprom = new Promise( (resolve,reject) => {
    let req = new XMLHttpRequest();
    req.open('GET',resource);
    req.onload = () => {
        if(req.status === 200 && req.readyState === 4){
            resolve(req.responseText);
        }
        else if(req.readyState === 4){
            reject("Errors : "+ req.status);
        }
    }
    req.send();
    });
    return await myprom;
}

async_await("https://www.google.com/").then(
    (value) => {console.log(value);}
).catch(
    (err) => { console.log(err); }
);
/*
console.log("Using call back..");

getresource_callback("https://www.gmail.com",result_callback);
//getresource_callback("https://www.gmail.com",result_callback);
//getresource_callback("https://www.yahoo.com",result_callback);


console.log("Using promise..");

function getresource_promise(resource) {
    return new Promise((myresolve,myreject) => {
    let req = new XMLHttpRequest();
    req.open('GET',resource);
    req.onload = () => {
        if(req.status === 200 && req.readyState === 4){
            console.log("promise ",resource);
            myresolve(resource, req.responseText);
        }
        else if(req.readyState === 4){
            myreject(req.status);
        }
    }
    req.send();
    });
}

getresource_promise("https://www.google.com").then(
    (resource, value) => { 
        result_promise(value,resource);
        return getresource_promise("https://www.gmail.com");
    }
).then(
    (resource, value) => { 
        result_promise(value,resource);
        return getresource_promise("https://www.yahoo.com");
    }
).then(
    (resource, value) => { 
        result_promise(value,resource);
    }
).catch(
    (err) => {console.log(err);}
);
*/