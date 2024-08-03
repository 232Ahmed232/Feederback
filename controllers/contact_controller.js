const Contact = require("../models/contact_model")


const contactForm = async(req,res) => {
    try {
        const data = await req.body
        await Contact.create(data);
        return res.status(200).json({message:"message send successfully"})
    } catch (error) {
        return res.status(500).json({message:"message did not send successfully",error})
        
    }
}

module.exports = contactForm