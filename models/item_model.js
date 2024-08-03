const {Schema,model} = require("mongoose")
const { required } = require("../validators/auth_validator")

const itemSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    food:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    donater:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})

const Item = new model("Item",itemSchema)

module.exports = Item