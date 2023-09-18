const mongoose=require('mongoose');

const signUpTemplate=new mongoose.Schema(
{
    studentid:{
        type:Number,
        required:true,
    },
    studentname:{
        type:String,
        required:true,
    },
    studentage:
    {
        type:Number,
        required:true
    },
    studentaddress:{
        type:String,
        required:true
    },
    studentmobileno:
    {
        type:Number,
        required:true
    },
    studentdepartment:
    {
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('mytable',signUpTemplate)
