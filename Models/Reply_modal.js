const mongoose = require("mongoose")

const ReplySchema = new mongoose.Schema({
Complain_id:{
    type:mongoose.Schema.Types.ObjectId,
     ref:"Complain",
    required:true
},
Message:{
    type:String,
    required:true
}
},{timestamps:true})

const ReplyModal = mongoose.model("Reply",ReplySchema)

module.exports=ReplyModal

