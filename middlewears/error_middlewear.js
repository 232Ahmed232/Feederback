const errorMiddlewear = (err,req,res,next)=>{
    const status = err.status || 500
    const message = err.message || "Server Error"
    const extraDetails = err.extraDetails || "Internal Server error"

    return res.status(status).json({message,extraDetails})
}


module.exports = errorMiddlewear