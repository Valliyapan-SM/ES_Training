const fs = require('fs')
const cp = require('child_process')

/*

Pipes

let readstr = fs.createReadStream('http.js','utf-8')
let writestr = fs.createWriteStream('logfile')
readstr.pipe(writestr)
*/

/*

spawn

->sends cmd's o/p to stream
->creates shell only if specified

*/

//const {spawn} = require('child_process')

var child = cp.spawn('echo',["Hello","world"], {shell: true})

child.stdout.on('data', (data) => {
  console.log(data.toString())
})

child.on('exit', (status) =>{
  console.log("at exit ",status)
})

child.on('error', (err) => {
  console.log("Error : err")
})

child.on('close', (status) => {
  console.log(status)
}) 

/*

fork

-> creates a child process with the module name to run in child
-> shell option not supported
-> parent and child can communicate using process.send()

*/

child = cp.fork('child.js')

child.on('message', (data) => {
  console.log("Child : ", data)
})

child.send("Message to child")

/*

exec()

-> Creates a new shell
-> buffers cmd's o/p to cb function

*/

child = cp.exec("echo hello world", (err,out,stder) => {
  if(err){
    console.log("Error - ",err)
  }
  else{
    console.log("Output : ",out)
    if(stder != "") console.error("stderror - ",stder)
  }
})

/*

execFile()

-> doesn't spawn a new shell by default
-> buffers cmd's o/p to cb function

*/


child = cp.execFile('node',['http.js'],{shell: true},(err,stdout) => {
  if(err) console.log("Error - ",err)
  else{
    console.log(stdout)
  }
})