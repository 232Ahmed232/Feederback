const {Schema,model} = require("mongoose")

const contacSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
},{timestamps:true})


const Contact = new model("Contact",contacSchema)

module.exports = Contact