require('dotenv').config()

module.exports = {
DBNAME: process.env.DBNAME,
DBPASSWORD: process.env.DBPASSWORD,

CLIENTID: process.env.CLIENTID,

EMAIL: process.env.EMAIL,
EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
}