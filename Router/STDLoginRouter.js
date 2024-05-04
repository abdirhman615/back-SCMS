const express=require('express')
const route=express.Router()
const {STDloginRouter}=require('../Controll/STDLoginControll')
//login
route.post('/',STDloginRouter)


module.exports = route