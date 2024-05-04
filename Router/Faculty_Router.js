const express = require('express')
const FacultyRouter = express.Router()
const { GETFacultyRouter, POSTFacultyRouter, DELETEFacultyRouter, PUTFacultyRouter } = require('../Controll/Faculty_control')

FacultyRouter.get('/', GETFacultyRouter)

FacultyRouter.post('/', POSTFacultyRouter)

FacultyRouter.put('/:id', PUTFacultyRouter)

FacultyRouter.delete('/:id', DELETEFacultyRouter)

module.exports = FacultyRouter
