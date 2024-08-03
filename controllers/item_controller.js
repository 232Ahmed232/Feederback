const Item =  require("../models/item_model")
const User = require("../models/user_model.js")
const mongoose = require("mongoose")


const itemAdd = async(req,res)=>{
    try {
        const data = req.body
        const data_item = await Item.create(data)
    

        res.status(200).json({message:data_item})


    } catch (error) {
        res.status(500).json({message:"Item not added",error:error.message})
    }
}

const itemGet = async(req,res)=>{
    try {
        const data  = req.params.id
        const id = data.toString()
        const user = await Item.find({donater:id})
        res.status(200).json({msg:user})
        
    } catch (error) {
        re.status(400).json({error:error})
    }
}

const itemDelete = async(req,res)=>{
    try {
        const it = req.params.id
        const itemId = await Item.deleteOne({_id:it})
        res.status(200).json({msg:"Item deleted"})
    } catch (error) {
        res.status(200).json({error:error})

    }
}

module.exports = {itemAdd,itemGet,itemDelete}