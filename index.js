const express = require('express')
require('dotenv').config()
const cors = require('cors')
const App = express()
App.use(express.json())
const DbConnect = require('./DbConfig')
DbConnect()
// App.use(cors())
App.use(cors({ origin: ['http://localhost:5173','http://localhost:5173/admin','https://back-scms.vercel.app','https://scms-front.vercel.app'] }))
 const FacultyRouter = require('./Router/Faculty_Router')
 const departmentRouter = require('./Router/department_Router')
 const ClassRouter = require('./Router/Class_Router')
 const StudentRouter = require('./Router/Student_Router')
 const ComplainRouter = require('./Router/Complain_Router')
 const ReplyRouter = require('./Router/Reply_Router')
 const userRouter = require('./Router/User_Router')
// const contectRouter = require('./Router/contectRouter')
 const loginRouter = require('./Router/LoginRouter')
 const STDloginRouter = require('./Router/STDLoginRouter')
// const ReplyModal = require('./Models/Reply_modal')
const DashboardSummary = require('./Router/dashboardSummary')

App.listen(5000, () => {
  console.log('server started')
})
// localhost:3000/
App.get('/', async(req, res) => {
  
  res.json('Ku so dawaaw Serverkena')
})



 App.use('/faculty', FacultyRouter)
 App.use('/department', departmentRouter)
 App.use('/Class', ClassRouter)
 App.use('/Student', StudentRouter)
 App.use('/Complain', ComplainRouter)
 App.use('/Reply', ReplyRouter)
 App.use('/User', userRouter)
// App.use('/contect', contectRouter)
 App.use('/Login', loginRouter)
 App.use('/STDLogin', STDloginRouter)
 App.use("/summary",DashboardSummary)

module.exports = App
