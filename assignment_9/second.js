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
function myspawn(){
  var child1 = cp.spawn('echo',["Hello","world"], {shell: true})

  child1.stdout.on('data', (data) => {
    console.log("Data : ",data.toString())
  })

  child1.on('exit', (status) =>{
    console.log("at exit ",status)
  })

  child1.on('error', (err) => {
    console.log("Error : ",err)
  })

  child1.on('close', (status) => {
    console.log("Status : ",status)
  }) 
}

/*

fork

-> creates a child process with the module name to run in child
-> shell option not supported
-> parent and child can communicate using process.send()

*/
function myfork(){
  var child2 = cp.fork('child.js')

  child2.on('message', (data) => {
    console.log("Child : ", data)
  })

  child2.send("Message to child")
}

/*

exec()

-> Creates a new shell
-> buffers cmd's o/p to cb function

*/
function myexec(){
  cp.exec("echo hello world", (err,out,stder) => {
    if(err){
      console.log("Error - ",err)
      return err
    }
    else{
      if(stder != ""){
        console.error("stderror - ",stder)
        return stder
      }
      console.log("Output : ",out)
      return out
    }
  })
}

/*

execFile()

-> doesn't spawn a new shell by default
-> buffers cmd's o/p to cb function

*/

function myexecFile(){
  cp.execFile('node',['http.js'],{shell: true},(err,stdout) => {
    if(err) {
      console.log("Error - ",err)
      return err
    }
    else{
      console.log(stdout)
      return stdout
    }
  })
}

myspawn()
myfork()
myexec()
myexecFile()
