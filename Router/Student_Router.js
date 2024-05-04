const express = require('express')
const StudentRouter = express.Router()
const { GETStudentRouter, POSTStudentRouter, DELETEStudentRouter, PUTStudentRouter } = require('../Controll/Student_control')

StudentRouter.get('/', GETStudentRouter)

StudentRouter.post('/', POSTStudentRouter)

StudentRouter.put('/:id', PUTStudentRouter)

StudentRouter.delete('/:id', DELETEStudentRouter)

module.exports = StudentRouter
