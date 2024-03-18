const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const app = express()
const UserModel = require('./models/User')



app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://127.0.0.1:27017/testDB')


app.get('/getUsers',(req,res)=>{
    UserModel.find()
    .then(users=>res.json(users))
    .catch(err => err.json(err))
})

app.listen(3001,()=>{
    console.log('Server is working');
})