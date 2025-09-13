const mongoose = require('mongoose');
const MONGO_DB_URL = "mongodb://127.0.0.1:27017/cs-library-app";

const connectToDB = async () => {
    try {
        await mongoose.connect(MONGO_DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
};

connectToDB();

module.exports = mongoose;