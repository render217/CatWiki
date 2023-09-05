const mongoose = require("mongoose");

const connectDB = async (url=process.env.MONGO_LOCAL_URI,opt={}) => {
    try {
        // await mongoose.connect(process.env.MONGO_CLOUD_URI)
        await mongoose.connect(url,opt)
        console.log('MongoDB Connection Success 🤙')
    } catch (error) {
        console.log('MongoDB Connection Failed 💥')
        process.exit(1) // stops node thread
    }
};

module.exports = connectDB;
