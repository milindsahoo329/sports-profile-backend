import app from './server.js';
import mongoose from 'mongoose';
import dotenv from "dotenv";

async function main() {
    dotenv.config();

    const mongoDB = process.env.SPORTS_PROFILE_DB_URI;
    const port = process.env.PORT || 8000;

    try {

        mongoose.set('strictQuery', true);
        mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
        
        // Get the default connection
        const db = mongoose.connection;

        // Bind connection to error event (to get notification of connection errors)
        db.on("error", console.error.bind(console, "MongoDB connection error:"));

        app.listen(port, () => {
            console.log("Server is running at port - " + port);
        })

    } catch (e) {

        console.error(e);
        process.exit(1);

    }
}

main().catch(console.error);