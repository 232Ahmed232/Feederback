const {z} = require("zod")



const loginSchema = z.object({
   

    email: z
    .string({ required_error:"Email is required"})
    .trim()
    .email({message:"Invalid Email address"})
    .min(3,{ message: "Email is inValid"}),

   

    password: z
    .string({ required_error:"Password is required"})
    .trim()
    .min(8,{ message: "Password is wrong"})
})

module.exports = loginSchema