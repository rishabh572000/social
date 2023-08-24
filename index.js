const express = require('express');
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')




require('./connect');
dotenv.config()


app.use(express.json())
app.use(helmet())
app.use(morgan("common"))


// app.get('/', (req, res)=>{
//     res.send('welcome to home page')
// })

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)


app.listen(8080, ()=>{
    console.log('backend server is running 8080')
})
