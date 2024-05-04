/* eslint-disable no-unused-vars */
const express = require('express')
const GETStudentRouter = express.Router()
const POSTStudentRouter = express.Router()
const DELETEStudentRouter = express.Router()
const PUTStudentRouter = express.Router()
const {StudentModal,STDRegValidate} = require('../Models/Student_modal')
const bcrypt = require('bcrypt')
GETStudentRouter.get('/', async (req, res) => {
    const AllStudent = await StudentModal.find().populate([{
        path:"department_id",
        model:"department",
        select:"departmentname"
    
    },
    {
        path:"Class_id",
        model:"Class",
        select:"Classname"
    
    }
])
    res.json({AllStudent})

//   const AllStudent = await StudentModal.find()
//   res.json({ AllStudent })
})
GETStudentRouter.get('/:id', async (req, res) => {
  const Studentbyid = await StudentModal.findById()
  res.json({ Studentbyid })
})


POSTStudentRouter.post('/', async (req, res) => {
  try {
    const { error } = STDRegValidate(req.body)
    if (error) return res.json(error.message)

    const newuSTD = new StudentModal(req.body)
    const salt = await bcrypt.genSalt(10)
    newuSTD.STD_Pass = await bcrypt.hash(newuSTD.STD_Pass, salt)
    await newuSTD.save()

    res.send({ status: (200), message: 'successfully Add' })
  } catch (error) {
    console.log(error.message)
  }
})


// POSTStudentRouter.post('/', async (req, res) => {
//   try {
//     const newStudent = new StudentModal(req.body)
//     await newStudent.save()
//     res.send({ status: (200), message: 'successfully Add' })
//   } catch (error) {
//     res.status(400).send(error.message)
//     console.log(error.message)
//   }
// })

PUTStudentRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const updatedData = await StudentModal.findByIdAndUpdate(id, {
      Stdname: req.body.Stdname,
      phone: req.body.phone,
      Address: req.body.Address,
      Gender: req.body.Gender,
      Email: req.body.Email,
      STD_Pass: req.body.STD_Pass,
      department_id: req.body.department_id,
       Class_id: req.body.Class_id

    }, { new: true })

    res.send({ status: (200), message: 'successfully updated' })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

DELETEStudentRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await StudentModal.findByIdAndDelete(id)

    res.send({ status: (200), message: 'successfully deleted' })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = { GETStudentRouter, DELETEStudentRouter, PUTStudentRouter, POSTStudentRouter }
