const express = require('express');
const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const connectDB = require('./routes/config/db');
const app = express();
connectDB();

var StudentSchema = mongoose.Schema({
    Name: { type : String},
    no: Number,
    Department: String
}, {collection: "Student"});

var employeeData = mongoose.model('Student', StudentSchema);
console.log("mydata", employeeData.find({}).then(res => console.log(res)));

app.get('/',(req,res) => res.send('API  Running'));

app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/posts',require('./routes/api/posts'));
app.use('/api/profile',require('./routes/api/profile'));

const PORT = process.env.PORT || 5050;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));