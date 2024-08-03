const otpGenerator = require('otp-generator')


const onetime = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });


module.exports = onetime;