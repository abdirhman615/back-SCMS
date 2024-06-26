/* eslint-disable no-unused-vars */
const express = require('express')
const GETClassRouter = express.Router()
const GETClassRouterbyid = express.Router()
const POSTClassRouter = express.Router()
const DELETEClassRouter = express.Router()
const PUTClassRouter = express.Router()
const ClassModal = require('../Models/Calss_modal')

GETClassRouter.get('/', async (req, res) => {
  const AllClass = await ClassModal.find()
  res.json({ AllClass })
})
GETClassRouterbyid.get('/:id', async (req, res) => {
  const Classbyid = await ClassModal.findById(req.params.id)
  res.json({ Classbyid })
})

POSTClassRouter.post('/', async (req, res) => {
  try {
    const allClass=await ClassModal.find()
  
    const generate=(3000)+allClass.length
    req.body.Class_ID=generate
    const newClass = new ClassModal(req.body)
    await newClass.save()
    res.send({ status: (200), message: 'successfully Add' })
  } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
  }
})

PUTClassRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const updatedData = await ClassModal.findByIdAndUpdate(id, {
      Classname: req.body.Classname,
      

    }, { new: true })

    res.send({ status: (200), message: 'successfully updated' })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

DELETEClassRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await ClassModal.findByIdAndDelete(id)

    res.send({ status: (200), message: 'successfully deleted' })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = { GETClassRouter,GETClassRouterbyid, DELETEClassRouter, PUTClassRouter, POSTClassRouter }
