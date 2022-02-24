const cp = require('child_process')

function runScript(resource) {
    const child = cp.execFile('./' + resource, (err,stdout) => {
        if(err){
            console.log("Error : ",err)
        }
        else{
            console.log(stdout)
        }
    })
}

runScript('runme.sh')