const express = require('express');
const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const app = express();
//Connect Database
connectDB();

var StudentSchema = mongoose.Schema({
    email: String,
    name: String,
    password: Number,
}, {collection: "users"});

var employeeData = mongoose.model('users', StudentSchema);
console.log("mydata", employeeData.find({}).then(res => console.log(res)));
//init middleware
app.use(express.json({extended:false}));
app.get('/',(req,res) => res.send('API  Running'));
//Define route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5050;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));