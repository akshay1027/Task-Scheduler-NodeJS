const mongoose = require('mongoose');  // Used for CRUD operations and connection to db
const dotenv = require('dotenv');  //  Keep sensitive data

dotenv.config();

const mongodbConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const initializeConnectionToDb = async () => {
    await mongoose.connect(process.env.MONGO_URI, mongodbConnectionOptions, (error) => {
        if (error) {
            return console.error('error: ', error);
        }
        console.log("mongoDB working succesfully");
    });
}

module.exports = initializeConnectionToDb;
