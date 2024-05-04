const mongoose = require('mongoose')
const joi = require('joi')
mongoose.pluralize(null)
const userSchema = new mongoose.Schema({
  USER_ID: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
  },
  usertype: {
    type: String,
    enum: ['admin', 'faculty']
  },
  userStatus: {
    type: String,
    enum: ['active', 'pending', 'blocked']
  },
  dar: {
    type: String,
    required: true
  },
  Faculty_id:{
    type:mongoose.Schema.Types.ObjectId,
     ref:"Faculty",
    required:true
}

}, { timestamps: true })

const UserModal = mongoose.models.users || mongoose.model('users', userSchema)
const UserRegValidate = (userData) => {
  const user = joi.object({

    USER_ID: joi.string().required(),
    username: joi.string().required(),
    Password: joi.string().required().min(3),
    usertype: joi.string().required(),
    userStatus: joi.string().required(),
    dar: joi.string().required(),
    Faculty_id: joi.string().required()
  })
  return user.validate(userData)
}

const LoginValidate = (userData) => {
  const user = joi.object({
    username: joi.string(),
    Password: joi.string().min(3)
  })
  return user.validate(userData)
}

module.exports = { UserModal, UserRegValidate, LoginValidate }
