const {DBNAME, DBPASSWORD} = require('./config')

const mongoose = require('mongoose')

const connectDB = () => {
mongoose.connect(`mongodb+srv://${DBNAME}:${DBPASSWORD}@cluster0.9oqp5r6.mongodb.net/AO-Hackathon?retryWrites=true&w=majority&appName=Cluster0`)
.then(() =>{
    console.log("Connected to database")
})
.catch(error => console.error(error))
}


module.exports = connectDB;