const express = require('express')
const departmentRouter = express.Router()
const { GETdepartmentRouter, POSTdepartmentRouter, DELETEdepartmentRouter, PUTdepartmentRouter } = require('../Controll/Departemnt_control')

departmentRouter.get('/', GETdepartmentRouter)

departmentRouter.post('/', POSTdepartmentRouter)

departmentRouter.put('/:id', PUTdepartmentRouter)

departmentRouter.delete('/:id', DELETEdepartmentRouter)

module.exports = departmentRouter
