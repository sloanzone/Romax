
const mongoose = require('mongoose')

const connectDB = () => {
mongoose.connect(`mongodb+srv://gameraayush130:dCOFlBbkIByAKWQg@cluster0.9oqp5r6.mongodb.net/AO-Hackathon?retryWrites=true&w=majority&appName=Cluster0`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
.then(() =>{
    console.log("Connected to database")
})
.catch(error => console.error(error))
}


module.exports = connectDB;