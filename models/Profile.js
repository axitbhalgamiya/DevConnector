const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    compaany :{
        type:String
    },
    location: {
        type:String
    },
    status:{
        type:String,
        required:true
    },
    skills :{
        type:[String],
        required:true
    },
    bio: {
        type:String
    },
    githubusername: {
        type:String
    },
    experience
});