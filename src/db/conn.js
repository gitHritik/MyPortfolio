const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Portfolio",{
    useNewUrlParser: true ,
}).then(()=>{
    console.log("Mongoose is connected Successfully");
}).catch((error)=>{
    console.log(error);
})