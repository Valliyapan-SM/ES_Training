const fs = require('fs');
const util = require('util');
var XMLHttpRequest = require('xhr2');
/*
function myCallback(err,data,resource){
    if(err){
        console.log(err);
    }
    else if(data){
        fs.writeFile(`${resource.slice(12)}.txt`,data,(er) => {
            if(er){
                console.log("File not written!");
            }
            else{
                console.log("File " + resource +" written successfully");
            }
        });
    }
}
*/
function receive_file(resource,cb){
    let req = new XMLHttpRequest();
    req.open('GET',resource);
    req.onload = () => {
        if(req.status === 200 && req.readyState === 4){
            cb(undefined,req.status, resource);
        }
        else if(req.readyState === 4){
            cb("Error : "+ req.status, undefined, resource);
        }
    }
    req.send();
}

const receive_file_promise = util.promisify(receive_file);

let getFile = async () => {
    let prom_obj = await receive_file_promise("https://www.sastra.edu");
    //console.log("hello");
    return prom_obj;
}

getFile().then(
    (value) => {console.log(value);}
).catch(
    (err) => {console.log(err);}
);