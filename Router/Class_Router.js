const express = require('express')
const ClassRouter = express.Router()
const { GETClassRouter,GETClassRouterbyid, POSTClassRouter, DELETEClassRouter, PUTClassRouter } = require('../Controll/Class_control')

ClassRouter.get('/', GETClassRouter)
ClassRouter.get('/:id', GETClassRouterbyid)

ClassRouter.post('/', POSTClassRouter)

ClassRouter.put('/:id', PUTClassRouter)

ClassRouter.delete('/:id', DELETEClassRouter)

module.exports = ClassRouter
