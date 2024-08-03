const nodemailer = require("nodemailer")


  async function sendemail(email,otp){
    try {
        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "b5a8be9fba66c2",
              pass: "7400d20789b22f"
            }
          });


        const mailOptions = {
            from: 'feeder@gmail.com',
            to: email,
            subject:"OTP Verification",
            html:`Your Otp is : ${otp}`
        }

        const mailresponse = await transport.sendMail
        (mailOptions);
        return mailresponse;

    } catch (error) {
        console.error(error);
    }

}

module.exports = {sendemail}