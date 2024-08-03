const otpGenerator = require('otp-generator')


const otp = async(req,res,next) => {

try {
    const onetime = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    if (!onetime) {
        return res.status(401).json({messaGE:"Unauthorized OTP"})

    }

    req.otp = onetime
    next()
} catch (error) {
    
}
}

module.exports = otp