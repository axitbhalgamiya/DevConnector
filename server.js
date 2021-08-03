const express = require('express');
const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const connectDB = require('./routes/config/db');
const app = express();
connectDB();

var StudentSchema = mongoose.Schema({
    Name: { type : String},
    no: Int32,
    Department: String
}, {collection: "Student"});

var employeeData = mongoose.model('Student', empSchema);
console.log("mydata", employeeData.find({}).then(res => console.log(res)));

app.get('/',(req,res) => res.send('API  Running'));

const PORT = process.env.PORT || 5050;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));