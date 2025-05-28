const {EMAIL} = require('../config/config')
const transporter = require('../config/mailserver')

const sendWelcomeMail = async (email, name) =>{
    try {
        const info = await transporter.sendMail({
          from: EMAIL,
          to: email,
          subject: 'Welcome to Our Service',
          text: `Hello ${name},\n\nThank you for registering!\n\nBest regards,\nYour Company`,
        });
}
catch(error){
    console.log(error)
}
}

module.exports = {sendWelcomeMail}