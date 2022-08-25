//hello_world
const express = require ('express')
const app = express()

console.log ("hello from node");
app.get ('/', function (reg,res) {
    res.send ('hello from express, Type: 9w1')
})

app.listen(3002)
