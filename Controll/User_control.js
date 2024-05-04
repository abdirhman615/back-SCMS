/* eslint-disable no-unused-vars */
const express = require('express')
const usersRouter = express.Router()
const { UserModal, UserRegValidate } = require('../Models/Users_modal')
const bcrypt = require('bcrypt')

usersRouter.get('/', async (req, res) => {

  const Alluser = await UserModal.find().populate([{
    path:"Faculty_id",
    model:"Faculty",
    select:"Facultyname"

}])
res.json({Alluser})
  // try {
  //   const Allusers = await UserModal.find()

  //   res.json({ Allusers })
  // } catch (error) {
  //   res.json(error.message)
  // }
})
usersRouter.get('/:id', async (req, res) => {
  const Userbyid = await UserModal.findById()
  res.json({ Userbyid })
})

usersRouter.post('/', async (req, res) => {
//   try {
//     const { error } = UserRegValidate(req.body)
//     if (error) return res.json(error.message)

//     const newuser = new UserModal(req.body)
//     const salt = await bcrypt.genSalt(10)
//     newuser.Password = await bcrypt.hash(newuser.Password, salt)
//     await newuser.save()

//     res.send({ status: (200), message: 'successfully Add' })
//   } catch (error) {
//     console.log(error.message)
//   }

  try {
    //validation
    const { error } = UserRegValidate(req.body);
    if (error) return res.status(405).send(error.message);
    //post data
    const postData = new UserModal(req.body);
    postData.Password=await bcrypt.hash(postData.Password,10)
    //if user is already exit
    const allUsers=await UserModal.find({username:req.body.username})
    if(allUsers.length>0) return res.status(409).send({status:false,message:'this user allready exit'})
    //save post data
    await postData.save();
    res.status(201).send({
        status:true,
        message:'successfuly inserted',
        data:postData
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
})

// const Post = async (req, res) => {
//     try {
//       //validation
//       const { error } = UserRegValidate(req.body);
//       if (error) return res.status(405).send(error.message);
//       //post data
//       const postData = new UserModal(req.body);
//       postData.Password=await bcrypt.hash(postData.Password,10)
//       //if user is already exit
//       const allUsers=await UserModal.find({username:req.body.username})
//       if(allUsers.length>0) return res.status(409).send({status:false,message:'this user allready exit'})
//       //save post data
//       await postData.save();
//       res.status(201).send({
//           status:true,
//           message:'successfuly inserted',
//           data:postData
//       });
//     } catch (error) {
//       res.status(400).send(error.message);
//     }
//   };

usersRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const updatedData = await UserModal.findByIdAndUpdate(id, {
      username: req.body.username,
      Password: req.body.Password,
      userStatus: req.body.userStatus,
      usertype: req.body.usertype,
      dar: req.body.dar,
      Faculty_id: req.body.Faculty_id,

    }, { new: true })

    res.send({ status: (200), message: 'successfully updated' })
  } catch (error) {
    res.send(error.message)
  }
})

usersRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await UserModal.findByIdAndDelete(id)

    res.send({ status: (200), message: 'successfully deleted' })
  } catch (error) {
    res.send(error.message)
  }
})

module.exports = usersRouter
