const mongoose = require("mongoose")
url = "mongodb+srv://ahmed:ahmed@cluster0.y4qsdmp.mongodb.net/mern"


const connectDb = async () =>{
    try {
      await   mongoose.connect(url)
      console.log("connectiuon successful to db");

    } catch (error) {
        console.error("Database not connected")
        process.exit(0)
    }
}

module.exports = connectDb