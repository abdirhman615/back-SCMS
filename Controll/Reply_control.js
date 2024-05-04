/* eslint-disable no-unused-vars */
const express = require('express')
const GETReplyRouter = express.Router()
const POSTReplyRouter = express.Router()
const DELETEReplyRouter = express.Router()
const PUTReplyRouter = express.Router()
const ReplyModal = require('../Models/Reply_modal')

GETReplyRouter.get('/', async (req, res) => {
    const AllReply = await ReplyModal.find().populate([{
        path:"Complain_id",
        model:"Complain",
        select:"Description Complain_date Status"
    
    }
])
    res.json({AllReply})
})
GETReplyRouter.get('/:id', async (req, res) => {
  const Replybyid = await ReplyModal.findById()
  res.json({ Replybyid })
})

POSTReplyRouter.post('/', async (req, res) => {
  try {
    const newReply = new ReplyModal(req.body)
    await newReply.save()
    res.send({ status: (200), message: 'successfully Add' })
  } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
  }
})

PUTReplyRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const updatedData = await ReplyModal.findByIdAndUpdate(id, {
      Complain_id: req.body.Complain_id,
      Message: req.body.Message
    

    }, { new: true })

    res.send({ status: (200), message: 'successfully updated' })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

DELETEReplyRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await ReplyModal.findByIdAndDelete(id)

    res.send({ status: (200), message: 'successfully deleted' })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = { GETReplyRouter, DELETEReplyRouter, PUTReplyRouter, POSTReplyRouter }
