/* eslint-disable no-unused-vars */
const express = require('express')
const GETComplainRouter = express.Router()
const POSTComplainRouter = express.Router()
const DELETEComplainRouter = express.Router()
const PUTComplainRouter = express.Router()
const ComplainModal = require('../Models/Complain_modal')

GETComplainRouter.get('/', async (req, res) => {
    const AllComplain = await ComplainModal.find().populate([{
        path:"department_id",
        model:"department",
        select:"departmentname"
    
    },
    {
        path:"Class_id",
        model:"Class",
        select:"Classname"
    
    },
    {
        path:"Student_id",
        model:"Student",
        select:"Stdname phone Address Gender Email"
    
    },
])
    res.json({AllComplain})

//   const AllComplain = await ComplainModal.find()
//   res.json({ AllComplain })
})
GETComplainRouter.get('/:id', async (req, res) => {
  const Complainbyid = await ComplainModal.findById()
  res.json({ Complainbyid })
})

POSTComplainRouter.post('/', async (req, res) => {
  try {
    const newComplain = new ComplainModal(req.body)
    await newComplain.save()
    res.send({ status: (200), message: 'successfully Add' })
  } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
  }
})

PUTComplainRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const updatedData = await ComplainModal.findByIdAndUpdate(id, {
      Description: req.body.Description,
      Complain_date: req.body.Complain_date,
      Status: req.body.Status,
     department_id: req.body.department_id,
     Class_id : req.body.Class_id,
     Student_id: req.body.Student_id
   

    }, { new: true })

    res.send({ status: (200), message: 'successfully updated' })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

DELETEComplainRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await ComplainModal.findByIdAndDelete(id)

    res.send({ status: (200), message: 'successfully deleted' })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = { GETComplainRouter, DELETEComplainRouter, PUTComplainRouter, POSTComplainRouter }
