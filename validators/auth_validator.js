const {z} = require("zod")



const signupSchema = z.object({
    username: z
    .string({ required_error:"Name is required"})
    .trim()
    .min(3,{ message: "Name must be at least of 3 chars"}),

    email: z
    .string({ required_error:"Email is required"})
    .trim()
    .email({message:"Invalid Email address"})
    .min(3,{ message: "Email must be at least of 3 chars"}),

    phone: z
    .string({ required_error:"Phone is required"})
    .trim()
    .min(11,{ message: "Phone must be at least of 11 chars"}),

    password: z
    .string({ required_error:"Password is required"})
    .trim()
    .min(8,{ message: "Password must be at least of 8 chars"})
})

module.exports = signupSchema