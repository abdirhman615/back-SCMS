const jwt = require('jsonwebtoken');
const { UserModal } =require('../Models/Users_modal');
require('dotenv').config();

const AuthernticateRoute = (AllowedRoles) =>{
    return async (req,res,next) => {
        const tokenHeder= req.headers['authorization']
        
        if(!tokenHeder) return res.status(401).send('Access Token is not provided')

        const token = tokenHeder.split(' ')[1]
        try {
            const TokenVerify =jwt.verify(token,"acbfa14fb74b48e273b6a4e911ed9fd7a9f5a3355ceda4ac0b68fa42b2527097niofh89nnspjfhusf")

            const User = await UserModal.findById(TokenVerify.id)
            if(!User) return res.status(404).send('User is not found')

            if(!User.usertype=='faculty') return res.status(401).send('User is Not admin')

            console.log(User.Role)

            if(!AllowedRoles.includes(User.Role)) return res.status(401).send('You are not allowed to access this route')
            next()



        } catch (error) {
            res.status(401).send(error.message)
        }
    }
}
module.exports={AuthernticateRoute};