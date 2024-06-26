const express = require('express')
const ComplainRouter = express.Router()
const { GETComplainRouter,GETComplainRouterbyid, POSTComplainRouter, DELETEComplainRouter, PUTComplainRouter } = require('../Controll/Complain_control')

ComplainRouter.get('/', GETComplainRouter)
ComplainRouter.get('/:id', GETComplainRouterbyid)

ComplainRouter.post('/', POSTComplainRouter)

ComplainRouter.put('/:id', PUTComplainRouter)

ComplainRouter.delete('/:id', DELETEComplainRouter)

module.exports = ComplainRouter
