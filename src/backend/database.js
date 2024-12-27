const mongoose = require('mongoose');

let isConnected;

const dbConnect = async () => {
    if (isConnected) {
        console.log("Using existing database connection");
        return;
    }

    try {
        console.log("Connecting to MongoDB...");
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = db.connections[0].readyState;
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting to database:", error);
        throw new Error("Database connection failed");
    }
};

module.exports = dbConnect;
