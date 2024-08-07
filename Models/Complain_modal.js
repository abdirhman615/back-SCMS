const mongoose = require("mongoose")

const ComplainSchema = new mongoose.Schema({
Student_id:{
    type:mongoose.Schema.Types.ObjectId,
     ref:"Student,department,Class",
    required:true
},
Description:{
    type:String,
    required:true
},
Complain_date:{
    type:String,
    required:true
},
Status:{
    type:String,
    enum:["New","Open"],
    default:"New"
}
},{timestamps:true})

const ComplainModal = mongoose.model("Complain",ComplainSchema)

module.exports=ComplainModal

