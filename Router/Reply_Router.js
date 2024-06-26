const express = require('express')
const ReplyRouter = express.Router()
const { GETReplyRouter,GETReplyRouterbyid, POSTReplyRouter, DELETEReplyRouter, PUTReplyRouter } = require('../Controll/Reply_control')

ReplyRouter.get('/', GETReplyRouter)
ReplyRouter.get('/:id', GETReplyRouterbyid)

ReplyRouter.post('/', POSTReplyRouter)

ReplyRouter.put('/:id', PUTReplyRouter)

ReplyRouter.delete('/:id', DELETEReplyRouter)

module.exports = ReplyRouter
