const mongooes = require('mongoose');
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000, 
    family: 4
}
const connect = mongooes.connect('mongodb+srv://kumarrishabh7631:Ym4n11jtfELKZQIS@cluster0.qd0yycm.mongodb.net/user?retryWrites=true&w=majority', options)
.then(()=>console.log('connection successfully...'))
.catch((err)=> console.log(err))

module.exports=connect
