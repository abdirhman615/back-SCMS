const express=require('express')
const route=express.Router()
const {loginRouter}=require('../Controll/LoginControll')
//login
route.post('/',loginRouter)


module.exports = route