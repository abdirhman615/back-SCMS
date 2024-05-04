const mongoose = require("mongoose")
const FacultySchema = new mongoose.Schema({
FAC_ID:{
    type:String,
    required:true,
    unique: true
},
Facultyname:{
    type:String,
    required:true
},
Creationdate:{
    type:String,
    required:true
}
},{timestamps:true})

const FacultyModal = mongoose.model("Faculty",FacultySchema)

module.exports=FacultyModal

