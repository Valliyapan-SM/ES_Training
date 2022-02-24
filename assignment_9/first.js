const process = require('process');
var keypress = require('keypress');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);
 
// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got keypress',ch,key);
});
/*
process.stdin.on('data', (value) => {
    console.log("You typed ",value.toString());
})
*/
try{
    let a = fdf/2;
}
catch(Error){
    process.stderr.write("New error..")
    process.stdout.write("Hello world")
}

process.on('beforeExit', (status) => {
    console.log("process before exit in status ",status)
});

process.on('uncaughtException', (err,origin) => {
    console.log("Error : ",origin)
});

process.on('exit', (status) => {
    console.log("process at exit in status ",status)
});

let a = fgg*23/sd;