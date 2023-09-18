const mongoose=require('mongoose');

const nameSchema = new mongoose.Schema({
    
 name:String,
 password:String


});
const loginmodel=mongoose.model("loggi",nameSchema);
module.exports=loginmodel;