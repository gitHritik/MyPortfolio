const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    message:{
        type:String,
        require:true,
        "minLength":5
    },
    date:{
        type : Date,
        default:Date.now(),
    }

})

const User = mongoose.model("User",userSchema);
 
module.exports = User;