
const {execFile} = require('child_process')

function runScript(resource) {
    execFile('./' + resource, (err,stdout) => {
        if(err){
            console.log("Error : ",err)
        }
        else{
            console.log(stdout)
        }
    })
}

runScript('runme.sh')

module.exports = runScript;

