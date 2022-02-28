const process = require('process')

process.on('message', (data) => {
    console.log("Parent : ", data)
})

process.send("Message to parent")