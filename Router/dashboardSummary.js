const express=require('express');
const router =express.Router();


const ClassModal = require('../Models/Calss_modal')
const ComplainModal = require('../Models/Complain_modal')
const {StudentModal} = require('../Models/Student_modal')
const ReplyModal = require('../Models/Reply_modal')
// const {receiptModal,receiptRegValidate} = require('../Models/receiptModal')
const {UserModal,UserRegValidate,LoginValidate} = require('../Models/Users_modal')


router.get('/',async function(req,res){


let Calssdata=await ClassModal.find()
let NumberOfCalss=Calssdata.length;

let ComplainData=await ComplainModal.find()
let NumberOfComplain=ComplainData.length;

let UsersData=await UserModal.find()
let NumberOfUsers=UsersData.length;

let StudentData=await StudentModal.find()
let NumberOfStudent=StudentData.length;

let ReplyData=await ReplyModal.find()
let NumberOfReply=ReplyData.length;

// let receiptData=await receiptModal.find()
// let AllAmount=BilingData.reduce((total,item)=>total+item.total,0)
// let TotalAmountPaid=BilingData.reduce((total,item)=>total+item.amountPaid,0)
// let TotalBalance=BilingData.reduce((total,item)=>total+item.Balance,0)

res.send({
    NumberOfCalss:NumberOfCalss,
    NumberOfComplain:NumberOfComplain,
    NumberOfStudent:NumberOfStudent,
    NumberOfUsers:NumberOfUsers,
    NumberOfReply:NumberOfReply,
    
    // AllAmount:AllAmount,
    // TotalAmountPaid:TotalAmountPaid,
    // TotalBalance:TotalBalance

})

});



module.exports=  router