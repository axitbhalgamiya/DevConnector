const mongoose = require('mongoose');
let mongoDB = 'mongodb://localhost:27017/College';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const connectDB = async () => {
    try{
        await mongoose.connect(mongoDB,{
            useNewUrlParser :true,
        });
        console.log('MongoDB connected...');
    } catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;