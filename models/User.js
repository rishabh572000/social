const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
        min:3,
        max:20, 
        unique:true
    },
    email:{
        type:String,
        require:true,
        min:3,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:5,
        max:250
    },
    descroption:{
        type:String,
        max: 2000,
        min:10
    },
    city:{
        type: String,
        min:3,
        max:50
    },
    country:{
        type: String,
        min:3,
    },
    profilePicture:{
        type:String,
        default:''
    },
    coverPicture:{
        type:String,
        default:''
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},
{timestamps:true}
)

module.exports = mongoose.model("User", UserSchema)