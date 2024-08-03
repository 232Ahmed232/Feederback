const {z} = require("zod")



const itemSchema = z.object({
    name: z
    .string({ required_error:"Name is required"})
    .trim()
    .min(3,{ message: "Name must be at least of 3 chars"}),

    phone: z
    .string({ required_error:"Phone is required"})
    .trim()
    .min(11,{ message: "Phone must be at least of 11 chars"}),

    quantity: z
    .string({ required_error:"Quantity atleast 1 KG"})
    .trim()
    .min(1,{ message: "quantity atleast 1 kg"}),

   
    date: z
    .string({ required_error:"date on which food is last check or taste"})
    .trim()
    .min(1,{ message: "Please provide Date when you check last time the meal"}),


    food: z
    .string({ required_error:"Food cant be resisted"})
    .trim(),

    location: z
    .string({ required_error:"Location from where food is to be taken"})
    .trim()
    .min(1,{ message: "Please provide valid Address"}),


    donater: z
    .string({ required_error:"Donater is required"})
    .trim(),
})

module.exports = itemSchema