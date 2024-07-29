const express = require('express')
const StudentRouter = express.Router()
const { GETStudentRouter,GETStudentRouterbyid, POSTStudentRouter, DELETEStudentRouter, PUTStudentRouter } = require('../Controll/Student_control')
const {AuthernticateRoute}=require('./AutherncationMiddleWare')

StudentRouter.get('/', GETStudentRouter)
StudentRouter.get('/:id', GETStudentRouterbyid)

StudentRouter.post('/', POSTStudentRouter)

StudentRouter.put('/:id', PUTStudentRouter)

StudentRouter.delete('/:id', DELETEStudentRouter)

module.exports = StudentRouter
