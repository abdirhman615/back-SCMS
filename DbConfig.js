const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
mongoose.pluralize(null)
const DbConnect = async ()=>{
    try {
        // await mongoose.connect("mongodb+srv://da7mn00:zxzxzxcvbnm1250@cluster0.cj1iqfr.mongodb.net/scms")
        //await mongoose.connect("mongodb+srv://SCMS:zxzxzxcvbnm1250@cluster0.qkevzhc.mongodb.net/SCMS")
         //await mongoose.connect("mongodb://127.0.0.1:27017/SMCS_test")

         //await mongoose.connect ("mongodb+srv://da7mn00:zxzxzxcvbnm1250@cluster0.cj1iqfr.mongodb.net/SCMS")
          await mongoose.connect ("mongodb+srv://scms:123@cluster0.xv3rryz.mongodb.net/test")
          //await mongoose.connect("mongodb://127.0.0.1:27017/SMCS")
        console.log("database connected")
    } catch (error) {
        console.log(error.message)   
    }
}
module.exports= DbConnect
