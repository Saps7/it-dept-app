const mongoose = require('mongoose');


const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host} `);
    }
    catch{
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    }
}

module.exports = connectDB;