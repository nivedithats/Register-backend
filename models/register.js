const mongoose = require('mongoose');


const RegisterSchema = new mongoose.Schema({
    StudentName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    CollegeName:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true,
    },
    YearOfPassing:{
        type:String,
        required:true
    },
 
})

const RegisterDatabase = mongoose.model('industrywebinarusers', RegisterSchema);

module.exports =RegisterDatabase;