require('dotenv').config()
const mongoose = require('mongoose')

let MONGO_URI = `mongodb+srv://testInforce:testInforce123@cluster0.io5dr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false 

        })
        console.log('MongoDB connection success')
    } catch (error) {
        console.error('MongoDB connection FAIL')
        process.exit(1)
    }
}

module.exports = connectDB;