const mongoose = require("mongoose")

const ClassSchema = new mongoose.Schema({
Class_ID:{
    type:String,
    required:true,
    unique: true
},
Classname:{
    type:String,
    required:true
}
},{timestamps:true})

const ClassModal = mongoose.model("Class",ClassSchema)

module.exports=ClassModal

