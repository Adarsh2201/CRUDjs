const express = require('express');
const mongoose = require('mongoose');

const url = 'mongodb://localhost/AliensDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true},)
const con = mongoose.connection

con.on('open' , () => {
    console.log('connected.................')
})

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter) 
//use function() or  () =>
app.listen(9000, () =>{
    console.log('server started..............')
})
// 30 minutes