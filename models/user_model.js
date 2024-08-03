const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    onetimepass:{
        type:String,
    },
    verifyaccount: {
        type: Boolean,
        default: false
    },
    items:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Item"
    }]
}, { timestamps: true })

userSchema.pre("save", async function (next) {
    const user = this

    if (!user.isModified("password")) {
        next()
    }

    try {
        const hash_password = await bcrypt.hash(user.password, 10)
        user.password = hash_password
    } catch (error) {
        next(error)
    }

})

userSchema.methods.gentoken = async function () {
    try {
        return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin
            },
            "QWERTY",
            {
                expiresIn:"30d"
            }
        )
    } catch (error) {
        console.error(error);
    }
}

userSchema.methods.comparePass = async function(password){
    return  await bcrypt.compare(password,this.password)
}



const User = new mongoose.model("User", userSchema)

module.exports = User;