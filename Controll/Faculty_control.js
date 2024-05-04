/* eslint-disable no-unused-vars */
const express = require('express')
const GETFacultyRouter = express.Router()
const POSTFacultyRouter = express.Router()
const DELETEFacultyRouter = express.Router()
const PUTFacultyRouter = express.Router()
const FacultyModal = require('../Models/Faculty_modal')

GETFacultyRouter.get('/', async (req, res) => {
  const AllFaculty = await FacultyModal.find()
  res.json({ AllFaculty })
})
GETFacultyRouter.get('/:id', async (req, res) => {
  const Facultybyid = await FacultyModal.findById()
  res.json({ Facultybyid })
})

POSTFacultyRouter.post('/', async (req, res) => {
  try {
    const newFaculty = new FacultyModal(req.body)
    await newFaculty.save()
    res.send({ status: (200), message: 'successfully Add' })
  } catch (error) {
    res.status(400).send(error.message)
    console.log(error.message)
  }
})

PUTFacultyRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const updatedData = await FacultyModal.findByIdAndUpdate(id, {
      Facultyname: req.body.Facultyname,
      Creationdate: req.body.Creationdate
    

    }, { new: true })

    res.send({ status: (200), message: 'successfully updated' })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

DELETEFacultyRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await FacultyModal.findByIdAndDelete(id)

    res.send({ status: (200), message: 'successfully deleted' })
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = { GETFacultyRouter, DELETEFacultyRouter, PUTFacultyRouter, POSTFacultyRouter }
