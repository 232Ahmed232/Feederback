const jwt = require("jsonwebtoken")
const User = require("../models/user_model")


const authMiddleware = async(req,res,next)=>{
    const token = req.header("Authorization")
    if (!token) {
        return res.status(401).json({messaGE:"Unauthorized HTTP token",token:token})
    }
    // console.log("Token from middlewear",token);
    try {

        const isVerified = jwt.verify(token,"QWERTY")
        const userData = await User.findOne({email:isVerified.email}).select({password:0})
        // console.log(userData);
        
        req.user = userData
        req.token = token
        req.userID = userData._id

        next()
    } catch (error) {
         return res.status(401).json({messaGE:"Unauthorized HTTP token",err:error})

    }
}

module.exports = authMiddleware