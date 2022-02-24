const fs = require('fs')

/*fs.readFile('/home/rently/pat', (err,data) => {
    console.log(data.toString());
})

fs.open('http.js','r',(err,fd) => {
    if(err){
        console.error(err);
    }
    else{
        console.log(fd);
    }
    console.log("Going to read file..")
    let buff = new Buffer.alloc(1024);
    fs.read(fd,buff,0,1024,0, (err,data) => {
        if(err){
            console.log(err)
        }
        else{
            console.log("No of bytes read = ",data)
            console.log("Data of file:")
            console.log(buff.toString())
        }
    })
    console.log("hello ",buff.toString(), " world")
})
*/

