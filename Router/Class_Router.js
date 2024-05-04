const express = require('express')
const ClassRouter = express.Router()
const { GETClassRouter, POSTClassRouter, DELETEClassRouter, PUTClassRouter } = require('../Controll/Class_control')

ClassRouter.get('/', GETClassRouter)

ClassRouter.post('/', POSTClassRouter)

ClassRouter.put('/:id', PUTClassRouter)

ClassRouter.delete('/:id', DELETEClassRouter)

module.exports = ClassRouter
