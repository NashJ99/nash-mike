//hello_world
const express = require ('express')
const app = express()

console.log ("hello from node");
app.get ('/', function (reg,res) {
    res.send ('hello from express, Type: 9w1')

    // res.sendFile(path.join(__dirname, 'index.html'));

})

// app.listen(3002)
// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
