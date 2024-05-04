const mongoose = require("mongoose")
const joi = require('joi')
mongoose.pluralize(null)
const StudentSchema = new mongoose.Schema({
STD_id:{
    type:String,
    required:true,
    unique: true
},
Stdname:{
    type:String,
    required:true
},
phone:{
    type:Number,
    required:true
},
Address:{
    type:String,
    required:true
},
STD_Pass:{
    type:String,
    required:true
},
Gender:{
    type:String,
    required:true
},
Email:{
    type:String,
    required:true
},
department_id:{
    type:mongoose.Schema.Types.ObjectId,
     ref:"department",
    required:true
},
Class_id:{
    type:mongoose.Schema.Types.ObjectId,
     ref:"Class",
    required:true
}
},{timestamps:true})

const StudentModal = mongoose.model("Student",StudentSchema)

const STDRegValidate = (userData) => {
    const user = joi.object({
  
    STD_id: joi.string().required(),
    Stdname: joi.string().required(),
    STD_Pass: joi.string().required().min(3),
    phone: joi.string().required(),
    Address: joi.string().required(),
    Gender: joi.string().required(),
    Email: joi.string().required(),
    department_id: joi.string().required(),
    Class_id: joi.string().required()
    })
    return user.validate(userData)
  }

  const STDLoginValidate = (userData) => {
    const user = joi.object({
        Email: joi.string(),
        STD_Pass: joi.string().min(3)
    })
    return user.validate(userData)
  }

module.exports={StudentModal,STDLoginValidate ,STDRegValidate};

