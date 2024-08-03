const User = require("../models/user_model.js")
const bcrypt = require("bcryptjs")
const { Resend } = require("resend");

const {sendemail} = require("../utils/mail.js")

const otpOne = require("../utils/otp_gen.js");

const resend = new Resend("re_iQNkPP8V_379BaDcfjMCPysRucsmEBTwo");






const register = async(req,res) =>{
    try {
        const {username,email,phone,password} = req.body
        
        const userExist = await User.findOne({email})

        
        if (userExist) {
            return res.status(400).json({msg:"User alreasy exist with this email"})
        }
        if (!username||!email || !phone || !password) {
            return res.status(400).json({msg:"Invalid Data Please require all data"})
        }

        const usercreated =  await User.create({username,email,phone,password})

        res.status(200).json({ 
            msg:"User Register" , 
            token: await usercreated.gentoken(),
            userId: usercreated._id.toString()
        })

    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error")

    }
}


const login = async(req,res)=>{
    try {
        const {email,password} = req.body
        
        const userExist = await User.findOne({email})
        
        if (!userExist || (password.length <= 0)) {
            res.status(400).json({msg:"Invalid credentials"})
        }
       

        const user = userExist.comparePass(password)

        

        if(user){

            const userCheck = await User.findOne({$and:[{email},{verifyaccount:false}]})
                if (userCheck) {
                 
                   

                      await sendemail(email,otpOne)

                      await User.updateOne({email},{onetimepass:otpOne})
                      return  res.status(200).json({ 
                          msg:"Verify your account" , 
                          token: await userExist.gentoken(),
                          userId: userExist._id.toString()
                      })
        
                }
              
           
              res.status(200).json({ 
                msg:"Logged In" , 
                token: await userExist.gentoken(),
                userId: userExist._id.toString()
            })
             
        }else{
            res.status(400).json({msg:"Invalid credentials"})
        }



    } catch (error) {
        console.log(error);

        res.status(500).json("Internal Server Error")
    }
}

const user =  async(req,res) =>{
    try {
        const userData = req.user
        // console.log(userData);
        return res.status(200).json({userData}) 
        
    } catch (error) {
        console.log(error);
    }
}


const otp = async(req,res) => {
   try {
    const ot = otpOne
    // console.log(ot);
    const user = req.user
    console.log(user);
    const {otp} = req.body
    if (otp == null) {
      return res.status(200).json({ot})

    } 

    if (otp == ot) {
        const userExist = await User.findOne({onetimepass:ot})

        if (userExist) {
            await User.updateOne({onetimepass:otpOne},{verifyaccount:true})
            return res.status(200).json({msg:"Logged In"})

        }


    } else {
      return res.status(400).json({msg:"OTP not match"})

    }

    
   } catch (error) {
    return res.status(500).json({msg:"OTP not match"})

   }

   

}

module.exports = {register,login,user,otp}