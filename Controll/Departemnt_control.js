/* eslint-disable no-unused-vars */
const express = require('express')
const GETdepartmentRouter = express.Router()
const POSTdepartmentRouter = express.Router()
const DELETEdepartmentRouter = express.Router()
const PUTdepartmentRouter = express.Router()
const departmentModal = require('../Models/Department_modal')

GETdepartmentRouter.get('/', async (req, res) => {
    const Alldepartment = await departmentModal.find().populate([{
        path:"Faculty_id",
        model:"Faculty",
        select:"Facultyname Creationdate"
    
    }])
    res.json({Alldepartment})

//   const Alldepartment = await departmentModal.find()
//   res.json({ Alldepartment })
})
GETdepartmentRouter.get('/:id', async (req, res) => {
  const departmentbyid = await departmentModal.findById()
  res.json({ departmentbyid })
})

POSTdepartmentRouter.post('/', async (req, res) => {
  try {
    const newdepartment = new departmentModal(req.body)
    await newdepartment.save()
    res.send({ status: (200), message: 'successfully Add' })
  } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
  }
})

PUTdepartmentRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const updatedData = await departmentModal.findByIdAndUpdate(id, {
      Faculty_id: req.body.Faculty_id,
      departmentname: req.body.departmentname
      

    }, { new: true })

    res.send({ status: (200), message: 'successfully updated' })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

DELETEdepartmentRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await departmentModal.findByIdAndDelete(id)

    res.send({ status: (200), message: 'successfully deleted' })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = { GETdepartmentRouter, DELETEdepartmentRouter, PUTdepartmentRouter, POSTdepartmentRouter }
