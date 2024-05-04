
const { UserModal,LoginValidate } = require("../Models/Users_modal");
const {StudentModal,STDLoginValidate } = require("../Models/Student_modal");
const bcrypt=require('bcrypt')
let jwt = require('jsonwebtoken');
require('dotenv').config();

//login function
const loginRouter = async (req, res) => {
  try {
    // validation
    const { error } = LoginValidate(req.body);
    if (error) return res.status(449).send(error.message);

    // find user data
    const usergetdata = await UserModal.findOne({
        username: req.body.username,
        userStatus:'active'

    });
    if (!usergetdata)
      return res.status(401).send({
        status: false,
        message: 'username or password is incorrect',
      });

    // check password
    const checkpass = await bcrypt.compare(
      req.body.Password,
      usergetdata.Password
    );
    if (!checkpass)
      return res.status(401).send({
        status:false,
        message: 'username or password is incorrect',
      });
    // token using jwt
    const token = jwt.sign(
      {
        id: usergetdata._id,
        username: usergetdata.username,
        // Role:usergetdata.Role
      },
     "acbfa14fb74b48e273b6a4e911ed9fd7a9f5a3355ceda4ac0b68fa42b2527097niofh89nnspjfhusf"
    );
    res.status(200).header('token', token).json({
      status: true,
      message: 'successfully logged in',
      token: token,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }

 

}
//   const { error } = LoginValidate(req.body)
//   if (error) return res.send(error.message)
//   try {
//   const user= await UserModal.findOne({username:req.body.username,userStatus:'active'})
//   if(!user) return res.status(404).send({Error: 'User not found'});
//   const CheckPassword = await bcrypt.compare(req.body.Password,user.Password)
//   if(!CheckPassword) return res.status(404).send({Error:'Invalid password'});

//   const token = jwt.sign({username:user.username,id:user._id})

//   return res.status(200).send({Token:token,username:user.username +' '+'Loged in'})
//   } catch (error) {
//       res.status(401).send(error.message)
      
      
//   }
  

// }
  
  
  // try {
  //   // validation
  //   const { error } = STDLoginValidate(req.body);
  //   if (error) return res.status(449).send(error.message);

  //   // find user data
  //   const SDTgetdata = await StudentModal.findOne({
  //       Email: req.body.Email,
  //   });
  //   if (!SDTgetdata)
  //     return res.status(401).send({
  //       status: false,
  //       message: 'Email or password is incorrect',
  //     });

  //   // check password
  //   const stdcheckpass = await bcrypt.compare(
  //     req.body.STD_Pass,
  //     SDTgetdata.STD_Pass
  //   );
  //   if (!stdcheckpass)
  //     return res.status(401).send({
  //       status:false,
  //       message: 'Email or password is incorrect',
  //     }); 
  //   // token using jwt
  //   const token = jwt.sign(
  //     {
  //       id: SDTgetdata._id,
  //       Email: SDTgetdata.Email,
       
  //     },
  //    "acbfa14fb74b48e273b6a4e911ed9fd7a9f5a3355ceda4ac0b68fa42b2527097niofh89nnspjfhusf"
  //   );
  //   res.status(200).header('token', token).json({
  //     status: true,
  //     message: 'successfully logged in',
  //     token: token,
  //   });
  // } catch (error) {
  //   res.status(400).send(error.message);
  // }



   


module.exports = {loginRouter};